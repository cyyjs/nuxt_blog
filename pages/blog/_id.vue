<template>
    <div class="post">
        <toc :list="content.toc"></toc>
        <div class="page">
            <div class="page-head">
                <h1>{{blog.title}}</h1>
                <div class="page-head-footer">
                    <span class="tags" v-for="tag in blog.tags" :key="tag">{{tag}}</span>
                    <span class="time">{{$util.dateFormat(blog.updated)}}</span>
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
                        >https://cyyjs.top/blog/{{blog._id}}</a>
                    </p>
                </blockquote>
                <div v-html="content.content"></div>
                <!-- <div class="wxcode" v-if="blog.source">
                <img src="~assets/img/qrcode.jpg" alt="">
                <p>
                    更多精彩，请关注我的公众号！
                </p>
                </div>-->
                <div class="blog-nav">
                    <a
                        class="prev"
                        :title="prev.title"
                        :href="'/blog/'+prev._id"
                        v-if="prev"
                    >{{prev.title}}</a>
                    <a
                        class="next"
                        :title="next.title"
                        :href="'/blog/'+next._id"
                        v-if="next"
                    >{{next.title}}</a>
                </div>
                <div id="comment"></div>
            </div>
            <back-top></back-top>
        </div>
    </div>
</template>
<script>
import BackTop from '~/components/BackTop'
import Toc from '~/components/nav/toc';
import axios from '~/plugins/axios'
import markdown from '~/plugins/md'

export default {
  layout: 'blog',
  components: {
    BackTop,
    Toc
  },
  async asyncData({ route, error }) {
    let {
      data: { data }
    } = await axios.get('/blog/post/' + route.params.id + '?guide=1')
    if (!data._id) {
      error({ statusCode: 404 })
    }
    return {
      blog: data
    }
  },
  computed: {
    content() {
      let toc = []
      let content = markdown.render(this.blog.content, {
        tocCallback: function (tocMarkdown, tocArray, tocHtml) {
          toc = tocArray
        }
      })
      return {
        content,
        toc
      }
    },
    prev() {
      if (this.blog.link.prev._id) {
        return this.blog.link.prev
      }
      return false
    },
    next() {
      if (this.blog.link.next._id) {
        return this.blog.link.next
      }
      return false
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
  },
  methods: {
    utterances: function () {
      let comment = document.getElementById('comment')
      if (!comment) {
        return
      }

      let script = document.createElement('script')
      script.src = 'https://utteranc.es/client.js'
      script.setAttribute('repo', 'cyyjs/blog_comment')
      script.setAttribute('theme', 'github-light')
      script.setAttribute('issue-term', `${this.blog.title}`)
      script.setAttribute('crossorigin', 'anonymous')
      comment.appendChild(script)
    }
  },
  mounted() {
    this.utterances()
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


