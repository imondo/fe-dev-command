(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{354:function(a,t,s){"use strict";s.r(t);var e=s(43),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[a._v("#")]),a._v(" Git")]),a._v(" "),s("h2",{attrs:{id:"init"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#init"}},[a._v("#")]),a._v(" init")]),a._v(" "),s("p",[a._v("创建新仓库")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" init\n")])])]),s("h2",{attrs:{id:"clone"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clone"}},[a._v("#")]),a._v(" clone")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone username@host:/path/to/repository\n\n")])])]),s("h2",{attrs:{id:"add"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add"}},[a._v("#")]),a._v(" add")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("// 第一次拉去代码\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" pull origin master\n\n// 新增代码\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n\n// 提交\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" commit -m "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"第一次提交"')]),a._v("\n\n// 提交到远程\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" push origin master\n")])])]),s("h2",{attrs:{id:"本地关联远程仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本地关联远程仓库"}},[a._v("#")]),a._v(" 本地关联远程仓库")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git remote add origin 仓库链接\n")])])]),s("h2",{attrs:{id:"rebase-合并"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rebase-合并"}},[a._v("#")]),a._v(" Rebase 合并")]),a._v(" "),s("p",[a._v("该命令可以让和 "),s("code",[a._v("merge")]),a._v(" 命令得到的结果基本是一致的。")]),a._v(" "),s("p",[a._v("通常使用 "),s("code",[a._v("merge")]),a._v(" 操作将分支上的代码合并到 "),s("code",[a._v("master")]),a._v(" 中，分支样子如下所示")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/4/23/162f109db27be054?w=505&h=461&f=png&s=22796",alt:""}})]),a._v(" "),s("p",[a._v("使用 "),s("code",[a._v("rebase")]),a._v(" 后，会将 "),s("code",[a._v("develop")]),a._v(" 上的 "),s("code",[a._v("commit")]),a._v(" 按顺序移到 "),s("code",[a._v("master")]),a._v(" 的第三个 "),s("code",[a._v("commit")]),a._v(" 后面，分支样子如下所示")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/4/23/162f11cc2cb8b332?w=505&h=563&f=png&s=26514",alt:""}})]),a._v(" "),s("p",[a._v("Rebase 对比 merge，优势在于合并后的结果很清晰，只有一条线，劣势在于如果一旦出现冲突，解决冲突很麻烦，可能要解决多个冲突，但是 merge 出现冲突只需要解决一次。")]),a._v(" "),s("p",[a._v("使用 rebase 应该在需要被 rebase 的分支上操作，并且该分支是本地分支。如果 "),s("code",[a._v("develop")]),a._v(" 分支需要 rebase 到 "),s("code",[a._v("master")]),a._v(" 上去，那么应该如下操作")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## branch develop")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" rebase master\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" checkout master\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 用于将 `master` 上的 HEAD 移动到最新的 commit")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" merge develop\n")])])]),s("h2",{attrs:{id:"stash"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stash"}},[a._v("#")]),a._v(" stash")]),a._v(" "),s("p",[s("code",[a._v("stash")]),a._v(" 用于临时报错工作目录的改动。开发中可能会遇到代码写一半需要切分支打包的问题，如果这时候你不想 "),s("code",[a._v("commit")]),a._v(" 的话，就可以使用该命令。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" stash\n")])])]),s("p",[a._v("使用该命令可以暂存你的工作目录，后面想恢复工作目录，只需要使用")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" stash pop\n")])])]),s("p",[a._v("这样你之前临时保存的代码又回来了")]),a._v(" "),s("h2",{attrs:{id:"reflog"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reflog"}},[a._v("#")]),a._v(" reflog")]),a._v(" "),s("p",[s("code",[a._v("reflog")]),a._v(" 可以看到 HEAD 的移动记录，假如之前误删了一个分支，可以通过 "),s("code",[a._v("git reflog")]),a._v(" 看到移动 HEAD 的哈希值")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/4/23/162f14df98ce3d83?w=950&h=118&f=png&s=77151",alt:""}})]),a._v(" "),s("p",[a._v("从图中可以看出，HEAD 的最后一次移动行为是 "),s("code",[a._v("merge")]),a._v(" 后，接下来分支 "),s("code",[a._v("new")]),a._v(" 就被删除了，那么我们可以通过以下命令找回 "),s("code",[a._v("new")]),a._v(" 分支")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" checkout 37d9aca\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" checkout -b new\n")])])]),s("p",[a._v("PS："),s("code",[a._v("reflog")]),a._v(" 记录是时效的，只会保存一段时间内的记录。")]),a._v(" "),s("h2",{attrs:{id:"reset"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reset"}},[a._v("#")]),a._v(" Reset")]),a._v(" "),s("p",[a._v("如果你想删除刚写的 commit，就可以通过以下命令实现")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" reset --hard HEAD^\n")])])]),s("p",[a._v("但是 "),s("code",[a._v("reset")]),a._v(" 的本质并不是删除了 commit，而是重新设置了 HEAD 和它指向的 branch。")]),a._v(" "),s("h2",{attrs:{id:"远程协作流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#远程协作流程"}},[a._v("#")]),a._v(" 远程协作流程")]),a._v(" "),s("h3",{attrs:{id:"开源项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开源项目"}},[a._v("#")]),a._v(" 开源项目")]),a._v(" "),s("ul",[s("li",[a._v("fork dev 分支")]),a._v(" "),s("li",[a._v("克隆代码")])]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[a._v("git clone 你本地"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("git\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 查看远程分支")]),a._v("\ngit remote "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("v\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 添加远程分支别名")]),a._v("\ngit remote add devmaster 远程地址\n")])])]),s("ul",[s("li",[a._v("修改本地代码第一次提交")])]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[a._v("git add "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\ngit commit "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("m "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"feat: 提交"')]),a._v("\ngit push origin master\n")])])]),s("ul",[s("li",[a._v("第二次修改前先更新代码")])]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[a._v("git fetch devmaster\ngit merge devmaster"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("dev\n")])])]),s("ul",[s("li",[a._v("提交pr，请提交到主干"),s("strong",[a._v("dev")]),a._v("分支上，提交请遵循基本规范")])]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("type"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 提交描述\n\ntype\n\nfix：修复 xxx Bug\nfeat：新增 xxx 功能\ntest：调试 xxx 功能\nstyle：变更 xxx 代码格式或注释\ndocs：变更 xxx 文档\nrefactor：重构 xxx 功能或方法\n")])])]),s("p",[s("a",{attrs:{name:"5f739c16"}})]),a._v(" "),s("h3",{attrs:{id:"私有项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#私有项目"}},[a._v("#")]),a._v(" 私有项目")]),a._v(" "),s("ul",[s("li",[a._v("克隆开发的分支")])]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[a._v("git clone "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("b 分支名称 分支地址\n")])])]),s("ul",[s("li",[a._v("提交代码")]),a._v(" "),s("li",[a._v("合并分支")])]),a._v(" "),s("h2",{attrs:{id:"清除历史敏感文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#清除历史敏感文件"}},[a._v("#")]),a._v(" 清除历史敏感文件")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" filter-branch --force --index-filter "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"git rm --cached --ignore-unmatch 敏感文件路径"')]),a._v(" --prune-empty --tag-name-filter "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" -- --all\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" push origin master --force\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -rf .git/refs/original/\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" reflog expire --expire"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("now --all\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" gc --prune"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("now\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" gc --aggressive --prune"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("now\n")])])]),s("h2",{attrs:{id:"错误汇总"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#错误汇总"}},[a._v("#")]),a._v(" 错误汇总")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("npm install")]),a._v(" 出现 "),s("code",[a._v("Unexpected end of JSON input while parsing near")]),a._v("的错误")])]),a._v(" "),s("p",[a._v("我们可以先清除缓存")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("npm cache clean --force\n")])])]),s("p",[a._v("再次执行 "),s("code",[a._v("npm install")]),a._v("，如仍然出现原错误，可执行下句代码：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("npm config set registry http://registry.cnpmjs.org\n")])])]),s("p",[a._v("将"),s("code",[a._v("npm")]),a._v("代理重置。")])])}),[],!1,null,null,null);t.default=r.exports}}]);