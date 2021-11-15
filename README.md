# easy-issue

一个根据本地 markdown 文件（需要指定）生成 github issue，并推送到个人仓库（需要指定）的小工具。

## 头都要笑飞的背景

之前我打算用 GitHub issue 当博客（希望这种想法不要被打），当进入`New issue`时，我看到那个界面有些“不好看”，然后就想着在本地用 markdown 写博客，然后通过脚本将文件内容自动生成指定仓库的 issue。

说干就干！

等我写完这个小工具之后，再次进入`New issue`时，突然看到那个界面不是之前看到的那样，那个编辑器界面还挺好看的。

然后就想到那晚应该是网络不好，那个编辑器界面没刷新出来。

## 使用

安装

```shell
npm i easy-issues -D
```

安装完成之后，执行：

```shell
npx issue init
```

这个命令执行后，`easy-issue`会将`issue`命令添加到 package.json 的 scripts 里面，然后在根目录下创建`issue.config.js`和`editor.md`文件。当然，你也可以不需要执行这个命令，直接在根目录下创建`issue.config.js`和`editor.md`文件。

你在`editor.md`里面写完你的内容之后，在终端执行

```shell
npm run issue
```

或者

```
npx issue
```

`easy-issue`就会解析`editor.md`，生成 GitHub issue，然后上传到指定仓库。

## issue.config.js

```js
module.exports = {
  owner: '用户名',
  repo: '指定仓库',
  accessToken: 'personal access token',
  editor: 'issue内容的markdown文件名（可选，默认是根目录下的editor.md）',
};
```

## editor 文件

格式必须如下：

```text
---
title: 'issue名称'
labels:
  - label1
  - ...
---
你的issue内容
```

需要注意的是`labels`所指定的 issue label 必须是存在仓库里面。

## Node API

姑且弄了 node api，使用方法如下：

```js
const easyIssue = require('easy-issue');

// 相当于 npx issue init
easyIssue.init(context, editor);

// 相当于 npx issue
easyIssue.post(context, config);
```

`init()`方法需要提供当前的根目录路径`context`，`editor`默认值是当前根目录下的`editor.md`文件

`post()`方法的参数`context`和`init`方法一样，而参数`config`的内容就是`issue.config.js`。在这种情况下，你可以将 markdown 内容直接传入`config.editor`，它内部会以`/\.md$/`来判断是否将`config.editor`提供的内容作为 issue 的原始内容。
