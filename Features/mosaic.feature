Feature: To test the Mosaic Login, Logout and Currency converter

@Login 
Scenario: verify if user able to open the mosaic page
Given unsigned in user opens the mosiac url in chrome web browser
Then user should be able to see the page
And user should close the browser

@Login
Scenario Outline: verify if user able to login the page
Given unsigned in user opens the mosiac url in chrome web browser
When unsigned logs in the mosiac with "<username>" and "<password>"
And submits the page
Then user should be logged in successfully
And user should close the browser
Examples:
    | username  | password  |
    | rkkumundan| password  |
   
@Login 
Scenario Outline: verify if user able to see currency table in the dashboard page
Given unsigned in user opens the mosiac url in chrome web browser
When unsigned logs in the mosiac with "<username>" and "<password>"
And submits the page
Then user should be logged in successfully
And user should be able to see the currency table in the dashboard page
And user should close the browser
Examples:
    | username  | password  |
    | rkkumundan| password  |
 
@Login    
Scenario Outline: verify if user able to logout from mosaic
Given unsigned in user opens the mosiac url in chrome web browser
When unsigned logs in the mosiac with "<username>" and "<password>"
And submits the page
And user should be logged in successfully
And user click on logout button
Then user should logout successfully
And user should close the browser
Examples:
    | username  | password  |
    | rkkumundan| password  |