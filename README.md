## Quick guide on "ta-bootcamp-e2e" installation

To ensure correct project installation, please refer to the below step-by-step walkthrough.

#### Step 0: How I chose "Additional Task" scenarios

Since we are testing item and cart manipulation, I decided to go for what I consider to be the "life-critical" scenarios first. Namely:
1. Adding an item to the cart
2. Removing an item from the cart

The third scenario is less important in my opinion, but it is still related to adding items to the cart functionality, so I decided to go with

3. Increasing quantity of an item, before adding it to the cart

All in all, my reasoning is pretty straight forward - most important scenarios should come first.

**P.S.** Separate scripts were added for initial and additional task scenarios to be run separately:

```json
  "scripts": {
    "test": "wdio run wdio.conf.js",
    "initialTaskFeature": "wdio run wdio.conf.js --spec bootcamp_e2e.feature",
    "additionalTaskFeature": "wdio run wdio.conf.js --spec additional_task.feature"
  }
```
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
 "spec" Reporter:
------------------------------------------------------------------
[chrome 107.0.5304.107 windows #0-1] Running: chrome (v107.0.5304.107) on windows
[chrome 107.0.5304.107 windows #0-1] Session ID: a8c42fbfc5158211d93769eeb9c32eee
[chrome 107.0.5304.107 windows #0-1]
[chrome 107.0.5304.107 windows #0-1] » \features\bootcamp_e2e.feature
[chrome 107.0.5304.107 windows #0-1] Bootcamp E2E
[chrome 107.0.5304.107 windows #0-1] As a user, I am able to look up items via search bar       
[chrome 107.0.5304.107 windows #0-1]    ✓ Given I am on the home page
[chrome 107.0.5304.107 windows #0-1]    ✓ * The promo banner is closed
[chrome 107.0.5304.107 windows #0-1]    ✓ When I enter the word "Windows" in the search bar     
[chrome 107.0.5304.107 windows #0-1]    ✓ * I click the search button
[chrome 107.0.5304.107 windows #0-1]    ✓ Then I should see at least 1 items
[chrome 107.0.5304.107 windows #0-1]
[chrome 107.0.5304.107 windows #0-1] As a user, I am able to return to home page via shop logo button
[chrome 107.0.5304.107 windows #0-1]    ✓ Given I am on the home page
[chrome 107.0.5304.107 windows #0-1]    ✓ * The promo banner is closed
[chrome 107.0.5304.107 windows #0-1]    ✓ When I open Today's Best Deals tab
[chrome 107.0.5304.107 windows #0-1]    ✓ * Click the internet shop logo
[chrome 107.0.5304.107 windows #0-1]    ✓ Then I should be taken back to home page
[chrome 107.0.5304.107 windows #0-1]
[chrome 107.0.5304.107 windows #0-1] 10 passing (37.5s)
------------------------------------------------------------------
[chrome 107.0.5304.107 windows #0-0] Running: chrome (v107.0.5304.107) on windows
[chrome 107.0.5304.107 windows #0-0] Session ID: 396bb5e5c24dcc26968c888869b495e1
[chrome 107.0.5304.107 windows #0-0]
[chrome 107.0.5304.107 windows #0-0] » \features\additional_task.feature
[chrome 107.0.5304.107 windows #0-0] Additional Task
[chrome 107.0.5304.107 windows #0-0] As a user, I am able to add an item to my cart
[chrome 107.0.5304.107 windows #0-0]    ✓ Given I am on the home page
[chrome 107.0.5304.107 windows #0-0]    ✓ * The promo banner is closed
[chrome 107.0.5304.107 windows #0-0]    ✓ When I open Today's Best Deals tab
[chrome 107.0.5304.107 windows #0-0]    ✓ * I open the first item
[chrome 107.0.5304.107 windows #0-0]    ✓ * I save the item title
[chrome 107.0.5304.107 windows #0-0]    ✓ * I add item to my cart
[chrome 107.0.5304.107 windows #0-0]    ✓ * I go to my cart
[chrome 107.0.5304.107 windows #0-0]    ✓ Then I am able to see my item in the cart
[chrome 107.0.5304.107 windows #0-0]
[chrome 107.0.5304.107 windows #0-0] As a user, I am able to remove an item from my cart        
[chrome 107.0.5304.107 windows #0-0]    ✓ Given I am on the home page
[chrome 107.0.5304.107 windows #0-0]    ✓ * The promo banner is closed
[chrome 107.0.5304.107 windows #0-0]    ✓ When I open Today's Best Deals tab
[chrome 107.0.5304.107 windows #0-0]    ✓ * I open the first item
[chrome 107.0.5304.107 windows #0-0]    ✓ * I add item to my cart
[chrome 107.0.5304.107 windows #0-0]    ✓ * I go to my cart
[chrome 107.0.5304.107 windows #0-0]    ✓ * I remove the item
[chrome 107.0.5304.107 windows #0-0]    ✓ Then My cart is empty
[chrome 107.0.5304.107 windows #0-0]
[chrome 107.0.5304.107 windows #0-0] As a user, I am able to set quantity of an item before adding it to cart
[chrome 107.0.5304.107 windows #0-0]    ✓ Given I am on the home page
[chrome 107.0.5304.107 windows #0-0]    ✓ * The promo banner is closed
[chrome 107.0.5304.107 windows #0-0]    ✓ When I open Today's Best Deals tab
[chrome 107.0.5304.107 windows #0-0]    ✓ * I open the first item
[chrome 107.0.5304.107 windows #0-0]    ✓ * I change an item's quantity by 1
[chrome 107.0.5304.107 windows #0-0]    ✓ * I save item's quantity
[chrome 107.0.5304.107 windows #0-0]    ✓ * I add item to my cart
[chrome 107.0.5304.107 windows #0-0]    ✓ * I go to my cart
[chrome 107.0.5304.107 windows #0-0]    ✓ Then Item's new quantity is reflected in the cart     
[chrome 107.0.5304.107 windows #0-0]
[chrome 107.0.5304.107 windows #0-0] 25 passing (2m 29.9s)


Spec Files:      2 passed, 2 total (100% completed) in 00:02:35
```

#### Step 4: 5 Consecutive test runs of additional task scenarios

```text
 "spec" Reporter:
------------------------------------------------------------------
[chrome 107.0.5304.107 windows #0-0] Running: chrome (v107.0.5304.107) on windows
[chrome 107.0.5304.107 windows #0-0] Session ID: 176e207dedf97f4e3f2caada41fc2a74
[chrome 107.0.5304.107 windows #0-0]
[chrome 107.0.5304.107 windows #0-0] » \features\additional_task.feature
[chrome 107.0.5304.107 windows #0-0] Additional Task
[chrome 107.0.5304.107 windows #0-0] As a user, I am able to add an item to my cart
[chrome 107.0.5304.107 windows #0-0]    ✓ Given I am on the home page
[chrome 107.0.5304.107 windows #0-0]    ✓ * The promo banner is closed
[chrome 107.0.5304.107 windows #0-0]    ✓ When I open Today's Best Deals tab
[chrome 107.0.5304.107 windows #0-0]    ✓ * I open the first item
[chrome 107.0.5304.107 windows #0-0]    ✓ * I save the item title
[chrome 107.0.5304.107 windows #0-0]    ✓ * I add item to my cart
[chrome 107.0.5304.107 windows #0-0]    ✓ * I go to my cart
[chrome 107.0.5304.107 windows #0-0]    ✓ Then I am able to see my item in the cart
[chrome 107.0.5304.107 windows #0-0]
[chrome 107.0.5304.107 windows #0-0] As a user, I am able to remove an item from my cart        
[chrome 107.0.5304.107 windows #0-0]    ✓ Given I am on the home page
[chrome 107.0.5304.107 windows #0-0]    ✓ * The promo banner is closed
[chrome 107.0.5304.107 windows #0-0]    ✓ When I open Today's Best Deals tab
[chrome 107.0.5304.107 windows #0-0]    ✓ * I open the first item
[chrome 107.0.5304.107 windows #0-0]    ✓ * I add item to my cart
[chrome 107.0.5304.107 windows #0-0]    ✓ * I go to my cart
[chrome 107.0.5304.107 windows #0-0]    ✓ * I remove the item
[chrome 107.0.5304.107 windows #0-0]    ✓ Then My cart is empty
[chrome 107.0.5304.107 windows #0-0]
[chrome 107.0.5304.107 windows #0-0] As a user, I am able to set quantity of an item before adding it to cart
[chrome 107.0.5304.107 windows #0-0]    ✓ Given I am on the home page
[chrome 107.0.5304.107 windows #0-0]    ✓ * The promo banner is closed
[chrome 107.0.5304.107 windows #0-0]    ✓ When I open Today's Best Deals tab
[chrome 107.0.5304.107 windows #0-0]    ✓ * I open the first item
[chrome 107.0.5304.107 windows #0-0]    ✓ * I increase an item's quantity by 1
[chrome 107.0.5304.107 windows #0-0]    ✓ * I save item's quantity
[chrome 107.0.5304.107 windows #0-0]    ✓ * I add item to my cart
[chrome 107.0.5304.107 windows #0-0]    ✓ * I go to my cart
[chrome 107.0.5304.107 windows #0-0]    ✓ Then Item's new quantity is reflected in the cart     
[chrome 107.0.5304.107 windows #0-0]
[chrome 107.0.5304.107 windows #0-0] 25 passing (2m 58.5s)


Spec Files:      1 passed, 1 total (100% completed) in 00:03:03

2022-12-04T17:25:43.768Z INFO @wdio/local-runner: Shutting down spawned worker
2022-12-04T17:25:44.024Z INFO @wdio/local-runner: Waiting for 0 to shut down gracefully
2022-12-04T17:25:44.025Z INFO @wdio/local-runner: shutting down
Done in 186.17s.

 "spec" Reporter:
------------------------------------------------------------------
[chrome 107.0.5304.107 windows #0-0] Running: chrome (v107.0.5304.107) on windows
[chrome 107.0.5304.107 windows #0-0] Session ID: 67b1ba106316112f12980ecb52c453d4
[chrome 107.0.5304.107 windows #0-0]
[chrome 107.0.5304.107 windows #0-0] » \features\additional_task.feature
[chrome 107.0.5304.107 windows #0-0] Additional Task
[chrome 107.0.5304.107 windows #0-0] As a user, I am able to add an item to my cart
[chrome 107.0.5304.107 windows #0-0]    ✓ Given I am on the home page
[chrome 107.0.5304.107 windows #0-0]    ✓ * The promo banner is closed
[chrome 107.0.5304.107 windows #0-0]    ✓ When I open Today's Best Deals tab
[chrome 107.0.5304.107 windows #0-0]    ✓ * I open the first item
[chrome 107.0.5304.107 windows #0-0]    ✓ * I save the item title
[chrome 107.0.5304.107 windows #0-0]    ✓ * I add item to my cart
[chrome 107.0.5304.107 windows #0-0]    ✓ * I go to my cart
[chrome 107.0.5304.107 windows #0-0]    ✓ Then I am able to see my item in the cart
[chrome 107.0.5304.107 windows #0-0]
[chrome 107.0.5304.107 windows #0-0] As a user, I am able to remove an item from my cart        
[chrome 107.0.5304.107 windows #0-0]    ✓ Given I am on the home page
[chrome 107.0.5304.107 windows #0-0]    ✓ * The promo banner is closed
[chrome 107.0.5304.107 windows #0-0]    ✓ When I open Today's Best Deals tab
[chrome 107.0.5304.107 windows #0-0]    ✓ * I open the first item
[chrome 107.0.5304.107 windows #0-0]    ✓ * I add item to my cart
[chrome 107.0.5304.107 windows #0-0]    ✓ * I go to my cart
[chrome 107.0.5304.107 windows #0-0]    ✓ * I remove the item
[chrome 107.0.5304.107 windows #0-0]    ✓ Then My cart is empty
[chrome 107.0.5304.107 windows #0-0]
[chrome 107.0.5304.107 windows #0-0] As a user, I am able to set quantity of an item before adding it to cart
[chrome 107.0.5304.107 windows #0-0]    ✓ Given I am on the home page
[chrome 107.0.5304.107 windows #0-0]    ✓ * The promo banner is closed
[chrome 107.0.5304.107 windows #0-0]    ✓ When I open Today's Best Deals tab
[chrome 107.0.5304.107 windows #0-0]    ✓ * I open the first item
[chrome 107.0.5304.107 windows #0-0]    ✓ * I increase an item's quantity by 1
[chrome 107.0.5304.107 windows #0-0]    ✓ * I save item's quantity
[chrome 107.0.5304.107 windows #0-0]    ✓ * I add item to my cart
[chrome 107.0.5304.107 windows #0-0]    ✓ * I go to my cart
[chrome 107.0.5304.107 windows #0-0]    ✓ Then Item's new quantity is reflected in the cart     
[chrome 107.0.5304.107 windows #0-0]
[chrome 107.0.5304.107 windows #0-0] 25 passing (2m 30.7s)


Spec Files:      1 passed, 1 total (100% completed) in 00:02:35

2022-12-04T17:28:58.186Z INFO @wdio/local-runner: Shutting down spawned worker
2022-12-04T17:28:58.448Z INFO @wdio/local-runner: Waiting for 0 to shut down gracefully
2022-12-04T17:28:58.449Z INFO @wdio/local-runner: shutting down
Done in 158.25s.

 "spec" Reporter:
------------------------------------------------------------------
[chrome 107.0.5304.107 windows #0-0] Running: chrome (v107.0.5304.107) on windows
[chrome 107.0.5304.107 windows #0-0] Session ID: 6bd9d62738197362a54f97414fb75afc
[chrome 107.0.5304.107 windows #0-0]
[chrome 107.0.5304.107 windows #0-0] » \features\additional_task.feature
[chrome 107.0.5304.107 windows #0-0] Additional Task
[chrome 107.0.5304.107 windows #0-0] As a user, I am able to add an item to my cart
[chrome 107.0.5304.107 windows #0-0]    ✓ Given I am on the home page
[chrome 107.0.5304.107 windows #0-0]    ✓ * The promo banner is closed
[chrome 107.0.5304.107 windows #0-0]    ✓ When I open Today's Best Deals tab
[chrome 107.0.5304.107 windows #0-0]    ✓ * I open the first item
[chrome 107.0.5304.107 windows #0-0]    ✓ * I save the item title
[chrome 107.0.5304.107 windows #0-0]    ✓ * I add item to my cart
[chrome 107.0.5304.107 windows #0-0]    ✓ * I go to my cart
[chrome 107.0.5304.107 windows #0-0]    ✓ Then I am able to see my item in the cart
[chrome 107.0.5304.107 windows #0-0]
[chrome 107.0.5304.107 windows #0-0] As a user, I am able to remove an item from my cart        
[chrome 107.0.5304.107 windows #0-0]    ✓ Given I am on the home page
[chrome 107.0.5304.107 windows #0-0]    ✓ * The promo banner is closed
[chrome 107.0.5304.107 windows #0-0]    ✓ When I open Today's Best Deals tab
[chrome 107.0.5304.107 windows #0-0]    ✓ * I open the first item
[chrome 107.0.5304.107 windows #0-0]    ✓ * I add item to my cart
[chrome 107.0.5304.107 windows #0-0]    ✓ * I go to my cart
[chrome 107.0.5304.107 windows #0-0]    ✓ * I remove the item
[chrome 107.0.5304.107 windows #0-0]    ✓ Then My cart is empty
[chrome 107.0.5304.107 windows #0-0]
[chrome 107.0.5304.107 windows #0-0] As a user, I am able to set quantity of an item before adding it to cart
[chrome 107.0.5304.107 windows #0-0]    ✓ Given I am on the home page
[chrome 107.0.5304.107 windows #0-0]    ✓ * The promo banner is closed
[chrome 107.0.5304.107 windows #0-0]    ✓ When I open Today's Best Deals tab
[chrome 107.0.5304.107 windows #0-0]    ✓ * I open the first item
[chrome 107.0.5304.107 windows #0-0]    ✓ * I increase an item's quantity by 1
[chrome 107.0.5304.107 windows #0-0]    ✓ * I save item's quantity
[chrome 107.0.5304.107 windows #0-0]    ✓ * I add item to my cart
[chrome 107.0.5304.107 windows #0-0]    ✓ * I go to my cart
[chrome 107.0.5304.107 windows #0-0]    ✓ Then Item's new quantity is reflected in the cart     
[chrome 107.0.5304.107 windows #0-0]
[chrome 107.0.5304.107 windows #0-0] 25 passing (2m 57.6s)


Spec Files:      1 passed, 1 total (100% completed) in 00:03:02

2022-12-04T17:32:17.532Z INFO @wdio/local-runner: Shutting down spawned worker
2022-12-04T17:32:17.787Z INFO @wdio/local-runner: Waiting for 0 to shut down gracefully
2022-12-04T17:32:17.787Z INFO @wdio/local-runner: shutting down
Done in 185.04s.

 "spec" Reporter:
------------------------------------------------------------------
[chrome 107.0.5304.107 windows #0-0] Running: chrome (v107.0.5304.107) on windows
[chrome 107.0.5304.107 windows #0-0] Session ID: c6d4fbd22328af506cc83ae30320c240
[chrome 107.0.5304.107 windows #0-0]
[chrome 107.0.5304.107 windows #0-0] » \features\additional_task.feature
[chrome 107.0.5304.107 windows #0-0] Additional Task
[chrome 107.0.5304.107 windows #0-0] As a user, I am able to add an item to my cart
[chrome 107.0.5304.107 windows #0-0]    ✓ Given I am on the home page
[chrome 107.0.5304.107 windows #0-0]    ✓ * The promo banner is closed
[chrome 107.0.5304.107 windows #0-0]    ✓ When I open Today's Best Deals tab
[chrome 107.0.5304.107 windows #0-0]    ✓ * I open the first item
[chrome 107.0.5304.107 windows #0-0]    ✓ * I save the item title
[chrome 107.0.5304.107 windows #0-0]    ✓ * I add item to my cart
[chrome 107.0.5304.107 windows #0-0]    ✓ * I go to my cart
[chrome 107.0.5304.107 windows #0-0]    ✓ Then I am able to see my item in the cart
[chrome 107.0.5304.107 windows #0-0]
[chrome 107.0.5304.107 windows #0-0] As a user, I am able to remove an item from my cart        
[chrome 107.0.5304.107 windows #0-0]    ✓ Given I am on the home page
[chrome 107.0.5304.107 windows #0-0]    ✓ * The promo banner is closed
[chrome 107.0.5304.107 windows #0-0]    ✓ When I open Today's Best Deals tab
[chrome 107.0.5304.107 windows #0-0]    ✓ * I open the first item
[chrome 107.0.5304.107 windows #0-0]    ✓ * I add item to my cart
[chrome 107.0.5304.107 windows #0-0]    ✓ * I go to my cart
[chrome 107.0.5304.107 windows #0-0]    ✓ * I remove the item
[chrome 107.0.5304.107 windows #0-0]    ✓ Then My cart is empty
[chrome 107.0.5304.107 windows #0-0]
[chrome 107.0.5304.107 windows #0-0] As a user, I am able to set quantity of an item before adding it to cart
[chrome 107.0.5304.107 windows #0-0]    ✓ Given I am on the home page
[chrome 107.0.5304.107 windows #0-0]    ✓ * The promo banner is closed
[chrome 107.0.5304.107 windows #0-0]    ✓ When I open Today's Best Deals tab
[chrome 107.0.5304.107 windows #0-0]    ✓ * I open the first item
[chrome 107.0.5304.107 windows #0-0]    ✓ * I increase an item's quantity by 1
[chrome 107.0.5304.107 windows #0-0]    ✓ * I save item's quantity
[chrome 107.0.5304.107 windows #0-0]    ✓ * I add item to my cart
[chrome 107.0.5304.107 windows #0-0]    ✓ * I go to my cart
[chrome 107.0.5304.107 windows #0-0]    ✓ Then Item's new quantity is reflected in the cart     
[chrome 107.0.5304.107 windows #0-0]
[chrome 107.0.5304.107 windows #0-0] 25 passing (2m 58.9s)


Spec Files:      1 passed, 1 total (100% completed) in 00:03:03

2022-12-04T17:35:38.482Z INFO @wdio/local-runner: Shutting down spawned worker
2022-12-04T17:35:38.741Z INFO @wdio/local-runner: Waiting for 0 to shut down gracefully
2022-12-04T17:35:38.742Z INFO @wdio/local-runner: shutting down
Done in 186.46s.

 "spec" Reporter:
------------------------------------------------------------------
[chrome 107.0.5304.107 windows #0-0] Running: chrome (v107.0.5304.107) on windows
[chrome 107.0.5304.107 windows #0-0] Session ID: 99b90a3ff816dd597d8bc3f05314488f
[chrome 107.0.5304.107 windows #0-0]
[chrome 107.0.5304.107 windows #0-0] » \features\additional_task.feature
[chrome 107.0.5304.107 windows #0-0] Additional Task
[chrome 107.0.5304.107 windows #0-0] As a user, I am able to add an item to my cart
[chrome 107.0.5304.107 windows #0-0]    ✓ Given I am on the home page
[chrome 107.0.5304.107 windows #0-0]    ✓ * The promo banner is closed
[chrome 107.0.5304.107 windows #0-0]    ✓ When I open Today's Best Deals tab
[chrome 107.0.5304.107 windows #0-0]    ✓ * I open the first item
[chrome 107.0.5304.107 windows #0-0]    ✓ * I save the item title
[chrome 107.0.5304.107 windows #0-0]    ✓ * I add item to my cart
[chrome 107.0.5304.107 windows #0-0]    ✓ * I go to my cart
[chrome 107.0.5304.107 windows #0-0]    ✓ Then I am able to see my item in the cart
[chrome 107.0.5304.107 windows #0-0]
[chrome 107.0.5304.107 windows #0-0] As a user, I am able to remove an item from my cart        
[chrome 107.0.5304.107 windows #0-0]    ✓ Given I am on the home page
[chrome 107.0.5304.107 windows #0-0]    ✓ * The promo banner is closed
[chrome 107.0.5304.107 windows #0-0]    ✓ When I open Today's Best Deals tab
[chrome 107.0.5304.107 windows #0-0]    ✓ * I open the first item
[chrome 107.0.5304.107 windows #0-0]    ✓ * I add item to my cart
[chrome 107.0.5304.107 windows #0-0]    ✓ * I go to my cart
[chrome 107.0.5304.107 windows #0-0]    ✓ * I remove the item
[chrome 107.0.5304.107 windows #0-0]    ✓ Then My cart is empty
[chrome 107.0.5304.107 windows #0-0]
[chrome 107.0.5304.107 windows #0-0] As a user, I am able to set quantity of an item before adding it to cart
[chrome 107.0.5304.107 windows #0-0]    ✓ Given I am on the home page
[chrome 107.0.5304.107 windows #0-0]    ✓ * The promo banner is closed
[chrome 107.0.5304.107 windows #0-0]    ✓ When I open Today's Best Deals tab
[chrome 107.0.5304.107 windows #0-0]    ✓ * I open the first item
[chrome 107.0.5304.107 windows #0-0]    ✓ * I increase an item's quantity by 1
[chrome 107.0.5304.107 windows #0-0]    ✓ * I save item's quantity
[chrome 107.0.5304.107 windows #0-0]    ✓ * I add item to my cart
[chrome 107.0.5304.107 windows #0-0]    ✓ * I go to my cart
[chrome 107.0.5304.107 windows #0-0]    ✓ Then Item's new quantity is reflected in the cart     
[chrome 107.0.5304.107 windows #0-0]
[chrome 107.0.5304.107 windows #0-0] 25 passing (2m 58.8s)


Spec Files:      1 passed, 1 total (100% completed) in 00:03:03

2022-12-04T17:38:57.746Z INFO @wdio/local-runner: Shutting down spawned worker
2022-12-04T17:38:57.999Z INFO @wdio/local-runner: Waiting for 0 to shut down gracefully
2022-12-04T17:38:57.999Z INFO @wdio/local-runner: shutting down
Done in 186.46s.
```