<script>
	// @ts-nocheck
	import SvgChart from "$lib/SvgChart.svelte";

	const dataX = [0,15,30,45,60];

	const dataObj = dataX.map(d => ({
		x: d,
		y: d * 5 + 26}));
	export let data;
	console.log(data)
</script>


<svelte:head>
	<title>Why Tracker</title>
</svelte:head>

<h1 class="dib tc bg-light-blue">About this site</h1>

<p class="f4 lh-copy">This site is trial of the svelteKit to build a full fledged interactive dashboard. The data is taken from <a href=" https://api.covidtracking.com/v1/states/current.json">each states current data</a> and <a href="https://api.covidtracking.com/v1/us/current.json">Entire US data</a> </p>

<SvgChart height={200} width={500} dataIn={dataObj}/>