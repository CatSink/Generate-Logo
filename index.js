const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Rectangle, Triangle} = require('./shapes')
const Logo = require('./logo');
const { generateKey } = require('crypto');
const questions = [
    {
        type: 'input',
        message: 'Please enter less than 3 characters for your logo',
        name:'text',

    },
    {
        type: 'list',
        message: 'Select a shape for your Logo',
        options:[{Circle,Triangle,Rectangle}],
        name:'shape',
    },
    {
        type: 'list',
        message: 'Please select a background color for your Logo',
        name:'color',
        options:[red,blue,green,black,white,orange,yellow,purple,gray]
        
    },
    {
        type: 'input',
        message: 'Please enter less than 3 characters for your logo',
        name:'text',
    },
    {
        type: 'input',
        message: 'Please enter less than 3 characters for your logo',
        name:'text',
    }
]