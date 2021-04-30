scenes = [
    sceneBlank, 
    sceneIntro1,
    sceneIntro1,
    sceneBlank,
    sceneIntro2,
    sceneIntro2,
    sceneBlank,
    sceneIntro3,
    sceneIntroAtom,
    sceneIntro4,
    sceneBlank,
    sceneGen2,
    sceneGen3,
    sceneGen4,
    sceneGen5, 
    sceneGen6,
    sceneGen7,
    sceneBlank,
    // Start of extra scenes (for onmouseover)
    sceneIntroCat,
    sceneIntroDog,
    sceneIntroBird
];


function changeScenes(index) {
    d3.selectAll('.step')
        .style('opacity', function (d, i) { return i === index ? 1 : 0.1; });

    scenes[index].render();
}
