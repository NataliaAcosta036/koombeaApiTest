package co.com.koombea.automation.api.stepdefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.specification.RequestSpecification;
import io.restassured.response.Response;
import org.apache.http.HttpStatus;
import org.junit.Assert;
import static io.restassured.RestAssured.given;


public class RickAndMortyStepDefinition {

    RequestSpecification request;
    Response response;
    String respuesta;
    Response respuestaCode;

    @Given("the character (.*)$")
    public void theCharacter(String url) {
        RestAssured.baseURI = url;
    }

    @When("the user wants to get the status of the character with (.*)$")
    public void theUserWantsToGetTheStatusOfTheCharacterWith(String path) {
        respuesta = given().get(path).then().extract().jsonPath().get("status");
    }

    @Then("the user should see that he is (.*)$")
    public void theUserShouldSeeThatHeIsStatus(String status) {
        Assert.assertEquals(status, this.respuesta);
    }

    @When("the user wants to get the statusCode of the character with (.*)$")
    public void theUserWantsToGetTheStatusCodeOfTheCharacterWith(String path) {
        respuestaCode= given().get(path);
    }

    @Then("the user should see that her statusCode is (.*)$")
    public void theUserShouldSeeThatHerStatusCode(int status) {
        Assert.assertEquals(status, respuestaCode.getStatusCode());
    }

    @Then("the user should see that the statusCode is different to (.*)$")
    public void theUserShouldSeeThatTheStatusCodeIsDifferentTo(int status) {
        Assert.assertNotEquals(status, respuestaCode.getStatusCode());
    }
}


