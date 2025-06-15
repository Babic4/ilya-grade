<script lang="ts">
	import ReviewItem from './ReviewItem.svelte'

	type Review = {
		id: number
		name: string
		message: string
		rating: number
		time: string
	}

	const reviews: Review[] = [
		{
			id: 1,
			name: 'John Smith',
			message: 'Excellent product, very satisfied with the purchase!',
			rating: 5,
			time: '2025-06-14T10:15:00Z',
		},
		{
			id: 2,
			name: 'Emily Johnson',
			message: 'Good quality, but the delivery took longer than expected.',
			rating: 4,
			time: '2025-06-13T14:30:00Z',
		},
		{
			id: 3,
			name: 'Michael Brown',
			message: 'The item matches the description, highly recommend.',
			rating: 4,
			time: '2025-06-12T09:45:00Z',
		},
		{
			id: 4,
			name: 'Sarah Davis',
			message: "There are some minor issues, but overall it's fine.",
			rating: 3,
			time: '2025-06-11T16:20:00Z',
		},
		{
			id: 5,
			name: 'David Wilson',
			message: 'Did not meet my expectations, quality below average.',
			rating: 2,
			time: '2025-06-10T12:00:00Z',
		},
		{
			id: 6,
			name: 'Olivia Martinez',
			message: 'Fast shipping and great customer service.',
			rating: 5,
			time: '2025-06-09T11:10:00Z',
		},
		{
			id: 7,
			name: 'James Anderson',
			message: 'Product is decent but packaging was damaged.',
			rating: 3,
			time: '2025-06-08T15:25:00Z',
		},
		{
			id: 8,
			name: 'Sophia Lee',
			message: 'Very comfortable and easy to use.',
			rating: 4,
			time: '2025-06-07T08:50:00Z',
		},
		{
			id: 9,
			name: 'William Harris',
			message: 'Not as described, a bit disappointed.',
			rating: 2,
			time: '2025-06-06T13:40:00Z',
		},
		{
			id: 10,
			name: 'Mia Clark',
			message: 'Excellent value for money, will buy again.',
			rating: 5,
			time: '2025-06-05T17:55:00Z',
		},
	]

	let reviewList = $state(reviews)
</script>

<div class="flex flex-col gap-3">
	{#each reviewList as review}
		<ReviewItem {review} />
	{/each}
</div>
