<template>
    <div class="page">
        <div class="page-head">
            <h1>{{blog.title}}</h1>
            <div class="page-head-footer">
                <span class="tags" v-for="tag in blog.tags" :key="tag">{{tag}}</span>
                <span class="time">{{$util.dateFormat(blog.updated)}}</span>
            </div>
        </div>
        <div class="content post-content" v-html="content"></div>
        <back-top></back-top>
    </div>
</template>
<script>
import BackTop from "~/components/BackTop";
import axios from "~/plugins/axios";
import markdown from "~/plugins/md";
export default {
  components: {
    BackTop
  },
  async asyncData({ route, error }) {
    let { data: { data } } = await axios.get("/blog/post/" + route.params.id);
    if (!data._id) {
      error({ statusCode: 404 });
    }
    return {
      blog: data
    };
  },
  computed: {
    content() {
      return markdown.render(this.blog.content);
    }
  },
  head() {
    return {
      title: this.blog.title,
      meta: [
        {
          hid: "keywords",
          name: "keywords",
          content: "cyy,博客,前端," + this.blog.tags.join(",")
        },
        {
          hid: "description",
          name: "description",
          content: this.blog.description
        }
      ]
    };
  }
};
</script>

