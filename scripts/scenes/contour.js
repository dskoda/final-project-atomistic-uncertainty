const value = (x, y) => Math.sin(x + y) * Math.sin(x - y); 
const height = 600;
const width = 1000;
const scale = 1/80;


const thresholds = [-1.2, -1, -0.8, -0.6, -0.4, -0.2, 0, 0.2, 0.4, 0.6, 0.8];
const color = d3.scaleSequential([-1, 1], d3.interpolateSpectral);
const path = d3.geoPath();
const contours = d3.contours()
    .size([width, height])

let angle = 0;
let count = 1;

let alldata = [grid(0)];
let allpoints = [
    {id:0, x: 500, y: 140},
    {id:1, x: 600, y: 240},
    {id:2, x: 184, y: 340},
    {id:3, x: 700, y: 540}
];
let iteration = [{value:1}]


function updateData(newgrid, count){
    alldata[0] = newgrid;
    iteration[0] = {value: count};
}

function updatePoint(){
    for (i = 0; i < 4; i++) {
        let x = Math.floor(Math.random() * 1000);
        let y = Math.floor(Math.random() * 600);
        let id = Math.floor(Math.random() * 100);

        allpoints[i] = {id:id, x:x, y:y};
    }
}

function grid (shift = 0) {
    const x0 = 0, x1 = width;
    const y0 = 0, y1 = height;
    const n = Math.ceil((x1 - x0));
    const m = Math.ceil((y1 - y0));
    const grid = new Array(n * m);
    for (let j = 0; j < m; ++j) {
        for (let i = 0; i < n; ++i) {
            grid[j * n + i] = value(i * scale + shift, j * scale );
        }
    }
    return {id: shift, value: grid};
}


function renderContour(svg, i = 1){
    let g = svg
        .selectAll('g')
        .data(alldata, data => data.id)
        .join('g')
        .attr("stroke", "white")
        .attr("stroke-width", 0.03);

    for (const threshold of thresholds) {
        g.append("path")
            .attr("d", path(contours.contour(alldata[0].value, threshold)))
            .attr("fill", color(threshold))
            .attr("opacity", d => i == 1 ? 1 : 0);
    }

    let circles = svg
        .selectAll("circle")
        .data(allpoints, data => data.id)
        .join("circle")
        .attr('cx', d => d.x)
        .attr('cy', d => d.y)
        .attr("r", 10)
        .attr("stroke", "none")
        .attr("fill", "red")
        .attr("opacity", d => i == 1 ? 1 : 0); 

    d3.selectAll("circle").each(function() {  
        this.parentNode.appendChild(this); 
    });

    let label = svg
        .selectAll('text')
        .data(iteration, data => data.value)
        .join('text')
        .attr('x', 0)
        .attr('y', height/20)
        .attr('fill', 'black')
        .attr('font-family', 'Helvetica Neue, Arial')
        .attr('font-size', 40)
        .attr("opacity", d => i == 1 ? 1 : 0)
        .text(d => "Iteration " + d. value);
}


function showContour() {
    d3.selectAll(".visuals")
        .transition()
        .duration(0)
        .attr("opacity", 0);


    d3.select('#svg1')
        .transition()
        .duration(600)
        .attr("opacity", 1);

    clearInterval(interval);

    interval = setInterval(function() {
        updateData(grid(angle), count);
        updatePoint();
        renderContour(scene2.canvas, 1);
        count = (count+1) % 10;
        angle = (angle + 15) % 150;
    }, 750);
}
