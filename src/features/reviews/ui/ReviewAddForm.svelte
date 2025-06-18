<script lang="ts">
	import { z } from 'zod'
	import { Input } from '$shared/ui/kit/input'
	import { Textarea } from '$shared/ui/kit/textarea'
	import { Button } from '$shared/ui/kit/button'
	import { ArrowRight } from '@lucide/svelte'
	import RatingInput from './RatingInput.svelte'
	import { useReviews } from '../api/firebase'

	const formDataSchema = z.object({
		name: z.string().min(3, 'Name must contain at least 3 characters'),
		message: z.string().min(2, 'Review must contain at least 2 characters'),
		rating: z.number().positive('Set a rating'),
	})

	type FormData = z.infer<typeof formDataSchema>

	const { addReview } = useReviews()

	let name = $state('')
	let message = $state('')
	let rating = $state(0)
	let showError = $state(false)
	let errors = $state<any>(undefined)

	const validate = () => {
		const res = formDataSchema.safeParse({ name, message, rating } as FormData)
		if (res.success) return undefined

		return res.error.format()
	}

	const sendForm = () => {
		errors = validate()

		if (errors) {
			showError = true
			return
		}
		addReview({ name, message, rating })
		resetForm()
	}

	const resetForm = () => {
		name = ''
		message = ''
		rating = 0
	}

	$effect(() => {
		errors = showError ? validate() : undefined
	})
</script>

<div class="border border-(--border) rounded-xl px-6 py-6 group/form" data-jump>
	<h3 class="text-2xl mb-3.5 relative">
		<span
			class="bg-gradient-to-r from-amber-300/30 via-amber-300/90 to-amber-300/30 box-decoration-clone group-hover/form:opacity-30 opacity-0 transition-all ease-[cubic-bezier(0.65, 0, 0.35, 1)] duration-250 text-transparent"
			>Leave a feedback</span
		>
		<span class="absolute left-0 top-0">Leave a feedback</span>
	</h3>
	<div class="flex flex-col gap-2.5">
		<div class="flex flex-col gap-1">
			<Input
				class="bg-(--card)! transition-all duration-250 ease-[cubic-bezier(0.65, 0, 0.35, 1)] hover:border-(--input-hover)"
				placeholder="Name"
				bind:value={name}
				aria-invalid={!!errors?.name?._errors.length}
			/>
			<div class="text-xs text-red-400">{errors?.name?._errors.join(', ')}</div>
		</div>
		<div class="flex flex-col gap-1">
			<Textarea
				class="resize-none bg-(--card)! transition-all ease-[cubic-bezier(0.65, 0, 0.35, 1)] duration-250 hover:border-(--input-hover)"
				placeholder="Review..."
				bind:value={message}
				aria-invalid={!!errors?.message?._errors.length}
			/>
			<div class="text-xs text-red-400">
				{errors?.message?._errors.join(', ')}
			</div>
		</div>
		<div class="flex items-center justify-between">
			<div class="flex items-center gap-2">
				<RatingInput bind:value={rating} />
				<div class="text-xs text-red-400">
					{errors?.rating?._errors.join(', ')}
				</div>
			</div>
			<Button
				onclick={sendForm}
				class="font-bold leading-none flex items-center pt-2 pr-2 pb-1 pl-3 hover:rounded-[0.95rem] transition-[border-radius] duration-250 ease-[cubic-bezier(0.65, 0, 0.35, 1)] group/btn"
				disabled={errors}
			>
				<div>Send</div>
				<div
					class="flex mt-[-0.2rem] transition-transform duration-250 ease-[cubic-bezier(0.65, 0, 0.35, 1)] group-hover/btn:translate-x-[0.2rem]"
				>
					<ArrowRight />
				</div>
			</Button>
		</div>
	</div>
</div>
