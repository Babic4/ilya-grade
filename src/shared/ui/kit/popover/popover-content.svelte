<script lang="ts">
	import { cn } from '$shared/lib/css.js'
	import { Popover as PopoverPrimitive } from 'bits-ui'

	let {
		ref = $bindable(null),
		class: className,
		sideOffset = 4,
		align = 'center',
		portalProps,
		arrowClasses,
		...restProps
	}: PopoverPrimitive.ContentProps & {
		portalProps?: PopoverPrimitive.PortalProps
		arrowClasses?: string
	} = $props()
</script>

<PopoverPrimitive.Portal {...portalProps}>
	<PopoverPrimitive.Content
		bind:ref
		data-slot="popover-content"
		{sideOffset}
		{align}
		class={cn(
			'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--bits-popover-content-transform-origin) outline-hidden z-50 w-content rounded-md border p-4 shadow-md',
			className
		)}
		{...restProps}
	>
		{@render restProps?.children?.()}
		<PopoverPrimitive.Arrow>
			{#snippet child({ props })}
				<div
					class={cn(
						'bg-primary z-50 size-2.5 rotate-45 rounded-[2px]',
						'data-[side=top]:translate-x-1/2 data-[side=top]:translate-y-[calc(-50%_+_2px)]',
						'data-[side=bottom]:-translate-y-[calc(-50%_+_1px)] data-[side=bottom]:translate-x-1/2',
						'data-[side=right]:translate-x-[calc(50%_+_2px)] data-[side=right]:translate-y-1/2',
						'data-[side=left]:translate-y-[calc(50%_-_3px)]',
						arrowClasses
					)}
					{...props}
				></div>
			{/snippet}
		</PopoverPrimitive.Arrow>
	</PopoverPrimitive.Content>
</PopoverPrimitive.Portal>
