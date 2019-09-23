#!/bin/env bash
yarn doc
git checkout site-pages
mv -f doc/* ./
git add .
git commit -m 'update site-pages'
git push
git checkout -