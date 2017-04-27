/**
* The Browser Launch program implements an application that
* simply Launch the Browser and open URL into that
*
* @author  Pranawa Mishra
* @version 1.0
* @since   01-March-2017
*/

package russel.base;

import java.util.ResourceBundle;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;


public class Browser_setup {

	public static WebDriver driver;
	//sfsdfsd

	ResourceBundle launch = ResourceBundle.getBundle("Properties file/browser_setup");

	public void browser() {

		if (launch.getString("browser").equalsIgnoreCase("chrome")) {
			System.setProperty("webdriver.chrome.driver", "./Drivers/chromedriver.exe");
			driver = new ChromeDriver();

		} else if (launch.getString("browser").equalsIgnoreCase("firefox")) {
			System.setProperty("webdriver.firefox.marionette", "./Drivers/geckodriver.exe");
			driver = new FirefoxDriver();
		} else {
			System.out.println("Setup browser properly from this option: chrome or firefox");
		}

	}

	public void hitURL() {
		driver.get(launch.getString("url"));
		driver.manage().timeouts().implicitlyWait(200, TimeUnit.SECONDS);
	}

}
