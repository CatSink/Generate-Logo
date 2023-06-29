class Shape {
    constructor(){
        this.color = "";
}
    selectColor(color){
        this.color = color;
    }
}
class Circle extends Shape {
    render(){
        return `<circle cx='150' cy='150' r='80 fill='${this.color}'/>`;
    }
}
class Rectangle extends Shape {
    render(){
        return `<rect x='100' y='100' width='100' height='100 fill='${this.color}'/>`;
    }
}
class Triangle extends Shape {
    render(){
        return `<polygon points='150, 18 244, 182 56, 182' fill='${this.color}'/>`;
    }
}
module.exports = {Circle, Rectangle, Triangle};