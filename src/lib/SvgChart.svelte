<script>
// @ts-nocheck
    import * as d3 from 'd3'

    export let height;
    export let width;
    export let dataIn;

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

    const dataX = dataIn.map(d => xScale(d.x));

    const dataY = dataIn.map(d => yScale(d.y));

    console.log(dataX)

</script>

<svg width={width} height={height}>
    {#each dataX as x, i}
      <rect 
        x = {x}
        y = {dataY[i]} 
        width = {xScale.bandwidth()}
        height={visHeight - dataY[i]}
        fill ='green' />
    {/each}
</svg>