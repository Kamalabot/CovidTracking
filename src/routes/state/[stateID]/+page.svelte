<script>
// @ts-nocheck
	import CovidChart from '$lib/CovidChart.svelte'
	import CovidStat from '$lib/CovidStat.svelte'
	import TableContainer from '$lib/TableContainer.svelte'
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

<CovidChart historicData={data.posts.historic} title="Covid 19 - {data.posts.state}" />