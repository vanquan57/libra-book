<template>
    <div>
        <section class="forget-password">
            <main>
                <div class="logo">
                    <img
                        :src="images.logo_kiaisoft"
                        alt="logo"
                    >
                </div>
                <h1>Xác thực Email</h1>
                <!-- Form sử dụng Element Plus với validate -->
                <el-form
                    ref="formRef"
                    :model="form"
                    :rules="rules"
                    label-position="top"
                >
                    <el-form-item prop="email">
                        <el-input
                            v-model="form.email"
                            placeholder="Enter your email"
                            clearable
                            class="input-field"
                            @input="handleInput"
                        />
                    </el-form-item>
                    <el-form-item>
                        <el-button
                            type="primary"
                            :loading="loading"
                            class="btn-submit"
                            @click="onSubmit"
                        >
                            Gửi yêu cầu
                        </el-button>
                    </el-form-item>
                </el-form>
            </main>
        </section>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import images from '@/assets/images';

const loading = ref(false);
const formRef = ref(null);

// Model dữ liệu form
const form = reactive({
    email: ''
});

// Quy tắc validate của Element Plus
const rules = {
    email: [
        { required: true, message: 'Please enter email', trigger: 'blur' },
        {
            type: 'email',
            message: 'Email is not in correct format',
            trigger: ['blur', 'change']
        },
        {
            validator: (_, value, callback) => {
                if (!value.includes('kiaisoft')) {
                    callback(new Error('You are not a Kiaisoft employee?'));
                } else {
                    callback();
                }
            },
            trigger: 'blur'
        }
    ]
};

// Hàm submit form
const onSubmit = () => {
    formRef.value.validate((valid) => {
        if (valid) {
            loading.value = true; // Loading button
            console.log('Form is valid', form);
        }
    });
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
.forget-password {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 150px;
    margin-bottom: 30px;
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 500px;
        margin: auto;
        padding: 30px 20px;
        box-shadow: 0px 0px 10px 0px #0000001a;
        border-radius: 10px;
        background-color: #fff;

        .logo {
            width: 100px;
            height: 100px;
            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }

        h1 {
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 20px;
        }
        form {
            width: 70%;
            .input-field {
                width: 100%;
                padding: 0 10px;
                height: 40px;
                border-radius: 5px;
                border: 1px solid #e0e0e0;
                background-color: $text-color-grown;
                margin: 10px 0;
            }
            .btn-submit {
                width: 50%;
                height: 40px;
                border-radius: 5px;
                margin: 20px auto;
                background-color: $primary-color;
                border: none;
                color: #fff;
                &:hover {
                    background-color: darken($primary-color, 10%);
                }
            }
        }
    }
}
</style>
