<template>
  <div v-show="pageCount > 1" class="pagination">
    <ul>
      <li :class="{disabled: pageNo === 1}" @click="prev">
        上一页
      </li>
      <li v-for="i in nums" :key="i" :class="{active: pageNo === i}" @click="$emit('change', i)">
        {{ i }}
      </li>
      <li :class="{disabled: pageNo === pageCount}" @click="next">
        下一页
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    pageNo: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    },
    total: {
      type: Number,
      default: 0
    }
  },
  computed: {
    _pageSize () {
      return this.pageSize || 10
    },
    pageCount () {
      return Math.ceil((this.total || 0) / this._pageSize)
    },
    nums () {
      const s = []
      if (this.pageNo + 2 > this.pageCount) {
        for (
          let p = this.pageCount;
          p > 0 && p > this.pageCount - 5;
          p--
        ) {
          s.unshift(p)
        }
      } else if (this.pageNo - 2 > 1) {
        for (
          let p = this.pageNo - 2;
          p <= this.pageNo + 2 && p <= this.pageCount;
          p++
        ) {
          s.push(p)
        }
      } else {
        for (let p = 1; p <= 5 && p <= this.pageCount; p++) {
          s.push(p)
        }
      }
      return s
    }
  },
  methods: {
    prev () {
      if (this.pageNo > 1) {
        this.$emit('change', this.pageNo - 1)
      }
    },
    next () {
      if (this.pageNo < this.pageCount) {
        this.$emit('change', this.pageNo + 1)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~assets/css/config.scss';

.pagination {
    ul {
        list-style-type: none;
        text-align: center;

        .active {
            background: $accentColor;
            color: #fff;
        }

        li {
            box-shadow: 0 1px 2px rgba(151, 151, 151, 0.58);
            font-weight: 700;
            margin: 0 5px;
            color: #777;
            min-width: 30px;
            border-radius: 2px;
            padding: 0 4px;
            background: #fff;
            vertical-align: top;
            display: inline-block;
            font-size: 13px;
            min-width: 30px;
            height: 28px;
            line-height: 28px;
            cursor: pointer;
            box-sizing: border-box;
            text-align: center;
            border-radius: 15px;
            padding: 0 10px;
            &:hover {
                box-shadow: 1px 2px 2px rgba(151, 151, 151, 0.6);
            }
        }

        .disabled {
            color: #c0c4cc;
            cursor: not-allowed;
        }
    }
}
</style>
