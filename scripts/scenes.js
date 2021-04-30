scenes = [
    // Header
    sceneBlank, 
    // Intro and spacing
    sceneIntro1,
    sceneIntro1,
    sceneBlank,
    // NNs
    sceneIntro2,
    sceneIntro2,
    sceneBlank,
    // Intro 3: cats and dogs
    sceneBlank,
    // Intro 4: molecules
    sceneBlank,
    sceneUncertainty1,
    // Uncertainty
    sceneUncertainty1,
    sceneUncertainty2,
    sceneUncertainty3,

    sceneBlank,
    sceneBlank,
    sceneGen2,
    sceneGen3,
    sceneGen4,
    sceneGen5, 
    sceneGen6,
    sceneGen7,
    sceneBlank,
//    // Start of extra scenes (for onmouseover)
//    sceneIntroCat,
//    sceneIntroDog,
//    sceneIntroBird
];


function changeScenes(index) {
    d3.selectAll('.step')
        .style('opacity', function (d, i) { return i === index ? 1 : 0.1; });

    console.log(`Section ${index}`);
    scenes[index].render();
}
