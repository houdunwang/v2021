<script setup></script>

<template>
        <suspense>
                <div>
                        <div class="link">
                                <router-link :to="{ name: 'home' }">home</router-link>
                                <router-link :to="{ name: 'about' }">about</router-link>
                                <router-link :to="{ name: 'article' }">article</router-link>
                        </div>

                        <div class="router-view">
                                <router-view #default="{ Component, route }">
                                        <transition name="fade">
                                                <component :is="Component" />
                                        </transition>
                                </router-view>
                        </div>
                </div>
        </suspense>
</template>

<style lang="scss">
// .fade-enter-from {
//   transform: translateX(-100%);
// }
// .fade-enter-active {
//   transition: all 1s ease;
// }
// .fade-enter-to {
//   transform: translateX(0);
// }

// .fade-leave-from {
//   transform: translateX(0);
// }
// .fade-leave-active {
//   transition: all 1s ease;
// }
// .fade-leave-to {
//   transform: translateX(-100%);
// }
.link {
        a {
                display: inline-block;
                background-color: #16a085;
                color: #fff;
                margin-right: 10px;
                text-align: center;
                padding: 10px;
        }
}
.router-view {
        margin-top: 20px;
}
</style>
