# Contributing to the Dual Power App

- **If you'd like to be actively involved with the team,** you can [contact us to join the Basecamp](https://blacksocialists.us/contact), and we'll get you set up to join calls, chat with us about the vision, ideas, and design, and get access to more documentation and ways to collaborate.
- **Anyone outside the team** is welcome to collaborate with us through [issues](https://github.com/BSA-US/dual-power-app/issues) and [pull requests](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork).

## Tech stack

Stack's website is a [Next.js](https://nextjs.org) app written in [TypeScript](https://www.typescriptlang.org) and built on [Vercel](https://vercel.com). The mobile app will likely be a [Capacitor](https://capacitorjs.com) project

You can follow along with Stack through our [open design + build for Dual Power App](https://dualpower.app/open-design).
### Working on the Next.js client

- **CSS:** YUse [Windi CSS](https://windicss.org/). If you find yourself repeating the same set of classes, consider adding an alias.

## Getting started

1. Make sure to read [BSA's strategy](https://blacksocialists.us/our-strategy) if you're not familiar with BSA Open Tech Development.
2. [Set up commit signing](https://help.github.com/en/github/authenticating-to-github/signing-commits)

## Writing commit messages

- So everyone can more easily read your work, please follow [the Conventional Commits standard](https://www.conventionalcommits.org/) for your commit messages
- When working on an issue, [reference it](https://help.github.com/en/github/writing-on-github/autolinked-references-and-urls#issues-and-pull-requests) in your commit message

This commit, in which I add this section of this document, might look like:
    ```
    docs(contrib): #17 add conventional commits
    ```

If I was doing this from a fork, I would instead say:
    ```
    docs(contrib): BSA-US/dual-power-app#17 add conventional commits
    ```

## Submitting a pull request

1. Test your work
2. Bring your work up to date by rebasing it onto this repo's `main` branch (see below)
3. Test your work again
4. Create a pull request
5. Summarize your changes and [mention any relevant issues](https://help.github.com/en/github/writing-on-github/autolinked-references-and-urls#issues-and-pull-requests)
6. Submit your PR
