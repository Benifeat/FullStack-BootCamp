// Flexbox
const flexItems = document.querySelectorAll('.flex-item');

flexItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    item.style.backgroundColor = 'coral';
  });

  item.addEventListener('mouseout', () => {
    item.style.backgroundColor = 'cornflowerblue';
  });
});

// Animations
const animatedBox = document.querySelector('.animated-box');

animatedBox.addEventListener('click', () => {
  animatedBox.style.animationPlayState = animatedBox.style.animationPlayState === 'paused' ? 'running' : 'paused';
});

// Box-shadow
// Box-shadow
const boxShadowContainer = document.querySelector('.box-shadow-container');

boxShadowContainer.addEventListener('mouseover', () => {
  boxShadowContainer.style.boxShadow = '0 0 40px rgba(0, 0, 0, 0.8)';
});

boxShadowContainer.addEventListener('mouseout', () => {
  boxShadowContainer.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.3)';
});

// Background-blend-mode
const blendOverlay = document.querySelector('.blend-overlay');

blendOverlay.addEventListener('mouseover', () => {
  blendOverlay.style.mixBlendMode = 'multiply';
});

blendOverlay.addEventListener('mouseout', () => {
  blendOverlay.style.mixBlendMode = 'screen';
});