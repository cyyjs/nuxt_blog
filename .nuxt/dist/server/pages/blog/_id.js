exports.ids = [2];
exports.modules = {

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/qrcode.6cbc81b.jpg";

/***/ }),

/***/ 57:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTI1MzE0MzE0MzE1IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjUzMDUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMS4xMDQgMjg3Ljg3MiA5NTkuMzYgNzM0Ljk3NiA1MTIuMzIgNDg5LjM0NCA2NC42NCA3MzYuMTI4WiIgcC1pZD0iNTMwNiIgZmlsbD0iIzhhOGE4YSI+PC9wYXRoPjwvc3ZnPg=="

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/BackTop.vue?vue&type=template&id=7561b853&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"back-top"},[_vm._ssrNode("<ul><li data-title=\"返回顶部\" class=\"tooltip\""+(_vm._ssrStyle(null,null, { display: (_vm.scrollTop > 300) ? '' : 'none' }))+"><img"+(_vm._ssrAttr("src",__webpack_require__(57)))+" alt></li></ul> <div"+(_vm._ssrClass(null,['wxcode', _vm.showCode ? 'wxcode-show': '']))+"><img id=\"wxcode\""+(_vm._ssrAttr("src",__webpack_require__(56)))+" alt></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BackTop.vue?vue&type=template&id=7561b853&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BackTop.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BackTopvue_type_script_lang_js_ = ({
  data() {
    return {
      scrollTop: 0,
      showCode: false
    };
  },

  methods: {
    toTop() {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      let step = scrollTop / 20;
      let timer;

      let fn = () => {
        if (scrollTop > step) {
          scrollTop -= step;
          document.documentElement.scrollTop = scrollTop;
          document.body.scrollTop = scrollTop;
          timer = requestAnimationFrame(fn);
        } else {
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
          cancelAnimationFrame(timer);
        }
      };

      timer = requestAnimationFrame(fn);
    },

    onScroll() {
      this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    },

    clickBody(e) {
      if (e.target.id == 'wxcode') {
        return false;
      }

      if (this.showCode) {
        this.showCode = false;
      }
    }

  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener('scroll', this.onScroll);
      window.addEventListener('click', this.clickBody);
    });
  }

});
// CONCATENATED MODULE: ./components/BackTop.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BackTopvue_type_script_lang_js_ = (BackTopvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/BackTop.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BackTopvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "a9dd9da4"
  
)

/* harmony default export */ var BackTop = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(78);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("3541c1e5", content, true, context)
};

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(80);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("1ac3383a", content, true, context)
};

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_toc_vue_vue_type_style_index_0_id_4870e250_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_toc_vue_vue_type_style_index_0_id_4870e250_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_toc_vue_vue_type_style_index_0_id_4870e250_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_toc_vue_vue_type_style_index_0_id_4870e250_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_toc_vue_vue_type_style_index_0_id_4870e250_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_toc_vue_vue_type_style_index_0_id_4870e250_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media(max-width:719px){.toc[data-v-4870e250]{display:none}}.toc[data-v-4870e250]{width:200px;position:relative;margin-right:20px}.toc .toc-list[data-v-4870e250]{width:200px;background:#fff;position:fixed;top:79px;bottom:20px;padding-top:20px}.toc .toc-list a[data-v-4870e250]{font-weight:450;display:block;transition:color .3s;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.toc .toc-list>li>a[data-v-4870e250]{padding:3px 10px}.toc .toc-list li li a[data-v-4870e250]{padding:2px 10px 2px 20px;font-weight:400}.active1[data-v-4870e250]{border-left:2px solid #3eaf7c}.active1[data-v-4870e250],.active2[data-v-4870e250]{color:#3eaf7c}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_02b99a10_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_02b99a10_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_02b99a10_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_02b99a10_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_02b99a10_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_02b99a10_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".post[data-v-02b99a10]{display:flex}.post .page[data-v-02b99a10]{flex:1;overflow:hidden}@media(max-width:720px){.post[data-v-02b99a10]{display:block}}.wxcode[data-v-02b99a10]{text-align:center}.blog-nav[data-v-02b99a10]{text-align:right}.blog-nav a[data-v-02b99a10]{max-width:40%;overflow:hidden;display:inline-block;white-space:nowrap;text-overflow:ellipsis}.blog-nav .prev[data-v-02b99a10]{float:left}.blog-nav .prev[data-v-02b99a10]:before{content:\"← \"}.blog-nav .next[data-v-02b99a10]:after{content:\" →\"}#comment[data-v-02b99a10]{border-top:1px solid #eee;margin-top:20px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/_id.vue?vue&type=template&id=02b99a10&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"post"},[_c('toc',{attrs:{"list":_vm.content.toc}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"page\" data-v-02b99a10>","</div>",[_vm._ssrNode("<div class=\"page-head\" data-v-02b99a10><h1 data-v-02b99a10>"+_vm._ssrEscape(_vm._s(_vm.blog.title))+"</h1> <div class=\"page-head-footer\" data-v-02b99a10>"+(_vm._ssrList((_vm.blog.tags),function(tag){return ("<span class=\"tags\" data-v-02b99a10>"+_vm._ssrEscape(_vm._s(tag))+"</span>")}))+" <span class=\"time\" data-v-02b99a10>"+_vm._ssrEscape(_vm._s(_vm.$util.dateFormat(_vm.blog.updated)))+"</span></div></div> <div class=\"content post-content\" data-v-02b99a10>"+((_vm.blog.source)?("<blockquote data-v-02b99a10><p data-v-02b99a10>\n                    本文首发于个人博客\n                    <a href=\"http://alibt.top\" target=\"_blank\" data-v-02b99a10>Cyy’s Blog</a> <br data-v-02b99a10>转载请注明出处\n                    <a"+(_vm._ssrAttr("href",'http://alibt.top/blog/'+_vm.blog._id))+" target=\"_blank\" data-v-02b99a10>"+_vm._ssrEscape("http://alibt.top/blog/"+_vm._s(_vm.blog._id))+"</a></p></blockquote>"):"<!---->")+" <div data-v-02b99a10>"+(_vm._s(_vm.content.content))+"</div> <div class=\"blog-nav\" data-v-02b99a10>"+((_vm.prev)?("<a"+(_vm._ssrAttr("title",_vm.prev.title))+(_vm._ssrAttr("href",'/blog/'+_vm.prev._id))+" class=\"prev\" data-v-02b99a10>"+_vm._ssrEscape(_vm._s(_vm.prev.title))+"</a>"):"<!---->")+" "+((_vm.next)?("<a"+(_vm._ssrAttr("title",_vm.next.title))+(_vm._ssrAttr("href",'/blog/'+_vm.next._id))+" class=\"next\" data-v-02b99a10>"+_vm._ssrEscape(_vm._s(_vm.next.title))+"</a>"):"<!---->")+"</div> <div id=\"comment\" data-v-02b99a10></div></div> "),_c('back-top')],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/blog/_id.vue?vue&type=template&id=02b99a10&scoped=true&

// EXTERNAL MODULE: ./components/BackTop.vue + 4 modules
var BackTop = __webpack_require__(58);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/nav/toc.vue?vue&type=template&id=4870e250&scoped=true&
var tocvue_type_template_id_4870e250_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.show)?_c('div',{staticClass:"toc"},[_vm._ssrNode("<ul class=\"toc-list\" data-v-4870e250>"+(_vm._ssrList((_vm.data.list),function(m,i){return ("<li data-v-4870e250><a"+(_vm._ssrAttr("href",'#'+m.anchor))+(_vm._ssrClass(null,[_vm.active1==m.anchor?'active1':'']))+" data-v-4870e250>"+_vm._ssrEscape(_vm._s(m.content))+"</a> "+((m.children)?("<ul data-v-4870e250>"+(_vm._ssrList((m.children),function(n,j){return ("<li data-v-4870e250><a"+(_vm._ssrAttr("href",'#'+n.anchor))+(_vm._ssrClass(null,[_vm.active2==n.anchor?'active2':'']))+" data-v-4870e250>"+_vm._ssrEscape(_vm._s(n.content))+"</a></li>")}))+"</ul>"):"<!---->")+"</li>")}))+"</ul>")]):_vm._e()}
var tocvue_type_template_id_4870e250_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/nav/toc.vue?vue&type=template&id=4870e250&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/nav/toc.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var tocvue_type_script_lang_js_ = ({
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      active1: '',
      active2: '',
      scrollTop: 0,
      anchor: [],
      scrollLock: false
    };
  },

  computed: {
    show() {
      return this.list.length;
    },

    data() {
      if (!this.show) {
        return this.list;
      }

      let list = [this.list[0]];
      let children = [];
      let activeIndex = 0;

      for (let i = 1; i < this.list.length; i++) {
        let item = this.list[i];

        if (item.level > 3) {
          continue;
        }

        if (list[activeIndex].level === item.level) {
          activeIndex++;
          list.push(item);
        } else {
          list[activeIndex].children = list[activeIndex].children || [];
          list[activeIndex].children.push(item);
          children.push({
            p: list[activeIndex].anchor,
            v: item.anchor
          });
        }
      }

      return {
        list,
        children
      };
    }

  },
  watch: {
    $route() {
      let hash = decodeURI(this.$route.hash.slice(1));
      let child = this.data.children.find(i => i.v === hash);

      if (child) {
        this.active1 = child.p;
        this.active2 = child.v;
      } else {
        this.active1 = hash;
        this.active2 = '';
      }
    }

  },
  methods: {
    jump(anchor) {
      window.removeEventListener('scroll', this.onScroll);
      let jump = document.querySelector('#' + anchor);
      let jumpTop = jump.offsetTop - 65;
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollTop - jumpTop == 0) {
        return false;
      }

      let step = Math.abs(scrollTop - jumpTop) / 20;
      let add = jumpTop > scrollTop;
      let timer;

      let fn = () => {
        if (add) {
          if (scrollTop < jumpTop && jumpTop - scrollTop > step) {
            scrollTop += step;
            document.documentElement.scrollTop = scrollTop;
            document.body.scrollTop = scrollTop;
            timer = requestAnimationFrame(fn);
          } else {
            document.documentElement.scrollTop = jumpTop;
            document.body.scrollTop = jumpTop;
            cancelAnimationFrame(timer);
            window.addEventListener('scroll', this.onScroll);
          }
        } else {
          if (scrollTop > jumpTop && scrollTop - jumpTop > step) {
            scrollTop -= step;
            document.documentElement.scrollTop = scrollTop;
            document.body.scrollTop = scrollTop;
            timer = requestAnimationFrame(fn);
          } else {
            document.documentElement.scrollTop = jumpTop;
            document.body.scrollTop = jumpTop;
            cancelAnimationFrame(timer);
            window.addEventListener('scroll', this.onScroll);
          }
        }
      };

      timer = requestAnimationFrame(fn);
      this.$router.push('#' + anchor);
    },

    setAnchorTop() {
      let list = [];
      let p = '';

      for (let i = 0; i < this.list.length; i++) {
        let item = this.list[i];

        if (item.level === 2) {
          p = item.anchor;
        }

        let jump = document.querySelector('#' + item.anchor);
        let jumpTop = jump.offsetTop - 65;
        list.push({
          p,
          top: jumpTop,
          anchor: item.anchor
        });
      }

      this.$set(this, 'anchor', list);
    },

    getScrolled() {
      let scrolled = document.documentElement.scrollTop || document.body.scrollTop;
      let anchor = [];
      let index;

      for (let i = 0; i < this.anchor.length; i++) {
        if (this.anchor[i].top > scrolled) {
          index = i;
          break;
        }
      }

      if (index > 0) {
        if (this.anchor[index].top - scrolled < this.anchor[index - 1].top - scrolled) {
          return this.anchor[index];
        } else {
          return this.anchor[index - 1];
        }
      } else if (index === 0) {
        return this.anchor[0];
      } else {
        return this.anchor[this.anchor.length - 1];
      }
    },

    onScroll() {
      let scrolled = document.documentElement.scrollTop || document.body.scrollTop;
      let anchors = this.getScrolled(scrolled);

      if (anchors.p !== anchors.anchor) {
        this.active2 = anchors.anchor;
      } else {
        this.active2 = '';
      }

      this.active1 = anchors.p || anchors.anchor;
    }

  },

  mounted() {
    this.active1 = this.list[0] && this.list[0].anchor;
    this.$nextTick(function () {
      this.setAnchorTop();
      window.addEventListener('scroll', this.onScroll);
    });
  }

});
// CONCATENATED MODULE: ./components/nav/toc.vue?vue&type=script&lang=js&
 /* harmony default export */ var nav_tocvue_type_script_lang_js_ = (tocvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/nav/toc.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(77)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  nav_tocvue_type_script_lang_js_,
  tocvue_type_template_id_4870e250_scoped_true_render,
  tocvue_type_template_id_4870e250_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "4870e250",
  "f2844c88"
  
)

/* harmony default export */ var nav_toc = (component.exports);
// EXTERNAL MODULE: ./plugins/axios.js
var axios = __webpack_require__(14);

// EXTERNAL MODULE: external "markdown-it-toc-and-anchor"
var external_markdown_it_toc_and_anchor_ = __webpack_require__(44);
var external_markdown_it_toc_and_anchor_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_toc_and_anchor_);

// EXTERNAL MODULE: external "markdown-it"
var external_markdown_it_ = __webpack_require__(43);

// CONCATENATED MODULE: ./plugins/md.js



const hljs = __webpack_require__(45);

const markdown = __webpack_require__(43)({
  html: true,
  // Enable HTML tags in source
  xhtmlOut: true,
  // Use '/' to close single tags (<br />).
  breaks: true,
  // Convert '\n' in paragraphs into <br>
  langPrefix: 'language-',
  // CSS language prefix for fenced blocks. Can be
  linkify: false,
  // 自动识别url
  typographer: true,
  quotes: '“”‘’',
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `<pre class="language-${lang}"><svg style="margin-top: 10px; margin-left: 1rem;" xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14"><g fill="none" fill-rule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="#FF5F56" stroke="#E0443E" stroke-width=".5"></circle><circle cx="26" cy="6" r="6" fill="#FFBD2E" stroke="#DEA123" stroke-width=".5"></circle><circle cx="46" cy="6" r="6" fill="#27C93F" stroke="#1AAB29" stroke-width=".5"></circle></g></svg><code>` + hljs.highlight(lang, str, true).value + '</code></pre>';
      } catch (__) {}
    }

    return '<pre class="language"><svg style="margin-top: 10px; margin-left: 1rem;" xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14"><g fill="none" fill-rule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="#FF5F56" stroke="#E0443E" stroke-width=".5"></circle><circle cx="26" cy="6" r="6" fill="#FFBD2E" stroke="#DEA123" stroke-width=".5"></circle><circle cx="46" cy="6" r="6" fill="#27C93F" stroke="#1AAB29" stroke-width=".5"></circle></g></svg><code>' + markdown.utils.escapeHtml(str) + '</code></pre>';
  }
}); // 表情


const emoji = __webpack_require__(46); // 下标


const sub = __webpack_require__(47); // 上标


const sup = __webpack_require__(48); // <dl/>


const deflist = __webpack_require__(49); // <abbr/>


const abbr = __webpack_require__(50); // footnote


const footnote = __webpack_require__(51); // insert 带有下划线 样式 ++ ++


const insert = __webpack_require__(52); // mark


const mark = __webpack_require__(53); // taskLists


const taskLists = __webpack_require__(54); // container


const container = __webpack_require__(55); //
// const toc = require('markdown-it-toc')
// add target="_blank" to all link


const defaultRender = markdown.renderer.rules.link_open || function (tokens, idx, options, env, self) {
  return self.renderToken(tokens, idx, options);
};

markdown.renderer.rules.link_open = function (tokens, idx, options, env, self) {
  // If you are sure other plugins can't add `target` - drop check below
  let aIndex = 0;

  if (tokens[idx].attrIndex) {
    aIndex = tokens[idx].attrIndex('target');
  }

  if (aIndex < 0) {
    tokens[idx].attrPush(['target', '_blank']); // add new attribute
  } else {
    tokens[idx].attrs[aIndex][1] = '_blank'; // replace value of existing attr
  } // pass token to default renderer.


  return defaultRender(tokens, idx, options, env, self);
}; // math katex


markdown.use(emoji).use(sup).use(sub).use(container).use(container, 'hljs-left')
/* align left */
.use(container, 'hljs-center')
/* align center */
.use(container, 'hljs-right')
/* align right */
.use(deflist).use(abbr).use(footnote).use(insert).use(mark).use(container).use(taskLists) // .use(toc)
.use(external_markdown_it_toc_and_anchor_default.a, {
  tocLastLevel: 3 // 2，3级标题
  // anchorLinkSymbolClassName: 'xx'

}); // 生成目录结构

/* harmony default export */ var md = (markdown);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/_id.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



 // import Gitment from 'gitment'
// import '~/assets/css/gitment.css'
// const CommentTheme = {
//     render(state, instance) {
//         const container = document.createElement('div')
//         container.lang = 'zh'
//         container.className = 'gitment-container gitment-root-container'
//         console.log(instance)
//         container.appendChild(instance.renderHeader(state, instance))
//         container.appendChild(instance.renderEditor(state, instance))
//         container.appendChild(instance.renderComments(state, instance))
//         // container.appendChild(instance.renderFooter(state, instance))
//         return container
//     }
// }

/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  layout: 'blog',
  components: {
    BackTop: BackTop["a" /* default */],
    Toc: nav_toc
  },

  async asyncData({
    route,
    error
  }) {
    let {
      data: {
        data
      }
    } = await axios["a" /* default */].get('/blog/post/' + route.params.id + '?guide=1');

    if (!data._id) {
      error({
        statusCode: 404
      });
    }

    return {
      blog: data
    };
  },

  computed: {
    content() {
      let toc = [];
      let content = md.render(this.blog.content, {
        tocCallback: function (tocMarkdown, tocArray, tocHtml) {
          toc = tocArray;
        }
      });
      return {
        content,
        toc
      };
    },

    prev() {
      if (this.blog.link.prev._id) {
        return this.blog.link.prev;
      }

      return false;
    },

    next() {
      if (this.blog.link.next._id) {
        return this.blog.link.next;
      }

      return false;
    }

  },

  head() {
    return {
      title: this.blog.title,
      meta: [{
        hid: 'keywords',
        name: 'keywords',
        content: 'cyy,博客,前端,' + this.blog.tags.join(',')
      }, {
        hid: 'description',
        name: 'description',
        content: this.blog.description
      }]
    };
  },

  methods: {
    utterances: function () {
      let comment = document.getElementById('comment');

      if (!comment) {
        return;
      }

      let script = document.createElement('script');
      script.src = 'https://utteranc.es/client.js';
      script.setAttribute('repo', 'cyyjs/blog_comment');
      script.setAttribute('theme', 'github-light');
      script.setAttribute('issue-term', `${this.blog.title}`);
      script.setAttribute('crossorigin', 'anonymous');
      comment.appendChild(script);
    }
  },

  mounted() {
    this.utterances(); // new Gitment({
    //     id: this.blog._id, // 可选。默认为 location.href
    //     owner: 'cyyjs',
    //     repo: 'blog_comment',
    //     oauth: {
    //         client_id: 'ac10f3c942ffb50e2d9b',
    //         client_secret: 'be6b45d2000cb68ce4ecc23f3d34eb4737091e4f'
    //     },
    //     theme: CommentTheme
    // }).render('comment')
  }

});
// CONCATENATED MODULE: ./pages/blog/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/blog/_id.vue



function _id_injectStyles (context) {
  
  var style0 = __webpack_require__(79)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var _id_component = Object(componentNormalizer["a" /* default */])(
  blog_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  _id_injectStyles,
  "02b99a10",
  "19a6f311"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (_id_component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map