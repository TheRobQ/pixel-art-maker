document.addEventListener("DOMContentLoaded", function() {
  // Your JS goes here
  var pickedColor = 'white';
  var body = document.getElementsByTagName('body')[0];
  var main = document.getElementsByTagName('main')[0];
  for (var i = 0; i < 40; i++) {
    var div = document.createElement('div');
    div.style.float = 'left';
    div.style.paddingBottom = '11.1%';
    div.style.width = '11.1%';
    div.style.backgroundColor = "white";
    div.style.borderColor = 'black';
    div.style.borderStyle = 'solid';
    main.appendChild(div)
    main.addEventListener("click", myDrawer);
  }

  function myDrawer(event) {
    event.target.style.backgroundColor = pickedColor;
    console.log(event.target.style.backgroundColor);
  }

  var paints = document.getElementById('paints');
  let colors = ['blue', 'red', ];
  console.log(colors[1]);
  for (var i = 0; i < colors.length; i++) {
    var div = document.createElement('div');
    div.style.float = 'left';
    div.style.paddingBottom = '11.1%';
    div.style.width = '9.1%';
    div.style.borderColor = 'black';
    div.style.borderStyle = 'solid';
    div.style.borderWidth = '.5px';
    div.style.marginLeft = '4px';
    div.style.backgroundColor = colors[i];
    paints.appendChild(div)
    paints.addEventListener("click", myPicker);
  }

  function myPicker(event) {
    pickedColor = event.target.style.backgroundColor
    console.log(event.target.style.backgroundColor);
  }







})
