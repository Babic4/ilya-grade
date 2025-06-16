<script>
	import Header from '../features/header/Header.svelte'
	import Footer from '../features/footer/Footer.svelte'

	let { children } = $props()
</script>

<div>
	<Header />
	<main class="flex flex-col grow">
		{@render children()}
	</main>
	<Footer />
</div>
