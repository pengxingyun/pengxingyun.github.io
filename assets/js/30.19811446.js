(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{374:function(a,s,t){"use strict";t.r(s);var e=t(42),_=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"npm不完全解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm不完全解析"}},[a._v("#")]),a._v(" npm不完全解析")]),a._v(" "),t("p",[a._v("npm是 "),t("strong",[a._v("Node")]),a._v(" 的模块管理器，功能极其强大。相当于是一个仓库，里面存放着各种共享的模块。如果需要使用的话直接 "),t("code",[a._v("npm install")]),a._v(" 就可把模块安装在当前项目中。")]),a._v(" "),t("h2",{attrs:{id:"npm-install"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-install"}},[a._v("#")]),a._v(" npm install")]),a._v(" "),t("p",[t("code",[a._v("npm install")]),a._v(" 模块用来安装模块到 "),t("code",[a._v("node_modules")]),a._v(" 目录中。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("packageName"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("p",[a._v("安装机制如下：")]),a._v(" "),t("ol",[t("li",[a._v("检查当前模块是否在 "),t("code",[a._v("node_modules")]),a._v(" 中存在，如果存在，不再重新安装。（"),t("code",[a._v("npm install <packageName> --force")]),a._v("）可以强制重新安装。")]),a._v(" "),t("li",[a._v("npm 向 "),t("code",[a._v("registry")]),a._v(" 查询模块压缩包的网址。")]),a._v(" "),t("li",[a._v("下载压缩包，存放在"),t("code",[a._v("~/.npm")]),a._v("目录。")]),a._v(" "),t("li",[a._v("解压压缩包到当前项目的"),t("strong",[a._v("node_modules")]),a._v("目录。")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" \n")])])]),t("p",[a._v("流程：")]),a._v(" "),t("ol",[t("li",[a._v("检查配置信息，命令行中的配置、项目.npmrc、全局.npmrc")]),a._v(" "),t("li",[a._v("检查lockfile， "),t("code",[a._v("package-lock.json")]),a._v("或 "),t("code",[a._v("yarn.lock")]),a._v("，如果存在 "),t("code",[a._v("lockfile")]),a._v("，那么就会直接进入文件完整性检查环节，减少了大量的 "),t("code",[a._v("http")]),a._v(" 请求。将会跳到第4步。")]),a._v(" "),t("li",[a._v("构建包依赖树。")]),a._v(" "),t("li",[a._v("检查缓存，命中缓存会直接跳到第7步")]),a._v(" "),t("li",[a._v("获取包内容")]),a._v(" "),t("li",[a._v("解压到缓存")]),a._v(" "),t("li",[a._v("复制文件到 "),t("code",[a._v("node_modules")])]),a._v(" "),t("li",[a._v("执行build")]),a._v(" "),t("li",[a._v("生成 "),t("code",[a._v("lockfile")])]),a._v(" "),t("li",[a._v("结束")])]),a._v(" "),t("h2",{attrs:{id:"npm-update"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-update"}},[a._v("#")]),a._v(" npm update")]),a._v(" "),t("p",[a._v("更新已安装模块，就要用到 "),t("code",[a._v("npm update")]),a._v(" 命令。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" update "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("packageName"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("p",[a._v("如果本地没有这个模块，或者远程库有更新的版本，将会更新本地模块。")])])}),[],!1,null,null,null);s.default=_.exports}}]);