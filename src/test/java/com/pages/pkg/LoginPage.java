package com.pages.pkg;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
	
	WebDriver driver;
	
	public LoginPage(WebDriver adriver) {
		driver = adriver;
		PageFactory.initElements(driver, this);
	}
	
	@FindBy (xpath="//input[@name='email']")
	WebElement emailIdxpath;
	@FindBy (xpath="//input[@name='password']")
	WebElement passwordxpath;
	@FindBy (xpath="//div[@class='ui fluid large blue submit button']")
	WebElement loginbtxpath;
	
	public void login(String email, String password) throws InterruptedException {
		emailIdxpath.sendKeys(email);
		passwordxpath.sendKeys(password);
	}
	public void clickLoginbt() {
		loginbtxpath.click();
	}
}
