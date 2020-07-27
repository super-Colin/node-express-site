

const ourStrings = [
    ['two strings/ ', 'one array/ '], 'number 2/ ', 3, '4/ '
];

//  const data = [100, 400, 300, 900, 850, 1000];
// const data = [10, 15, 20, 25, 30, 77];
const data = d3.csv('/javascripts/browseruse.csv');


const width = 400;
const height = 400;
const barHeight = 20;
const margin = 1;


const radius = Math.min(width, height) / 2;

const color = d3.scaleOrdinal(['#4daf4a', '#377eb8', '#ff7f00', '#984ea3', '#e41a1c']);


const pieSvg = d3.select('#chart-container')
    .append('svg')
    .attr('height', height)
    .attr('width', width);


const g = pieSvg.append('g')
    .attr('transform','translate(' + width / 2 + ', '+ height / 2 + ')');

const pie = d3.pie().value(function(d){return d.percent});

const path = d3.arc()
    .outerRadius(radius - 10)
    .innerRadius(0);

const label = d3.arc()
    .outerRadius(radius)
    .innerRadius(radius - 80);

const csv = d3.csv('/javascripts/browseruse.csv');

const arc = g.selectAll('.arc')
    .data(pie(csv))
    .enter().append('g')
    .attr('class', 'arc');

arc.append('path')
    .attr('d', path)
    .attr('fill', function(d, i){return color(d.data.browser)});
    
console.log(arc);

arc.append('text')
    .attr('transform', function(d){
        return 'translate(' + label.centroid(d) + ')';
    });






// const g = pieSvg.append('g')
//     .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');


// const pie = d3.pie().value(function(d){ return d.percent});

// const path = d3.arc()
//     .outerRadius(radius - 10)
//     .innerRadius(0);

// const label = d3.arc()
//     .outerRadius(radius)
//     .innerRadius(radius - 80);

// // const arc = d3.arc()
//     .innerRadius(80)
//     .outerRadius(radius);

// const arcs = g.selectAll('arc')
//     .data(pie(data))
//     .enter()
//     .append('g')
//     .attr('class', 'arc');

// arcs.append('path')
//     .attr('fill', function(d, i){
//         return color(i)
//     })
//     .attr('d', arc);















// let svg = d3.select("#chart-container")
//     .append('svg')
//     .attr('width', width)
//     .attr('height', height);

// let xScale = d3.scaleLinear()
//     .domain([d3.min(data), d3.max(data)])
//     .range([0, width - 10]);

// let yScale = d3.scaleLinear()
//     .domain([d3.min(data), d3.max(data)])
//     .range([height / 2, 0]);

// let xAxis = d3.axisBottom()
//     .scale(xScale);

// let yAxis = d3.axisLeft()
//     .scale(yScale);

// // const yAxis = d3.axisLeft()

// svg.append('g')
//     .attr('transform', 'translate(50, ' + (height / 2 + 10) + ')')
//     .call(xAxis);

// svg.append('g')
//     .attr('transform', 'translate(50, 10)')
//     .call(yAxis);







 // var scale = d3.scaleLinear()
 //             .domain([d3.min(data), d3.max(data)])
 //             .range([50, width]);

 // var svg = d3.select("body")
 //             .append("svg")
 //             .attr("width", width)
 //             .attr("height", barHeight * data.length);

 // var g = svg.selectAll("g")
 //             .data(data)
 //             .enter()
 //             .append("g")
 //             .attr("transform", function (d, i) {
 //                 return "translate(0," + i * barHeight + ")";
 //             });

 // g.append("rect")
 // .attr("width", function (d) {
 //     return scale(d);
 // })
 // .attr("height", barHeight - margin)

 // g.append("text")
 // .attr("x", function (d) { return (scale(d)); })
 // .attr("y", barHeight / 2)
 // .attr("dy", ".35em")
 // .text(function (d) { return d; });

















 // const colors = ['#ffffcc','#c2e699','#78c679','#31a354','#006837', '#cf6837', '#0fc8aa'];

 // const svg = d3.select('#chart-container')
 //     .append('svg')
 //     .attr('width', width)
 //     .attr('height', height);

 // const g = svg.selectAll('g')
 //     .data(data)
 //     .enter()
 //     .append('g')
 //     .attr('transform', function(d, i){return 'translate(0,0)'});

 // g.append('circle')
 //     .attr('cx', function(d,i){return i*100 + 50})
 //     .attr('cy', function(d,i){return 100})
 //     .attr('r', function(d){return d*1.5})
 //     .attr('fill', function(d, i){return colors[i]});

 // g.append('text')
 //     .attr('x', function(d, i){return i * 100 + 40})
 //     .attr('y', 105)
 //     .attr('stroke', 'teal')
 //     .attr('font-size', '12px')
 //     .text(function(d){return d});

















 // const scaleFactor = 10;
 // const barHeight = 20;

 // const scale = d3.scaleLinear()
 //     .domain([d3.min(data), d3.max(data)])
 //     .range([50, 500])

 // console.log(scale);
 // const graph = d3.select('#chart-container')
 //     .append('svg')
 //     .attr('width', width)
 //     .attr('height', barHeight * data.length)

 // const bar = graph.selectAll('g')
 //     .data(data)
 //     .enter()
 //     .append('g')
 //     .attr('transform', function(d, i){
 //         return 'translate(0,' + (barHeight * i) + ')'; 
 //     })

 // bar.append('rect')
 //     .attr('width', function(d, i){
 //         return d * scale;
 //     })
 //     .attr('height', barHeight - 1);

 // bar.append('text')
 //     .attr('x', function(d){return d * scale})
 //     .attr('y', function(d, i ){return barHeight / 2})
 //     .attr('dy', '.35em')
 //     .text(function(d){return d});








 // d3.json('/javascripts/supercolin-skills.json')
 // // d3.json('/javascripts/users.json')
 // .then(function(data){
 //     console.log(data);
 // })
 // .catch(function(error){
 //     console.log(error);
 // });


 // d3.csv('/javascripts/employee.csv', function(data){
 //     console.log(data);
 //     // console.log(data.length);
 //     for (let i = 0; i < data.length; i++){
 //         console.log('starting data loop');
 //         console.log(data[i].Name);
 //         console.log(data[i].Age);
 //     }
 // });


//  let svgWidth = 800;
//  let svgHeight = 500;
 // d3.select('.svg-container')
 //     .append('svg')
 //     .style('background-color', '#bda')
 //     .attr('height', svgHeight)
 //     .attr('width', svgWidth)
 //     .append('line')
 //     .attr('x1', 100)
 //     .attr('y1', 10)
 //     .attr('x2', 500)
 //     .attr('y2', 300)
 //     .style('stroke', 'orange')




 // const matrix = [
 //         [1,2,3,4],
 //         [5,6,7,8],
 //         [9,10,11,12],
 //         [13,14,15,16]
 //     ];

 // d3.select('#chart-container')
 //     .append('table')

 //     .selectAll('tr')
 //     .data(matrix)
 //     .enter().append('tr')

 //     .selectAll('td')
 //     .data(d=>d)
 //     .enter().append('td')
 //     .text(d=>d)
 // ;

 // const tr = d3.select('#chart-container')
 //     .append('table')
 //     .selectAll('tr')
 //     .data(matrix)
 //     .enter()
 //     .append('tr')

 // const td = tr.selectAll('td')
 //     .data(function(d){console.log('upper ' + d); return d})
 //     .enter()
 //     .append('td')
 //     .text(function(d){console.log('lower ' + d); return d});



 // d3.selectAll('.chart')
 // // .selectAll('p')
 // .data(ourStrings)
 // .enter()
 // .append('h1')
 // .text((d, i, nodes)=>{return d})


 // d3.selectAll('p')
 //     // .data(['some', 'data', 'more'])
 //     .on('mouseover', (d, i, nodes)=>{
 //         d3.select(nodes[i])
 //         // .transition().duration(100)
 //         .style('background-color', 'orange')
 //         // .text(d);
 //     })
 //     .on('mouseout', (d, i, nodes)=>{
 //         d3.select(nodes[i])
 //         .transition().duration(1000)
 //         .style('background-color', 'grey');
 //     });
