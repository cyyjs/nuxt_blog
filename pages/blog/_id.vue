<template>
    <div class="page">
        <div class="page-head">
            <h1>{{blog.title}}</h1>
            <div class="page-head-footer">
                <span class="tags" v-for="tag in blog.tags" :key="tag">{{tag}}</span>
                <span class="time">{{$util.dateFormat(blog.updated)}}</span>
            </div>
        </div>
        <div class="content" v-html="blog.content"></div>
        <back-top></back-top>
    </div>
</template>
<script>
import BackTop from '~/components/BackTop'
import axios from 'axios'
export default {
    components: {
        BackTop
    },
    async asyncData({ env, route, error }) {
        let baseUrl = env.baseUrl
        let { data: { data } } = await axios.get(
            baseUrl + '/blog/post/' + route.params.id
        )
        if (!data._id) {
            error({ statusCode: 404 })
        }
        return {
            blog: data
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

