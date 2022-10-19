<script>
	// @ts-nocheck
	import SvgChart from "$lib/SvgChart.svelte";
	import D3Chart from "$lib/D3Chart.svelte";

	export let data;
	// console.log(data)
</script>


<svelte:head>
	<title>Why Tracker</title>
</svelte:head>

<h1 class="dib tc bg-light-blue">About this site</h1>

<p class="f4 lh-copy">This site is trial of the svelteKit to build a full fledged interactive dashboard. The data is taken from <a href=" https://api.covidtracking.com/v1/states/current.json">each states current data</a> and <a href="https://api.covidtracking.com/v1/us/current.json">Entire US data</a> </p>

<SvgChart height={200} width={500} dataIn={data.parseData}/>

<D3Chart height={200} width={500} chartData={data.parseData}/>