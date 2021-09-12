# Setup comparator

![Repo size](https://img.shields.io/github/repo-size/sergih28/setup-comparator?style=flat-square)
![Open issues](https://img.shields.io/github/issues/sergih28/setup-comparator?style=flat-square)
![License](https://img.shields.io/github/license/sergih28/setup-comparator?style=flat-square)
![Version](https://img.shields.io/github/package-json/v/sergih28/setup-comparator?style=flat-square&sort=semver)
![Contributors](https://img.shields.io/github/contributors/sergih28/setup-comparator?style=flat-square)
[![Twitch](https://img.shields.io/twitch/status/sergi28tv?style=flat-square)][twitch]

**Setup comparator** is a tool that allows you to view and compare ***rFactor 2*** setups.

A **setup** is the car's configuration in a *racing game*. The front wing, the dampers, etc...

## Background

I started this project to experiment with javascript classes back in the year **2019**, and completed the first stable version of the project ([v1.0.0])

Now (**2021**), I decided to use React instead of vanilla Javascript, and use other extra technologies to keep learning and improving on important tools and languages like ***React***, ***Typescript***, ***Storybook***, ***Jest*** and ***git***.

Also, I've been streaming on [twitch] for a while, and found that this was also a good way to learn and share my learning process with other people, so I'm streaming while working on this project mostly every day until it's complete.

## Why I built this project

I like to create software that solves problems. So, to learn and master new technologies, I decided a while ago that I would create new software that solved problems in my daily life to practice and enhance my programming skills.

In particular, this project let's you compare setups in an easy way, outside the game. This is useful specially for teams that are preparing a setup for a race, or if you just want to see the differences between 2 or more setups.

All the simulators I've tried so far, only let you compare 2 setups at the same time, and with this app you can compare as much setups as you want at the same time, so this is a plus.

## Technologies

I want to improve on: ***React***, ***Typescript***, ***Styled Components***, ***git***

I want to learn: ***Storybook***, ***Jest***

I am not using ***Redux*** on purpose, to get a better understanding of ***React Context***.

List of tech used:

### Main

- React
- Typescript
- Chakra UI (will be replaced with scss and styled components for a better personalization of the UI)
- *Storybook* (not using yet)
- *Jest* (not using yet)
- *Styled components* (not using yet)

### Linters

- ESLint
- Stylelint
- Prettier

I strongly believe that a good organization is key, thus that's why I use all those linters with my own set of rules, following the best practices.

## How to use

The project has been created with [***Create React App***][Create React App].

First of all, you will have to install ***Node*** and ***yarn*** in your machine.

Then do **`yarn install`** to install all the packages that the project is using.

After that, you have the following avaiblable scripts:

- **`yarn start`**: Runs the app in the development mode.

  - Open [http://localhost:3000][localhost] to view the app in the browser

  - The page will reload if you make edits.

  - You will also see any lint errors in the console.

- **`yarn lint`**: Checks that the app is following the tsx coding rules specified in [ESLint config file][eslintrc].

- **`yarn lintcss`**: Checks that the app is following the css coding rules specified in [Stylelint config file][stylelintrc].

- **`yarn test`**: Launches the test runner in the interactive watch mode.

- **`yarn build`**: Builds the app for production to the build folder.

Ideally you want your code editor to fix most of the things on save. If that, for any reason, wasn't possible in your case, you can always do `npx stylelint **/*.scss --fix` or `eslint ./src --fix` to make it fix all or most of the errors and warnings automatically.

## How to contribute

Do you want to contribute to the project? Awesome!

I encourage you to to work on an open issue yourself, just ask for it before starting. ***I will leave some [easier issues] opened for beginners to start collaborating***.

If you find any bug or have any idea or request on improving current or new functionalities, I'd be glad if you got involved in the [discussions section] or [opening an issue][open an issue].

Please, make sure to follow the [Contributing guidelines], specially when collaborating with code.

The project is setup in a way that if you don't strictly follow the linters rules, the CI/CD actions will not pass. But don't worry, setting up your code editor properly to use the [linters] should be enough to warn you when something's not right.

Keep in mind that you have the [discussions section] if you wish to reach out to me.

## Future things that can be done

We could support other simulators like ***iRacing*** and ***Assetto Corsa Competizione***.

If you wish that we support other simulators, don't hesitate to reach out and ask for it in the [discussions section] or [open an issue].

## License

This project is licensed under [MIT License].

[v1.0.0]: https://github.com/Sergih28/setup-comparator/releases/tag/v1.0.0
[Contributing guidelines]: CONTRIBUTING.md
[MIT License]: LICENSE
[twitch]: https://www.twitch.tv/sergi28tv
[Create React App]: https://github.com/facebook/create-react-app
[localhost]: http://localhost:3000
[eslintrc]: .eslintrc.json
[stylelintrc]: .stylelintrc.json
[discussions section]: https://github.com/Sergih28/setup-comparator/discussions
[open an issue]: https://github.com/Sergih28/setup-comparator/issues/new/choose
[linters]: #linters
[easier issues]: https://github.com/Sergih28/setup-comparator/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22
