(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{377:function(s,a,t){"use strict";t.r(a);var r=t(42),e=Object(r.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"pm2文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pm2文档"}},[s._v("#")]),s._v(" pm2文档")]),s._v(" "),t("p",[s._v("pm2是一个进程管理工具，可以利用它来简化很多 node 应用管理的繁琐任务，如性能监控、自动重启、负载均衡等。")]),s._v(" "),t("h2",{attrs:{id:"安装pm2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装pm2"}},[s._v("#")]),s._v(" 安装pm2")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" pm2 -D\n")])])]),t("h2",{attrs:{id:"启动进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动进程"}},[s._v("#")]),s._v(" 启动进程")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# app.js是入口文件 进程名为文件名app")]),s._v("\npm2 start app.js \n")])])]),t("h2",{attrs:{id:"重命名进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重命名进程"}},[s._v("#")]),s._v(" 重命名进程")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进程名server")]),s._v("\npm2 start app.js --name server\n")])])]),t("h2",{attrs:{id:"监听进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#监听进程"}},[s._v("#")]),s._v(" 监听进程")]),s._v(" "),t("p",[s._v("监听应用目录的变化，一旦发生变化，自动重启。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("pm2 start app.js --watch\n")])])]),t("h2",{attrs:{id:"结束进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结束进程"}},[s._v("#")]),s._v(" 结束进程")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("pm2 stop app\n")])])]),t("h2",{attrs:{id:"结束所有进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结束所有进程"}},[s._v("#")]),s._v(" 结束所有进程")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("pm2 stop all\n")])])]),t("h2",{attrs:{id:"删除进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除进程"}},[s._v("#")]),s._v(" 删除进程")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("pm2 delete app\n")])])]),t("h2",{attrs:{id:"删除所有进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除所有进程"}},[s._v("#")]),s._v(" 删除所有进程")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("pm2 delete all\n")])])]),t("h2",{attrs:{id:"列出所有进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#列出所有进程"}},[s._v("#")]),s._v(" 列出所有进程")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("pm2 list\n")])])]),t("h2",{attrs:{id:"查看某个进程详情"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看某个进程详情"}},[s._v("#")]),s._v(" 查看某个进程详情")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("pm2 describe app\n")])])]),t("h2",{attrs:{id:"重启单个进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重启单个进程"}},[s._v("#")]),s._v(" 重启单个进程")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("pm2 restart app\n")])])]),t("h2",{attrs:{id:"重启所有进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重启所有进程"}},[s._v("#")]),s._v(" 重启所有进程")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("pm2 restart all\n")])])]),t("h2",{attrs:{id:"查看单个进程日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看单个进程日志"}},[s._v("#")]),s._v(" 查看单个进程日志")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("pm2 logs app\n")])])]),t("h2",{attrs:{id:"查看所有进程日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看所有进程日志"}},[s._v("#")]),s._v(" 查看所有进程日志")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("pm2 logs\n")])])]),t("h2",{attrs:{id:"查看当前通过-pm2-运行的进程的状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看当前通过-pm2-运行的进程的状态"}},[s._v("#")]),s._v(" 查看当前通过 pm2 运行的进程的状态")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("pm2 monit\n")])])]),t("h2",{attrs:{id:"根据文件启动服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#根据文件启动服务"}},[s._v("#")]),s._v(" 根据文件启动服务")]),s._v(" "),t("p",[s._v("pm2.json")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"apps"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"app"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 项目名          ")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"script"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"app.js"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("              "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 执行文件")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cwd"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 根目录")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"args"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 传递给脚本的参数")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"interpreter"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("               "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指定的脚本解释器")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"interpreter_args"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("          "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 传递给解释器的参数")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"watch"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 是否监听文件变动然后重启")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ignore_watch"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 不用监听的文件")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node_modules"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"public"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"exec_mode"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cluster_mode"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 应用启动模式，支持 fork 和 cluster 模式")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"instances"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("              "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 应用启动实例个数，仅在 cluster 模式有效 默认为 fork max为你设备核数")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"error_file"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./logs/app-err.log"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 错误日志文件")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"out_file"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./logs/app-out.log"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("           "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 正常日志文件")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"merge_logs"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                         "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置追加日志而不是新建日志")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"log_date_format"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"YYYY-MM-DD HH:mm:ss"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指定日志文件的时间格式")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"min_uptime"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"60s"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 应用运行少于时间被认为是异常启动")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"max_restarts"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                         "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 最大异常重启次数")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"autorestart"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 默认为 true, 发生异常的情况下自动重启")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"restart_delay"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"60"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 异常重启情况下，延时重启时间")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"env"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n           "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"NODE_ENV"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"production"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 环境参数，当前指定为生产环境")]),s._v("\n           "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"REMOTE_ADDR"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("               \n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"env_dev"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"NODE_ENV"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"development"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("              "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 环境参数，当前指定为开发环境")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"REMOTE_ADDR"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"env_test"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("                               "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 环境参数，当前指定为测试环境")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"NODE_ENV"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"REMOTE_ADDR"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("pm2 start pm2.json\n")])])]),t("h2",{attrs:{id:"pm2-logrotate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pm2-logrotate"}},[s._v("#")]),s._v(" pm2-logrotate")]),s._v(" "),t("p",[s._v("这个是用来分割日志的，只能用在pm2上。")]),s._v(" "),t("h3",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("pm2 install pm2"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("logrotate\n")])])]),t("p",[s._v("注意是 "),t("code",[s._v("pm2")]),s._v(" 不是 "),t("code",[s._v("npm")])]),s._v(" "),t("h2",{attrs:{id:"使用方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[s._v("#")]),s._v(" 使用方法")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("pm2 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" pm2"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("logrotate"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("max_size "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("K\n")])])]),t("h2",{attrs:{id:"参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[s._v("#")]),s._v(" 参数")]),s._v(" "),t("p",[s._v("格式是：pm2 set pm2-logrotate:{paramName} {value}")]),s._v(" "),t("p",[s._v("命令设置具体的参数，支持的参数有：")]),s._v(" "),t("p",[s._v("| Compress：是否通过gzip压缩日志")]),s._v(" "),t("p",[s._v("| max_size：单个日志文件的大小，比如上图中设置为1K（这个其实太小了，实际文件大小并不会严格分为1K）")]),s._v(" "),t("p",[s._v("| retain：保留的日志文件个数，比如设置为10,那么在日志文件达到10个后会将最早的日志文件删除掉")]),s._v(" "),t("p",[s._v("| dateFormat：日志文件名中的日期格式，默认是YYYY-MM-DD_HH-mm-ss，注意是设置的日志名+这个格式，如设置的日志名为abc.log，那就会生成abc_YYYY-MM-DD_HH-mm-ss.log名字的日志文件")]),s._v(" "),t("p",[s._v("| rotateModule：把pm2本身的日志也进行分割")]),s._v(" "),t("p",[s._v("| workerInterval：设置启动几个工作进程监控日志尺寸，最小为1")]),s._v(" "),t("p",[s._v("| rotateInterval：设置强制分割，默认值是0 0 * * *，意思是每天晚上0点分割，这个足够了个人觉得")]),s._v(" "),t("p",[s._v("设置完毕后可通过pm2 conf pm2-logrotate来查看详细的配置。")])])}),[],!1,null,null,null);a.default=e.exports}}]);