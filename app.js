let rectangle = document.getElementById("rectangle-btn");
let square = document.getElementById("square-btn");
let circle = document.getElementById("circle-btn");
let triangle = document.getElementById("triangle-btn");
let container = document.getElementById("btn-container");
let drawcontainer = document.getElementById("draw-container");
let rectangleHeight = document.getElementById("rectangle-height");
let rectangleWidth = document.getElementById("rectangle-width");
let squareSideLength = document.getElementById("square-sidelength");
let radiusCircle = document.getElementById("radius-circle");
let triangleHeight = document.getElementById("triangle-height");

class Shape {
  constructor(height, sidelength, length, width, radius, area, perimeter) {
    this.height = height;
    this.width = width;
    this.sidelength = sidelength;
    this.radius = radius;
    this.area = area;
    this.perimeter = perimeter;
    this.length = length;
  }
}
rectangle.addEventListener("click", function () {
  new Rectangle();
});
class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
    this.newrectangle = document.createElement("div");
    this.newrectangle.className = "rectangle";
    this.newrectangle.style.position = "absolute";
    this.newrectangle.style.top = `${Math.floor(Math.random() * 600)}px`;
    this.newrectangle.style.left = `${Math.floor(Math.random() * 600)}px`;
    this.newrectangle.style.height = `${rectangleHeight.value}px`;
    this.newrectangle.style.width = `${rectangleWidth.value}px`;
    drawcontainer.appendChild(this.newrectangle);
    this.newrectangle.addEventListener("dblclick", () => {
      this.newrectangle.remove();
    });
  }
}
square.addEventListener("click", function () {
  new Square();
});

class Square extends Shape {
  constructor(sidelength) {
    super(sidelength);
    this.newSquare = document.createElement("div");
    this.newSquare.className = "square";
    this.newSquare.style.position = "absolute";
    this.newSquare.style.top = `${Math.floor(Math.random() * 600)}px`;
    this.newSquare.style.left = `${Math.floor(Math.random() * 600)}px`;
    this.newSquare.style.height = `${squareSideLength.value}px`;
    this.newSquare.style.width = `${squareSideLength.value}px`;
    drawcontainer.appendChild(this.newSquare);
    this.newSquare.addEventListener("dblclick", () => {
      this.newSquare.remove();
    });
  }
}
circle.addEventListener("click", function () {
  new Circle();
});

class Circle extends Shape {
  constructor(radius) {
    super(radius);
    this.newCircle = document.createElement("div");
    this.newCircle.className = "circle";
    this.newCircle.style.position = "relative";
    this.newCircle.style.top = `${Math.floor(Math.random() * 600)}px`;
    this.newCircle.style.left = `${Math.floor(Math.random() * 600)}px`;
    this.newCircle.style.height = `${radiusCircle.value}px`;
    this.newCircle.style.width = `${radiusCircle.value}px`;
    drawcontainer.appendChild(this.newCircle);
    this.newCircle.addEventListener("dblclick", () => {
      this.newCircle.remove();
    });
  }
}
triangle.addEventListener("click", function () {
  new Triangle(triangleHeight.value);
});
class Triangle extends Shape {
  constructor(height) {
    super(height);
    this.newtriangle = document.createElement("div");
    this.newtriangle.className = "triangle";
    this.newtriangle.style.position = "absolute";
    this.newtriangle.style.top = `${Math.floor(Math.random() * 600)}px`;
    this.newtriangle.style.left = `${Math.floor(Math.random() * 600)}px`;
    this.newtriangle.style.height = `0`;
    this.newtriangle.style.width = `0`;
    this.newtriangle.style.borderStyle = `solid`;
    this.newtriangle.style.borderWidth = `0 ${this.height / 2}px ${
      this.height
    }px ${this.height / 2}px`;
    this.newtriangle.style.borderColor = `transparent transparent yellow transparent`;
    drawcontainer.appendChild(this.newtriangle);
    this.newtriangle.addEventListener("dblclick", () => {
      this.newtriangle.remove();
    });
  }
}
