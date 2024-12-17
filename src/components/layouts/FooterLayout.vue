<template>
    <footer class="main-footer">
        <div class="footer-content">
            <div class="footer-section">
                <h3 class="footer-logo">
                    Exclusive
                </h3>
                <h4 class="footer-subtitle">
                    Subscribe
                </h4>
                <p class="footer-text">
                    Get 10% off your first order
                </p>
                <form class="footer-form">
                    <input
                        id="footer-email"
                        type="email"
                        placeholder="Enter your email"
                        class="footer-input"
                    >
                    <button
                        type="submit"
                        class="footer-submit"
                        aria-label="Submit email"
                    >
                        <IconSend />
                    </button>
                </form>
            </div>
            <div class="footer-section">
                <h4 class="footer-title">
                    Support
                </h4>
                <address class="footer-address">
                    3F, Ricco Building, 363 Nguyen Huu Tho, Khue Trung, Cam Le
                    District, Da Nang
                </address>
                <a
                    href="#"
                    class="footer-link"
                >dn.contact@kiaisoft.com</a>
                <a
                    href="#"
                    class="footer-link"
                >(+84) 982-851-486</a>
            </div>
            <div class="footer-section">
                <h4 class="footer-title">
                    Account
                </h4>
                <nav class="footer-nav">
                    <ul>
                        <li>
                            <a
                                href="#"
                                class="footer-link"
                            >My Account</a>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="footer-link"
                            >Login / Register</a>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="footer-link"
                            >Cart</a>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="footer-link"
                            >Wishlist</a>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="footer-link"
                            >Shop</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="footer-section">
                <h4 class="footer-title">
                    Quick Link
                </h4>
                <nav class="footer-nav">
                    <ul>
                        <li>
                            <a
                                href="#"
                                class="footer-link"
                            >Privacy Policy</a>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="footer-link"
                            >Terms Of Use</a>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="footer-link"
                            >FAQ</a>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="footer-link"
                            >Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="footer-section">
                <h4 class="footer-title">
                    Download App
                </h4>
                <p class="app-promo">
                    Save $3 with App New User Only
                </p>
                <div class="app-download">
                    <img
                        :src="images.qr_code"
                        alt="QR Code for app download"
                        class="qr-code"
                    >
                    <div class="app-stores">
                        <img
                            :src="images.app_store"
                            alt="Download on the App Store"
                            class="app-store-badge"
                        >
                        <img
                            :src="images.google_play"
                            alt="Get it on Google Play"
                            class="play-store-badge"
                        >
                    </div>
                </div>
                <div class="social-links">
                    <a
                        href="#"
                        aria-label="Facebook"
                    ><IconFacebook /></a>
                    <a
                        href="#"
                        aria-label="Twitter"
                    >
                        <IconTwitter />
                    </a>
                    <a
                        href="#"
                        aria-label="Instagram"
                    >
                        <IconInstagram />
                    </a>
                    <a
                        href="#"
                        aria-label="LinkedIn"
                    ><IconLinkedin />
                    </a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p class="copyright">
                COPYRIGHT © 2019 KIAISOFT CO., LTD. ALL RIGHTS RESERVED.
            </p>
        </div>
    </footer>
</template>

<script setup>
import images from '@/assets/images';
import IconFacebook from '@/components/icons/IconFacebook.vue';
import IconInstagram from '@/components/icons/IconInstagram.vue';
import IconLinkedin from '@/components/icons/IconLinkedin.vue';
import IconTwitter from '@/components/icons/IconTwitter.vue';
import IconSend from '@/components/icons/IconSend.vue';
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
.main-footer {
    background: var(--Button, rgba(255, 69, 0, 0.78));
    color: #fafafa;
    padding: 10px 50px;
    .footer-content {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 20px;
        .footer-section {
            flex: 1;
            min-width: 200px;
            .footer-logo {
                font: 700 24px/1 Inter, sans-serif;
                letter-spacing: 0.72px;
                margin-bottom: 24px;
            }

            .footer-subtitle {
                font: 500 20px/1.4 Poppins, sans-serif;
                margin-bottom: 24px;
            }

            .footer-text {
                font: 400 16px Poppins, sans-serif;
                margin-bottom: 16px;
            }

            .footer-form {
                display: flex;
                border: 1.5px solid #fafafa;
                border-radius: 4px;
                position: relative;
                .footer-input {
                    flex-grow: 1;
                    background: transparent;
                    border: none;
                    outline: none;
                    padding: 12px 16px;
                    color: #fafafa;
                    font: 400 16px Poppins, sans-serif;
                }

                .footer-submit {
                    position: absolute;
                    right: 5px;
                    top: 50%;
                    transform: translateY(-50%);
                    background: transparent;
                    border: none;
                    padding: 12px;
                    cursor: pointer;
                }
            }
            .footer-title {
                font: 500 20px/1.4 Poppins, sans-serif;
                margin-bottom: 24px;
            }
            .footer-address,
            .footer-link {
                display: block;
                font: 400 16px Poppins, sans-serif;
                margin-bottom: 16px;
                color: #fafafa;
                text-decoration: none;
            }
            .footer-nav ul {
                list-style: none;
                padding: 0;
            }
            .app-promo {
                font: 500 12px Poppins, sans-serif;
                margin-bottom: 8px;
            }

            .app-download {
                display: flex;
                gap: 8px;
                margin-bottom: 24px;
                .qr-code {
                    width: 80px;
                    height: 80px;
                }

                .app-stores {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                    .app-store-badge,
                    .play-store-badge {
                        width: 110px;
                        height: 40px;
                    }
                }
            }
            .social-links {
                display: flex;
                gap: 24px;
                .social-icon {
                    width: 24px;
                    height: 24px;
                }
            }
        }
    }
    .footer-bottom {
        margin-top: 20px;
        padding-top: 16px;
        .copyright {
            display: flex;
            align-items: center;
            justify-content: center;
            font: 400 16px Poppins, sans-serif;
            .copyright-icon {
                width: 20px;
                height: 20px;
                margin-right: 6px;
            }
        }
    }
}

@media (max-width: 767px) {
    .main-footer {
        padding: 40px 20px 24px;
        margin-top: 60px;
    }

    .footer-content {
        flex-direction: column;
        gap: 40px;
    }

    .footer-section {
        width: 100%;
    }
}
</style>
