<script>
	import { ArrowRight } from '@lucide/svelte'
	import { Button } from '$shared/ui/kit/button'
</script>

<header class="sticky top-2 bg-(--background)/10 backdrop-blur-lg">
	<div
		class="flex justify-between py-2.5 px-[40px] items-center max-w-[820px] w-full mx-auto border-b-1 border-b-white/5 border-t-1 border-t-white/5"
	>
		<div class="leading-none">Grade ILYA.</div>
		<Button>
			Send
			<ArrowRight />
		</Button>
	</div>
</header>
