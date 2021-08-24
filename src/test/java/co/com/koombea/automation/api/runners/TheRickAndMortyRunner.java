package co.com.koombea.automation.api.runners;

import cucumber.api.CucumberOptions;


import net.serenitybdd.cucumber.CucumberWithSerenity;
import org.junit.runner.RunWith;


@RunWith(CucumberWithSerenity.class)
@CucumberOptions(
        features = {"src/test/resources/features/the_rick_and_morty.feature"},
        glue = {"co.com.koombea.automation.api.stepdefinitions"},
        plugin = {
                "pretty",
                "html:result/html/cucumber.html"
        },
        monochrome = true
)



public class TheRickAndMortyRunner {
}
