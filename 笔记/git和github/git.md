[TOC]

## git概念和优点

Git：版本管理系统，可以记录所有文件版本、有效追踪文件的变化、而且提供回滚到之前的状态。

Git的优点：解决多人协作问题，提供开发效率（分支的合并与创建）。

git不等同于github，球和球场的关系。



## git和sourcetree安装

进入网址：https://git-scm.com/downloads

全局配置：git config --global user.name "名字"

​					git config --global user.email "邮箱"

​					git config --list  查看list



## Git仓库

命令行：初始化：git init   添加文件到版本库  git add    git commit    查看仓库状态    git status



## Git工作流（命令行）

git status：查看仓库状态

git log：git 日志（查询出提交记录的 commit号）

git init：在当前文件中创建版本目录

git add test.txt：把工作区文件提交到暂存区

git commit -m "repo2 first commit"：提交暂存区文件到仓库中，并添加描述信息、注释

git reset --hard （git log里的commit号码）：回滚

git reset HEAD test.txt：把暂存区修改的文件回归到工作区

git checkout -- test.txt：把工作区中修改的文件变干净，变成未修改前

![](C:\Users\chenz\Desktop\git\笔记\git和github\图片\5dccbba500011f7412800720.jpg)



## 主要功能

### 远程仓库创建ssh key

创建ssh-key  ==  

1.  检查电脑是否已有SSH key     ==cd ~/.ssh   ls==

2.  github网站上setting里的ssh and gpg keys

3.  gitBash窗口输入：==ssh -keygen -t rsa -C "邮箱"==

4.  将id_rsa.pub文件里的密匙拷贝到github设置

5.  检查是否成功：ssh -T git@github.com

    

### 远程仓库关联本地仓库

1. 到github上在仓库Clone or download下拉列表中找到以git@github.com:开头的仓库SSH地址并复制（因为HTTPS较慢，一般用SSH地址）
2. 在本地执行命令：
==git remote add origin 你复制的地址==

注意：如果远程仓库中有文件，本地第一次push之前需要执行：==git pull origin master==

3. 执行关联命令：
==git push -u origin master==

注意：如果需要重新关联一个origin需要执行命令：

git remote rm orgin

git remote add origin xxxxx

git push -u origin master




### 克隆仓库

命令行：

1.  新建一个文件夹，没有被Git init初始化的
2.  进入gitbash窗口，==git clone  url地址（github仓库地址）==
3.  正常创建文件，git add 文件  git commit -m "注释"
4.  提交到github仓库：==git push==

图形化界面操作

1.  clone库（导入github仓库地址）

2.  正常创建文件，git add 文件  git commit -m "注释"

3.  提交到github仓库：==推送==

    

### 标签管理

1.  命令行：查看所有标签：git tag    创建标签：Git tag 标签名  指定提交信息:git tag -a 标签名-m “comment”      标签推送远程：git push origin 标签名   删除标签：git tag -d 标签名 推送到远端：git push origin --delete 标签名



### 分支管理

**分支使用场景**：开发一个功能，但是需要两周时间才能完成，第一周只写了50%的代码，如果立即提交，由于代码还没有写完，不完整的代码会导致别人的代码不能工作。如果想一起提交代码，就有可能会发生丢失进度的风险。所以可以通过创建自己的分支，这个分支怎么提交都行，等到开发完成之后再合并到原来的分支。

1.  查看分支：git branch
2.  创建分支：git branch 分支名
3.  切换分支：git checkout 分支名
4.  合并到master分支：git merge 分支名  //首先切换到主分支（master）
5.  删除分支：git branch -d 分支名
发的发生



