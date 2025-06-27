<svelte:options css="injected" />

<script lang="ts">
	export let text: string = 'hello';
</script>

<div id="container">
	<h1>
		{text} world!
	</h1>
</div>

<style>
	* {
		display: flex; /* if you're having problems with satori errors, this line can really help */
	}
	#container {
		width: 1200px;
		height: 600px;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		background: rgb(63, 94, 251);
		background: radial-gradient(circle, rgba(63, 94, 251, 1) 0%, rgba(252, 70, 107, 1) 100%);
	}
	h1 {
		color: red;
		font-size: 75px;
	}
</style>
