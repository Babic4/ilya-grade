<script lang="ts">
	import { Star, Clock } from '@lucide/svelte'

	let { review } = $props()

	const formatTime = (time: {
		seconds: number
		nanoseconds: number
	}): string => {
		const milliseconds =
			time.seconds * 1000 + Math.floor(time.nanoseconds / 1e6)
		const date = new Date(milliseconds)

		const hours = date.getHours().toString().padStart(2, '0')
		const minutes = date.getMinutes().toString().padStart(2, '0')
		const month = date.toLocaleString('en-US', { month: 'long' })
		const day = date.getDate()
		const year = date.getFullYear()

		return `${hours}:${minutes} ${month} ${day}, ${year}`
	}
</script>

<div class="border border-white/5 rounded-xl inset group">
	<div class="flex items-center justify-between gap-[2rem] px-6 py-3 relative">
		<div class="flex items-center gap-[1rem]">
			<p class="text-[0.825rem] tracking-wider text-neutral-500 relative">
				<span
					class="bg-gradient-to-r from-black/30 via-black/90 to-black/30 box-decoration-clone group-hover:opacity-30 opacity-0 transition text-transparent"
				>
					{review.name}</span
				>
				<span class="absolute left-0 top-0">{review.name}</span>
			</p>
			<div
				class="flex items-center justify-center gap-[0.5rem] px-1.5 py-0.5 rounded-md bg-amber-300/5"
			>
				<Star
					size={14}
					color="oklch(87.9% 0.169 91.605)"
					fill="oklch(87.9% 0.169 91.605)"
				/>
				<p class="text-[0.75rem]">{review.rating} star</p>
			</div>
		</div>
		<div class="flex items-center gap-[0.5rem]">
			<Clock size={14} color="oklch(55.6% 0 0)" />
			<p class="text-[0.825rem] text-neutral-500 leading-none">
				{formatTime(review.time)}
			</p>
		</div>
	</div>
	<div
		class="isolate text-[1rem] relative px-6 py-6 rounded-xl border border-white/5 bg-neutral-900 overflow-hidden"
	>
		{review.message}
	</div>
</div>
