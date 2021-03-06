#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
#git push -f https://github.com/cby2566/cby2566.github.io.git master:master
git push -f https://github.com/cby2566/coco.git master:gh-pages
cd -
#直接运行该文件就行了