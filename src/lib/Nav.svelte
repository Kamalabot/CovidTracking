<script>
	export let segment;
</script>
<div class="flex f3">
	<div class="pa1">
		<a class="ma2" href=".">		
			<img src="./virus.jpg" alt="This is virus image"/>
		</a>
	</div>
	<a class="pa2 ma2" aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a>
	<a class="pa2 ma2" aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a>
	<a class="pa2 ma2" aria-current="{segment === 'state' ? 'page' : undefined}" href="state">state</a>
</div>