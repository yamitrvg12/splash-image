## Setting up ESLint

Just run:
- `npm install --save-dev eslint eslint-config-airbnb eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-import`
- In the terminal run: `eslint --init` [video](https://www.youtube.com/watch?v=cMrDePs86Uo&t=479s)
- In the file `.eslintrc.js` change the extends to `'extends': 'airbnb'`
- You can create an npm script by adding something like this to your `package.json` file:
```
{
    "scripts": {
        "lint": "eslint app.js"
    }
}
```
- Then you can run ESLint by using `npm run lint` in the terminal.
- Other alternative could be execute ESLint Task, open the command palette from VS Code and execute below command: `Ctrl + Shift + p` and select `Task: Run tash, npm: lint`
- [documentation](http://shripalsoni.com/blog/configure-eslint-in-visual-studio-code/)

## Setting up EditorConfig

- [documentation](https://codeburst.io/setting-up-eslint-and-editorconfig-in-react-native-projects-31b4d9ddd0f6)


##Steps of running this project

from the command prompt clone the project

* $git clone https://github.com/techsithgit/react-with-redux.git
* $cd react-with-redux
* $npm install
* $npm start

[Watch the Tutorial](https://youtu.be/Fq15pkckMqQ).