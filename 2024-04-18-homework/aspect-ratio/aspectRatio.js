const ratioWidth = document.querySelector('#ratio-width');
const ratioHeight = document.querySelector('#ratio-height');
const widthRes = document.querySelector('#width');
const heightRes = document.querySelector('#height');

function Resolution(event) {
  const ratioWidthValue = parseFloat(ratioWidth.value);
  const ratioHeightValue = parseFloat(ratioHeight.value);
  let width = parseFloat(widthRes.value);
  let height = parseFloat(heightRes.value);

  if (event.target === ratioWidth) {
    width = (height / ratioHeightValue) * ratioWidthValue;
    widthRes.value = width.toFixed(0);
  } else if (event.target === ratioHeight) {
    height = (width / ratioWidthValue) * ratioHeightValue;
    heightRes.value = height.toFixed(0);
  } else if (event.target === widthRes) {
    height = (width / ratioWidthValue) * ratioHeightValue;
    heightRes.value = height.toFixed(0);
  } else if (event.target === heightRes) {
    width = (height / ratioHeightValue) * ratioWidthValue;
    widthRes.value = width.toFixed(0);
  }
}

ratioWidth.addEventListener('input', Resolution);
ratioHeight.addEventListener('input', Resolution);
widthRes.addEventListener('input', Resolution);
heightRes.addEventListener('input', Resolution);