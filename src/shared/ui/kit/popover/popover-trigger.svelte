<script lang="ts">
	import { cn } from '$shared/lib/css.js'
	import { Popover as PopoverPrimitive } from 'bits-ui'

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: PopoverPrimitive.TriggerProps = $props()
</script>

<PopoverPrimitive.Trigger
	bind:ref
	data-slot="popover-trigger"
	class={cn('focus-visible:outline-none!', className)}
	{...restProps}
/>
