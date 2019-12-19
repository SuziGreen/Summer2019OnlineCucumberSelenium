$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/SmokeTest.feature");
formatter.feature({
  "name": "Smoke Test",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke_test"
    },
    {
      "name": "#when"
    },
    {
      "name": "placed"
    },
    {
      "name": "here"
    },
    {
      "name": "automatically"
    },
    {
      "name": "applies"
    },
    {
      "name": "to"
    },
    {
      "name": "all"
    },
    {
      "name": "scenarios"
    }
  ]
});
formatter.background({
  "name": "open login page and login as store manager",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in as store manager",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_as_store_manager()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify dashboard page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke_test"
    },
    {
      "name": "#when"
    },
    {
      "name": "placed"
    },
    {
      "name": "here"
    },
    {
      "name": "automatically"
    },
    {
      "name": "applies"
    },
    {
      "name": "to"
    },
    {
      "name": "all"
    },
    {
      "name": "scenarios"
    }
  ]
});
formatter.step({
  "name": "user verifies that \"Dashboard\" page subtitle is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_verifies_that_page_subtitle_is_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "open login page and login as store manager",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in as store manager",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_as_store_manager()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify  Manage Dashboard page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke_test"
    },
    {
      "name": "#when"
    },
    {
      "name": "placed"
    },
    {
      "name": "here"
    },
    {
      "name": "automatically"
    },
    {
      "name": "applies"
    },
    {
      "name": "to"
    },
    {
      "name": "all"
    },
    {
      "name": "scenarios"
    }
  ]
});
formatter.step({
  "name": "user navigates to \"Dashboards\" then to \"Manage Dashboards\"",
  "keyword": "When "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigates_to_then_to(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that \"All Manage Dashboards\" page subtitle is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_verifies_that_page_subtitle_is_displayed(String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[All ]Manage Dashboards\u003e but was:\u003c[]Manage Dashboards\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.vytrack.step_definitions.LoginStepDefinitions.user_verifies_that_page_subtitle_is_displayed(LoginStepDefinitions.java:38)\r\n\tat ✽.user verifies that \"All Manage Dashboards\" page subtitle is displayed(file:src/test/resources/features/SmokeTest.feature:15)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});