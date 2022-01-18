var imlocation = "../assets/Images/trucks/";
var currentdate = 0;
var image_number = 0;

function ImageArray(n) {
  this.length = n;
  for (var i = 1; i <= n; i++) {
    this[i] = ' '
  }
}
image = new ImageArray(3)
image[0] = 'GreenTruck.png'
image[1] = 'LightBlueTruck.png'
image[2] = 'PinkTruck.png'
image[3] = 'RedTruck.png'
image[4] = 'YellowTruck.png'
var rand = 60 / image.length

function randomimage() {
  currentdate = new Date()
  image_number = currentdate.getSeconds()
  image_number = Math.floor(image_number / rand)
  return (image[image_number])
}
alert("wat doe ik hier nog?" + imlocation);
console.log("Hello world!");
document.write("<img src='../assets/Images/trucks/GreenTruck.png' alt='' class='iconTruck'>")
// document.write("<img src='" + imlocation + randomimage() + "' alt='' class='iconTruck'>");
