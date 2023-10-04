# Initial Setup

This setup was done to create the frontend foundation and does not need to be repeated!

For windows users to hopefully get rid of any non-useful line endings:

```bash
git config --global core.autocrlf true
```

Initiate react frontend with typescript and change into the folder:

```bash
npx create-react-app frontend --template typescript
cd frontend
```

Add Tailwind CSS:

```bash
npm install -D tailwindcss
npx tailwindcss init
```

Add some code linting rules:

```bash
npm install eslint --save-dev
npx eslint --init
npm install --save-dev eslint eslint-plugin-unicorn
npm install --save-dev eslint-config-prettier
```

And activate them in the `.eslintrc.json` (see [unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn) and [prettier](https://github.com/prettier/eslint-config-prettier)).

Add some commit linting rules:

```bash
npm install eslint --save-dev
npx eslint --init
npm install --save-dev eslint eslint-plugin-unicorn
```

And activate them in the `.eslintrc.json` (see [external docs](https://github.com/sindresorhus/eslint-plugin-unicorn)).

Add some commit linting rules:

```bash
npm install --save-dev @commitlint/cli
npm install --save-dev @commitlint/config-conventional
cd ..
echo "module.exports = {extends: ['@commitlint/config-conventional']};" > commitlint.config.js
cd frontend
npm install --save-dev husky
cd .. && husky install frontend/.husky
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
```

Note tha the commitlint config has to be in the same folder as .git which is why directories were changed.
If after the last step some problems occur with windows try [changing the encoding](https://stackoverflow.com/questions/71734295/commitlint-not-working-git-commit-m-commitlint-message-showing-unknown-argumen)

Last but not least - let's setup testing:

```bash
npm install --save-dev jest typescript ts-jest @types/jest
npx ts-jest config:init
npm install --save-dev @testing-library/react @testing-library/jest-dom jest-environment-jsdom
```
