<script>
//Component takes the Historical data of both entire US and its states.
//Creates line chart for 4 variables as they change historically through d3
//Lines are given colors that the data carries with it
//Tooltips are generated through d3
//Legends are generated through d3
	
// @ts-nocheck
    import * as d3 from 'd3'
    import parsers from "$lib/parsers"
    import { onMount } from 'svelte';

    export let height;
    export let width;
    export let chartData; //get the historic data from page.js
    // export let userId;
    let div;
    // console.log(userId)
    const margin = {left:70,right:20,top:20,bottom:20}
    const visWidth = width - margin.left - margin.right
    const visHeight = height - margin.top - margin.bottom
    
    const xScale = d3.scalePoint()
        .domain(chartData[0].data.map(d => d.x))
        .range([margin.left,visWidth])
		
	console.log(chartData[0].data.map((d,i) =>i))
    
	const yScale = d3.scaleLinear()
        .domain(d3.extent(chartData[0].data.map(d => d.y)))
        .range([visHeight + margin.bottom,margin.top])

    onMount(() => {
    
        const docLocation = d3.select(div)
        
        const canvas = docLocation.append('svg')
            .attr('width',width)
            .attr('height',height)
		
        const chart = canvas.append('g')
            .attr('transform',`translate(${margin.left},${margin.top})`)

		const xAxis = d3.axisBottom(xScale).ticks(25)


        chart.append('g')
            .attr('transform',`translate(${0},${margin.top + visHeight})`)
            .call(xAxis)

        const yAxis = chart.append('g')
            .attr('transform',`translate(${margin.left},${0})`)
            .call(d3.axisLeft(yScale))

    })
    
    //console.log(chartData,'Data Reached Line Chart')

</script>

<div bind:this={div}></div>