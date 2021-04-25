class SvgFileScene extends Scene {
    constructor(svg, area, file) {
        super(svg, area)

        this.addFile(file);
    }

    addFile(file) {
        this.svg.append('image')
            .attr("xlink:href", file);
    }

    render () {
        d3.selectAll(".visuals")
            .transition()
            .duration(600)
            .attr("opacity", 0);

        this.svg
            .transition()
            .duration(300)
            .attr("opacity", 1);
    }
}
