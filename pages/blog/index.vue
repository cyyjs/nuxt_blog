<template>
  <div class="page">
    <div class="page-content">
      <div class="page-right">
        <div class="tags-list">
          <div class="title">
            标签列表
          </div>
          <ul>
            <li
              :class="['tags', tag == '' ? 'active' : '']"
              @click="changeTag('')"
            >
              全部
            </li>
            <li
              v-for="t in tags"
              :key="t"
              :class="['tags', tag == t ? 'active' : '']"
              @click="changeTag(t)"
            >
              {{ t }}
            </li>
          </ul>
        </div>
      </div>
      <div class="list-content">
        <div
          v-for="p in page.list"
          :key="p._id"
          class="item-card"
          @click="openUrl(p._id)"
        >
          <h2>{{ p.title }}</h2>
          <div class="item-body">
            <div class="item-content">
              {{ p.description }}
            </div>
            <div
              v-if="p.banner"
              class="item-img"
              :style="{ backgroundImage: 'url(' + p.banner + ')' }"
            />
          </div>
          <div class="card-footer">
            <span
              v-for="t in p.tags"
              :key="p._id + t"
              class="tags"
              @click.stop="changeTag(t)"
            >{{ t }}</span>
            <span class="time"><i class="iconfont icon-riqi" />{{ $util.dateFormat(p.created) }}</span>
          </div>
        </div>
        <pagination
          :page-no="pageNo"
          :total="page.count"
          @change="changePage"
        />
      </div>
    </div>
    <back-top />
  </div>
</template>
<script>
export default {
  async asyncData ({ $axios, error }) {
    const {
      data: { data }
    } = await $axios.get('/api/blog?pageSize=10&status=1&sort=created')
    const {
      data: { data: tags }
    } = await $axios.get('/api/blog/tags')
    if (!data) {
      error()
    }
    return {
      page: data,
      tags
    }
  },
  data () {
    return {
      tag: '',
      pageNo: 1
    }
  },
  head () {
    return {
      title: 'Blog'
    }
  },
  computed: {
    pageSize () {
      return 10
    },
    pageList () {
      return [{}]
    },
    filterPageList () {
      return []
    }
  },
  methods: {
    changePage (n) {
      this.pageNo = n
      this.fetch()
    },
    changeTag (t) {
      this.tag = t
      this.pageNo = 1
      this.fetch()
    },
    async fetch () {
      const {
        data: { data }
      } = await this.$axios.get('/api/blog', {
        params: {
          pageNo: this.pageNo,
          pageSize: this.pageSize,
          status: 1,
          sort: 'created',
          tag: this.tag
        }
      })
      this.page = data
    },
    openUrl (id) {
      const { href } = this.$router.resolve({
        path: `/blog/${id}`
      })
      window.open(href, '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  .page-content {
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    flex-direction: row-reverse;
    margin-top: 3.6rem;
    .list-content {
      flex-grow: 1;
      width: 620px;
      margin-right: 260px;
    }
    .item-card {
      cursor: pointer;
      padding: 16px 20px;
      background: #fff;
      border-radius: 3px;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
      margin-bottom: 15px;
      &:hover {
        box-shadow: 0 14px 25px rgba(0, 0, 0, 0.16);
        .item-img {
          background-position: right;
        }
      }
      h2 {
        margin-top: 0;
        padding-bottom: 1rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        color: #3eaf7c;
        border-bottom: 1px solid #eaecef;
        margin-bottom: 20px;
      }
      .item-body {
        line-height: 1.7rem;
        padding: 0 0 10px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        word-break: break-all;
        .item-img {
          width: 6rem;
          height: 5rem;
          flex-shrink: 0;
          display: inline-block;
          background-size: cover;
          background-repeat: no-repeat;
          margin-left: 10px;
          transition: background-position 1s ease-in-out;
        }
      }
      .card-footer {
        text-align: right;
        .tags {
          float: left;
        }
      }
    }
    .page-right {
      position: fixed;
      width: 240px;
      margin-left: 20px;
      flex-shrink: 0;
      margin-bottom: 20px;
      & > div {
        border-radius: 3px;
        background-color: #fff;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        &:hover {
          box-shadow: 0 14px 25px rgba(0, 0, 0, 0.16);
        }
      }
      .title {
        border-bottom: 1px solid #eee;
        padding: 10px;
        font-weight: 500;
        font-size: 1.1rem;
      }
      ul {
        max-height: 70vh;
        overflow: auto;
        list-style-type: none;
        padding: 10px;
        margin: 0;
        li {
          display: inline-block;
          margin-bottom: 10px;
        }
      }
    }
  }
}
@media (max-width: 719px) {
  .page {
    .page-content {
      flex-direction: column;
      margin-top: 6.6rem;
      padding: 0;

      .page-right {
        position: fixed;
        margin-left: 0;
        top: 3.5rem;
        width: 100%;

        ul {
          white-space: nowrap;
          overflow: scroll;

          li {
            margin-bottom: 0;
          }
        }

        .title {
          display: none;
        }
      }

      .list-content {
        margin-top: 10px;
        width: 100%;
        .item-card {
          margin-bottom: 10px;
        }
      }
    }

    .favorite {
      h3 {
        margin-left: 10px;
      }

      .favorite-list {
        flex-flow: column;

        .item-card {
          width: inherit;
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
