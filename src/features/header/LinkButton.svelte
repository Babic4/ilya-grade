<script>
	import { ArrowRight } from '@lucide/svelte'
	import { Button } from '$shared/ui/kit/button'

	let { ...restProps } = $props()
</script>

<Button
	class="font-bold overflow-hidden leading-none flex items-center pt-2 pr-2 pb-1 pl-3 hover:rounded-[0.95rem] group relative! transition-[border-radius] duration-250 ease-[cubic-bezier(0.65, 0, 0.35, 1)] after:content-[''] after:absolute after:left-[-1.5rem] after:mt-[-0.2rem] after:mask-no-repeat after:mask-origin-border after:mask-contain after:mask-center after:w-[16px] after:h-[16px] after:mask-match after:mask-add after:mask-clip-border after:bg-(--primary-foreground) after:transition-transform after:duraction-250 after:ease-[cubic-bezier(0.65, 0, 0.35, 1)] after:mask-[url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWFycm93LXJpZ2h0LWljb24gbHVjaWRlLWFycm93LXJpZ2h0Ij48cGF0aCBkPSJNNSAxMmgxNCIvPjxwYXRoIGQ9Im0xMiA1IDcgNy03IDciLz48L3N2Zz4=)] hover:after:translate-x-[1.9rem]"
	{...restProps}
>
	<div
		class="transition-transform duration-250 ease-[cubic-bezier(0.65, 0, 0.35, 1)] group-hover:translate-x-[1.1rem]"
	>
		Add Review
	</div>
	<div
		class="flex mt-[-0.2rem] transition-transform duration-250 ease-[cubic-bezier(0.65, 0, 0.35, 1)] group-hover:translate-x-[1.5rem]"
	>
		<ArrowRight />
	</div>
</Button>
