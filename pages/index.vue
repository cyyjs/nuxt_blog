<template>
    <section class="home">
        <img class="head" src="~assets/img/head.jpeg" alt="head">
        <p class="about-btn">
            <nuxt-link to="/about">About Me →</nuxt-link>
        </p>
        <div class="features">
            <div class="feature">
                <h2>Blog</h2>
                <p>在日常中学习和总结的一些经验。</p>
            </div>
            <div class="feature">
                <h2>Favorite</h2>
                <p>一些网络收藏，工具、文章等</p>
            </div>
            <div class="feature">
                <h2>Project</h2>
                <p>在 github 中开源的项目</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    head() {
        return {
            title: 'Home'
        }
    }
}
</script>

<style lang="scss" scoped>
.head {
    max-height: 180px;
    border-radius: 50%;
    border: 5px solid #fff;
    box-shadow: 0 14px 25px rgba(0, 0, 0, 0.16);
    transition: 0.2s ease-in-out;
    &:hover {
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
    }
}
.home {
    margin-top: 15vh;
    text-align: center;
    background-color: #fff;
    padding: 20px;
}
.about-btn {
    margin-top: 20px;
    & > a {
        display: inline-block;
        font-size: 1.2rem;
        color: #fff;
        background-color: #3eaf7c;
        padding: 0.8rem 1.6rem;
        border-radius: 4px;
        transition: background-color 0.1s ease;
        box-sizing: border-box;
        border-bottom: 1px solid #389d70;
    }
}
.features {
    border-top: 1px solid #eaecef;
    padding: 1.2rem 0;
    margin-top: 2.5rem;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: strech;
    justify-content: space-between;
    text-align: left;
    & > .feature {
        padding-left: 20px;
        flex-grow: 1;
        flex-basis: 30%;
        max-width: 30%;
        & > h2 {
            font-size: 1.4rem;
            font-weight: 500;
            border-bottom: none;
            padding-bottom: 0;
            color: #3a5169;
            line-height: 1.25;
        }
        & > p {
            color: #4e6e8e;
            margin: 20px 0;
        }
    }
}
@media (max-width: 719px) {
    .home {
        margin-top: 0;
        .features {
            flex-direction: column;
            .feature {
                max-width: 100%;
                padding: 0 2.5rem;
            }
        }
    }
}
</style>
