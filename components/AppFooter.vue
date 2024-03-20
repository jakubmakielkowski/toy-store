<template>
  <footer class="p-4 bg-white shadow-[0_0_1px_0_rgba(0,0,0,0.3)]">
    <div class="max-w-[1000px] m-auto flex flex-col sm:flex-row gap-8 pb-6">
      <p class="text-xl font-bold">Toy store</p>
      <div>
        <p class="text-xl font-bold mb-2">{{ $t('Links') }}</p>
        <ul>
          <li>
            <NuxtLink class="block underline mb-1" to="/refunds">
              {{ $t('Refunds policy') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="block underline mb-1" to="/shipping">
              {{ $t('Shipping policy') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="block underline mb-1" to="/404">
              {{ $t('404 page') }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div>
        <p class="text-xl font-bold mb-2">{{ $t('About') }}</p>
        <ul>
          <li>
            <a class="block underline mb-1" href="https://github.com/jakubmakielkowski">
              {{ $t('Github link') }}
            </a>
          </li>
        </ul>
      </div>
      <div class="sm:ml-auto">
        <p class="mb-1 text-slate-600">© 2023 Shopify</p>
      </div>
    </div>
  </footer>
</template>
