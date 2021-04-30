scenes = [
    // Header
    sceneBlank, 

    // Intro and spacing
    sceneIntro1,
    sceneIntro1,
    sceneBlank,

    // NNs and spacing
    sceneIntro2,
    sceneIntro2,
    sceneBlank,

    // Intro 3: cats and dogs
    sceneBlank,

    // Intro 4: molecules and question
    sceneBlank,
    sceneUncertainty1,

    // Spacing, uncertainty ensemble, and question
    sceneUncertainty1,
    sceneUncertainty2,
    sceneUncertainty2,
    sceneUncertainty2,

    // Attacks
    sceneUncertainty3,
    sceneAttacks1,
    sceneAttacks2,
    sceneBlank,
    sceneBlank,
    sceneGen1,
    sceneBlank,
];


function changeScenes(index) {
    d3.selectAll('.step')
        .style('opacity', function (d, i) { return i === index ? 1 : 0.1; });

    console.log(`Section ${index}`);
    scenes[index].render();
}
