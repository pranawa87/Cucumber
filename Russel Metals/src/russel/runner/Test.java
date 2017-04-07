package russel.runner;


import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@CucumberOptions(plugin = {"json:target/cucumber.json"})

public class Test {
	
	//plugin={"html:target/cucumber-html-report" }, , "html:target/cucumber-report-html"
	
	//json:target/cucumber.json
	
	/*@RunWith(Cucumber.class)
	@CucumberOptions(features={"all_Feature_File/login.feature"},plugin = {"json:target/cucumber.json"},


	glue={"russel.StepDefination.Option1.IN451", "russel.StepDefination.Option2.IN451"},  monochrome = false)
*/
}
