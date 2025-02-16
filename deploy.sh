#!/usr/bin/env sh

set -e
npm run docs:build
cd docs/.vuepress/dist

git init
git add .
git commit -m 'deploy'