<template>
    <div class="not-found-container">
        <BreadcrumbComponent class="bread-crumb" />
        <div class="not-found-content">
            <h1>404 Not Found</h1>
            <p>Your visited page not found. You may go home page.</p>
            <router-link to="/">Back to Home</router-link>
        </div>
    </div>
</template>

<script setup>
import BreadcrumbComponent from "@/components/BreadcrumbComponent.vue";
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
.not-found-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;

    .bread-crumb {
        width: 100%;
        max-width: 1200px;
        margin: 20px 0;
    }
    .not-found-content {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        gap: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        h1 {
            font-weight: 500;
            line-height: 115px;
            letter-spacing: 0.03em;
            margin: 0;
        }
        p {
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
        }
        a {
            width: 215px;
            height: 56px;
            border-radius: 5px;
            background-color: $primary-color;
            border: none;
            font-size: 16px;
            font-weight: 500;
            color: $text-color-white;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            &:hover {
                background-color: darken($primary-color, 10%);
            }
        }
    }
}
@media (min-width: 1201px) {
    .not-found-content {
        h1 {
            font-size: 110px;
        }
        p {
            font-size: 16px;
        }
    }
}
@media (max-width: 1200px) {
    // style size h1 p
    .not-found-container {
        padding: 0 20px;
    }
    .not-found-content {
        h1 {
            text-align: center;
            font-size: 80px;
        }
        p {
            font-size: 14px;
        }
    }
}
</style>
