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


class SvgPlottingScene extends SvgFileScene {
    constructor(svg, area, file, pointsData) {
        super(svg, area, file)
        this.pointsData = pointsData
    }

    plotCircles(i) {
        let circles = this.svg
            .selectAll("circle")
            .data(this.pointsData, d => d.id)
            .join("circle")
            .attr('cx', d => d.x)
            .attr('cy', d => d.y)
            .attr("r", 10)
            .attr("stroke", "none")
            .attr("fill", "black")
            .attr("opacity", d => i == 1 ? 1 : 0); 

        this.svg.selectAll("circle").each(function() {  
            this.parentNode.appendChild(this); 
        });
    }
}
