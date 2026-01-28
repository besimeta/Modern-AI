<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let property: {
		id: string;
		name: string;
		address: string;
		type: 'residential' | 'commercial' | 'industrial';
		status: 'occupied' | 'vacant' | 'maintenance';
		rent: number;
		tenant?: string;
		image: string;
		size: number;
		lastMaintenance?: string;
	};

	const dispatch = createEventDispatcher();

	function close() {
		dispatch('close');
	}

	function handleBackdropClick(e: MouseEvent) {
		if (e.target === e.currentTarget) {
			close();
		}
	}

	const statusColors = {
		occupied: 'text-green-600 bg-green-100',
		vacant: 'text-amber-600 bg-amber-100',
		maintenance: 'text-red-600 bg-red-100'
	};

	const typeLabels = {
		residential: 'Residential Property',
		commercial: 'Commercial Property',
		industrial: 'Industrial Property'
	};
</script>

<svelte:window
	on:keydown={(e) => {
		if (e.key === 'Escape') close();
	}}
/>

<div
	class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
	on:click={handleBackdropClick}
	role="button"
	tabindex="-1"
>
	<div
		class="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-scale-in"
	>
		<!-- Header with Image -->
		<div class="relative h-64 md:h-80">
			<img src={property.image} alt={property.name} class="w-full h-full object-cover" />
			<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
			<button
				on:click={close}
				class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
			>
				<svg class="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>
			<div class="absolute bottom-0 left-0 right-0 p-6 text-white">
				<h2 class="text-3xl font-bold mb-2">{property.name}</h2>
				<p class="text-white/90 flex items-center gap-2">
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
						/>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
						/>
					</svg>
					{property.address}
				</p>
			</div>
		</div>

		<!-- Content -->
		<div class="p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-20rem)]">
			<!-- Status and Type -->
			<div class="flex flex-wrap gap-3 mb-6">
				<span class="px-4 py-2 rounded-lg font-semibold {statusColors[property.status]}">
					{property.status.charAt(0).toUpperCase() + property.status.slice(1)}
				</span>
				<span class="px-4 py-2 rounded-lg font-semibold text-blue-600 bg-blue-100">
					{typeLabels[property.type]}
				</span>
			</div>

			<!-- Key Information Grid -->
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
				<div class="bg-slate-50 rounded-lg p-4">
					<p class="text-sm text-slate-600 mb-1">Monthly Rent</p>
					<p class="text-2xl font-bold text-slate-900">${property.rent.toLocaleString()}</p>
				</div>
				<div class="bg-slate-50 rounded-lg p-4">
					<p class="text-sm text-slate-600 mb-1">Property Size</p>
					<p class="text-2xl font-bold text-slate-900">{property.size.toLocaleString()} sq ft</p>
				</div>
				<div class="bg-slate-50 rounded-lg p-4">
					<p class="text-sm text-slate-600 mb-1">Annual Revenue</p>
					<p class="text-2xl font-bold text-slate-900">
						${(property.rent * 12).toLocaleString()}
					</p>
				</div>
			</div>

			<!-- Tenant Information -->
			{#if property.tenant}
				<div class="mb-8">
					<h3 class="text-lg font-bold text-slate-900 mb-4">Tenant Information</h3>
					<div class="bg-slate-50 rounded-lg p-4">
						<div class="flex items-center gap-3">
							<div class="bg-blue-100 rounded-full p-3">
								<svg
									class="w-6 h-6 text-blue-600"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
									/>
								</svg>
							</div>
							<div>
								<p class="font-semibold text-slate-900">{property.tenant}</p>
								<p class="text-sm text-slate-600">Current Tenant</p>
							</div>
						</div>
					</div>
				</div>
			{/if}

			<!-- Maintenance History -->
			{#if property.lastMaintenance}
				<div class="mb-8">
					<h3 class="text-lg font-bold text-slate-900 mb-4">Maintenance</h3>
					<div class="bg-slate-50 rounded-lg p-4">
						<div class="flex items-center justify-between">
							<div class="flex items-center gap-3">
								<div class="bg-green-100 rounded-full p-3">
									<svg
										class="w-6 h-6 text-green-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
								</div>
								<div>
									<p class="font-semibold text-slate-900">Last Maintenance Check</p>
									<p class="text-sm text-slate-600">
										{new Date(property.lastMaintenance).toLocaleDateString('en-US', {
											year: 'numeric',
											month: 'long',
											day: 'numeric'
										})}
									</p>
								</div>
							</div>
							<button
								class="px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
							>
								View History
							</button>
						</div>
					</div>
				</div>
			{/if}

			<!-- Property Details -->
			<div class="mb-8">
				<h3 class="text-lg font-bold text-slate-900 mb-4">Property Details</h3>
				<div class="space-y-3">
					<div class="flex justify-between py-3 border-b border-slate-200">
						<span class="text-slate-600">Property ID</span>
						<span class="font-medium text-slate-900">#{property.id}</span>
					</div>
					<div class="flex justify-between py-3 border-b border-slate-200">
						<span class="text-slate-600">Property Type</span>
						<span class="font-medium text-slate-900">{typeLabels[property.type]}</span>
					</div>
					<div class="flex justify-between py-3 border-b border-slate-200">
						<span class="text-slate-600">Current Status</span>
						<span class="font-medium text-slate-900">
							{property.status.charAt(0).toUpperCase() + property.status.slice(1)}
						</span>
					</div>
					<div class="flex justify-between py-3">
						<span class="text-slate-600">Square Footage</span>
						<span class="font-medium text-slate-900">{property.size.toLocaleString()} sq ft</span>
					</div>
				</div>
			</div>

			<!-- Action Buttons -->
			<div class="flex flex-wrap gap-3">
				<button
					class="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
				>
					Edit Property
				</button>
				<button
					class="flex-1 px-6 py-3 bg-slate-100 text-slate-900 rounded-lg font-medium hover:bg-slate-200 transition-colors"
				>
					Generate Report
				</button>
				<button
					class="px-6 py-3 bg-red-50 text-red-600 rounded-lg font-medium hover:bg-red-100 transition-colors"
				>
					Delete
				</button>
			</div>
		</div>
	</div>
</div>

<style>
	@keyframes scale-in {
		from {
			opacity: 0;
			transform: scale(0.95);
		}
		to {
			opacity: 1;
			transform: scale(1);
		}
	}

	.animate-scale-in {
		animation: scale-in 0.2s ease-out;
	}
</style>
