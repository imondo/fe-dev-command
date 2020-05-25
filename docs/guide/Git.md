# Git

<a name="SRumw"></a>
## init

<br />创建新仓库<br />

```shell
git init
```


<a name="clone"></a>
## clone


```shell
git clone username@host:/path/to/repository
```


<a name="add"></a>
## add


```shell
// 第一次拉去代码
git pull origin master

// 新增代码
git add .

// 提交
git commit -m "第一次提交"

// 提交到远程
git push origin master
```

<br />

<a name="224e2ccd"></a>
## 配置


```shell
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
```


<a name="9519f420"></a>
## 查看用户


```shell
git config user.name
git config user.email
```


<a name="4956c9f6"></a>
## 切换分支


```shell
git branch

git checkout dev
```

<br />

<a name="16103ed6"></a>
## 创建分支


```shell
# git checkout 命令加上 -b 参数表示创建并切换
git checkout -b dev
```
<a name="QAYOW"></a>
## Rebase 合并

<br />该命令可以让和 `merge` 命令得到的结果基本是一致的。<br />
<br />通常使用 `merge` 操作将分支上的代码合并到 `master` 中，分支样子如下所示<br />
<br />![](https://cdn.nlark.com/yuque/0/2019/png/124135/1560602355714-166f8ecf-619e-49c7-b955-a9ae78d08e1c.png#align=left&display=inline&height=461&margin=%5Bobject%20Object%5D&originHeight=461&originWidth=505&size=0&status=done&style=none&width=505)<br />
<br />使用 `rebase` 后，会将 `develop` 上的 `commit` 按顺序移到 `master` 的第三个 `commit` 后面，分支样子如下所示<br />
<br />![](https://cdn.nlark.com/yuque/0/2019/png/124135/1560602355635-e5bddfab-f665-4a92-9d0a-0b78777824ac.png#align=left&display=inline&height=563&margin=%5Bobject%20Object%5D&originHeight=563&originWidth=505&size=0&status=done&style=none&width=505)<br />
<br />Rebase 对比 merge，优势在于合并后的结果很清晰，只有一条线，劣势在于如果一旦出现冲突，解决冲突很麻烦，可能要解决多个冲突，但是 merge 出现冲突只需要解决一次。<br />
<br />使用 rebase 应该在需要被 rebase 的分支上操作，并且该分支是本地分支。如果 `develop` 分支需要 rebase 到 `master` 上去，那么应该如下操作<br />

```shell
## branch develop
git rebase master
git checkout master
## 用于将 `master` 上的 HEAD 移动到最新的 commit
git merge develop
```


<a name="stash"></a>
## stash

<br />`stash` 用于临时报错工作目录的改动。开发中可能会遇到代码写一半需要切分支打包的问题，如果这时候你不想 `commit` 的话，就可以使用该命令。<br />

```shell
git stash
```

<br />使用该命令可以暂存你的工作目录，后面想恢复工作目录，只需要使用<br />

```shell
git stash pop
```

<br />这样你之前临时保存的代码又回来了<br />

<a name="reflog"></a>
## reflog

<br />`reflog` 可以看到 HEAD 的移动记录，假如之前误删了一个分支，可以通过 `git reflog` 看到移动 HEAD 的哈希值<br />
<br />![](https://cdn.nlark.com/yuque/0/2019/png/124135/1560602356041-2cda90e6-fb03-4f59-8a0a-f7161fb92f5a.png#align=left&display=inline&height=118&margin=%5Bobject%20Object%5D&originHeight=118&originWidth=950&size=0&status=done&style=none&width=950)<br />
<br />从图中可以看出，HEAD 的最后一次移动行为是 `merge` 后，接下来分支 `new` 就被删除了，那么我们可以通过以下命令找回 `new` 分支<br />

```shell
git checkout 37d9aca
git checkout -b new
```

<br />PS：`reflog` 记录是时效的，只会保存一段时间内的记录。<br />

<a name="Reset"></a>
## Reset

<br />如果你想删除刚写的 commit，就可以通过以下命令实现<br />

```shell
git reset --hard HEAD^
```

<br />但是 `reset` 的本质并不是删除了 commit，而是重新设置了 HEAD 和它指向的 branch。<br />

<a name="nSNF2"></a>
## 远程协作流程
<a name="ab6eb4cc"></a>
### 开源项目


- fork dev 分支
- 克隆代码
```javascript
git clone 你本地.git

// 查看远程分支
git remote -v

// 添加远程分支别名
git remote add devmaster https://gitee.com/modno/ems-fe.git
```

- 修改本地代码第一次提交
```javascript
git add .
git commit -m "feat: 提交"
git push origin master
```

- 第二次修改前先更新代码
```javascript
git fetch devmaster
git merge devmaster/dev
```


<a name="5f739c16"></a>
### 私有项目


- 克隆开发的分支
```javascript
git clone -b 分支名称 分支地址
```

- 提交代码
- 合并分支



<a name="OWR8H"></a>
## commit 提交规范
<br />提交格式：
```javascript
<type> : 提交描述
```
type 的含义：<br />

- build：修改项目的构建系统
- chore：构建过程或辅助工具的变化
- ci：修改项目的持续集成流程
- feat：新增功能
- fix：修复bug
- docs：描述性文档修改
- style：样式修改
- perform：性能，体验相关的提交
- refactor：代码重构
- revert：回滚某个更早的提交
- test：测试相关的开发



<a name="XaYmF"></a>
## 错误汇总


- `npm install` 出现 `Unexpected end of JSON input while parsing near`的错误


<br />我们可以先清除缓存<br />

```
npm cache clean --force
```

<br />再次执行 `npm install`，如仍然出现原错误，可执行下句代码：<br />

```
npm config set registry http://registry.cnpmjs.org
```

<br />将`npm`代理重置。
