class Scene {
    constructor(svg) {
        this.svg = svg
            .attr('width', width)
            .attr('height', height);
    }

    get canvas() {
        return this.svg;
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

