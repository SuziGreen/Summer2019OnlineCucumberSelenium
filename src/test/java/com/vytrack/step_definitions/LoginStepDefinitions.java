package com.vytrack.step_definitions;

import io.cucumber.java.en.*;


public class LoginStepDefinitions {

    @Given("user is on the login page")
    public void user_is_on_the_login_page() {
        System.out.println("Login Page Landed");

    }

    @Then("user logs in as store manager")
    public void user_logs_in_as_store_manager() {
        System.out.println("Logged in as Store Manager");

    }
    @Then("user verifies that {string} page subtitle is displayed")
    public void user_verifies_that_page_subtitle_is_displayed(String string) {
        System.out.println("Verified page Subtitle " + string);

    }


}
