# Git 邮箱脱敏操作指南

## 一、修改当前提交的邮箱配置

```bash
# 设置全局邮箱为 GitHub noreply 地址
git config --global user.email "你的用户名@users.noreply.github.com"
```

> 前提：在 GitHub 设置页面勾选 **Keep my email addresses private**。

---

## 二、修改历史提交中的邮箱和用户名

```bash
# 1. 安装 git-filter-repo
pip install git-filter-repo

# 2. 在仓库目录下执行
git filter-repo --force \
  --email-callback '
      if email == b"旧邮箱1@example.com":
          email = b"用户名@users.noreply.github.com"
      if email == b"旧邮箱2@example.com":
          email = b"用户名@users.noreply.github.com"
      return email
  ' \
  --name-callback '
      if name == b"旧用户名":
          name = b"新用户名"
      return name
  '
```

> 只需要邮箱修改的话，去掉 `--name-callback` 部分即可。
> `--force` 是因为非 fresh clone 环境下需要强制覆盖。


```bash
# 3. 仅修改邮箱

git filter-repo --force --email-callback '
    if email == b"旧邮箱1@example.com":
        email = b"用户名@users.noreply.github.com"
    if email == b"旧邮箱2@example.com":
        email = b"用户名@users.noreply.github.com"
    return email
'

```


---

## 三、推送到远程

```bash
# 重新添加远程（filter-repo 会自动移除 origin）
git remote add origin https://github.com/用户名/仓库名.git

# 强制推送覆盖远程历史
git push --force origin main
```

---

## 四、验证

```bash
git log --format="%h %ae %an %s" -10
```

确认所有提交的邮箱都已经是 noreply 地址。

---

## 五、其他设备同步

远程历史已经被强制推送覆盖，其他设备上的旧代码需要同步。确保没有未推送的本地改动后：

```bash
git fetch origin
git reset --hard origin/main
```

> 如果有未提交的本地改动，先执行 `git stash` 保存，同步完成后再 `git stash pop` 恢复。

同步完成后，在那台设备上也设置 noreply 邮箱：

```bash
git config --global user.email "你的用户名@users.noreply.github.com"
```

> 如果嫌麻烦，也可以直接删除旧仓库重新 `git clone`。

---

## 注意事项

- 只适用于**个人仓库**，团队项目重写历史会影响到所有协作者
- 如果 `pip` 不可用，可以试试 `python -m pip install git-filter-repo`
- 如果不想重写历史，也可以直接向 GitHub 提交支持请求请求删除邮箱
