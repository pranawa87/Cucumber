import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(strict = true,
features = {"D:/pranawa/russel git/Russel Metals/Login/Menu.feature"},
plugin = {"json:target/Parallel-report/2.json"},
monochrome = false,
 tags = {}, glue = { "russel.StepDefination.Option1.IN451" })
public class Parallel02IT {
}
