# Stack — Accesible democratic meetings

**Stack** is an app for online and in-person meetings with tools for easy, democratic decision-making. Compatible with [Dual Power App](https://dualpower.app).

[Check out our website to follow along](https://stackthe.app), or drop into one of BSA Open Tech Development's biweekly meetings, streamed live to the [Dual Power App site](https://dualpower.app) and open to guests via live chat and Discord.

* [Contributor guidelines](https://github.com/BSA-US/stack/blob/main/CONTRIBUTING.md)
* Twitter:
  * [Stack](https://twitter.com/AppForStack)
  * [Dual Power App](https://twitter.com/DualPowerApp)
  * [Black Socialists in America](https://twitter.com/DualPowerApp)

## Contributing

While we're focusing on design so we can get to a buildable spec ASAP, you're free to experiment and submit PRs. Make sure you read the [contributor guidelines](https://github.com/BSA-US/stack/blob/main/CONTRIBUTING.md) before you move on :slightly_smiling_face:

## Setup

1. Create a new branch:
    ```sh
    git checkout -b my-test-branch
    ```
2. Duplicate the `.env` files:
    ```sh
    cp .env.template .env
    ```
3. Install the correct version of Node.js (this is what `.nvmrc` does)
    ```sh
    nvm install
    nvm use
    ```
4. Install `yarn` globally:
    ```sh
    npm i -g yarn
    ```
5. Install dependencies:
    ```sh
    yarn
    ```
6. Install `vercel` globally:
    ```sh
    yarn global add vercel
    ```

### Run the app locally

```sh
vc dev # or yarn dev
```
