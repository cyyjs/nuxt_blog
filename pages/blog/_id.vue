<template>
    <div class="page">
        <div class="page-head">
            <h1>{{blog.title}}</h1>
            <div class="page-head-footer">
                <span class="tags" v-for="tag in blog.tags" :key="tag">{{tag}}</span>
                <span class="time">{{$util.dateFormat(blog.updated)}}</span>
            </div>
        </div>

        <div class="content post-content" >
            <blockquote v-if="blog.source">
                <p>
                    本文首发于个人博客 <a href="http://alibt.top" target="_blank">Cyy’s Blog </a>
                    <br>
                    转载请注明出处 <a :href="'http://alibt.top/blog/'+blog._id" target="_blank">http://alibt.top/blog/{{blog._id}}</a>
                </p>
            </blockquote>
            <div v-html="content"></div>
            <div class="wxcode" v-if="blog.source">
                <img src="~assets/img/qrcode.jpg" alt="">
                <p>
                    更多精彩，请关注我的公众号！
                </p>
            </div>
        </div>
        <back-top></back-top>
    </div>
</template>
<script>
import BackTop from '~/components/BackTop'
import axios from '~/plugins/axios'
import markdown from '~/plugins/md'
export default {
    components: {
        BackTop
    },
    async asyncData({ route, error }) {
        let { data: { data } } = await axios.get(
            '/blog/post/' + route.params.id
        )
        if (!data._id) {
            error({ statusCode: 404 })
        }
        return {
            blog: data
        }
    },
    computed: {
        content() {
            return markdown.render(this.blog.content)
        }
    },
    head() {
        return {
            title: this.blog.title,
            meta: [
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content: 'cyy,博客,前端,' + this.blog.tags.join(',')
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: this.blog.description
                }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
.wxcode {
    text-align: center;
}
</style>


