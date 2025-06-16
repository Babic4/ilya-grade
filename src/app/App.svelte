<script lang="ts">
	import Layout from './Layout.svelte'
	// import Header from '../features/header/Header.svelte'
	// import Footer from '../features/footer/Footer.svelte'
	import ReviewBox from '../features/reviews/ReviewBox.svelte'
</script>

<Layout>
	<section
		class="mx-auto !mt-[100px] mb-8 max-w-[740px] px-4 text-gray-1200 sm:mt-32 md:mb-12 md:mt-20"
	>
		<h1 class="text-6xl">Hello, Ilya!</h1>
	</section>
	<section
		class="mx-auto !mt-6 mb-8 max-w-[740px] px-4 text-gray-1200 sm:mt-32 md:mb-12 md:mt-20"
	>
		<p>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo ut
			perspiciatis impedit beatae quaerat ad eos facilis reiciendis, veniam
			delectus deserunt similique eaque voluptatem repellat in blanditiis!
			Nesciunt, laboriosam ipsam!
		</p>
	</section>
	<div
		class="mx-auto !mt-6 mb-8 max-w-[740px] w-full px-4 text-gray-1200 sm:mt-32 md:mb-12 md:mt-20"
	>
		<ReviewBox />
	</div>
	<section
		class="mx-auto !mt-6 mb-8 max-w-[740px] px-4 text-gray-1200 sm:mt-32 md:mb-12 md:mt-20"
	></section>
</Layout>

<!-- <Header />
<main class="flex flex-col grow">
	<section
		class="mx-auto !mt-[100px] mb-8 max-w-[740px] px-4 text-gray-1200 sm:mt-32 md:mb-12 md:mt-20"
	>
		<h1 class="text-6xl">Hello, Ilya!</h1>
	</section>
	<section
		class="mx-auto !mt-6 mb-8 max-w-[740px] px-4 text-gray-1200 sm:mt-32 md:mb-12 md:mt-20"
	>
		<p>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo ut
			perspiciatis impedit beatae quaerat ad eos facilis reiciendis, veniam
			delectus deserunt similique eaque voluptatem repellat in blanditiis!
			Nesciunt, laboriosam ipsam!
		</p>
	</section>
	<div
		class="mx-auto !mt-6 mb-8 max-w-[740px] w-full px-4 text-gray-1200 sm:mt-32 md:mb-12 md:mt-20"
	>
		<ReviewBox />
	</div>
	<section
		class="mx-auto !mt-6 mb-8 max-w-[740px] px-4 text-gray-1200 sm:mt-32 md:mb-12 md:mt-20"
	></section>
</main>
<Footer /> -->
