<script>
	import { Input } from '$shared/ui/kit/input'
	import { Textarea } from '$shared/ui/kit/textarea'
	import { Button } from '$shared/ui/kit/button'
	import { Star } from '@lucide/svelte'
</script>

<div class="flex flex-col gap-2.5">
	<Input placeholder="Name" />
	<Textarea placeholder="Review..." />
	<div class="flex items-center justify-between">
		<div>
			<Button
				variant="ghost"
				class="text-neutral-500 hover:text-yellow-600 hover:bg-yellow-600/20!"
			>
				<Star />
			</Button>
			<Button
				variant="ghost"
				class="text-neutral-500 hover:text-yellow-600 hover:bg-yellow-600/20!"
			>
				<Star />
			</Button>
			<Button
				variant="ghost"
				class="text-neutral-500 hover:text-yellow-600 hover:bg-yellow-600/20!"
			>
				<Star />
			</Button>
			<Button
				variant="ghost"
				class="text-neutral-500 hover:text-yellow-600 hover:bg-yellow-600/20!"
			>
				<Star />
			</Button>
			<Button
				variant="ghost"
				class="text-neutral-500 hover:text-yellow-600 hover:bg-yellow-600/20!"
			>
				<Star />
			</Button>
		</div>
		<Button>Send</Button>
	</div>
</div>
