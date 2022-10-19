<script>
// @ts-nocheck
    export let height;
    export let width;
    export let dataIn;

    const dataX = dataIn.map(d => d.x);

    const dataY = dataIn.map(d => d.y);

</script>

<svg width={width} height={height}>
    {#each dataX as x, i}
      <rect 
        x = {x}
        y = {0} 
        width = {10}
        height={dataY[i]}
        fill ='green' />
    {/each}
</svg>