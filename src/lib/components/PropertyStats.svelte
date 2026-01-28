<script lang="ts">
	export let totalProperties: number;
	export let occupiedProperties: number;
	export let vacantProperties: number;
	export let totalRevenue: number;

	$: occupancyRate = totalProperties > 0 ? (occupiedProperties / totalProperties) * 100 : 0;
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
	<!-- Total Properties -->
	<div class="bg-white rounded-xl shadow-sm p-6 border-l-4 border-blue-500">
		<div class="flex items-center justify-between">
			<div>
				<p class="text-sm font-medium text-slate-600 mb-1">Total Properties</p>
				<p class="text-3xl font-bold text-slate-900">{totalProperties}</p>
			</div>
			<div class="bg-blue-100 rounded-full p-3">
				<svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
					/>
				</svg>
			</div>
		</div>
	</div>

	<!-- Occupied Properties -->
	<div class="bg-white rounded-xl shadow-sm p-6 border-l-4 border-green-500">
		<div class="flex items-center justify-between">
			<div>
				<p class="text-sm font-medium text-slate-600 mb-1">Occupied</p>
				<p class="text-3xl font-bold text-slate-900">{occupiedProperties}</p>
				<p class="text-xs text-green-600 mt-1">
					{occupancyRate.toFixed(1)}% occupancy rate
				</p>
			</div>
			<div class="bg-green-100 rounded-full p-3">
				<svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			</div>
		</div>
	</div>

	<!-- Vacant Properties -->
	<div class="bg-white rounded-xl shadow-sm p-6 border-l-4 border-amber-500">
		<div class="flex items-center justify-between">
			<div>
				<p class="text-sm font-medium text-slate-600 mb-1">Vacant</p>
				<p class="text-3xl font-bold text-slate-900">{vacantProperties}</p>
				{#if vacantProperties > 0}
					<p class="text-xs text-amber-600 mt-1">Available for rent</p>
				{/if}
			</div>
			<div class="bg-amber-100 rounded-full p-3">
				<svg class="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
					/>
				</svg>
			</div>
		</div>
	</div>

	<!-- Total Revenue -->
	<div class="bg-white rounded-xl shadow-sm p-6 border-l-4 border-purple-500">
		<div class="flex items-center justify-between">
			<div>
				<p class="text-sm font-medium text-slate-600 mb-1">Monthly Revenue</p>
				<p class="text-3xl font-bold text-slate-900">${totalRevenue.toLocaleString()}</p>
				<p class="text-xs text-purple-600 mt-1">From occupied units</p>
			</div>
			<div class="bg-purple-100 rounded-full p-3">
				<svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			</div>
		</div>
	</div>
</div>
