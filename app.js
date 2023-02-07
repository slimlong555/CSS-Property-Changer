let blockEl = document.querySelector("#block");
let verticalPosition = document.querySelector("#position-y"); // #选择id
let horizontalPosition = document.querySelector("#position-x");
let blockSize = document.querySelector("#size");
let shapeSelector = document.querySelector("#shape-select");
let okBtn = document.querySelector("#ok-btn");
let rgbaR = document.querySelector("#rgba-r");
let rgbaG = document.querySelector("#rgba-g");
let rgbaB = document.querySelector("#rgba-b");
let rgbaA = document.querySelector("#rgba-a");
let rgbaContainer = document.querySelector(".rgba-container");
let rgbaInputs = rgbaContainer.querySelectorAll("input");

// 垂直位置转换器
verticalPosition.addEventListener("change", function () {
  blockEl.style.top = verticalPosition.value + "px";
});
// 水平位置转换器
horizontalPosition.addEventListener("change", function () {
  blockEl.style.left = horizontalPosition.value + "px";
});
// 尺寸变化
blockSize.addEventListener("change", function () {
  blockEl.style.transform = "scale(" + blockSize.value + ")";
});
// 变换形状
okBtn.addEventListener("click", function () {
  let shapeOption = shapeSelector.value;
  // 动态添加圆
  if (shapeOption === "1") {
    blockEl.style.borderRadius = "0";
  } else if (shapeOption === "2") {
    blockEl.style.borderRadius = "50%";
  }
});
// 改变背景颜色
for (let i = 0; i < rgbaInputs.length; i++) {
  rgbaInputs[i].addEventListener("change", function () {
    blockEl.style.backgroundColor =
      "rgba(" +
      rgbaR.value +
      "," +
      rgbaG.value +
      "," +
      rgbaB.value +
      "," +
      rgbaA.value +
      ")";
  });
}
