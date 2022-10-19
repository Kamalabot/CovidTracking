<script>
// @ts-nocheck
    import * as d3 from 'd3'
    import parsers from "$lib/parsers"
    import { onMount } from 'svelte';

    export let height;
    export let width;
    export let chartData;
    // export let userId;
    let div;
    // console.log(userId)
    const margin = {left:20,right:20,top:20,bottom:20}
    const visWidth = width - margin.left - margin.right
    const visHeight = height - margin.right - margin.left
    
    const xScale = d3.scaleBand()
        .domain(chartData.map(d => d.x))
        .range([0,visWidth])
        .paddingInner(0.2)

    const yScale = d3.scaleLinear()
        .domain(d3.extent(chartData.map(d => d.y)))
        .range([visHeight,0])

    onMount(() => {
    
        const docLocation = d3.select(div)
        
        const canvas = docLocation.append('svg')
            .attr('width',width)
            .attr('height',height)

        const chart = canvas.append('g')
            .attr('transform',`translate(${margin.left},${margin.top}`)

        const xAxis = chart.append('g')
            .attr('transform',`translate(${margin.left},${margin.top + visHeight})`)
            .call(d3.axisBottom(xScale))

        const yAxis = chart.append('g')
            .attr('transform',`translate(${margin.left},0)`)
            .call(d3.axisLeft(yScale))
    })
    
    const dataX = chartData.map(d => xScale(d.x));

    const dataY = chartData.map(d => yScale(d.y));

    console.log(dataX)

</script>

<div bind:this={div}></div>