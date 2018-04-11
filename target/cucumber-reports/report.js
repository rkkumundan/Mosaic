$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("mosaic.feature");
formatter.feature({
  "line": 1,
  "name": "To test the Mosaic Login, Logout and Currency converter",
  "description": "",
  "id": "to-test-the-mosaic-login,-logout-and-currency-converter",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "verify if user able to open the mosaic page",
  "description": "",
  "id": "to-test-the-mosaic-login,-logout-and-currency-converter;verify-if-user-able-to-open-the-mosaic-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "unsigned in user opens the mosiac url in chrome web browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user should be able to see the page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user should close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_opens_the_mosiac_url_in_chrome_web_browser()"
});
formatter.result({
  "duration": 6276586079,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_should_be_able_to_see_the_page()"
});
formatter.result({
  "duration": 14016876,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_should_close_the_browser()"
});
formatter.result({
  "duration": 599598932,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "verify if user able to login the page",
  "description": "",
  "id": "to-test-the-mosaic-login,-logout-and-currency-converter;verify-if-user-able-to-login-the-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "unsigned in user opens the mosiac url in chrome web browser",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "unsigned logs in the mosiac with \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "submits the page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user should be logged in successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user should close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "to-test-the-mosaic-login,-logout-and-currency-converter;verify-if-user-able-to-login-the-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 17,
      "id": "to-test-the-mosaic-login,-logout-and-currency-converter;verify-if-user-able-to-login-the-page;;1"
    },
    {
      "cells": [
        "rkkumundan",
        "password"
      ],
      "line": 18,
      "id": "to-test-the-mosaic-login,-logout-and-currency-converter;verify-if-user-able-to-login-the-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "verify if user able to login the page",
  "description": "",
  "id": "to-test-the-mosaic-login,-logout-and-currency-converter;verify-if-user-able-to-login-the-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "unsigned in user opens the mosiac url in chrome web browser",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "unsigned logs in the mosiac with \"rkkumundan\" and \"password\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "submits the page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user should be logged in successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user should close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_opens_the_mosiac_url_in_chrome_web_browser()"
});
formatter.result({
  "duration": 5557310913,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rkkumundan",
      "offset": 34
    },
    {
      "val": "password",
      "offset": 51
    }
  ],
  "location": "StepDefinations.unsigned_logs_in_the_mosiac_with_and(String,String)"
});
formatter.result({
  "duration": 157175349,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.submits_the_page()"
});
formatter.result({
  "duration": 300938013,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_should_be_logged_in_successfully()"
});
formatter.result({
  "duration": 44211257,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_should_close_the_browser()"
});
formatter.result({
  "duration": 649675392,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "verify if user able to see currency table in the dashboard page",
  "description": "",
  "id": "to-test-the-mosaic-login,-logout-and-currency-converter;verify-if-user-able-to-see-currency-table-in-the-dashboard-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "unsigned in user opens the mosiac url in chrome web browser",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "unsigned logs in the mosiac with \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "submits the page",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user should be logged in successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user should be able to see the currency table in the dashboard page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user should close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "to-test-the-mosaic-login,-logout-and-currency-converter;verify-if-user-able-to-see-currency-table-in-the-dashboard-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 29,
      "id": "to-test-the-mosaic-login,-logout-and-currency-converter;verify-if-user-able-to-see-currency-table-in-the-dashboard-page;;1"
    },
    {
      "cells": [
        "rkkumundan",
        "password"
      ],
      "line": 30,
      "id": "to-test-the-mosaic-login,-logout-and-currency-converter;verify-if-user-able-to-see-currency-table-in-the-dashboard-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 30,
  "name": "verify if user able to see currency table in the dashboard page",
  "description": "",
  "id": "to-test-the-mosaic-login,-logout-and-currency-converter;verify-if-user-able-to-see-currency-table-in-the-dashboard-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "unsigned in user opens the mosiac url in chrome web browser",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "unsigned logs in the mosiac with \"rkkumundan\" and \"password\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "submits the page",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user should be logged in successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user should be able to see the currency table in the dashboard page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user should close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_opens_the_mosiac_url_in_chrome_web_browser()"
});
formatter.result({
  "duration": 5492517000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rkkumundan",
      "offset": 34
    },
    {
      "val": "password",
      "offset": 51
    }
  ],
  "location": "StepDefinations.unsigned_logs_in_the_mosiac_with_and(String,String)"
});
formatter.result({
  "duration": 180632598,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.submits_the_page()"
});
formatter.result({
  "duration": 189019877,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_should_be_logged_in_successfully()"
});
formatter.result({
  "duration": 40658845,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_should_be_able_to_see_the_currency_table_in_the_dashboard_page()"
});
formatter.result({
  "duration": 37070735,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_should_close_the_browser()"
});
formatter.result({
  "duration": 602153580,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 33,
  "name": "verify if user able to logout from mosaic",
  "description": "",
  "id": "to-test-the-mosaic-login,-logout-and-currency-converter;verify-if-user-able-to-logout-from-mosaic",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "unsigned in user opens the mosiac url in chrome web browser",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "unsigned logs in the mosiac with \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "submits the page",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user should be logged in successfully",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "user click on logout button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "user should logout successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "user should close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 41,
  "name": "",
  "description": "",
  "id": "to-test-the-mosaic-login,-logout-and-currency-converter;verify-if-user-able-to-logout-from-mosaic;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 42,
      "id": "to-test-the-mosaic-login,-logout-and-currency-converter;verify-if-user-able-to-logout-from-mosaic;;1"
    },
    {
      "cells": [
        "rkkumundan",
        "password"
      ],
      "line": 43,
      "id": "to-test-the-mosaic-login,-logout-and-currency-converter;verify-if-user-able-to-logout-from-mosaic;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 43,
  "name": "verify if user able to logout from mosaic",
  "description": "",
  "id": "to-test-the-mosaic-login,-logout-and-currency-converter;verify-if-user-able-to-logout-from-mosaic;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "unsigned in user opens the mosiac url in chrome web browser",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "unsigned logs in the mosiac with \"rkkumundan\" and \"password\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "submits the page",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user should be logged in successfully",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "user click on logout button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "user should logout successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "user should close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.unsigned_in_user_opens_the_mosiac_url_in_chrome_web_browser()"
});
formatter.result({
  "duration": 5599726106,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rkkumundan",
      "offset": 34
    },
    {
      "val": "password",
      "offset": 51
    }
  ],
  "location": "StepDefinations.unsigned_logs_in_the_mosiac_with_and(String,String)"
});
formatter.result({
  "duration": 181600017,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.submits_the_page()"
});
formatter.result({
  "duration": 242488553,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_should_be_logged_in_successfully()"
});
formatter.result({
  "duration": 47415611,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_click_on_logout_button()"
});
formatter.result({
  "duration": 88216802,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_should_logout_successfully()"
});
formatter.result({
  "duration": 6580060,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_should_close_the_browser()"
});
formatter.result({
  "duration": 615278894,
  "status": "passed"
});
});