<template>
  <div class="post">
    <nav-toc :list="content.toc" />
    <div class="page">
      <div class="page-head">
        <h1>{{ blog.title }}</h1>
        <div class="page-head-footer">
          <span v-for="tag in blog.tags" :key="tag" class="tags">{{ tag }}</span>
          <span class="time"><i class="iconfont icon-riqi" /> {{ $util.dateFormat(blog.created) }}</span>
        </div>
      </div>

      <div class="content post-content">
        <blockquote v-if="blog.source">
          <p>
            本文首发于个人博客
            <a href="https://cyyjs.top" target="_blank">Cyy’s Blog</a>
            <br>转载请注明出处
            <a
              :href="'https://cyyjs.top/blog/'+blog._id"
              target="_blank"
            >https://cyyjs.top/blog/{{ blog._id }}</a>
          </p>
        </blockquote>

        <!-- eslint-disable -->
        <div v-html="content.content" />
        <!-- <div class="wxcode" v-if="blog.source">
                <img src="~assets/img/qrcode.jpg" alt="">
                <p>
                    更多精彩，请关注我的公众号！
                </p>
                </div>-->
        <div class="blog-nav">
          <a
            v-if="prev"
            class="prev"
            :title="prev.title"
            :href="'/blog/'+prev._id"
          >{{ prev.title }}</a>
          <a
            v-if="next"
            class="next"
            :title="next.title"
            :href="'/blog/'+next._id"
          >{{ next.title }}</a>
        </div>
        <div id="comment" />
      </div>
      <back-top />
    </div>
  </div>
</template>
<script>
import markdown from '~/plugins/md'

export default {
  layout: 'blog',
  async asyncData ({ $axios, route, error }) {
    const {
      data: { data }
    } = await $axios.get('/api/blog/' + route.params.id + '?guide=1')
    if (!data._id) {
      error({ statusCode: 404 })
    }
    return {
      blog: data
    }
  },
  data () {
    return {
      script: null
    }
  },
  head () {
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
  },
  computed: {
    content () {
      let toc = []
      const content = markdown.render(this.blog.content, {
        tocCallback (tocMarkdown, tocArray, tocHtml) {
          toc = tocArray
        }
      })
      return {
        content,
        toc
      }
    },
    prev () {
      if (this.blog.link.prev._id) {
        return this.blog.link.prev
      }
      return false
    },
    next () {
      if (this.blog.link.next._id) {
        return this.blog.link.next
      }
      return false
    },
    isDark () {
      return this.$store.state.setting.themeIsDark
    }
  },
  watch: {
    isDark () {
      this.utterances()
    }
  },
  methods: {
    utterances () {
      const comment = document.getElementById('comment')
      if (!comment) {
        return
      }
      if (this.script) {
        while (comment.hasChildNodes()) {
          comment.removeChild(comment.firstChild)
        }
      }
      this.script = document.createElement('script')
      this.script.src = 'https://utteranc.es/client.js'
      this.script.setAttribute('repo', 'cyyjs/blog_comment')
      this.script.setAttribute('theme', this.isDark ? 'github-dark' : 'github-light')
      this.script.setAttribute('issue-term', `${this.blog.title}`)
      this.script.setAttribute('crossorigin', 'anonymous')
      comment.appendChild(this.script)
    }
  }
}
</script>
<style lang="scss" scoped>
.post {
    display: flex;
    .page {
        flex: 1;
        overflow: hidden;
    }
}
@media (max-width: 720px) {
    .post {
        display: block;
    }
}
.wxcode {
    text-align: center;
}
.blog-nav {
    text-align: right;
    a {
        max-width: 40%;
        overflow: hidden;
        display: inline-block;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .prev {
        float: left;
        &::before {
            content: "← ";
        }
    }
    .next::after {
        content: " →";
    }
}
#comment {
    border-top: 1px solid #eee;
    margin-top: 20px;
}
</style>
