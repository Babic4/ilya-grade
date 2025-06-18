<script lang="ts">
	import { onDestroy } from 'svelte'
	import ReviewItem from './ReviewItem.svelte'
	import { useReviews } from '../api/firebase'

	const { reviews, unsubscribe } = useReviews()

	onDestroy(() => {
		unsubscribe()
	})
</script>

<div class="flex flex-col gap-3">
	<div
		class="sticky px-6 py-3 top-[73.6px] border-b border-b-(--border) z-20 bg-(--background)/10 backdrop-blur-lg rounded-t-xl"
	>
		Reviews: {$reviews.length}
	</div>
	{#each $reviews as review}
		<ReviewItem {review} />
	{/each}
</div>
