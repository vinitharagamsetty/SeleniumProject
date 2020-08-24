Feature: To test the Orange HRM Application

@tc01
Scenario Outline: To check whether user is anble to login
Given Launch the url
When Enter "<email>" and "<password>"
Then clik on login button

Examples:
|email|password|
|vrroyal1525@gmail.com|Amma1234|



