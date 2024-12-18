<template>
    <div>
        <HeaderLayout />
        <main>
            <RouterView />
        </main>
        <FooterLayout />
    </div>
</template>

<script setup>
import HeaderLayout from './HeaderLayout.vue';
import FooterLayout from './FooterLayout.vue';
</script>

<style lang="scss" scoped>
@media (min-width: 1201px) {
    main {
        padding-top: 110px;
    }
}

/* Extra large devices (large laptops, desktops) */
@media (max-width: 1200px) {
    main {
        padding-top: 110px;
    }
}

/* Large devices (tablets in landscape, small laptops) */
@media (max-width: 992px) {
    main {
        padding-top: 110px;
    }
}

/* Small devices (phones) */
@media (max-width: 768px) {
    main {
        padding-top: 210px;
    }
}
</style>
