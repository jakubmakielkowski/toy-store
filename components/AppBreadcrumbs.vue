<template>
    <div class="mb-6 flex flex-col sm:flex-row text-slate-600">
        <div v-for="(breadcrumb, index) in breadcrumbs">
            <NuxtLink v-if="path !== '/'" :to="breadcrumb.path" class="hover:underline" data-testid="breadcrumb-link">
                {{ $t(breadcrumb.name) }}
            </NuxtLink>
            <span v-if="index < breadcrumbs.length - 1" class="mx-2">/</span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { capitalize } from "lodash-es";
import type { Breadcrumb } from '~/types/api';

const route = useRoute();

const path = computed(() => route.path);
const routeElements = computed(() => path.value.split("/").filter(Boolean) || []);
const reduced = computed(() => routeElements.value.length && routeElements.value.reduce((accumulator, current) => `${accumulator}/${current}`).split("/"));

const breadcrumbs = computed<Array<Breadcrumb>>(() => {
    const partialBreadcrumbs = routeElements.value.map((element, index) => {
        const path = `/${reduced.value.slice(0, index + 1).join("/")}`;
        const breadcrumb = {
            path: path,
            name: capitalize(element)
        }
        return breadcrumb;
    })

    const homeBreadcrumb = {
        path: "/",
        name: "Home page"
    }
    return [homeBreadcrumb, ...partialBreadcrumbs];
});
</script>