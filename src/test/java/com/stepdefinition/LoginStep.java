package com.stepdefinition;


import com.baseclass.pkg.LibraryClass;
import com.pages.pkg.LoginPage;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginStep extends LibraryClass{
	LoginPage page;
	
	
	@Given("Launch the url")
	public void launch_the_url() {
	    browserSetUp();
	}

	@When("Enter {string} and {string}")
	public void enter_and(String email, String password) throws InterruptedException {
		
		page = new LoginPage(driver);
		page.login(email, password);
	}

	@Then("clik on login button")
	public void clik_on_login_button() {
		page.clickLoginbt();
	    
	}


}
