class Logo {
constructor() {
    this.shape = '';
    this.text = '';
}
render() {
 return `<svg version='1.1' width='300' height='200' xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`;
 }    
}
setText(text, color)
 if (text.length <1 || text.length >3) {
    Error('Please enter 1-3 characters')
 }
 this.text = `<text x='150' y='130' font-size='50px' text-anchor='middle' fill=${textColor}>${text}</text>`;
setShape(shape) 
    this.shape = shape.render();

 module.exports = Logo;
