<template>
    <nav class="breadcrumb">
        <ul>
            <li
                v-for="(crumb, index) in breadcrumbs"
                :key="index"
                :class="{ active: isActive(crumb) }"
            >
                <router-link :to="crumb.to">
                    {{ crumb.label }}
                </router-link>
                <span v-if="index < breadcrumbs.length - 1">/</span>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

/**
 * The method used to get the breadcrumbs
 *
 * @return {Array}
 */
const breadcrumbs = computed(() => {
    const matchedRoutes = route.matched;

    return matchedRoutes.map((routeItem) => ({
        label: routeItem.meta.breadcrumb || routeItem.name,
        to: getRoutePath(route, routeItem)
    }));
});

/**
 * The method is checking if the route not found
 *
 * @param {Object} crumb
 * @return {boolean}
 */
function isActive(crumb) {
    // if current route is not matched with any route
    if (crumb.to === '/:pathMatch(.*)*' && route.matched.some(r => r.name === 'not-found')) {
        return true;
    }

    return route.path === crumb.to;
}

/**
 * return path for breadcrumb
 *
 * @param {RouteLocationNormalizedLoaded} route
 * @param {RouteRecordNormalized} routeItem
 *
 * @return {string}
 */
function getRoutePath(route, routeItem) {
    const matchedSegments = route.matched.slice(
        0,
        route.matched.indexOf(routeItem) + 1
    );

    return '/' + matchedSegments
        .map((segment) => segment.path.replace(/^\/+/, ''))
        .filter(Boolean)
        .join('/');
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_variables.scss';

.breadcrumb {
    ul {
        display: flex;
        list-style: none;
        padding: 0;

        li {

            a {
                color: $text-color-black;
                text-decoration: none;
                font-weight: 400;
                font-size: 14px;
                opacity: 0.5;
                &:hover {
                    text-decoration: underline;
                }
            }

            &.active a {
                font-weight: bold;
                color: $text-color-black;
                opacity: 1;
            }
            span {
                margin: 0 5px;
            }
        }
    }
}
</style>
