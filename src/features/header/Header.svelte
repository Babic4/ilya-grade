<script>
	import LinkButton from './LinkButton.svelte'

	const scroll = () => {
		const divJump = document.querySelector('div[data-jump]')
		divJump?.scrollIntoView({
			behavior: 'smooth',
			block: 'center',
			inline: 'nearest',
		})
	}
</script>

<header class="z-10 sticky top-2 bg-(--background)/10 backdrop-blur-lg">
	<div
		class="flex justify-between py-2.5 px-[40px] items-center max-w-[820px] w-full mx-auto border-b-1 border-b-white/1 border-t-1 border-t-white/1"
	>
		<div class="leading-none">Grade ILYA.</div>
		<LinkButton onclick={scroll} />
	</div>
</header>
