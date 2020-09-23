$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("os.feature");
formatter.feature({
  "line": 2,
  "name": "As a user I want to login a",
  "description": "objectspy so that valid user can login",
  "id": "as-a-user-i-want-to-login-a",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@sprint"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Valid users should be able to login",
  "description": "",
  "id": "as-a-user-i-want-to-login-a;valid-users-should-be-able-to-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on objectspy",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter Username and Password",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "click on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I must see dashboardpage Page",
  "keyword": "Then "
});
formatter.match({
  "location": "login.i_am_on_objectspy()"
});
formatter.result({
  "duration": 8135529800,
  "status": "passed"
});
formatter.match({
  "location": "login.i_enter_Username_and_Password()"
});
formatter.result({
  "duration": 258335800,
  "status": "passed"
});
formatter.match({
  "location": "login.click_on_signin_button()"
});
formatter.result({
  "duration": 3810907600,
  "status": "passed"
});
formatter.match({
  "location": "login.i_must_see_dashboardpage_Page()"
});
formatter.result({
  "duration": 19300,
  "status": "passed"
});
formatter.uri("passdata.feature");
formatter.feature({
  "line": 2,
  "name": "As a user I want to login a",
  "description": "objectspy so that valid user can login",
  "id": "as-a-user-i-want-to-login-a",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@data"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Valid users should be able to login",
  "description": "",
  "id": "as-a-user-i-want-to-login-a;valid-users-should-be-able-to-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on objectspy",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I must see dashboard Page display",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "as-a-user-i-want-to-login-a;valid-users-should-be-able-to-login;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 10,
      "id": "as-a-user-i-want-to-login-a;valid-users-should-be-able-to-login;;1"
    },
    {
      "cells": [
        "jyotipan21@gmail.com",
        "bhagwan21"
      ],
      "line": 11,
      "id": "as-a-user-i-want-to-login-a;valid-users-should-be-able-to-login;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Valid users should be able to login",
  "description": "",
  "id": "as-a-user-i-want-to-login-a;valid-users-should-be-able-to-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@data"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on objectspy",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter \"jyotipan21@gmail.com\" and \"bhagwan21\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I must see dashboard Page display",
  "keyword": "Then "
});
formatter.match({
  "location": "login.i_am_on_objectspy()"
});
formatter.result({
  "duration": 5373915900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jyotipan21@gmail.com",
      "offset": 9
    },
    {
      "val": "bhagwan21",
      "offset": 36
    }
  ],
  "location": "login.i_enter_and(String,String)"
});
formatter.result({
  "duration": 869350000,
  "status": "passed"
});
formatter.match({
  "location": "login.i_click_on_signin_button()"
});
formatter.result({
  "duration": 2235839500,
  "status": "passed"
});
formatter.match({
  "location": "login.i_must_see_dashboard_Page_display()"
});
formatter.result({
  "duration": 19846600,
  "status": "passed"
});
});