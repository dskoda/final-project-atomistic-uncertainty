const height = 600;
const width = 1000;

const area = {height: height, width:width};
const contourArea = {height: 500, width: 1100};

const scene1 = new TitleScene(
    d3.select("#svg0"),
    area,
    "This is the new title"
);
const scene2 = new TitleScene(
    d3.select("#svg1"),
    area,
    "This is svg1"
);
const sceneEnd = new TitleScene(
    d3.select("#svgEnd"),
    area,
    "The end",
);

const sceneGen1 = new SvgFileScene(
    d3.select("#svgGen1"),
    contourArea,
    "figs/doublewell/gen1.svg",
);
const sceneGen2 = new SvgFileScene(
    d3.select("#svgGen2"),
    contourArea,
    "figs/doublewell/gen2.svg",
);
const sceneGen3 = new SvgFileScene(
    d3.select("#svgGen3"),
    contourArea,
    "figs/doublewell/gen3.svg",
);
const sceneGen4 = new SvgFileScene(
    d3.select("#svgGen4"),
    contourArea,
    "figs/doublewell/gen4.svg",
);
const sceneGen5 = new SvgFileScene(
    d3.select("#svgGen5"),
    contourArea,
    "figs/doublewell/gen5.svg",
);
const sceneGen6 = new SvgFileScene(
    d3.select("#svgGen6"),
    contourArea,
    "figs/doublewell/gen6.svg",
);
const sceneGen7 = new SvgFileScene(
    d3.select("#svgGen7"),
    contourArea,
    "figs/doublewell/gen7.svg",
);

let scenes = [
    scene1,
    scene2,
    sceneGen1,
    sceneGen2,
    sceneGen3,
    sceneGen4,
    sceneGen5,
    sceneGen6,
    sceneGen7,
    sceneEnd,
];


function changeScenes(index) {
    d3.selectAll('.step')
        .style('opacity', function (d, i) { return i === index ? 1 : 0.1; });

    scenes[index].render();
}
