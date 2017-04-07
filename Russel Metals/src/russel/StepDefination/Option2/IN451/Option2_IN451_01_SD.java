package russel.StepDefination.Option2.IN451;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import russel.base.Browser_setup;
import russel.pom.in451.option2.IN451_01_option_02_pom;

public class Option2_IN451_01_SD extends Browser_setup {
	
	IN451_01_option_02_pom prog2 = new IN451_01_option_02_pom (driver);
	
	
	@Given("^User enter \"(.*?)\" in part number text box$")
	public void user_enter_in_part_number_text_box(String  part_number) {
		
		prog2.partrNumberTextBox(part_number);
		
		
	}

	@Then("^User get an error message page$")
	public void user_get_an_error_message_page() {
		
		prog2.alertMessageForInvalid();
		
		
	}

}
