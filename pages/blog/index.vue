<template>
    <div class="page">
        <div class="page-content">
            <div class="page-right">
                <div class="tags-list">
                    <div class="title">标签列表</div>
                    <ul>
                        <li :class="['tags', tag == '' ? 'active' : '']" @click="changeTag('')">全部</li>
                        <li :class="['tags', tag == t ? 'active' : '']" @click="changeTag(t)" v-for="t in tags" :key="t">{{t}}</li>
                    </ul>
                </div>
            </div>
            <div class="list-content">
                <div class="item-card" v-for="p in page.data" @click="openUrl(p._id)" :key="p._id">
                    <h2>{{ p.title }}</h2>
                    <div class="item-body">
                        <div class="item-content">{{p.description}}</div>
                        <div class="item-img" v-if="p.banner" :style="{backgroundImage:'url('+p.banner+')'}"> </div>
                    </div>
                    <div class="card-footer">
                        <span class="tags" @click.stop="changeTag(t)" :key="p._id+t" v-for="t in p.tags">{{t}}</span>
                        <span class="time">{{$util.dateFormat(p.created)}}</span>
                    </div>
                </div>
                <pagination :pageNo="pageNo" :total="page.count" @change="changePage"></pagination>
            </div>
        </div>
        <back-top></back-top>
    </div>
</template>
<script>
import BackTop from '~/components/BackTop'
import Pagination from '~/components/Pagination'
import axios from '~/plugins/axios'
export default {
    components: {
        BackTop,
        Pagination
    },
    async asyncData({ env, route, error }) {
        let { data: { data } } = await axios.get(
            '/blog/post?pageSize=10&status=1'
        )
        let { data: { data: tags } } = await axios.get('/blog/tags')
        if (!data) {
            error()
        }
        return {
            page: data,
            tags
        }
    },
    data() {
        return {
            tag: '',
            pageNo: 1
        }
    },
    computed: {
        pageSize() {
            return 10
        },
        pageList() {
            return [{}]
        },
        filterPageList() {
            return []
        }
    },
    methods: {
        changePage(n) {
            this.pageNo = n
            this.fetch()
        },
        changeTag(t) {
            this.tag = t
            this.pageNo = 1
            this.fetch()
        },
        async fetch() {
            let { data: { data } } = await axios.get('/blog/post', {
                params: {
                    pageNo: this.pageNo,
                    pageSize: this.pageSize,
                    status: 1,
                    tag: this.tag
                }
            })
            this.page = data
        },
        openUrl(id) {
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
        padding: 2rem 2.5rem;
        display: flex;
        flex-direction: row-reverse;
        margin-top: 3.6rem;
        .list-content {
            flex-grow: 1;
            width: 620px;
        }
        .item-card {
            cursor: pointer;
            padding: 16px 20px;
            background: #fff;
            border-radius: 3px;
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
            margin-bottom: 30px;
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
            width: 240px;
            margin-left: 20px;
            flex-shrink: 0;
            margin-bottom: 20px;
            & > div {
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
