Feature: Login
  As a user, I want to be able to login into vytrack under
  different roles with username and password

  #Any step that was implemented before, can be reused
  #If test step has yellow background, that means it doesnt have implementation yet
  #click command + option + L to organize code, save like in java
  #can have as many scenarios as neccesary
  #passing parameters/strings in "some word" allows us to reuse test steps

  Scenario: Login as store manager
    Given user is on the login page
    Then user logs in as store manager
    And user verifies that "Dashboard" page subtitle is displayed

  Scenario: Login as driver
    Given user is on the login page
    Then user logs in as driver
    And user verifies that "Dashboard" page subtitle is displayed

    Scenario: Login as sales manager
      Given user is on the login page
      Then user logs in as sales manager
      And user verifies that "Dashboard" page subtitle is displayed
