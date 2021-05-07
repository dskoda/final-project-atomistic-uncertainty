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
    sceneBlank,

    // Intro 4: molecules and question
    sceneBlank,
    sceneUncertainty1,

    // Spacing, uncertainty ensemble, and question
    sceneUncertainty2,
    sceneUncertainty2,

    // Attacks
    sceneUncertainty3,
    sceneBlank,
    sceneAttacks1,
    sceneAttacks2,
    sceneAttacks3,
    sceneAttacks4,
    sceneBlank,

    // Loop
    sceneLoop1,
    sceneEvolution,
    sceneBlank,
    sceneBlank,
    sceneBlank,
    sceneBlank,
    sceneBlank,
];

pageSlider(d3.select("#svgPageSlider"));

function changeScenes(index) {
    d3.selectAll('.step')
        .style('opacity', function (d, i) { return i === index ? 1 : 0.1; });

    console.log(`Section ${index}`);
    scenes[index].render();
    
}

function pageSlider(svg) {
    let slider = d3
    .sliderRight()
    .min(22)
    .max(1)
    .step(-1)
    // .tickValues([5,4,3,2,1])
    .tickFormat(d3.format('.0f'))
    .height(500)
    .displayValue(true)
    .fill('blue')
    .default(1)
    .handle(
        d3
        .symbol()
        .type(d3.symbolCircle)
        .size(50)()
    )
    
    const g = svg
    .attr('width', 100)
    .attr('height', 600)
    .append('g')
    .attr('transform', `translate(${15},10)`)
    .style("font-size", "18px")
    .call(slider);

    let slidertest = d3
    .sliderRight()
    .min(22)
    .max(1)
    .step(-1)
    // .tickValues([5,4,3,2,1])
    .tickFormat(d3.format('.0f'))
    .height(500)
    .displayValue(true)
    .fill('blue')
    .value(5)
    .handle(
        d3
        .symbol()
        .type(d3.symbolCircle)
        .size(50)()
    )
    
    // svg.destroy();
    // g.call(slidertest);

    
}