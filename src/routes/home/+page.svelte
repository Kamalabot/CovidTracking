<script>
// @ts-nocheck
	import CovidChart from '../../lib/CovidChart.svelte'
	import CovidStat from '../../lib/CovidStat.svelte'
	import TableContainer from '../../lib/TableContainer.svelte'
	export let data;
	console.log(data)
</script>

<svelte:head>
	<title>Covid Tracker</title>
</svelte:head>

<div class="w-100 flex justify-center">
	<h1 class="bg-green tc">Challenges are there to make you learn.</h1>
</div>

<CovidStat {...data.country}/>