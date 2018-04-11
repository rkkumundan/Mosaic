package app.mosiac.main;

import static org.hamcrest.Matchers.equalTo;
import static org.junit.Assert.assertThat;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class Main {
	WebDriver driver;
	public Main(WebDriver driver){
		this.driver=driver;     
	}
	public void user_opens_mosaic_url() {
		driver.get("http://mosaic-test-app.s3-website.eu-west-2.amazonaws.com/");
		driver.manage().timeouts().implicitlyWait(120, TimeUnit.SECONDS);
		driver.manage().window().maximize();
	}
	public void user_logs_in_with_userid_password(String username, String password) {
		driver.findElement(By.xpath("//input[@placeholder='username']")).sendKeys(username);
		driver.findElement(By.xpath("//input[@placeholder='password']")).sendKeys(password);		
	}
	public void user_submits_login_page() {
		driver.findElement(By.xpath("//*[@type='submit']")).click();
	}
	public void user_is_in_sigin_page(){
		String ActualTitle = driver.getTitle();
		String ExpectedTitle = "Dashboard Template for Bootstrap";
		assertThat(ActualTitle, equalTo(ExpectedTitle));
	}
	public void user_logged_in_page(){
		String ActualTitle = driver.findElement(By.xpath("//h1[contains(text(),'Dashboard')]")).getText();
		System.out.println(ActualTitle);
		String ExpectedTitle = "Dashboard";
		assertThat(ActualTitle, equalTo(ExpectedTitle));
	}
	public void user_see_currency_converter(){
		String Actual = driver.findElement(By.cssSelector("body > div > div > main > h2")).getText();
		String Expected = "Today's rates";
		assertThat(Actual, equalTo(Expected));
	}
	public void user_tries_logout() {
		driver.findElement(By.linkText("Sign out")).click();
	}
	public void user_closes_browser() {
		driver.quit();
	}
	
}
