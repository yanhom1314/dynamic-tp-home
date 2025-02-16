#!/usr/bin/env sh

set -e
npm run docs:build
cd docs/.vuepress/dist

git init
git add .
git commit -m 'deploy'
git push -f https://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@github.com/yanhom1314/dynamic-tp-home.git main:dist