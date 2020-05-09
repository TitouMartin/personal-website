<template>
    <div class="navbar">
        <div class="navbar-content">
            <nuxt-link to="/">Titouan Martin</nuxt-link>
            <div class="navbar-links">
                <p class="margin-right link">About</p>
                <nuxt-link to="/work" class="link">Work</nuxt-link>
            </div>
        </div>
    </div>
</template>


<style lang="scss">
    .navbar {
        height: base-unit(6);
        width: 100vw;
        padding: 0 base-unit(4);
        position: fixed;
        top: 0;
        font-weight: bold;
        z-index: 1000;

        .navbar-content {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            top: 50%;
            width: calc(100% - #{base-unit(8)}); // 100% - padding
            transform: translateY(-50%);
            position: absolute;

            p {
                 margin-bottom: 0;
            }

            .navbar-links {
                display: flex;
                flex-direction: row;

                .margin-right {
                    margin-right: base-unit(4);
                }
            }
        }

    }
</style>