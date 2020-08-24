$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/testCase.feature");
formatter.feature({
  "name": "To test the Orange HRM Application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "To check whether user is anble to login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tc01"
    }
  ]
});
formatter.step({
  "name": "Launch the url",
  "keyword": "Given "
});
formatter.step({
  "name": "Enter \"\u003cemail\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "clik on login button",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "vrroyal1525@gmail.com",
        "Amma1234"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To check whether user is anble to login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tc01"
    }
  ]
});
formatter.step({
  "name": "Launch the url",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepdefinition.LoginStep.launch_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter \"vrroyal1525@gmail.com\" and \"Amma1234\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepdefinition.LoginStep.enter_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clik on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepdefinition.LoginStep.clik_on_login_button()"
});
formatter.result({
  "status": "passed"
});
});