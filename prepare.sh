npx husky install

./node_modules/.bin/husky add .husky/pre-commit "npx lint-staged"

./node_modules/.bin/husky add .husky/commit-msg "npm run lin:commit"