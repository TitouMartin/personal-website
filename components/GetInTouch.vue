<template>
    <div class="get-in-touch">
        <div class="button bold white cta-lg">
            Get in touch

            <div class="apps">
                <a href="mailto:titouan.martin@free.fr" class="app">
                    <font-awesome-icon :icon="['far', 'envelope']" class="icon" />
                </a>

                <a href="https://www.linkedin.com/in/titoumartin/" target="_blanf" class="app">
                    <font-awesome-icon :icon="['fab', 'linkedin-in']" class="icon" />
                </a>

                <a href="CV_Titouan_MARTIN.pdf" target="_blank" class="app">
                    <font-awesome-icon :icon="['far', 'file']" class="icon" />
                </a>
            </div>
        </div>


        <div class="cta-xs bold">
            <span class="title">
                Get in touch
            </span>

            <div class="apps">
                <a href="mailto:titouan.martin@free.fr" class="app">
                    <font-awesome-icon :icon="['far', 'envelope']" class="icon" />
                </a>

                <a href="https://www.linkedin.com/in/titoumartin/" target="_blanf" class="app">
                    <font-awesome-icon :icon="['fab', 'linkedin-in']" class="icon" />
                </a>

                <a href="~/assets/files/CV_Titouan_MARTIN.pdf" target="_blank" class="app">
                    <font-awesome-icon :icon="['far', 'file']" class="icon" />
                </a>
            </div>
        </div>
    </div>
</template>

<style lang="scss">

.more {
    width: fit-content;
    margin: 0 auto base-unit(20) auto;

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
                color: $white;

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

.get-in-touch {

    .cta-xs {
        color: $title-blue;

        .apps {
            height: 100%;
            margin-top: base-unit(2);
            display: flex;
            flex-direction: row;

            .app {
                height: base-unit(4);
                width: base-unit(4);
                position: relative;
                color: $white;

                &:not(:last-child) {
                    margin-right: base-unit(2);
                }

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
            }
        }
    }
}

@media screen and ($media-gt-xs) {
    .cta-xs {
        display: none;
    }

    .more .get-in-touch {
        margin: auto;
    }
}

@media screen and ($media-lt-sm) {
    .cta-lg {
        display: none;
    }

    .more h2 {
        margin-bottom: base-unit(3);
    }
    .get-in-touch {
        margin: 0 0;
        padding-left: base-unit(2);
        position: relative;

        &:before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: base-unit(0.5);
            background: $button-background;
            border-radius: 10px;
        }
    }
}

</style>