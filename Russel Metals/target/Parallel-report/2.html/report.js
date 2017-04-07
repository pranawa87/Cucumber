$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/pranawa/workspace-neon/Russel Metals/Login/login.feature");
formatter.feature({
  "line": 1,
  "name": "Test Russel Metal Inc. Application",
  "description": "",
  "id": "test-russel-metal-inc.-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "To test the functionality of login page",
  "description": "",
  "id": "test-russel-metal-inc.-application;to-test-the-functionality-of-login-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@Test_-Ve"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "User enters \"\u003cUser_Name\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User clicks on Submit button of login page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Error message should be shown",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "test-russel-metal-inc.-application;to-test-the-functionality-of-login-page;",
  "rows": [
    {
      "cells": [
        "User_Name",
        "Password"
      ],
      "line": 26,
      "id": "test-russel-metal-inc.-application;to-test-the-functionality-of-login-page;;1"
    },
    {
      "cells": [
        "JAMESR",
        "PEMBROKE"
      ],
      "line": 27,
      "id": "test-russel-metal-inc.-application;to-test-the-functionality-of-login-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User Launch the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User goto Russel Metal Application",
  "keyword": "When "
});
formatter.match({
  "location": "BrowserLaunch_SD.user_Launch_the_browser()"
});
formatter.result({
  "duration": 3382662857,
  "status": "passed"
});
formatter.match({
  "location": "BrowserLaunch_SD.user_goto_Russel_Metal_Application()"
});
formatter.result({
  "duration": 4887456810,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "To test the functionality of login page",
  "description": "",
  "id": "test-russel-metal-inc.-application;to-test-the-functionality-of-login-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@Test_-Ve"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "User enters \"JAMESR\" and \"PEMBROKE\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User clicks on Submit button of login page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Error message should be shown",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_Page_SD1.user_is_on_Login_page()"
});
formatter.result({
  "duration": 2064989,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JAMESR",
      "offset": 13
    },
    {
      "val": "PEMBROKE",
      "offset": 26
    }
  ],
  "location": "Login_Page_SD1.user_enters_and(String,String)"
});
formatter.result({
  "duration": 415277516,
  "status": "passed"
});
formatter.match({
  "location": "Login_Page_SD1.user_clicks_on_Submit_button_of_login_page()"
});
formatter.result({
  "duration": 85646990,
  "status": "passed"
});
formatter.match({
  "location": "Login_Page_SD1.error_message_should_be_shown()"
});
formatter.result({
  "duration": 36985910,
  "status": "passed"
});
});