<script lang="ts">
	import { Star, Clock } from '@lucide/svelte'

	let { review } = $props()

	const formatTime = (time: {
		seconds: number
		nanoseconds: number
	}): string => {
		if (time === null) return ''

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

<div class="border border-(--border) rounded-xl inset group">
	<div
		class="flex flex-col md:flex-row md:items-center gap-[0.425rem] md:gap-[2rem] px-6 py-3 relative"
	>
		<div class="flex items-center gap-[1rem] grow overflow-hidden">
			<p
				class="text-[0.825rem] tracking-wider text-neutral-500 relative whitespace-nowrap overflow-hidden text-ellipsis"
			>
				<span
					class="w-full bg-gradient-to-r from-black/30 via-black/90 to-black/30 box-decoration-clone group-hover:opacity-30 opacity-0 transition text-transparent whitespace-nowrap overflow-hidden text-ellipsis"
				>
					{review.name}</span
				>
				<span
					class="w-full absolute left-0 top-0 whitespace-nowrap overflow-hidden text-ellipsis"
					>{review.name}</span
				>
			</p>
			<div
				class="flex items-center justify-center gap-[0.5rem] px-1.5 py-0.5 rounded-md bg-(--item-bg)"
			>
				<Star
					size={14}
					color="oklch(87.9% 0.169 91.605)"
					fill="oklch(87.9% 0.169 91.605)"
				/>
				<p class="text-[0.75rem] whitespace-nowrap">{review.rating} star</p>
			</div>
		</div>
		<div class="flex items-center gap-[0.5rem]">
			<Clock size={14} color="oklch(55.6% 0 0)" />
			<p
				class="text-[0.825rem] text-neutral-500 leading-none whitespace-nowrap"
			>
				{formatTime(review.time)}
			</p>
		</div>
	</div>
	<div
		class="isolate text-[1rem] relative px-6 py-6 rounded-xl border border-(--border) bg-(--card) overflow-hidden"
	>
		{review.message}
	</div>
</div>
