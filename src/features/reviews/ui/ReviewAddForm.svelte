<script>
	import { Input } from '$shared/ui/kit/input'
	import { Textarea } from '$shared/ui/kit/textarea'
	import { Button } from '$shared/ui/kit/button'
	import RatingInput from './RatingInput.svelte'
	import { useReviews } from '../api/firebase'

	const { getReviews, addReview } = useReviews()

	getReviews().then(result => {
		console.log(result)
	})

	let name = $state('')
	let message = $state('')
	let rating = $state(0)

	const sendForm = () => {
		const data = { name, message, rating }
		addReview(data)
		resetForm()
	}

	const resetForm = () => {
		name = ''
		message = ''
		rating = 0
	}
</script>

<div class="flex flex-col gap-2.5">
	<Input placeholder="Name" bind:value={name} />
	<Textarea class="resize-none" placeholder="Review..." bind:value={message} />
	<div class="flex items-center justify-between">
		<RatingInput bind:value={rating} />
		<Button onclick={sendForm}>Send</Button>
	</div>
</div>
