package steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.runtime.junit.Assertions;
import junit.framework.Assert;
import page.LoginPage;
import util.Browser;

public class login {
	
WebDriver driver;
LoginPage page;

@Given("^I am on objectspy$")
public void i_am_on_objectspy() throws Throwable {
	driver=Browser.launch();
	   page=PageFactory.initElements(driver,LoginPage.class );
   
}

@When("^I enter Username and Password$")
public void i_enter_Username_and_Password() throws Throwable {
	page=PageFactory.initElements(driver,LoginPage.class );
	page.address("jyotipan21@gmail.com");
	page.password("bhagwan21");
}

@When("^click on signin button$")
public void click_on_signin_button() throws Throwable {
   page.login_Element();
}

@Then("^I must see dashboardpage Page$")
public void i_must_see_dashboardpage_Page() throws Throwable {
   
}

@When("^I enter \"([^\"]*)\" and \"([^\"]*)\"$")
public void i_enter_and(String email, String password) throws Throwable {
	page=PageFactory.initElements(driver,LoginPage.class );
	page.address(email);
	page.password(password);
	page.screenShot(driver,"C:\\Users\\Jyoti\\Desktop\\screen\\test.jpg" );
}
@When("^I click on signin button$")
public void i_click_on_signin_button() throws Throwable {
	page.login_Element();
}

@Then("^I must see dashboard Page display$")
public void i_must_see_dashboard_Page_display() throws Throwable {
	String expected="ObjectSpy! |";
	   LoginPage.equals("wrong page ",driver.getTitle(),expected);

}
}



















