<template>
  <div class="search-box">
    <input
      @input="change"
      placeholder="搜索..."
      aria-label="Search"
      :value="query"
      autocomplete="off"
      spellcheck="false"
      @focus="focused = true"
      @blur="focused = false"
      @keyup.enter="go(focusIndex)"
      @keyup.up="onUp"
      @keyup.down="onDown">
    <ul class="suggestions"
      v-if="showSuggestions"
      @mouseleave="unfocus">
      <li class="suggestion" v-for="(s, i) in suggestions" :key="s._id"
        :class="{ focused: i === focusIndex }"
        @mousedown="go(i)"
        @mouseenter="focus(i)">
        <a href="javascript:;" @click.prevent>
          <span class="page-title">{{ s.title}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from '~/plugins/axios'
let timer = null
export default {
    data() {
        return {
            query: '',
            focused: false,
            focusIndex: 0,
            list: []
        }
    },
    computed: {
        showSuggestions() {
            return this.focused && this.suggestions && this.suggestions.length
        },
        suggestions() {
            const query = this.query.trim().toLowerCase()
            if (!query) {
                return
            }
            return this.list
        }
    },
    methods: {
        async change(event) {
            this.query = event.target.value
            clearTimeout(this.timer)
            this.timer = setTimeout(async () => {
                let {
                    data: {
                        data: { data }
                    }
                } = await axios.get('/blog/post', {
                    params: {
                        pageNo: 1,
                        pageSize: 5,
                        title: this.query
                    }
                })
                this.list = data
            }, 500)
        },
        onUp() {
            if (this.showSuggestions) {
                if (this.focusIndex > 0) {
                    this.focusIndex--
                } else {
                    this.focusIndex = this.suggestions.length - 1
                }
            }
        },
        onDown() {
            if (this.showSuggestions) {
                if (this.focusIndex < this.suggestions.length - 1) {
                    this.focusIndex++
                } else {
                    this.focusIndex = 0
                }
            }
        },
        go(i) {
            if (this.suggestions[i]) {
                this.$router.push('/blog/' + this.suggestions[i]._id)
                this.query = ''
                this.focusIndex = 0
            }
        },
        focus(i) {
            this.focusIndex = i
        },
        unfocus() {
            this.focusIndex = -1
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/config';

.search-box {
    display: inline-block;
    position: relative;
    margin-right: 0.5rem;

    input {
        cursor: pointer;
        width: 10rem;
        color: lighten($textColor, 25%);
        display: inline-block;
        border: 1px solid darken($borderColor, 10%);
        border-radius: 2rem;
        font-size: 0.9rem;
        line-height: 2rem;
        padding: 0 0.5rem 0 2rem;
        outline: none;
        transition: all 0.2s ease;
        background: #fff url('~assets/img/search.svg') 0.6rem 0.5rem no-repeat;
        background-size: 1rem;

        &:focus {
            cursor: auto;
            border-color: $accentColor;
        }
    }

    .suggestions {
        background: #fff;
        width: 20rem;
        position: absolute;
        top: 2.2rem;
        border: 1px solid darken($borderColor, 10%);
        border-radius: 6px;
        // padding: 0.4rem;
        list-style-type: none;

        &.align-right {
            right: 0;
        }
    }

    .suggestion {
        line-height: 1.4;
        padding: 0.4rem 0.6rem;
        border-radius: 4px;

        a {
            color: lighten($textColor, 35%);

            .page-title {
                font-weight: 600;
            }

            .header {
                font-size: 0.9em;
                margin-left: 0.25em;
            }
        }

        &.focused {
            background-color: #f3f4f5;

            a {
                color: $accentColor;
            }
        }
    }
}

@media (max-width: $MQNarrow) {
    .search-box input {
        width: 0;
        border-color: transparent;
        position: relative;
        left: 1rem;

        &:focus {
            left: 0;
            width: 10rem;
        }
    }
}

@media (max-width: $MQMobile) {
    .search-box {
        margin-right: 0;

        .suggestions {
            right: 0;
        }
    }
}

@media (max-width: $MQMobileNarrow) {
    .search-box {
        .suggestions {
            width: calc(100vw - 4rem);
        }

        input:focus {
            width: 8rem;
        }
    }
}
</style>
