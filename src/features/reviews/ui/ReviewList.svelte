<script lang="ts">
	import { onDestroy, onMount } from 'svelte'
	import { Button } from '$shared/ui/kit/button'
	import { ArrowUp } from '@lucide/svelte'
	import ReviewItem from './ReviewItem.svelte'
	import { useReviews } from '../api/firebase'

	let stickyRef: HTMLElement
	let isStuck = false

	const { reviews, unsubscribe } = useReviews()

	const pullUp = () => {
		const headerReviews = document.querySelector('div[data-up]')
		const rectHeader = headerReviews?.getBoundingClientRect()
		const scrollTop = window.pageYOffset || document.documentElement.scrollTop
		const topPosition = rectHeader?.top ?? 0

		window.scrollTo({
			top: topPosition + scrollTop - 120,
			behavior: 'smooth',
		})
	}

	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				isStuck = entry.boundingClientRect.top < 76 && !entry.isIntersecting
			},
			{
				threshold: [1],
				root: null,
				rootMargin: '-73.6px 0px 0px 0px',
			}
		)

		if (stickyRef) observer.observe(stickyRef)

		return () => {
			observer.disconnect()
		}
	})

	onDestroy(() => {
		unsubscribe()
	})
</script>

<div class="flex flex-col gap-3" data-up>
	<div
		bind:this={stickyRef}
		class="sticky flex items-center justify-between px-6 py-3 top-[73.6px] border-b border-b-(--border) z-20 bg-(--background)/10 backdrop-blur-lg rounded-t-xl"
	>
		<span class="leading-[28px]">Reviews: {$reviews.length}</span>
		{#if isStuck}
			<Button
				onclick={pullUp}
				class="p-1.5! h-min transition-[border-radius] duration-250 ease-[cubic-bezier(0.65, 0, 0.35, 1)] hover:rounded-[0.70rem]"
			>
				<ArrowUp />
			</Button>
		{/if}
	</div>
	{#each $reviews as review}
		<ReviewItem {review} />
	{/each}
</div>
