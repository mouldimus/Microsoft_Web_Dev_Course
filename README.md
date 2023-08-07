# Welcome to my Microsoft Web-Dev Course Notes

In here I'll do my best to explain some concepts taught to me by this free course.

[Web-Dev-For-Beginners](https://github.com/microsoft/Web-Dev-For-Beginners/)

## Contents

1. [Building your toolbox](#building-your-toolbox)
   - [Installing and IDE](#installing-an-ide)
   - [Installing IDE Extensions](#installing-ide-extensions)
   - [Installing Node.js](#installing-nodejs)
2. [Creating your first application](#creating-your-first-application)

## Building your toolbox

### Installing an IDE

[Back](#)

Watch part 1 here: [Building your toolbox [4 of 51]](https://www.youtube.com/watch?v=69WJeXGBdxg)

Watch part 2 here: [Building your toolbox [5 of 51]](https://www.youtube.com/watch?v=9nKTxtv6D1w)

In the video he explains the need for a code editor like [VSCode](https://code.visualstudio.com).

A code editor is an essential tool to any developers toolbox. It helps the developer:

- Write, debug and document your code
- Source control managemnent
- Built-in Terminal
- Customizable and extensible
- Free, cross-platform and open-source

### Installing IDE Extensions

[Back](#)

An extension is a sub-program that is designed to be easily attached to a program to change the main program in some way. In this case we will be adding a couple of extensions to VSCode, in order to make our lives easier.

Those Extensions are:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint):
  Find and fix problems in your JavaScript code before it hits production.
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode):
  Automatic code formatter, so you don't have to care about that extra space.
- [JavaScript (ES6) code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets):
  Avoid reduntant typing with shortcuts to most used code fragments.

### Installing Node.js

[Back](#)

You'll also need to install node.js. Node.js is a JavaScript runtime, which means you can use it to run JavaScript Programs in the terminal. It'll also help you to create and run JavaScript applications inside the browser.

When installing node.js it is best to use a Version Manager. This means you can update, run and change your node.js version easily. For that we will use NVM (Node Version Manager). To install following the instructions on the following link.

#### For macOS, Linux or WSL users

https://github.com/nvm-sh/nvm

#### For Windows users

https://github.com/coreybutler/nvm-windows

## Creating your first application

### Creating the file

First we'll need to create a project directory, for our project to live in.

```bash
mkdir Microsoft_Web_Dev_Course
```

Then, we'll need to create a project file. We can use the VSCode command `code`.

```bash
code Microsoft_Web_Dev_Course/index.js
```

Alternatively...

```bash
cd Microsoft_Web_Dev_Course; touch index.js;
```

### `console.log()`
