package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
	@CucumberOptions(features = "./src/test/java/features/",tags = {"@sprint, @data"},glue = {
	 "steps" },
	 dryRun = false,
	 monochrome = true,
	 plugin = {"pretty", "html:test-output"}
	 )
	public class loginTest {
}
//for and we need to mention tag in both file//