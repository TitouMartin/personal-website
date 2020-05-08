<template>
    <div>
        <div class="project">
            <div class="project-header">
                <img src="~/assets/pictures/macbook_ged.png" alt="illustration Sofya" class="header-image">
            </div>
        </div>
        <div class="text-container">
            <h1 class="app-title">Sofya</h1>
            <h2>In a nutshell</h2>
            <p>Sofya is a  software suite in SaaS mode, dedicated to real estate and construction work. 
                It regroups key tools allowing real estate and construction experts to relentlessly work 
                together, from stocking documents to graphical data visualisation. It allows each project member 
                to be self sufficient while being informed of the whole project evolution in real time.
            </p>
        </div>
    </div>
</template>


<style lang="scss">
    .project-header {
        width: 100vw;
        height: 40vh;
        background-color: #B4E8DA;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-bottom: base-unit(20);

        .header-image {
            height: 60vh;
            margin-top: base-unit(2);
        }
    }

    .text-container {
        padding: 60vh base-unit(15) 0 base-unit(15);
    }
</style>

<script>
    import Vue from 'vue'
    import GetInTouch from '~/components/GetInTouch.vue'
    import * as project from '~/assets/files/projectCards'

    export default Vue.extend({
        components: {
            GetInTouch
        },
    })
</script>