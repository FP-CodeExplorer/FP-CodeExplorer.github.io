let imageSelector = document.querySelector('#image-selection');
let textSelector = document.querySelector('#text-selection');
let btnForward = document.querySelector('#forward');
let btnBack = document.querySelector('#back');
let topLine = document.querySelector('#top-line');
let bottomLine = document.querySelector('#bottom-line');
let downloadButton = document.querySelector('#download');
let fileInput = document.querySelector('#file-upload');

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');


let topText = '';
let bottomText = '';
let canvasImage = '';

imageSelector.addEventListener('click', (e) => {
  
  if(e.target.tagName === 'IMG') {
    selectImage(e.target);
  }
})

topLine.addEventListener('input', (e) => {
  enableButton(btnBack);
  updateText(e.target.value, e.target.id)
})
bottomLine.addEventListener('input', (e) => {
  
  enableButton(btnBack);
  updateText(e.target.value, e.target.id)
})

function selectImage(image) {
  canvasImage = image;
 
  enableButton(btnForward);
  redrawCanvas(canvasImage, topText, bottomText);
}

function updateText(text, id) {
  if(id === 'top-line') {
    topText = text;
  } else if(id === 'bottom-line') {
    bottomText = text;
  }
  redrawCanvas(canvasImage, topText, bottomText);
}

function redrawCanvas(image, topText, bottomText) {
  console.log(image, topText, bottomText)
 
 ctx.drawImage(image,0,0,canvas.width, canvas.height)
 
 printTextToCanvas(topText,canvas.width / 2, 40);
 
 printTextToCanvas(bottomText, canvas.width / 2,canvas.height - 30);
}

function printTextToCanvas(text, x, y) {
  
  ctx.font = '30px Impact';
  ctx.textAlign = 'center';
  ctx.fillStyle = 'white';
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 3;

  ctx.fillText(text, x, y);
  ctx.strokeText(text, x, y);
}


downloadButton.addEventListener('click', downloadCanvas);

function downloadCanvas() {
  
  let dataURL = canvas.toDataURL('image/jpeg');
  downloadButton.href = dataURL;
}


fileInput.addEventListener('change', function(e) {
  enableButton(btnForward);
  handleFileSelection(e);
});

function handleFileSelection(e) {
  
  let file = e.target.files[0];
  
  let reader = new FileReader();
  
  reader.readAsDataURL(file);
  
  reader.addEventListener('load', function() {
    
    let image = document.createElement('img');
    image.src = reader.result;
    image.addEventListener('load', function() {
     
      canvasImage = image;
      redrawCanvas(canvasImage, topText, bottomText);
    })
    
  })
}


btnForward.addEventListener('click', goForward);
btnBack.addEventListener('click', goBack);

function goForward() {
  imageSelector.style.display = 'none';
  textSelector.style.display = 'block';
}

function goBack() {
  textSelector.style.display = 'none';
  imageSelector.style.display = 'block';
}

function enableButton(button) {
  button.removeAttribute('disabled');
}