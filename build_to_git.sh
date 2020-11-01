#!/bin/bash
NOW=`date +'%Y/%m/%d_%H:%M:%S'`
npm run build
git add .
git commit -m 'build_'$NOW'('$1')'
git push
