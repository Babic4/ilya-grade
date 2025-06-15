<script lang="ts">
	import { cn } from '$shared/lib/css'

	// libraries
	import { Button } from '$shared/ui/kit/button'
	import { Star } from '@lucide/svelte'

	let { value = $bindable(0) } = $props()
	let hoverTarget = $state(0)

	const checkActive = (grade: number): boolean => {
		return grade <= value ? true : false
	}

	const hoverAnimate = (grade: number): boolean => {
		return grade <= hoverTarget ? true : false
	}
</script>

<div>
	{#each [...Array(5)] as item, i}
		<Button
			variant="ghost"
			class={cn(
				"p-[0.25rem]! text-neutral-500 hover:text-amber-300 hover:bg-transparent! hover:scale-125 [&_svg:not([class*='size-'])]:size-5",
				hoverAnimate(i + 1) ? 'text-amber-300 ' : '',
				checkActive(i + 1) ? 'text-amber-300 ' : ''
			)}
			onclick={() => {
				value = i + 1
			}}
			onmouseenter={() => {
				hoverTarget = i + 1
			}}
			onmouseleave={() => {
				hoverTarget = 0
			}}
		>
			<Star class={cn(checkActive(i + 1) ? 'fill-amber-300' : '')} size="48" />
		</Button>
	{/each}
</div>
