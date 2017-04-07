import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(strict = true,
features = {"D:/pranawa/workspace-neon/Russel Metals/Login/login.feature:16"},
plugin = {"json:target/Parallel-report/1.json", "html:target/Parallel-report/1.html"},
monochrome = false,
glue = { "russel.StepDefination.Option1.IN451" })
public class Parallel01IT {
}
