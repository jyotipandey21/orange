package util;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Browser {

	
	 static WebDriver driver;
	 

		public static WebDriver launch() {
			System.setProperty("webdriver.chrome.driver", "driver\\chromedriver.exe");
			driver=new ChromeDriver();
			driver.get("https://www.objectspy.com/register/signup.php");
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			return driver;
		
		}

	}

	

