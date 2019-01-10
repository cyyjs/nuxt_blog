import markdownItTocAndAnchor from "markdown-it-toc-and-anchor"
import markdownIt from "markdown-it"
const hljs = require('highlight.js')
const markdown = require('markdown-it')({
    html: true, // Enable HTML tags in source
    xhtmlOut: true, // Use '/' to close single tags (<br />).
    breaks: true, // Convert '\n' in paragraphs into <br>
    langPrefix: 'language-', // CSS language prefix for fenced blocks. Can be
    linkify: false, // 自动识别url
    typographer: true,
    quotes: '“”‘’',
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return (
                    `<pre class="language-${lang}"><svg style="margin-top: 10px; margin-left: 1rem;" xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14"><g fill="none" fill-rule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="#FF5F56" stroke="#E0443E" stroke-width=".5"></circle><circle cx="26" cy="6" r="6" fill="#FFBD2E" stroke="#DEA123" stroke-width=".5"></circle><circle cx="46" cy="6" r="6" fill="#27C93F" stroke="#1AAB29" stroke-width=".5"></circle></g></svg><code>` +
                    hljs.highlight(lang, str, true).value +
                    '</code></pre>'
                )
            } catch (__) { }
        }

        return (
            '<pre class="language"><svg style="margin-top: 10px; margin-left: 1rem;" xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14"><g fill="none" fill-rule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="#FF5F56" stroke="#E0443E" stroke-width=".5"></circle><circle cx="26" cy="6" r="6" fill="#FFBD2E" stroke="#DEA123" stroke-width=".5"></circle><circle cx="46" cy="6" r="6" fill="#27C93F" stroke="#1AAB29" stroke-width=".5"></circle></g></svg><code>' +
            markdown.utils.escapeHtml(str) +
            '</code></pre>'
        )
    }
})
// 表情
const emoji = require('markdown-it-emoji')
// 下标
const sub = require('markdown-it-sub')
// 上标
const sup = require('markdown-it-sup')
// <dl/>
const deflist = require('markdown-it-deflist')
// <abbr/>
const abbr = require('markdown-it-abbr')
// footnote
const footnote = require('markdown-it-footnote')
// insert 带有下划线 样式 ++ ++
const insert = require('markdown-it-ins')
// mark
const mark = require('markdown-it-mark')
// taskLists
const taskLists = require('markdown-it-task-lists')
// container
const container = require('markdown-it-container')
//
// const toc = require('markdown-it-toc')

// add target="_blank" to all link
const defaultRender =
    markdown.renderer.rules.link_open ||
    function (tokens, idx, options, env, self) {
        return self.renderToken(tokens, idx, options)
    }
markdown.renderer.rules.link_open = function (tokens, idx, options, env, self) {
    // If you are sure other plugins can't add `target` - drop check below
    let aIndex = 0
    if (tokens[idx].attrIndex) {
        aIndex = tokens[idx].attrIndex('target')
    }

    if (aIndex < 0) {
        tokens[idx].attrPush(['target', '_blank']) // add new attribute
    } else {
        tokens[idx].attrs[aIndex][1] = '_blank' // replace value of existing attr
    }

    // pass token to default renderer.
    return defaultRender(tokens, idx, options, env, self)
}
// math katex

markdown
    .use(emoji)
    .use(sup)
    .use(sub)
    .use(container)
    .use(container, 'hljs-left') /* align left */
    .use(container, 'hljs-center') /* align center */
    .use(container, 'hljs-right') /* align right */
    .use(deflist)
    .use(abbr)
    .use(footnote)
    .use(insert)
    .use(mark)
    .use(container)
    .use(taskLists)
    // .use(toc)
    .use(markdownItTocAndAnchor, {
        tocLastLevel: 3 // 2，3级标题
        // anchorLinkSymbolClassName: 'xx'
    }) // 生成目录结构
export default markdown
