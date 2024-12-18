<template>
    <header>
        <section class="top-header">
            <div class="top-header__container">
                <div class="sale-banner">
                    <p class="sale-banner__text">
                        Summer Reading Promotion: Up to 50% Off All Membership Plans and Free Registration!
                        <span class="promo-link">ShopNow</span>
                    </p>
                </div>
                <div class="language">
                    <select id="choose_language">
                        <option value="en">
                            English
                        </option>
                        <option value="es">
                            Viet Nam
                        </option>
                        <option value="fr">
                            Japanese
                        </option>
                    </select>
                </div>
            </div>
        </section>
        <nav class="nav-bar">
            <div class="logo">
                <router-link to="/">
                    Kiai-Libra
                </router-link>
            </div>
            <div class="menu">
                <ul>
                    <li>
                        <router-link to="#">
                            Home
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/contact">
                            Contact
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/about">
                            About
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/auth/register">
                            Sign Up
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="search">
                <form action="">
                    <div class="search-group">
                        <input
                            type="text"
                            placeholder="Search any book ..."
                        >
                        <button type="submit">
                            <IconSearch />
                        </button>
                    </div>
                </form>
            </div>
        </nav>
    </header>
</template>

<script setup>
import IconSearch from '@/components/icons/IconSearch.vue';
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
header {
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-bottom: 0.5px solid $line-color-orange;
    .top-header {
        display: flex;
        background-color: $primary-color;
        &__container {
            height: 48px;
            width: 1100px;
            margin: 0 auto;
            color: $text-color-white;
            font-size: 14px;
            display: flex;
            align-items: center;
            .sale-banner {
                flex: 1;
                display: flex;
                align-items: center;
                text-align: center;
                gap: 10px;
                .sale-banner__text {
                    width: 100%;
                }
                .promo-link {
                    font-weight: 600;
                }
            }
            .language {
                #choose_language {
                    background-color: transparent;
                    border: none;
                    color: $text-color-white;
                    outline: none;
                    option {
                        color: $text-color-black;
                    }
                }
            }
        }
    }
    .nav-bar {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 5px 5px 5px;
        .logo {
            font-size: 24px;
            font-weight: 600;
            a {
                color: $text-color-black;
                text-decoration: none;
            }
        }
        .menu {
            ul {
                display: flex;
                gap: 48px;
                list-style: none;
                li {
                    a {
                        list-style: none;
                        font-size: 16px;
                        font-weight: 500;
                        color: $text-color-black;
                        text-decoration: none;
                        transition: all 0.3s;
                        &:hover {
                            cursor: pointer;
                            text-decoration: underline;
                            color: $primary-color;
                        }
                    }
                }
            }
        }
        .search {
            form {
                display: flex;
                width: 243px;
                height: 38px;
                gap: 34px;
                .search-group {
                    position: relative;
                    input {
                        height: 100%;
                        width: 100%;
                        border: none;
                        outline: none;
                        width: 100%;
                        background-color: $background-color-input;
                        opacity: 0.5;
                        border-radius: 4px;
                        padding: 0 10px;
                    }
                    button {
                        position: absolute;
                        right: -15px;
                        top: 50%;
                        transform: translateY(-50%);
                        background-color: transparent;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                        svg {
                            width: 24px;
                            height: 24px;
                        }
                    }
                }
            }
        }
    }
}

// Điều chỉnh cho tablet (max-width: 768px)
@media (max-width: 768px) {
    header {
        .top-header {
            &__container {
                width: 100%;
                padding: 0 10px;
            }
        }
        .sale-banner__text{
            font-size: 13px;
            text-align: left;
        }
        .nav-bar {
            flex-wrap: wrap;
            gap: 10px;
            justify-content: center;
            padding: 10px 0;
            .logo {
                width: 100%;
                text-align: center;
            }
            .menu {
                width: 100%;
                display: flex;
                justify-content: center;
                ul {
                    gap: 24px;
                }
            }
            .search {
                width: 80%;
                display: flex;
                justify-content: center;
                form {
                    width: 100%;
                    .search-group {
                        width: 100%;
                        input {
                            width: 100%;
                        }
                    }
                }
            }
        }
    }
}

// Điều chỉnh cho di động (max-width: 576px)
@media (max-width: 576px) {
    .top-header {
        &__container {
            width: 100%;
            padding: 0 10px;
            .sale-banner {
                flex: 1;
                display: flex;
                align-items: center;
                text-align: left;
            }
        }
    }
}
</style>
