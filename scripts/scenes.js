scenes = [
    scene1,
    sceneIntro1,
    sceneIntro2,
    sceneIntro5,
    sceneIntro6,
    sceneIntro7,
    sceneIntro3,
    sceneIntro4,
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
