const inquirer = require('inquirer');
const fs = require('fs');
const SVG = require('./lib/svg');
const Circle = require('./lib/circle');
const Square = require('./lib/square');
const Triangle = require('./lib/triangle')

inquirer
.prompt ([
    {
        type: 'input',
        name: 'character',
        message: 'Enter three characters for your logo',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like the text to be?',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'square', 'triangle']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color do you want your shape to be?',
    },
])

.then((answers) => {
    const svg = new SVG();
    svg.setText(answers.character, answers.textColor);

let finalShape

if(answers.shape === 'circle') {
    finalShape = new Circle ();
}else if (answers.shape === 'square'){
    finalShape = new Square();
}else{
    finalShape = new Triangle();
}
finalShape.setColor(answers.shapeColor);
svg.setShape(finalShape);

const finalSVG = svg.render();
console.log(svg);
    
fs.writeFile('logo.svg', finalSVG, (err) =>
    err ? console.log(err) : console.log('SVG logo created!')
);
});