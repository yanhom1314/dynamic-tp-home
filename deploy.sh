#!/usr/bin/env sh

set -e
npm run docs:build
cd docs/.vuepress/dist

git init
git add .
git commit -m 'deploy'
git push -f https://github.com/yanhom1314/dynamic-tp-home.git main:dist
