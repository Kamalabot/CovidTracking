<script>
// @ts-nocheck
	import CovidStat from '$lib/CovidStat.svelte'
	import TableContainer from '$lib/TableContainer.svelte'
	import LineChart from '$lib/LineChart.svelte'
	export let data;
	console.log(data)
</script>

<svelte:head>
	<title>Covid Tracker for </title>
</svelte:head>

<div class="w-100 flex justify-center">
	<h1 class="tc">Covid Status of {data.posts.state}</h1>
</div>

<CovidStat {...data.posts.stats}/>

<LineChart width={400} height={300} chartData={data.posts.historic}/>