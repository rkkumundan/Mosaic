package app.mosiac.runner;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith (Cucumber.class)
@CucumberOptions(plugin={"pretty", "html:target/cucumber-reports"}, features = "Features", 
						glue="app.mosaic.steps", monochrome = true, tags = {"@Login"})

public class MosaicRunner {

}
