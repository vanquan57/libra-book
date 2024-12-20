<template>
    <div class="card">
        <div
            class="card-body"
            :style="cardBodyStyle"
        >
            <div class="card-header">
                <div class="icon">
                    <component :is="props.icon" />
                </div>
            </div>
            <div class="card-content">
                <h2 :class="{ 'text-small': fullService }">
                    {{ props.value }}
                </h2>
                <p>{{ props.content }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, defineProps } from 'vue';

const props = defineProps({
    value: {
        type: String,
        default: ''
    },
    fullService: {
        type: Boolean,
        default: false
    },
    content: {
        type: String,
        default: ''
    },
    icon: {
        type: Object,
        default: () => ({})
    },
    hasBorder: {
        type: Boolean,
        default: true
    }
});

const cardBodyStyle = computed(() => {
    return {
        border: props.hasBorder ? '1px solid $border-color' : 'none'
    };
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
.card {
    width: 100%;
    .card-body {
        width: 100%;
        margin: 0 auto;
        display: flex;
        padding: 15px 20px;
        box-sizing: border-box;
        overflow: hidden;
        flex-direction: column;
        gap: 24px;
        border-radius: 4px;
        border: 1px solid $border-color;
        transition: all 0.3s ease;
        &:hover {
            background-color: $primary-color;
            .card-header {
                background-color: #ff9973;
                .icon {
                    background-color: $text-color-white;
                }
                .icon::v-deep svg {
                    fill: $text-color-white;
                    path {
                        stroke: $primary-color;
                    }
                }
            }
            .card-content {
                // h2 and p
                h2 {
                    color: $text-color-white;
                }
                p {
                    color: $text-color-white;
                }
            }
        }
        .card-header {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
            width: 80px;
            height: 80px;
            border-radius: 100%;
            padding: 2px;
            background-color: $color-grown-bold;

            .icon {
                background-color: $primary-color;
                width: 40px;
                height: 40px;
                padding: 10px;
                border-radius: 100%;
            }
        }
        .icon::v-deep svg {
            fill: $primary-color;
            path {
                stroke: $text-color-white;
            }
        }
        .card-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            h2 {
                font-size: 32px;
                font-weight: 700;
                margin: 10px 0;
            }
            .text-small {
                font-size: 20px;
            }
            p {
                font-size: 14px;
                color: $text-color-black;
            }
        }
    }
}
</style>
