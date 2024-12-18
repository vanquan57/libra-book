<template>
    <main class="login-container">
        <div class="side-image">
            <img
                :src="images.side_image"
                alt=""
            >
        </div>
        <div class="login-form">
            <el-form
                ref="loginForm"
                :model="form"
                :rules="rules"
                class="form-control"
                @submit.prevent="handleSubmit"
            >
                <div class="form-header">
                    <h2>Log in to Kiai-Libra</h2>
                    <p>Enter your details below</p>
                </div>
                <el-form-item
                    prop="email"
                    class="form-group"
                >
                    <el-input
                        v-model="form.email"
                        class="form-input no-border"
                        type="email"
                        placeholder="Email"
                    />
                </el-form-item>

                <el-form-item
                    prop="password"
                    class="form-group"
                >
                    <el-input
                        v-model="form.password"
                        class="form-input no-border"
                        type="password"
                        placeholder="Password"
                        show-password
                    />
                </el-form-item>
                <div class="form-group-actions">
                    <div class="login-google">
                        <GoogleLogin
                            class="btn-login_google"
                            :callback="callback"
                        />
                    </div>
                    <div class="login-actions">
                        <button type="submit">
                            Log in
                        </button>
                        <router-link to="/auth/verify-email">
                            Forget password ?
                        </router-link>
                    </div>
                </div>
            </el-form>
        </div>
    </main>
</template>

<script setup>
import images from '@/assets/images';
import { reactive, ref } from 'vue';
const form = reactive({
    email: '',
    password: ''
});
const loginForm = ref(null);

const rules = {
    email: [
        {
            required: true,
            message: 'Please input your email',
            trigger: 'blur'
        },
        {
            type: 'email',
            message: 'Please enter a valid email address',
            trigger: 'blur'
        },
        {
            validator: (rule, value, callback) => {
                if (value && !value.includes('kiaisoft')) {
                    callback(new Error('You are not employee of KiaiSoft ?'));
                } else {
                    callback();
                }
            },
            trigger: 'blur'
        }
    ],
    password: [
        {
            required: true,
            message: 'Please input your password',
            trigger: 'blur'
        },
        {
            pattern: /^(?=.*\d)(?=.*[A-Z]).{8,}$/,
            message: 'Password must be at least 8 characters and contain at least one number and one uppercase letter',
            trigger: 'blur'
        }
    ]
};
/**
 * Google login callback
 *
 * @param {Object} response - Google response
 *
 * @returns {void}
 */
const callback = (response) => {
    const credential = response.credential;
    console.log(credential);
};

const handleSubmit = async () => {
    await loginForm.value.validate((valid) => {
        if (valid) {
            console.log('Form submitted:', form);
        } else {
            console.log('Error: Please check your input');
            return false;
        }
    });
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
// get element parent 

.login-container {
    margin: 170px 0 60px 0;
    display: flex;

    .side-image {
        width: 56%;
        img {
            width: 100%;
            max-width: 805px;
            max-height: 781px;
            object-fit: cover;
        }
    }
    .login-form {
        flex: 1;
        display: flex;
        justify-content: center;

        .form-control {
            width: 371px;
            display: flex;
            justify-content: center;
            flex-direction: column;
            .form-header {
                color: $text-color-black;
                h2 {
                    font-size: 36px;
                    font-weight: 500;
                    line-height: 30px;
                }
                p {
                    font-size: 16px;
                }
            }
            .form-group {
                border: none;
                margin-top: 20px;
                margin-bottom: 0;
                .form-input {
                    width: 100%;
                    height: 40px;
                    border-bottom: 1.5px solid #e0e0e0;
                    margin-bottom: 10px;
                }
            }
            .form-group-actions {
                display: flex;
                flex-direction: column;
                margin-top: 40px;
                width: 100%;
                .login-google {
                    width: 100%;
                    .btn-login_google {
                        width: 100%;
                        height: 40px;
                    }
                }
                .login-actions {
                    display: flex;
                    gap: 10px;
                    height: 56px;
                    align-items: center;
                    margin-top: 20px;
                    justify-content: space-between;
                    button {
                        width: 143px;
                        height: 100%;
                        background-color: $color-red;
                        color: $text-color-white;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                        font-size: 16px;
                        font-weight: 500;
                        transition: all 0.3s;
                        &:hover {
                            opacity: 0.9;
                        }
                    }
                    a {
                        color: $color-red;
                        font-size: 16px;
                        font-weight: 400;
                        text-decoration: none;
                    }
                }
            }
        }
    }
}
@media (max-width: 768px) {
    .side-image {
        display: none;
    }
}

</style>
