// !!!! This code is experimental...don't blame me if your performance tanks.

const Row = document.getElementsByClassName("row");

const text = document.getElementsByClassName("button-40");

export default function resizeRow() {
//   calcTextWidth();
  calcTextSize();
}
// resizeRow();

new ResizeObserver(resizeRow).observe(Row);

// function calcTextWidth() {
//   const parentContainerWidth = text.parentNode.clientWidth;

//   const currentTextWidth = text.scrollWidth;
//   const currentFontStretch = parseInt(window.getComputedStyle(text).fontStretch);
  
  
//   console.log('parent: ' + parentContainerWidth + ' textwidth: ' + currentTextWidth + ' stretch: ' +currentFontStretch);
//   const newValue = Math.min(Math.max(300, (parentContainerWidth / currentTextWidth) * currentFontStretch), 500)

//   text.style.setProperty('--fontStretch', newValue + '%');
// }

function calcTextSize() {
  const parentContainerWidth = text.parentNode.clientWidth;
  const currentTextWidth = text.scrollWidth;
  const currentFontSize = parseInt(window.getComputedStyle(text).fontSize);
  const newValue = Math.min(Math.max(16, (parentContainerWidth / currentTextWidth) * currentFontSize), 500)

  text.style.setProperty('--fontSize', newValue +'px');
}



