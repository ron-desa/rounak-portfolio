#!/bin/bash

# Check if commit message is provided
if [ -z "$1" ]; then
  echo "Usage: ./a.sh \"your commit message\""
  exit 1
fi

COMMIT_MESSAGE="$1"

git add .
git commit -m "$COMMIT_MESSAGE"
git push -u origin main
npm run deploy
