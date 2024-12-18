<template>
    <div class="about-container">
        <BreadcrumbComponent class="bread-crumb" />
        <section class="about-our_story">
            <div class="about-text">
                <h1>Our Story</h1>
                <p>
                    Kiai-Libra is an internal library management software
                    developed by KIAISOFT. Launched in 2024, Kiai-Libra not only
                    provides an efficient library management solution but also
                    demonstrates our commitment to delivering services that meet
                    both Vietnamese and Japanese standards, combined with
                    dedication and meticulousness.
                </p>
                <p>
                    With the motto "Striving to meet user needs and enhance
                    their experience", Kiai-Libra optimizes processes for
                    searching, storing, and managing library resources,
                    improving work efficiency and creating a more convenient
                    environment for learning and research.
                </p>
            </div>
            <div class="about-image">
                <img
                    :src="images.side_image_about"
                    alt=""
                >
            </div>
        </section>
        <div class="about-general">
            <div class="card-group">
                <StatsOverviewComponent
                    v-for="cardGeneral in cardGenerals"
                    :key="cardGeneral.value"
                    :value="cardGeneral.value"
                    :content="cardGeneral.content"
                    :icon="cardGeneral.icon"
                />
            </div>
        </div>
        <div class="about-service">
            <div class="card-group">
                <StatsOverviewComponent
                    v-for="fullService in fullServices"
                    :key="fullService.value"
                    :value="fullService.value"
                    :content="fullService.content"
                    :icon="fullService.icon"
                    :full-service="true"
                    :has-border="false"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import images from '@/assets/images';
import BreadcrumbComponent from '@/components/BreadcrumbComponent.vue';
import IconCustomerService from '@/components/icons/IconCustomerService.vue';
import IconDelivery from '@/components/icons/IconDelivery.vue';
import IconMoneyBag from '@/components/icons/IconMoneyBag.vue';
import IconSale from '@/components/icons/IconSale.vue';
import IconSecure from '@/components/icons/IconSecure.vue';
import IconShop from '@/components/icons/IconShop.vue';
import IconShoppingBag from '@/components/icons/IconShoppingBag.vue';
import StatsOverviewComponent from '@/components/StatsOverviewComponent.vue';
import { markRaw } from 'vue';
import { reactive } from 'vue';

const cardGenerals = reactive([
    {
        icon: markRaw(IconMoneyBag),
        value: '12.5k',
        content: 'User registration data'
    },
    {
        icon: markRaw(IconSale),
        value: '13.5k',
        content: 'Order data placed'
    },
    {
        icon: markRaw(IconShop),
        value: '14.5k',
        content: 'Quantity data books in library'
    },
    {
        icon: markRaw(IconShoppingBag),
        value: '15.5k',
        content: 'Quantity data of favorite books'
    }
]);

const fullServices = reactive([
    {
        icon: markRaw(IconDelivery),
        value: 'BOOKS',
        content: 'Wide range of books available'
    },
    {
        icon: markRaw(IconCustomerService),
        value: 'HOURS',
        content: 'Mon-Sat, 9 AM - 6 PM'
    },
    {
        icon: markRaw(IconSecure),
        value: 'JOIN US',
        content: 'Exclusive discounts and events'
    }
]);
</script>

<style lang="scss" scoped>
.about-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    .bread-crumb {
        width: 100%;
        max-width: 1200px;
        margin: 20px 0;
    }
    .about-our_story {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        gap: 40px;
        .about-text {
            display: flex;
            flex-direction: column;
        }
        .about-image {
            img {
                width: 100%;
                object-fit: cover;
            }
        }
    }
    .about-general {
        margin: 40px 0;
        width: 100%;
        .card-group {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            gap: 20px;
        }
    }
    .about-service {
        margin: 60px 0;
        width: 100%;
        .card-group {
            width: 100%;
            max-width: 943px;
            margin: 0 auto;
            display: grid;
            gap: 20px;
        }
    }
}
@media (min-width: 1201px) {
    .about-text {
        width: 41%;
        max-width: 525px;
        margin-left: calc((100vw - 1220px) / 2);
    }
    .about-image {
        width: 59%;
        img {
            width: 100%;
            object-fit: cover;
        }
    }
    .card-group {
        grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
    }
}
/* Extra large devices (large laptops, desktops) */
@media (max-width: 1200px) {
    .about-container {
        padding: 0 20px;
    }
    .about-our_story {
        gap: 20px;
    }
    .card-group {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Large devices (tablets in landscape, small laptops) */
@media (max-width: 992px) {
    .about-our_story {
        flex-direction: column;
        gap: 20px;
    }

    .about-text {
        width: 100%;
        margin-left: 0;
        max-width: 100%;
        text-align: center;
    }

    .about-image {
        width: 100%;
        img {
            width: 100%;
            object-fit: cover;
        }
    }

    .about-general .card-group {
        grid-template-columns: repeat(2, 1fr);
    }

    .about-service .card-group {
        grid-template-columns: repeat(2, 1fr);
    }

    .about-service .card-group > *:last-child {
        grid-column: span 2;
    }
}

/* Small devices (phones) */
@media (max-width: 768px) {
    .about-text {
        width: 100%;
        max-width: 100%;
    }

    .about-image {
        width: 100%;
        img {
            width: 100%;
            object-fit: cover;
        }
    }

    .about-general .card-group {
        grid-template-columns: 1fr;
    }

    .about-service .card-group {
        grid-template-columns: 1fr;
    }
}
</style>
