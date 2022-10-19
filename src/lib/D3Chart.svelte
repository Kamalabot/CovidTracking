<script>
// @ts-nocheck
    import * as d3 from 'd3'

    export let height;
    export let width;
    export let dataIn;
    let userId;

    const margin = {left:20,right:20,top:20,bottom:20}
    const visWidth = width - margin.left - margin.right
    const visHeight = height - margin.right - margin.left
    
    const xScale = d3.scaleBand()
        .domain(dataIn.map(d => d.x))
        .range([0,visWidth])
        .paddingInner(0.2)

    const yScale = d3.scaleLinear()
        .domain(d3.extent(dataIn.map(d => d.y)))
        .range([visHeight,0])
        
    const svg = d3.select("svg")
    
    const chart = svg.append('g')
        .attr('transform',`translate(${margin.left},${margin.top}`)

    const xAxis = chart.append('g')
        .attr('transform',`translate(${margin.left},${margin.top + visHeight})`)
        .call(d3.axisBottom(xScale))

    const yAxis = chart.append('g')
        .attr('transform',`translate(${margin.left},0)`)
        .call(d3.axisLeft(yScale))
    
    const dataX = dataIn.map(d => xScale(d.x));

    const dataY = dataIn.map(d => yScale(d.y));

    console.log(dataX)

</script>

<div width={width} height={height} bind:this={userId} dataIn={dataIn}></div>