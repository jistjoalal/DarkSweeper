#!/bin/bash

# 1 arg: commit msg
msg=$1
if [ -z "$msg" ]
then
  echo "need msg"
else
  npm run build
  git add -A
  git commit -m "$msg"
  eb deploy
  echo Deployed: "$msg"
fi
