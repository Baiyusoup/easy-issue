# baiyu-issues

一个根据本地 markdown 文件（需要指定）生成 github issue，并推送到个人仓库（需要指定）的小工具。

## 头都要笑飞的背景

之前我打算用 GitHub issue 当博客（希望这种想法不要被打），当进入`New issue`时，我看到那个界面有些“不好看”，然后就想着在本地用 markdown 写博客，然后通过脚本将文件内容自动生成指定仓库的 issue。

说干就干！

等我写完这个小工具之后，再次进入`New issue`时，突然看到那个界面不是之前看到的那样，那个编辑器界面还挺好看的。

然后就想到那晚应该是网络不好，那个编辑器界面没刷新出来。

## 使用

安装

```shell
npm i baiyu-issues -D
```

安装完成之后，执行：

```shell
npx issue init
```

这个命令执行后，`baiyu-issues`会将`issue`命令添加到 package.json 的 scripts 里面，然后在根目录下创建`issue.config.js`和`editor.md`文件。当然，你也可以不需要执行这个命令，直接在根目录下创建`issue.config.js`和`editor.md`文件。

你在`editor.md`里面写完你的内容之后，在终端执行

```shell
npm run issue

// or
npx issue
```

`baiyu-issue`就会解析`editor.md`，生成 GitHub issue，然后上传到指定仓库。

## 例子

```text
---
title: Test baiyu-issue
labels:
  - enhancement
  - wontfix
---

## 介绍

`baiyu-issues`是一个用来读取指定 markdown 内容生成 issue，并推送到指定 github 仓库的小工具
```
