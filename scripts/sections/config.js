const height = window.height;
const width = window.width;

const area = {height: height, width:width};
const contourArea = area;
let slider_index = 0;

const sceneBlank = new TitleScene(
    d3.select("#svgBlank"),
    area, 
    "",
);