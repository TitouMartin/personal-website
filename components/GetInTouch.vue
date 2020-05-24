<template>
    <div class="get-in-touch">
        <div class="button bold white">
            Get in touch

            <div class="apps">
                <div class="app"><font-awesome-icon :icon="['far', 'envelope']" class="icon" /></div>
                <div class="app"><font-awesome-icon :icon="['fab', 'linkedin-in']" class="icon" /></div>
                <div class="app"><font-awesome-icon :icon="['far', 'file']" class="icon" /></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">

    .more {
        width: fit-content;
        margin: 0 auto base-unit(10) auto;

        .get-in-touch {
        margin: auto;
        }

        .know-more {
        color: $title-blue;
        margin-bottom: base-unit(4);
        }
    }

    .get-in-touch {

        width: fit-content;

        .button {
            padding: $base-unit base-unit(3);
            width: fit-content;
            position: relative;

            &:before {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                z-index: -1;
                height: 100%;
                width: 100%;
                margin-left: 50%;
                transform: translateX(-50%);
                background: $button-background;
                border-radius: 5px;
                @include get-in-touch-animation-out;
            }

            .apps {
                position: absolute;
                height: 100%;
                width: 80%;
                top: 70%;
                left: 50%;
                transform: translate(-50%, -50%);
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                opacity: 0;
                @include get-in-touch-apps-out;

                .app {
                    height: base-unit(4);
                    width: base-unit(4);
                    position: relative;

                    &:before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                        background: $button-background;
                        z-index: -1;
                        @include transition;
                    }

                    .icon {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        @include transition;
                    }

                    &:hover {
                        cursor: pointer;

                        &:before {
                            transform: rotate(180deg);
                        }

                        .icon {
                            font-size: 18px;
                        }
                    }
                }
            }
        }
         &:hover {

            .button::before {
                @include get-in-touch-animation;
            }

            .apps {
                @include get-in-touch-apps-animation;
            }
        }
    }

</style>