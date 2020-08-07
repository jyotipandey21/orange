package page;

import java.io.File;

import org.codehaus.plexus.util.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LoginPage {

	static	WebDriver driver;
	
	    public LoginPage() {
			this.driver=driver;
			
		}
		@FindBy(how=How.XPATH,using="//*[@id=\"login\"]/form/div[1]/input")
		 WebElement EmailAddress_Locator;
		 @FindBy(how=How.XPATH,using="//*[@id=\"login\"]/form/div[2]/input")
		 WebElement PassWord_Locator;
		 @FindBy(how=How.XPATH,using="//*[@id=\"login\"]/form/button")
		 WebElement Login_Locator;



	public void address(String email) {
		EmailAddress_Locator.sendKeys(email);
	}
	public void password(String password) {
		PassWord_Locator.sendKeys(password);
	}
	public void login_Element() {
		Login_Locator.click();
	}
	public void screenShot(WebDriver driver, String fileWithPath) throws Exception {
		// Convert web driver object to TakeScreenshot
		TakesScreenshot scrShot = ((TakesScreenshot) driver);
		// Call getScreenshotAs method to create image file
		File SrcFile = scrShot.getScreenshotAs(OutputType.FILE);
		// Move image file to new destination
		File DestFile = new File(fileWithPath);
		// Copy file at destination
		FileUtils.copyFile(SrcFile, DestFile);

	}
	}
	

	
	
	
	

