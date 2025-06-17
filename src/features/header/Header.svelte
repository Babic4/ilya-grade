<script>
	import LinkButton from './LinkButton.svelte'
	import Scramble from '$shared/ui/scramble/Scramble.svelte'
	import { Button } from '$shared/ui/kit/button'

	const scroll = () => {
		const divJump = document.querySelector('div[data-jump]')
		divJump?.scrollIntoView({
			behavior: 'smooth',
			block: 'center',
			inline: 'nearest',
		})
	}

	const changeTheme = () => {
		const html = document.documentElement
		if (html.classList.contains('dark')) {
			html.classList.replace('dark', 'light')
		} else {
			html.classList.replace('light', 'dark')
		}
	}
</script>

<header class="z-10 sticky top-2 bg-(--background)/10 backdrop-blur-lg">
	<div
		class="flex justify-between py-2.5 px-[40px] items-center max-w-[820px] w-full mx-auto border-b-1 border-b-white/1 border-t-1 border-t-white/1"
	>
		<Scramble
			className="leading-none"
			duration={2}
			value="Grade ILYA."
			as="div"
		/>
		<div class="flex gap-[0.5rem]">
			<Button
				variant="ghost"
				class="[&_svg:not([class*='size-'])]:size-6 h-min! p-[0.5rem]! relative hover:bg-transparent! transition-all ease-[cubic-bezier(0.65, 0, 0.35, 1)] duration-250 before:content-[''] before:opacity-0 before:absolute before:h-full before:w-full before:scale-40 before:bg-(--foreground)/10 before:rounded-md before:transition before:duration-250 before:ease-[cubic-bezier(0.65, 0, 0.35, 1)] hover:before:opacity-100 hover:before:scale-100"
				onclick={changeTheme}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="icon icon-tabler icons-tabler-outline icon-tabler-brightness"
					><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
						d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"
					/><path d="M12 3l0 18" /><path d="M12 9l4.65 -4.65" /><path
						d="M12 14.3l7.37 -7.37"
					/><path d="M12 19.6l8.85 -8.85" /></svg
				>
			</Button>
			<LinkButton onclick={scroll} />
		</div>
	</div>
</header>
