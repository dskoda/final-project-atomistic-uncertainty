class TitleScene {
    constructor(svg, title) {
        this.svg = svg
            .attr('width', width)
            .attr('height', height);

        this.addText(title);
    }

    get canvas() {
        return this.svg;
    }

    addText(text) {
        this.svg.append('text')
            .attr('x', 100)
            .attr('y', 300)
            .attr('fill', 'black')
            .attr('font-family', 'Helvetica Neue, Arial')
            .attr('font-size', 80)
            .text(text);
    }

    render () {
        d3.selectAll(".visuals")
            .transition()
            .duration(0)
            .attr("opacity", 0);

        this.svg
            .transition()
            .duration(600)
            .attr("opacity", 1);
    }
}
