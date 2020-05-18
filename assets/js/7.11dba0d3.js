(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{355:function(a,s,t){"use strict";t.r(s);var e=t(43),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"linux-命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux-命令"}},[a._v("#")]),a._v(" Linux 命令")]),a._v(" "),t("blockquote",[t("p",[t("a",{attrs:{href:"http://explainshell.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Linux命令学习"),t("OutboundLink")],1)])]),a._v(" "),t("h2",{attrs:{id:"查找"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查找"}},[a._v("#")]),a._v(" 查找")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("find")]),a._v(" / -name filename.txt "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 根据名称查找/目录下的filename.txt文件。")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("find")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v(" -name "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"*.xml"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 递归查找所有的xml文件")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("find")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v(" -name "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"*.xml"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("xargs")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"hello world"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 递归查找所有文件内容中包含hello world的xml文件")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" -H "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'spring'")]),a._v(" *.xml "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查找所以有的包含spring的xml文件")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("find")]),a._v(" ./ -size "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("xargs")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -f "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 删除文件大小为零的文件")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" -l "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'.jar'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查找当前目录中的所有jar文件")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'test'")]),a._v(" d* "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 显示所有以d开头的文件中包含test的行。")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'test'")]),a._v(" aa bb cc "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 显示在aa，bb，cc文件中匹配test的行。")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'[a-z]\\{5\\}'")]),a._v(" aa "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 显示所有包含每个字符串至少有5个连续小写字符的字符串的行。")]),a._v("\n")])])]),t("h2",{attrs:{id:"程序是否运行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#程序是否运行"}},[a._v("#")]),a._v(" 程序是否运行")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" -ef"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" tomcat "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看所有有关tomcat的进程")]),a._v("\n")])])]),t("h2",{attrs:{id:"终止线程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#终止线程"}},[a._v("#")]),a._v(" 终止线程")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("kill")]),a._v(" -9 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("19979")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 终止线程号位19979的进程")]),a._v("\n")])])]),t("h2",{attrs:{id:"当前工作目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#当前工作目录"}},[a._v("#")]),a._v(" 当前工作目录")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("pwd")]),a._v("\n")])])]),t("h2",{attrs:{id:"复制文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#复制文件"}},[a._v("#")]),a._v(" 复制文件")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" dest "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 复制文件")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" -r sourceFolder targetFolder "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 递归复制整个文件夹")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("scp")]),a._v(" sourecFile romoteUserName@remoteIp:remoteAddr "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 远程拷贝")]),a._v("\n")])])]),t("h2",{attrs:{id:"创建目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建目录"}},[a._v("#")]),a._v(" 创建目录")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" newfolder\n")])])]),t("h2",{attrs:{id:"删除目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除目录"}},[a._v("#")]),a._v(" 删除目录")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rmdir")]),a._v(" deleteEmptyFolder "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 删除空目录")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -rf deleteFile "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 递归删除目录中所有内容")]),a._v("\n")])])]),t("h2",{attrs:{id:"移动文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#移动文件"}},[a._v("#")]),a._v(" 移动文件")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" /temp/movefile /targetFolder\n")])])]),t("h2",{attrs:{id:"重命名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重命名"}},[a._v("#")]),a._v(" 重命名")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" oldNameFile newNameFile\n")])])]),t("h2",{attrs:{id:"切换用户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#切换用户"}},[a._v("#")]),a._v(" 切换用户")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("su")]),a._v(" -username\n")])])]),t("h2",{attrs:{id:"修改文件权限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改文件权限"}},[a._v("#")]),a._v(" 修改文件权限")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("777")]),a._v(" file.java file.java "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 的权限-rwxrwxrwx，r表示读、w表示写、x表示可执行")]),a._v("\n")])])]),t("h2",{attrs:{id:"压缩"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#压缩"}},[a._v("#")]),a._v(" 压缩")]),a._v(" "),t("h3",{attrs:{id:"压缩文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#压缩文件"}},[a._v("#")]),a._v(" 压缩文件")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -czf test.tar.gz /test1 /test2\n")])])]),t("h3",{attrs:{id:"列出压缩文件列表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#列出压缩文件列表"}},[a._v("#")]),a._v(" 列出压缩文件列表")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -tzf test.tar.gz\n")])])]),t("h3",{attrs:{id:"解压文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解压文件"}},[a._v("#")]),a._v(" 解压文件")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -xvzf test.tar.gz\n")])])]),t("h2",{attrs:{id:"查看"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看"}},[a._v("#")]),a._v(" 查看")]),a._v(" "),t("h3",{attrs:{id:"查看文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看文件"}},[a._v("#")]),a._v(" 查看文件")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" -al\n")])])]),t("h3",{attrs:{id:"查看文件头10行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看文件头10行"}},[a._v("#")]),a._v(" 查看文件头10行")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("head")]),a._v(" -n "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v(" example.txt\n")])])]),t("h3",{attrs:{id:"查看文件尾10行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看文件尾10行"}},[a._v("#")]),a._v(" 查看文件尾10行")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" -n "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v(" example.txt\n")])])]),t("h3",{attrs:{id:"查看日志类型文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看日志类型文件"}},[a._v("#")]),a._v(" 查看日志类型文件")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" -f exmaple.log "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 这个命令会自动显示新增内容，屏幕只显示10行内容的（可设置）")]),a._v("\n")])])]),t("h3",{attrs:{id:"查看端口占用情况"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看端口占用情况"}},[a._v("#")]),a._v(" 查看端口占用情况")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("netstat")]),a._v(" -tln "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8080")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看端口8080的使用情况")]),a._v("\n")])])]),t("h3",{attrs:{id:"查看端口属于哪个程序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看端口属于哪个程序"}},[a._v("#")]),a._v(" 查看端口属于哪个程序")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("lsof")]),a._v(" -i :8080\n")])])]),t("h3",{attrs:{id:"查看进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看进程"}},[a._v("#")]),a._v(" 查看进程")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" aux"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" java "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看java进程")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" aux "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看所有进程")]),a._v("\n")])])]),t("h3",{attrs:{id:"以树状图列出目录内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#以树状图列出目录内容"}},[a._v("#")]),a._v(" 以树状图列出目录内容")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("tree a\n")])])]),t("h2",{attrs:{id:"文件下载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件下载"}},[a._v("#")]),a._v(" 文件下载")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" http://file.tgz\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" http://file.tgz\n")])])]),t("h2",{attrs:{id:"网络检测"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网络检测"}},[a._v("#")]),a._v(" 网络检测")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ping")]),a._v(" www.just-ping.com\n")])])]),t("h2",{attrs:{id:"用户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用户"}},[a._v("#")]),a._v(" 用户")]),a._v(" "),t("h3",{attrs:{id:"远程登录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#远程登录"}},[a._v("#")]),a._v(" 远程登录")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ssh")]),a._v(" userName@ip\n")])])]),t("h3",{attrs:{id:"超级管理员身份执行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#超级管理员身份执行"}},[a._v("#")]),a._v(" 超级管理员身份执行")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" a.txt "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 使用管理员身份删除文件")]),a._v("\n")])])]),t("h2",{attrs:{id:"打印信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#打印信息"}},[a._v("#")]),a._v(" 打印信息")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$JAVA_HOME")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 打印java home环境变量的值")]),a._v("\n")])])]),t("h2",{attrs:{id:"java-常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java-常用命令"}},[a._v("#")]),a._v(" java 常用命令")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("java javac jps ,jstat ,jmap, jstack\n")])])]),t("h2",{attrs:{id:"其它命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其它命令"}},[a._v("#")]),a._v(" 其它命令")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("svn "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" maven\n")])])]),t("h3",{attrs:{id:""}},[t("a",{staticClass:"header-anchor",attrs:{href:"#"}},[a._v("#")])]),a._v(" "),t("h2",{attrs:{id:"-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#-2"}},[a._v("#")])])])}),[],!1,null,null,null);s.default=r.exports}}]);