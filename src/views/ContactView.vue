<template>
    <div class="contact-container">
        <BreadcrumbComponent class="bread-crumb" />
        <section class="contact-content">
            <div class="contact-content__left">
                <div class="content-left__header">
                    <div class="header-title">
                        <span class="icon-box">
                            <IconPhone />
                        </span>
                        <h2>Call to Us</h2>
                    </div>
                    <p>We are available 24/7, 7 days a week.</p>
                    <p>Phone: +8801611112222</p>
                </div>
                <div class="content-left__footer">
                    <div class="header-title">
                        <span class="icon-box">
                            <IconBoxMessage />
                        </span>
                        <h2>Write To US</h2>
                    </div>
                    <p>
                        Fill out our form and we will contact you within 24
                        hours.
                    </p>
                    <p>dn.contact@kiaisoft.com</p>
                    <p>contact@kiaisoft.com</p>
                </div>
            </div>
            <div class="contact-content__right">
                <el-form
                    ref="formRef"
                    :model="form"
                    :rules="rules"
                    label-position="top"
                >
                    <div class="group-form__input">
                        <el-form-item prop="email">
                            <el-input
                                v-model="form.email"
                                placeholder="Your Name"
                                clearable
                                class="input-field"
                                @input="handleInput"
                            />
                        </el-form-item>
                        <el-form-item prop="email">
                            <el-input
                                v-model="form.email"
                                placeholder="Your Email"
                                clearable
                                class="input-field"
                                @input="handleInput"
                            />
                        </el-form-item>
                        <el-form-item prop="email">
                            <el-input
                                v-model="form.email"
                                placeholder="Your Phone"
                                clearable
                                class="input-field"
                                @input="handleInput"
                            />
                        </el-form-item>
                    </div>
                    <div class="input-area">
                        <el-form-item prop="email">
                            <el-input
                                v-model="form.email"
                                type="textarea"
                                placeholder="Your Message"
                                class="input-field"
                                @input="handleInput"
                            />
                        </el-form-item>
                    </div>
                    <div class="group-form__button">
                        <el-form-item>
                            <el-button
                                type="primary"
                                :loading="loading"
                                class="btn-submit"
                                @click="onSubmit"
                            >
                                Send Massage
                            </el-button>
                        </el-form-item>
                    </div>
                </el-form>
            </div>
        </section>
    </div>
</template>

<script setup>
import BreadcrumbComponent from "@/components/BreadcrumbComponent.vue";
import IconBoxMessage from "@/components/icons/IconBoxMessage.vue";
import IconPhone from "@/components/icons/IconPhone.vue";
import { reactive, ref } from "vue";

const loading = ref(false);
const formRef = ref(null);

// Model dữ liệu form
const form = reactive({
    email: "",
});

// Quy tắc validate của Element Plus
const rules = {
    email: [],
};

// Hàm submit form
const onSubmit = () => {
    formRef.value.validate((valid) => {
        if (valid) {
            loading.value = true; // Loading button
            console.log("Form is valid", form);
        }
    });
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
.contact-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;

    .bread-crumb {
        width: 100%;
        max-width: 1200px;
        margin: 20px 0;
    }
    .contact-content {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        gap: 20px;
        .contact-content__left {
            display: flex;
            flex-direction: column;
            box-shadow: 0px 1px 13px 0px #0000000d;
            .content-left__header {
                position: relative;
            }

            .content-left__header::after {
                content: "";
                position: absolute;
                bottom: 0;
                width: 80%;
                border-bottom: 1px solid $border-color;
            }
            .content-left__header,
            .content-left__footer {
                padding:20px;
                .header-title {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    .icon-box {
                        width: 40px;
                        height: 40px;
                        border-radius: 100%;
                        background-color: $primary-color;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    h2 {
                        font-size: 16px;
                        font-weight: 500;
                        line-height: 24px;
                        text-align: left;
                    }
                }
            }
            p {
                font-size: 14px;
                font-weight: 400;
                line-height: 21px;
                text-align: left;
            }
        }
        .contact-content__right {
            padding:0 40px;
            box-shadow: 0px 1px 13px 0px #0000000d;
            display: flex;
            flex-direction: column;
            form {
                width: 100%;
                .group-form__input {
                    display: grid;
                    .input-field {
                        width: 100%;
                        padding: 0 10px;
                        height: 40px;
                        border-radius: 5px;
                        border: 1px solid #e0e0e0;
                        background-color: $text-color-grown;
                        margin: 10px 0;
                    }
                }
                .input-area {
                    width: 100%;
                    height: 207px;
                    padding: 10px 10px;
                    box-sizing: border-box;
                    overflow: hidden;
                    border-radius: 5px;
                    border: 1px solid #e0e0e0;
                    background-color: $text-color-grown;
                    .input-field {
                        width: 100%;
                        height: 100%;
                        padding: 0 10px;
                        border: none;
                        background-color: $text-color-grown;
                    }
                }
                .group-form__button {
                    width: 100%;
                    display: flex;
                    justify-content: flex-end;
                    margin-top: 30px;
                }
                .btn-submit {
                    width: 215px;
                    height: 40px;
                    border-radius: 5px;
                    background-color: $primary-color;
                    border: none;
                    align-self: flex-start;
                    color: #fff;
                    &:hover {
                        background-color: darken($primary-color, 10%);
                    }
                }
            }
        }
    }
}

@media (min-width: 1201px) {
    .contact-content {
        grid-template-columns: 3fr 7fr;
    }
    .group-form__input {
        grid-template-columns: 1fr 1fr 1fr;
        gap: 20px;
    }
}

/* Extra large devices (large laptops, desktops) */
@media (max-width: 1200px) {
    .contact-container {
        padding: 0 20px;
    }
    .contact-content {
        grid-template-columns: 3fr 7fr;
    }
    .group-form__input {
        grid-template-columns: 1fr 1fr 1fr;
    }
}

/* Large devices (tablets in landscape, small laptops) */
@media (max-width: 992px) {
    .contact-content {
        grid-template-columns: 1fr;
    }
    .group-form__input {
        grid-template-columns: 1fr;
    }
    .input-area {
        margin-top: 20px;
    }
}

/* Small devices (phones) */
@media (max-width: 768px) {
    .contact-content {
        grid-template-columns: 1fr;
    }
    .group-form__input {
        grid-template-columns: 1fr;
    }
}
</style>
