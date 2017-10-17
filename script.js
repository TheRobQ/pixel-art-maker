document.addEventListener("DOMContentLoaded", function() {
  // Your JS goes here
  var pickedColor = 'white';
  let colors = ['white', 'black', 'blue', 'red', 'green', 'AntiqueWhite', 'Beige', 'CadetBlue', 'DarkSeaGreen', 'azure', 'blueviolet', 'darkorange', 'goldenrod', 'greenyellow', 'honeydew', 'lemonchiffon', 'palevioletred', 'slategray', 'thistle'];

  var paints = document.getElementById('paints');
  var body = document.getElementsByTagName('body')[0];
  var main = document.getElementsByTagName('main')[0];
  var myColor = document.getElementById("myColor");
  var drawingNow = false;

  for (var i = 0; i < 1827; i++) {
    var div = document.createElement('div');
    div.style.float = 'left';
    div.style.paddingBottom = '1.5%';
    div.style.width = '1.5%';
    div.style.maxHeight = '1.5%';
    div.style.backgroundColor = "white";
    div.style.borderColor = 'beige';
    div.style.borderStyle = 'solid';
    div.style.borderWidth = '.25px';
    div.className = "paintArea"
    main.appendChild(div)
  }

  for (var i = 0; i < colors.length; i++) {
    var div = document.createElement('div');
    div.style.float = 'left';
    div.style.paddingBottom = '6%';
    div.style.width = '6%';
    div.style.borderColor = 'LightGray';
    //div.style.borderRadius = '50px;'
    div.style.borderStyle = 'solid';
    div.style.borderWidth = '.5px';
    div.style.marginLeft = '4px';
    div.style.backgroundColor = colors[i];
    div.className = "circle"
    paints.appendChild(div)
  }


  function myPicker(event) {
    pickedColor = event.target.style.backgroundColor;
    myColor.textContent = pickedColor;
    console.log(event.target.style.backgroundColor);
  }

  function stopDraw() {
    console.log('The mouse is up');
    drawingNow = false;
  };

  function draw() {
    console.log('The mouse is down')
    drawingNow = true;
  }

  paints.addEventListener("click", myPicker);
  main.addEventListener("mouseup", stopDraw);
  main.addEventListener("mousedown", draw);
  main.addEventListener("mousemove", function(event){
    if(drawingNow === true){
      event.target.style.backgroundColor = pickedColor;
    }
  })
})
