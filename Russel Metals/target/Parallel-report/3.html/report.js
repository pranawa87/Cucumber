$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/pranawa/workspace-neon/Russel Metals/Login/Menu.feature");
formatter.feature({
  "line": 1,
  "name": "Test Russel Metal Inc. Application",
  "description": "",
  "id": "test-russel-metal-inc.-application",
  "keyword": "Feature"
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
formatter.step({
  "line": 6,
  "name": "User enters \"JAMESR\" and \"PEMBROKE\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User clicks on Submit button of login page",
  "keyword": "And "
});
formatter.match({
  "location": "BrowserLaunch_SD.user_Launch_the_browser()"
});
formatter.result({
  "duration": 3861712986,
  "status": "passed"
});
formatter.match({
  "location": "BrowserLaunch_SD.user_goto_Russel_Metal_Application()"
});
formatter.result({
  "duration": 4463007105,
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
  "duration": 365634349,
  "status": "passed"
});
formatter.match({
  "location": "Login_Page_SD1.user_clicks_on_Submit_button_of_login_page()"
});
formatter.result({
  "duration": 92099466,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "To test the functionality of Menu page",
  "description": "",
  "id": "test-russel-metal-inc.-application;to-test-the-functionality-of-menu-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@First"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User is on Menu page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User clicks on first link for IN451 program",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User navigates to IN451 page",
  "keyword": "Then "
});
formatter.match({
  "location": "ProgramMenuPage_SD.user_is_on_Menu_page()"
});
formatter.result({
  "duration": 2863550670,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "451",
      "offset": 32
    }
  ],
  "location": "ProgramMenuPage_SD.user_clicks_on_first_link_for_IN_program(int)"
});
formatter.result({
  "duration": 76488017,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "451",
      "offset": 20
    }
  ],
  "location": "ProgramMenuPage_SD.user_navigates_to_IN_page(int)"
});
formatter.result({
  "duration": 145746,
  "status": "passed"
});
});