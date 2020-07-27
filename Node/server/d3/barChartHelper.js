const jsdom = require('jsdom');
const d3 = require('d3');
const barChart = require('./barChart')

const { JSDOM } = jsdom;

// const document = new JSDOM.window.document;
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);

console.log('dom created with jsdom@@!!!@@@');


function getBarChart(params) {
    const chart = new barChart(params);
    const {
        containerId
    } = params;

    d3.select(document.body)
        .append('div')
        .attr('id', containerId)
        .call(chart.render.bind(chart));

    const svg = d3.select(document.getElementById(containerId)).node().outerHTML;
    d3.select(document.getElementById(containerId)).remove();

    return svg;
}

module.exports = {
    getBarChart
};

