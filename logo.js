class Logo {
constructor() {
    this.shapeSelector = '';
    this.textSelector = '';
}
render() {
 return `<svg version='1.1' width='300' height='200' xmlns="http://www.w3.org/2000/svg">${this.shapeSelector}${this.textSelector}</svg>`;
 }    
}
getText(message, color)
 if (message.length > 3) {
    Error('Please enter 3 characters or less')
 }
 this.textSelector = `<text x='150' y='130' font-size='50' text-anchor='middle' fill=${color}>${message}</text>`;
