const height = 600;
const width = 1000;

const area = {height: height, width:width};

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
const scene3 = new ContourScene(
    d3.select("#svg2"),
    area,
    alldata[0],
    allpoints,
    1,
);
const sceneEnd = new TitleScene(
    d3.select("#svgEnd"),
    area,
    "The end",
);

let scenes = [
    scene1,
    scene2,
    scene3,
    sceneEnd,
];


function changeScenes(index) {
    d3.selectAll('.step')
        .style('opacity', function (d, i) { return i === index ? 1 : 0.1; });

    scenes[index].render();
}
