/**
* This is Page Object Model (POM) for Login in Application.
* It also Known as POM for Login Page Program (It comes Just after project launch)
*
* @author  Pranawa Mishra
* @version 1.0
* @since   02-March-2017
*/

package russel.pom.in451.option2;

import java.util.ResourceBundle;

import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;

public class IN451_01_option_02_pom {

	WebDriver driver;
	ResourceBundle bundle = ResourceBundle.getBundle("Properties file/option2");
	ResourceBundle alert = ResourceBundle.getBundle("Properties file/error_messages");

	public IN451_01_option_02_pom(WebDriver driver) {

		this.driver = driver;

	}
	 public void screenName()
	 {
		String Screen_name= driver.findElement(By.cssSelector(bundle.getString("program_name_IN451_01_option_two_label_css"))).getText(); //Find Screen/Program Name that appears on screen
		String page_title= driver.findElement(By.cssSelector(bundle.getString("page_title_lbl_css"))).getText(); //Find Screen/Program Title that appears on top of screen
		System.out.println("Current Screen is :- " +Screen_name + "And Page Title is :- " + page_title);
	 }
	
	 
	 public void partrNumberTextBox(String part_number )
	 {	
		 driver.findElement(By.cssSelector(bundle.getString("part_number_text_box_css"))).clear();
		 driver.findElement(By.cssSelector(bundle.getString("part_number_text_box_css"))).sendKeys(part_number); //Enter value in Part Number text box
	 }
	 
	 public void cancelButton()
	 {
		 driver.findElement(By.xpath(bundle.getString("in451_01_cancel_btn_xpath"))).click(); //Click at Cancel Button 
	 }
	 public void searchButton()
	 {
		 driver.findElement(By.xpath(bundle.getString("in451_01_search_btn_xpath"))).click(); //Click at Search Button 
	 }
	 
	
	 public void alertMessageForInvalid()
	 
	 {
		
		 try 
			{
		 
			 String blank_actual_message =  driver.findElement(By.cssSelector(alert.getString("error_message_css"))).getText(); //Get Alert Message text 
			 System.out.println("An Error Message appeared, Stating that : "+blank_actual_message);
		 
			}
		 catch (NoSuchElementException e)
			{
				System.out.println("No Error is appeared on IN451-01 Screen, Scenario Failed so Browser is getting close");
				driver.close();
				
				
			}
	 }
}
