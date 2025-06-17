<script lang="ts">
	import Layout from './Layout.svelte'
	import Preview from '../features/preview/Preview.svelte'
	import ReviewBox from '../features/reviews/ReviewBox.svelte'
</script>

<Layout>
	<Preview />
	<div
		class="mx-auto !mt-6 !mb-20 max-w-[740px] w-full px-4 text-gray-1200 sm:mt-32 md:mb-12 md:mt-20"
	>
		<ReviewBox />
	</div>
</Layout>
