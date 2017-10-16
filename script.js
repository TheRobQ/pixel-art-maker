document.addEventListener("DOMContentLoaded", function() {
  // Your JS goes here
  var pickedColor = 'white';
  let colors = ['white', 'black', 'blue', 'red', 'green', 'AntiqueWhite', 'Beige', 'CadetBlue', 'DarkSeaGreen '];
  var paints = document.getElementById('paints');
  var body = document.getElementsByTagName('body')[0];
  var main = document.getElementsByTagName('main')[0];
  var myColor = document.getElementById("myColor");

  for (var i = 0; i < 1827; i++) {
    var div = document.createElement('div');
    div.style.float = 'left';
    div.style.paddingBottom = '1.5%';
    div.style.width = '1.5%';
    div.style.height = 'auto';
    div.style.backgroundColor = "white";
    div.style.borderColor = 'beige';
    div.style.borderStyle = 'solid';
    div.style.borderWidth = '.25px'
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

  paints.addEventListener("click", myPicker);

  function myPicker(event) {
    pickedColor = event.target.style.backgroundColor;
    myColor.textContent = pickedColor;
    console.log(event.target.style.backgroundColor);
  }

  main.addEventListener("click", myDrawer);

  function myDrawer(event) {
    event.target.style.backgroundColor = pickedColor;
    console.log(event.target.style.backgroundColor);
  }

})
