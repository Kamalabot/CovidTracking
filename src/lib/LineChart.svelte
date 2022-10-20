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
	let title;
    
	let div;

	buildChart(chartData[0].data, chartData[0].borderColor,chartData[0].label)
	buildChart(chartData[1].data, chartData[1].borderColor,chartData[1].label)
	buildChart(chartData[2].data, chartData[2].borderColor,chartData[2].label)
	buildChart(chartData[3].data, chartData[3].borderColor,chartData[3].label)
	
	function buildChart(data, colorData, label){
		const margin = {left:70,right:20,top:20,bottom:50}
		const visWidth = width - margin.left - margin.right
		const visHeight = height - margin.top - margin.bottom

		const xScale = d3.scaleTime()
			.domain(d3.extent(data.map(d => d.x)))
			.range([0,visWidth])

		//console.log(data.map((d,i) => d.x))

		const yScale = d3.scaleLinear()
			.domain(d3.extent(data.map(d => d.y)))
			.range([visHeight,margin.top])

		onMount(() => {

			const docLocation = d3.select(div)

			const canvas = docLocation.append('svg')
				.attr('width',width)
				.attr('height',height)

			const chart = canvas.append('g')
				.attr('transform',`translate(${margin.left},${margin.top})`)

			const title = canvas.append('g')
				.attr('transform',`translate(${width/4},${margin.top + 20})`)
				.append('text')
				.text(`Status of Covid ${label} in US`)
				.attr('font-size','15')

			const xAxis = d3.axisBottom(xScale);

			const xAx = canvas.append('g')
				.attr('transform',`translate(${margin.left},${visHeight+margin.top})`)
				.call(xAxis)
				.selectAll("text")  
				.style("text-anchor", "end")
				.attr("dx", "-.1em")
				.attr("dy", ".05em")
				.attr("transform", "rotate(-25)")

			const yAxis = canvas.append('g')
				.attr('transform',`translate(${margin.left},${margin.top})`)
				.call(d3.axisLeft(yScale))
				.selectAll("text")  
				.style("text-anchor", "end")
				.attr("dx", "-.1em")
				.attr("dy", ".05em")
				.attr("transform", "rotate(-25)")

			const bubbles = chart.selectAll('g')
				.data(data)
				.join('g');

			const bars = bubbles
				.append('circle')
				.attr('cy', d => yScale(d.y))
				.attr('cx', d => xScale(d.x))
				.attr('r', 2)
				.attr('fill',colorData)
		})
	}
	
	function axesDomain(axis, axisObject, label, visWidth, visHeight){
		if (axis == 'x' || axis == 'X'){
			axisObject
				.call(g => g.select('.domain').remove())
				.append('text')
				.attr('fill', 'black')
				.attr('text-anchor', 'start')
				.attr('dominant-baseline', 'hanging')
				.attr('font-weight', 'bold')
				.attr('y', 20)
				.attr('x', visWidth /2)
				.text(label);
		} else if (axis == 'y' || axis == 'Y'){
			axisObject
			.call(g => g.select('.domain').remove())
			.append('text')
			.attr('fill', 'black')
			.attr('text-anchor', 'start')
			.attr('dominant-baseline', 'hanging')
			.attr('font-weight', 'bold')
			.attr('y',-2)
			.attr('x',-30)
			.text(label);
		}
	}
    //console.log(chartData,'Data Reached Line Chart')

</script>

<div bind:this={div}></div>