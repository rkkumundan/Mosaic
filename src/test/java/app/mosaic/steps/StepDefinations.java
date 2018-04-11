package app.mosaic.steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import app.mosiac.main.Main;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinations {
	public WebDriver driver = new ChromeDriver();
	Main M = new Main(driver);
	@Given("^unsigned in user opens the mosiac url in chrome web browser$")
	public void unsigned_in_user_opens_the_mosiac_url_in_chrome_web_browser() throws Throwable {
		M.user_opens_mosaic_url();
	}

	@Then("^user should be able to see the page$")
	public void user_should_be_able_to_see_the_page() throws Throwable {
		M.user_is_in_sigin_page();
	}
	@When("^submits the page$")
	public void submits_the_page(){
	    M.user_submits_login_page();
	}
	@When("^unsigned logs in the mosiac with \"(.*?)\" and \"(.*?)\"$")
	public void unsigned_logs_in_the_mosiac_with_and(String arg1, String arg2) {
		M.user_logs_in_with_userid_password(arg1, arg2);
	}

	@Then("^user should be logged in successfully$")
	public void user_should_be_logged_in_successfully(){
		M.user_logged_in_page();
	}

	@Then("^user should be able to see the currency table in the dashboard page$")
	public void user_should_be_able_to_see_the_currency_table_in_the_dashboard_page()  {
		M.user_see_currency_converter();
	}
	
	@When("^user click on logout button$")
	public void user_click_on_logout_button() {
		M.user_tries_logout();
	}

	@Then("^user should logout successfully$")
	public void user_should_logout_successfully(){
		M.user_is_in_sigin_page();
	}
	@Then("^user should close the browser$")
	public void user_should_close_the_browser(){
	    M.user_closes_browser();
	}
}
