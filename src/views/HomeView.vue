<template>
    <div class="home-container">
        <section class="sidebar-carousel">
            <div class="category">
                <ul class="category-list">
                    <li
                        v-for="(category, index) in categories"
                        :key="index"
                        class="category-list_item"
                    >
                        <router-link :to="category.slug">
                            {{ category.name }}
                        </router-link>
                    </li>
                </ul>
            </div>
            <CarouselItem />
        </section>
    </div>
</template>

<script setup>
import images from '@/assets/images';
import CarouselItem from '@/components/carousel/CarouselComponent.vue';
import { ref } from 'vue';

const categories = ref([
    {
        name: 'Woman’s Fashion',
        slug: 'woman-fashion'
    },
    {
        name: 'Man’s Fashion',
        slug: 'man-fashion'
    },
    {
        name: 'Kids Fashion',
        slug: 'kids-fashion'
    },
    {
        name: 'Electronics',
        slug: 'electronics'
    },
    {
        name: 'Home & Kitchen',
        slug: 'home-kitchen'
    },
    {
        name: 'Sports & Outdoors',
        slug: 'sports-outdoors'
    },
    {
        name: 'Books',
        slug: 'books'
    },
    {
        name: 'Beauty & Health',
        slug: 'beauty-health'
    },
    {
        name: 'Toys & Games',
        slug: 'toys-games'
    },
    {
        name: 'Automotive',
        slug: 'automotive'
    }
]);
const slides = [
    images.slide1,
    images.slide2,
    images.slide3,
    images.slide4,
    images.slide5
];
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
.home-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 110px auto;
    width: 100%;
    max-width: 1200px;
    .sidebar-carousel {
        width: 100%;
        display: grid;
        grid-template-columns: 3fr 7fr;
        gap: 30px;
        .category {
            border-right: 1px solid $border-color;
            height: 100%;
            max-height: 344px;
            box-sizing: border-box;
            overflow: hidden;
            overflow-y: scroll;
            &::-webkit-scrollbar {
                display: none;
            }
            .category-list {
                padding-left: 0px;
                list-style: none;
                &_item {
                    padding: 10px 0;
                    a {
                        font-size: 16px;
                        font-weight: 400;
                        line-height: 24px;
                        text-align: center;
                        text-decoration: none;
                        color: $text-color-black;
                        transition: all 0.3s ease;
                        &:hover {
                            cursor: pointer;
                            color: $primary-color;
                            padding-left: 10px;
                        }
                    }
                }
            }
        }
    }
}
</style>
