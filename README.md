## Quick guide on "ta-bootcamp-e2e" installation

To ensure correct project installation, please refer to the below step-by-step walkthrough.

#### Step 1: Clone the repository to your local device & set up dependencies

1. Repository can be accessed via the following link - **https://github.com/bpavlovs/ta-bootcamp-e2e**
2. Press **"Code"** and copy the SSH link to clipboard
3. Go back to your IDE of choice and open a new terminal (if not open already)
4. Input a git command - **"git clone"** followed by the SSH link you've just copied and press **"Enter"**
5. Enter passphrase (only relelvant if you are using SSH) and wait for the repository to get cloned
6. Once done, navigate to the root folder of the project 
7. While in the project root folder, execute **"yarn"** command in the terminal to set up all dependencies

#### Step 2: Check "devDependencies" and "scripts" in "package.json" file

Make sure the dev dependencies and scripts look as follows:

```json
  "devDependencies": {
    "@wdio/allure-reporter": "^7.26.0",
    "@wdio/cli": "^7.27.0",
    "@wdio/cucumber-framework": "^7.27.0",
    "@wdio/local-runner": "^7.27.0",
    "@wdio/spec-reporter": "^7.26.0",
    "chromedriver": "^107.0.3",
    "tsconfig-paths": "^4.1.0",
    "wdio-chromedriver-service": "^8.0.0"
  },
  "scripts": {
    "test": "wdio run wdio.conf.js"
  }
```
#### Step 3: Run the tests

Finally, use the **"yarn test"** command to run the existing tests

If everything went smoothly, you should see the following output *(execution time might differ)*:

```text
[chrome 107.0.5304.107 windows #0-0] Bootcamp E2E
[chrome 107.0.5304.107 windows #0-0] As a user, I am able to look up items via search bar
[chrome 107.0.5304.107 windows #0-0]    ✓ Given I am on the home page
[chrome 107.0.5304.107 windows #0-0]    ✓ * The promo banner is closed
[chrome 107.0.5304.107 windows #0-0]    ✓ When I enter the word "Windows" in the search bar
[chrome 107.0.5304.107 windows #0-0]    ✓ * I click the search button
[chrome 107.0.5304.107 windows #0-0]    ✓ Then I should see at least 1 items
[chrome 107.0.5304.107 windows #0-0]
[chrome 107.0.5304.107 windows #0-0] As a user, I am able to return to home page via shop logo button
[chrome 107.0.5304.107 windows #0-0]    ✓ Given I am on the home page
[chrome 107.0.5304.107 windows #0-0]    ✓ * The promo banner is closed
[chrome 107.0.5304.107 windows #0-0]    ✓ When I open Today's Best Deals tab
[chrome 107.0.5304.107 windows #0-0]    ✓ * Click the internet shop logo
[chrome 107.0.5304.107 windows #0-0]    ✓ Then I should be taken back to home page
[chrome 107.0.5304.107 windows #0-0]
[chrome 107.0.5304.107 windows #0-0] 10 passing (22.6s)


Spec Files:      1 passed, 1 total (100% completed) in 00:00:27
```