<template>
  <div class="page">
    <div class="favorite">
      <div v-for="(v, k) in dataMap" :key="k">
        <h3>{{ k }}</h3>
        <div class="favorite-list">
          <div v-for="p in v" :key="p.url" class="item-card">
            <a target="_blank" :href="p.url">
              <div class="item-body">
                <div class="item-content">
                  <h4>{{ p.title }}</h4>
                  <div style="height: 40px; overflow: hidden;">
                    {{ p.description }}
                  </div>
                  <div class="card-footer">
                    <span v-for="t in p.tags" :key="t" class="tags" @click="changeTag(t)">{{ t }}</span>
                  </div>
                </div>
                <div class="item-img" :style="{backgroundImage:'url('+p.banner+')'}" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <BackTop />
  </div>
</template>
<script>
export default {
  props: {
    favoriteInput: {
      type: String,
      default: ''
    }
  },
  async asyncData ({ $axios }) {
    const {
      data: {
        data: { list }
      }
    } = await $axios.get('/api/favorite?pageSize=-1')
    return {
      list
    }
  },
  data () {
    return {}
  },
  head () {
    return {
      title: 'Favorite'
    }
  },
  computed: {
    oDataMap () {
      const dataMap = {}
      this.list.forEach((i) => {
        dataMap[i.category] = dataMap[i.category] || []
        i.updated = this.$util.dateFormat(i.updated)
        dataMap[i.category].push(i)
      })
      return dataMap
    },
    dataMap () {
      const map = {}
      if (!this.favoriteInput.length) {
        return this.oDataMap
      } else {
        for (const k in this.oDataMap) {
          const list = this.oDataMap[k].filter(i =>
            i.title
              .toLocaleUpperCase()
              .includes(this.favoriteInput.toLocaleUpperCase())
          )
          if (list.length) {
            map[k] = list
          }
        }
        return map
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.page {
    padding-top: 10px;
}
.page .favorite {
    flex-direction: row;
    padding: 0;
    margin-top: 0;
    max-width: 960px;
    margin: 0 auto;
    h3 {
        font-weight: 600;
        line-height: 1.25;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
    .favorite-list {
        display: flex;
        flex-wrap: wrap;
    }

    .item-card {
        width: 313px;
        margin-right: 10px;
        font-size: 0.8rem;
        cursor: pointer;
        padding: 16px 20px;
        background: #fff;
        border-radius: 3px;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        margin-bottom: 20px;
        &:nth-child(3n) {
            margin-right: 0;
        }
        &::after {
            content: ' ';
            display: block;
            clear: both;
        }
        &:hover {
            box-shadow: 0 14px 25px rgba(0, 0, 0, 0.16);
            .item-img {
                background-position: right;
            }
        }

        h4 {
            margin: 0;
            margin-bottom: 10px;
            font-weight: bold;
            font-size: 0.9rem;
        }

        .item-body {
            line-height: 1.7rem;
            padding: 0 0 10px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            word-break: break-all;
            padding: 0;
            line-height: 1.2rem;

            .item-img {
                flex-shrink: 0;
                display: inline-block;
                background-size: cover;
                background-repeat: no-repeat;
                margin-left: 10px;
                height: 95px;
                width: 95px;
                transition: background-position 1s ease-in-out;
            }

            .item-content {
                color: #666;

                .tags {
                    padding: 2px 5px;
                }
            }
        }

        .card-footer {
            margin-top: 10px;
        }
    }
}
@media (max-width: 719px) {
    .favorite {
        h3 {
            margin-left: 20px;
        }

        .favorite-list {
            flex-flow: column;

            .item-card {
                width: inherit;
                margin-left: 10px;
                &:nth-child(3n) {
                    margin-right: 10px;
                }
            }
        }
    }
}
</style>
