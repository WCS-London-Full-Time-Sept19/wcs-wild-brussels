window.onload = setImage;

var currentImage = 0;

function setImage() {
  setInterval(function() {
    var imageArray = [
      'https://images.unsplash.com/photo-1486903658356-4006b8abd767?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1566480258537-cb1bfd5be65f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80',
      'https://images.unsplash.com/photo-1541894384618-02889aa35c2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80',
      'https://images.unsplash.com/photo-1545070474-f2bf93c13ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=758&q=80'
    ];

    document.getElementById('backgroundimage').style.backgroundImage =
      'url(' + imageArray[currentImage] + ')';

    if (currentImage == imageArray.length - 1) {
      currentImage = 0;
    } else {
      currentImage += 1;
    }
  }, 3000);
}
