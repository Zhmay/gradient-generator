const inputColor = document.querySelectorAll('input[type="color"]');
const colorOne = document.getElementById('color-a');
const colorTwo = document.getElementById('color-b');
const outputCode = document.getElementById('code');
const copyOverlay = document.getElementById('copy-overlay');
let currentDirection = 'to bottom';

function setDirection(value, _this) {
  const directions = document.querySelectorAll('.buttons button');

  for(let i of directions) {
    i.classList.remove('active');
  }
  _this.classList.add('active');
  currentDirection = value;

  generateCode();
}

function copyText(_this) {
  outputCode.select();
  document.execCommand('copy');

  copyOverlay.style.transition = 'all 250ms ease-in-out';
  copyOverlay.style.borderRadius = '50%';
  copyOverlay.style.transform = 'translateY(0) scaleX(0.07) scaleY(0.5)';
  setTimeout(function() {
    copyOverlay.style.opacity = 0;
  }, 200),
  setTimeout(function() {
    copyOverlay.style.transition = 'all 1ms linear';
    copyOverlay.style.transform = '';
    copyOverlay.style.borderRadius = 0
  }, 500),
  setTimeout(function() {
    copyOverlay.style.opacity = 1
    copyOverlay.style.transition = 'all 150ms ease-in-out';
  }, 600)
}

inputColor.forEach(element => {
  element.addEventListener('change', () => {
    generateCode();
  })
});

function generateCode() {
  outputCode.value = `background-image: linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value});`;
  copyOverlay.style.backgroundImage = `linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value})`;
  document.querySelector('body').style.backgroundImage = `linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value})`;
}

generateCode();