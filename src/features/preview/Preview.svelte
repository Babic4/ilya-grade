<script>
	import { Button } from '$shared/ui/kit/button'
	import * as Tooltip from '$shared/ui/kit/tooltip'

	const badges = [
		'Pick Me!',
		'CSS.Battle №3',
		'Gay',
		'Best PM',
		'People of Year 1999',
		'KARP',
	]
</script>

<div
	class="mx-auto !mt-64 !mb-32 max-w-[740px] px-4 text-gray-1200 sm:mt-32 md:mb-12 md:mt-20"
>
	<div class="flex gap-[2.5rem] grow">
		<div class="relative">
			<div
				class="rounded-md overflow-hidden min-h-[200px] h-[200px] min-w-[200px] w-[200px] rotate-[-3deg] hover:rotate-0 transition-transform ease-[cubic-bezier(0.65, 0, 0.35, 1)] duraction-250"
			>
				<img src="/photo-2.jpg" alt="preview" />
			</div>
			<div
				class="left-[54px] top-[240px] absolute rounded-md overflow-hidden min-h-[120px] h-[120px] min-w-[120px] w-[120px] rotate-[3deg] hover:rotate-0 transition-transform ease-[cubic-bezier(0.65, 0, 0.35, 1)] duraction-250"
			>
				<img src="/photo-1.jpg" alt="preview" />
			</div>
		</div>
		<div class="flex flex-col gap-[2.2rem]">
			<div>
				<div class="flex items-center gap-[1rem] mb-2">
					<h3 class="text-4xl font-bold">Ilya PYSbKA</h3>
					<Tooltip.Provider delayDuration={250}>
						<Tooltip.Root>
							<Tooltip.Trigger>
								<Button
									variant="link"
									class="[&_svg:not([class*='size-'])]:size-5 p-2! rounded-full"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="lucide lucide-link-icon lucide-link"
										><path
											d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
										/><path
											d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
										/></svg
									>
								</Button>
							</Tooltip.Trigger>
							<Tooltip.Content
								side="right"
								class="bg-neutral-800 py-0.5 px-1"
								arrowClasses="bg-neutral-800"
							>
								<Button
									href="https://t.me/PYSbKA"
									variant="link"
									class="text-[#24A1DE] [&_svg:not([class*='size-'])]:size-5"
								>
									<svg
										role="img"
										viewBox="0 0 24 24"
										fill="currentColor"
										xmlns="http://www.w3.org/2000/svg"
										><title>Telegram</title><path
											d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
										/></svg
									>
								</Button>
							</Tooltip.Content>
						</Tooltip.Root>
					</Tooltip.Provider>
				</div>
				<p class="text-neutral-500">
					Best SUPPORT at
					<a
						class="text-[#ffb300] transition duraction-250 ease-[cubic-bezier(0.65, 0, 0.35, 1)] border-b border-[#ffb300]/40 hover:border-[#ffb300]"
						href="https://sms.by/"
						target="_blank"
					>
						SMS.BY
					</a>
				</p>
			</div>
			<div>
				<p class="mb-2.5">
					Hello! You can call me PYSbKA. I am a support, project manager,
					working at SMS.BY
				</p>
				<p class="mb-2.5">
					I was born in 1999 in Jakarta, Indonesia. When the pandemic started 5
					years ago, my university was closed for a few weeks, and I started
					studying the functionality of newsletters and templates for email
					newsletters and a little bit of CSS
				</p>
				<p class="mb-2.5">
					Now I am already a project manager and I have started to allow myself
					a lot
				</p>
				<p class="mb-2.5">Here are my current favorite achievements:</p>
				<div class="flex flex-wrap gap-[0.3rem]">
					{#each badges as badge}
						<div
							class="border-1 border-white/20 bg-neutral-800 text-[0.825rem] font-bold py-0.5 px-2.5 rounded-md"
						>
							{badge}
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
	<div></div>
</div>
