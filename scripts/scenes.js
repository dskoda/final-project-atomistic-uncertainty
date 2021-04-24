const scene1 = new TitleScene(d3.select("#svg0"), "This is the new title");
const scene2 = new TitleScene(d3.select("#svg1"), "This is svg1");
const scene3 = new TitleScene(d3.select("#svg2"), "This is svg2");

let scenes = [
    scene1,
    scene2,
    scene3,
];


function changeScenes(index) {
    //console.log(`section ${index}`);
    d3.selectAll('.step')
        .style('opacity', function (d, i) { return i === index ? 1 : 0.1; });

    scenes[index].render();
}
