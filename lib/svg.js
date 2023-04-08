class SVG {
    constructor(){
        this.width = 300;
        this.height = 200;
        this.text = '';
        this.textColor = '';
        this.shape = null;
      
    }
    
    setShape(shape){
        this.shape = shape;
    }
    
    setText(text, textColor){
        if(text.length > 3){
            throw new Error ("Text must not exceed 3 characters.");
        }
        this.text = text;
        this.textColor = textColor;
    }
    
    
    render(){
        let svg = `<svg version="1.1" width="${this.width}" height="${this.height}" xmlns="http://www.w3.org/2000/svg">`;
        if(this.shape){
            svg += this.shape.render();
        }
        if(this.text){
            svg += `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
        }
        svg += "</svg>";
        return svg;
    }};
    
    
    module.exports = SVG; 