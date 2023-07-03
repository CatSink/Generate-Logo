const inquirer = require('inquirer');
const fs = require('fs');
const generateSvg = require('./lib/SVG.js');
const {Triangle, Rectangle, Circle} = require('./lib/shapes.js');
//color keywords correspond to hexidecimal values
const ColorKeyWords = [
    { name: "black", value: "#000000"},
    { name: "white", value: "#FFFFFF"},
    { name: "red", value: "#FF0000"},
    { name: "orange", value: "#ffa500"},
    { name: "yellow", value: "#FFFF00"},
    { name: "green", value: "#008000"},
    { name: "blue", value: "#0000FF"},
    { name: "indigo", value: "#4b0082"},
    { name: "violet", value: "#ee82ee"},
    { name: "custom", value: "custom"}
]
//inquirer prompts for user input
const questions = [
    {
        type: 'input',
        message: 'Enter the text for your logo.(Max three characters)',
        name: 'text',
        validate: (value) => {
            if (value.length > 3) {
                return 'Please enter a maximum of three characters'
            } else if (value) {
                return true
            } else {
                return 'Please enter text for your logo.(Max three characters)'
            }
        },
        filter: (value) => {
            return value.toUpperCase();
        }
    },
    {
        type: 'list',
        message: 'Select the color for your logo text.',
        name: 'textColor',
        choices: ColorKeyWords,
    },
    {
        type: 'input',
        message: 'Please enter your custom hexidecimal color.',
        name: 'textHex',
        when: (answers) => { return answers.textColor === "custom" },
        validate: function (input) {
            const hex = /^#[0-9a-f]{6}$/ig
            if (input.match(hex) === null) {
                return 'Please select a valid hexadecimal number!'
            }
            return true;
        }
    }, //Regex for color/hexadecimal numbers 
    {
        type: 'list',
        message: 'Please select a shape for your SVG file.',
        choices: ['circle', 'square', 'triangle'],
        name: 'shape',
        default: 'circle',
    },
    {
        type: 'list',
        message: 'Select the color for your logo background.',
        name: 'shapeColor',
        choices: ColorKeyWords,
    },
    {
        type: 'input',
        message: 'Please enter your custom hexidecimal color.',
        name: 'shapeHex',
        when: (answers) => { return answers.shapeColor === "custom" },
        validate: function (input) {
            const hex = /^#[0-9a-f]{6}$/ig
            if (input.match(hex) === null) {
                return 'Please enter a valid hexidecimal number!'
            }
            return true;
        }
    },
]

function writeToFile(fileName,data) {
    fs.writeFile(fileName,data, (err) => {
      if (err) throw err;
    console.log('Your logo.svg file has been generated!');
    });
}

function init() {
    inquirer.prompt(questions).then((data) => {
    let newShape

    if (data.shapeColor === 'custom') {
        data.shapeColor = data.shapeHex
    }
    if (data.shape === 'square') {
        newShape = new Rectangle(data.shapeColor)
    } else if (data.shape === 'circle') {
        newShape = new Circle(data.shapeColor)
    } else {
        newShape = new Triangle(data.shapeColor)
    }

    const logoShape = newShape.render()
    const svg = generateSvg(logoShape, data.text, data.textColor, data.textHex, data.shapeHex);
    writeToFile('Logo.svg', svg);
    });
}

init();