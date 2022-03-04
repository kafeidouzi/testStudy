git log 查看最近 commit 版本

git reset --hard 版本号 回退版本

git push origin HEAD --force 把本地推送到远程仓库

git reflog 查看命令操作历史

git diff 查看冲突具体位置

git status 查看当前状态以及后续操作提示

git branch -d 分支名 删除本地分支
git branch -D 分支名 上述操作如果删不掉，可以进行强制删除
D --delete --force 强制删除

git branch -r -d origin/分支名 删除远程分支
git push origin :分支名 推送到服务器

git push origin --delete 分支名 删除远程分支 、直接推送

git branch (-m | -M) <oldbranch> <newbranch> 重命名分支名

git branch 分支名 创建新分支

git push -u origin 分支名 第一次提交，与远程分支建立联系 之后可以使用 Git push 就可以

git push --set-upstream origin 分支名 与远程分支相关联

改完冲突后，保存 然后执行 git rebase --continue 它会自动检查冲突是否已经修改完成

git rebase 分支名

git merge 操作合并分支会让两个分支的每一次提交都按照提交时间（并不是 push 时间）排序，并且会将两个分支的最新一次 commit 点进行合并成一个新的 commit，最终的分支树呈现非整条线性直线的形式

git rebase 操作实际上是将当前执行 rebase 分支的所有基于原分支提交点之后的 commit 打散成一个一个的 patch，并重新生成一个新的 commit hash 值，再次基于原分支目前最新的 commit 点上进行提交，并不根据两个分支上实际的每次提交的时间点排序，rebase 完成后，切到基分支进行合并另一个分支时也不会生成一个新的 commit 点，可以保持整个分支树的完美线性,

#### 注意：1.不要再公共分支上进行 rebase 操作， 2.

链接：https://www.jianshu.com/p/6960811ac89c

## stash 临时存放工作的改动

### git stash save '备注信息'

         当前开发分支时，需要到另一个分支去更改一些东西，可以使用，然后直接切需要的分支就行，他会将第一个分支东西存在stash中，不删除，不提交

### git stash pop 弹出第一个 stash（该 stash 会从历史删除）

### git stash apply 可以达到 git stash pop 的效果，但是 stash 会在 list 中，不会删除

### git stash list 查看 stash 的列表

### git stash apply stash 名 切换到具体的 stash

### git reflog 引用记录的 log

    不再引用直接或间接指向的commits会在一定时间内被git回收，可以使用reflog找回被删除的branch，但一定要及时。

### git log -p 可以查看每个 commit 的改动细节（到每一行）

### git log --stat 查看简要统计（那几个文件改动了）

### git diff --staged 可以显示暂存区和上一条提交之间的不同

### git diff 显示工作目录和暂存区的不同 （这条指令可以让你看到你 add 后，你想暂存区增加哪些内容）

### git diff HEAD 可以显示工作目录和上次 commit 之间的不同

### git commit --amend 发现刚提交的 commit 中有错误代码使用，这样不会产生新的 commit

        1. 修改好错误     2.  add到暂存区    3. 使用git commit --amend

### git 中的两个偏移符 ^ 和 ~

    1. ^用法：在commit后加一个或多个^,可以使commit往回偏移，偏移的数量就是^的数量；HEAD^^ 表示HEAD所指向的commit往前数两个commit
    2. ~用法：在commit后加上~号和一个数字，  eg:   HEAD~5,往前数5个

### git merge --abort merge 时有冲突，该命令是放弃解决冲突，取消 merge

当前一个 commit 的内容提交出现错误时 ，如何修改

### git rebase -i HEAD^^ 代表把 commit（HEAD 所指向的 commit）rebase 到 HEAD 之前的 2 个 commit 上

    1.git rebase -i HEAD^^   2. 对应页面进行修改
    3. git commit --amend  ，i,  修改上次的commit信息, esc, :wq
    4.git rebase --continue

nvm ls available 查看 node 版本

### git 在本地 commit 之后未 push 到远程分支，撤销 commit 的内容如何操作？

三个命令即可：

git fetch

git pull

git reset --hard origin/#your_version_name#

### 分支重命名

本地分支重名

1. git branch -m oldName newName

2. 将新分支推向远程
   git push origin newName

删除远程分支旧分支 3. git push --delete origin oldName

### log 和 reflog 区别

log 标识提交过的，不包括删除的

reflog 包括所有的记录
