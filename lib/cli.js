const inquirer = require('inquirer');
const {writeFile} = require('fs');
const {Circle, Rectangle, Triangle} = require('./shapes.js');
const logo = require('./logo.js');

class CLI {
 run() {
    return inquirer.prompt([
    {
        type: 'input',
        message: 'Please enter between 1-3 characters for your logo',
        name:'text',
        validate: (input) => {
            if ((input.length > 3)||(input.length < 1)) {
                return "Please enter between 1-3 characters"}
            else {return true}    
            }
    },
    {
        type: 'list',
        message: 'Select a shape for your Logo',
        options:['Circle','Triangle','Rectangle'],
        name:'shape',
    },
    {
        type: 'list',
        message: 'Please select a background color for your logo',
        name:'color',
        options:['red','blue','green','black','white','orange','yellow','purple','gray']
        
    },
    {
        type: 'input',
        message: 'Please select text color for your logo',
        name:'textColor',
        options:['red','blue','green','black','white','orange','yellow','purple','gray']
    },
])
 
.then(({text,shape,color,textColor}) => {
    
    switch(shape){
        case 'Circle':
            shape = new Circle();
        break;
        case 'Rectangle':
            shape = new Rectangle();
        break;
        case 'Triangle':
            shape = new Triangle();
    }
    console.log(shape,shapeType);
    shape.setColor(color,shape);
    const logo = new logo();
    logo.setText(text,textColor);    
    logo.setShape(shape);

    return writeFile('logo.svg',svg.render());
});

//.then(() => {console.log('Logo Generated');});
//.catch(() => {console.log('Error');
//});
 }
}
module.exports = CLI;
  



