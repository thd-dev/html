## [Canvas](https://developer.mozilla.org/docs/Web/HTML/Element/canvas)


### Html code
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Canvas</title>
</head>
<body>
  <canvas id="canvas"></canvas>

  <script src="index.js"></script>
</body>
</html>
```

### Select the canvas
```javascript
const canvas = document.querySelector('#canvas')
```

### How to set the width and height
```javascript
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
```

### Set of the property of canvas api into a variable

```javascript
let ctx = canvas.getContext('2d')
```

### How to draw a rectangle
```javascript
ctx.fillRect(x: number, y: number, horizontalLength: number, verticalLength: number); // filled rectangle
ctx.strokeRect(x: number, y: number, horizontalLength: number, verticalLength: number); // rectangle with only stroke

```


### How to fill the shape
```javascript
ctx.fill();
```

### How to change the fill styling
```javascript
ctx.fillstyle = string;
// #ffffff | rgba(red, blue, green, alpha) | rgb(red, blue, green) | color value
```

### How to draw a line
```javascript
ctx.beginPath(); // begins the path
ctx.moveTo(x: number,y: number); //starting point of the line.
ctx.lineTo(x: number,y: number) // next point of the line
.
.
.
ctx.lineTo(x: number,y: number) // last point of the line    
```


### How to change the stroke styling
```javascript
ctx.stroke()
```

### How to add a stroke
```javascript
ctx.strokeStyle = string;
ctx.lineWidth = number;
```


### How to draw a Circle
```javascript
ctx.beginPath();
ctx.arc(x: number, y: number, radius: number, starting angle: number, ending angle: number, counterclockwise: boolean) // angles are in radian value
```
<br />
<hr />
<br />

### Animation in Canvas

#### define a fuction

```javascript
const func = () => {
  
}
```

#### Request animation frame and call the function to make it in the loop
```javascript
const func = () => {
  requestAnimationFrame(func)
}
```
  <ul> Each frame will display after 1 second </ul>

#### Clear the frame before the new frame add

```javascript
const func = () => {
  requestAnimationFrame(func)
    ctx.clearRect(x: number, y: number, w: number, h: number);
    // example:
    ctx.clearRect(0, 0, innerWidth, innerHeight);
}
```
#### Add the frame you want to animate or show

```javascript
const func = () => {
  requestAnimationFrame(func)
    ctx.clearRect(x: number, y: number, w: number, h: number);
    
    ctx.beginPath();
    ctx.arc(x: number, y: number, startingAngle: number, endingAngle: number, counterClockWise: boolean)
    ctx.stroke()
}
```

#### Update the value of x and y

```javascript
const func = () => {
  requestAnimationFrame(func)
    ctx.clearRect(x: number, y: number, w: number, h: number);
    
    ctx.beginPath();
    ctx.arc(x: number, y: number, startingAngle: number, endingAngle: number, counterClockWise: boolean)
    ctx.stroke()

    x += dx: number;
    y += dy: number;
}
```
