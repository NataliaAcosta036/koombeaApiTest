$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/the_rick_and_morty.feature");
formatter.feature({
  "name": "The Rick and Morty Api automation",
  "description": "  I, as a user, want to get and verify the information about Rick and Morty characters",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Information about Cousin Nicky",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test1"
    }
  ]
});
formatter.step({
  "name": "the character \u003curl\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "the user wants to get the status of the character with \u003cpath\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "the user should see that he is \u003cstatus\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "status"
      ]
    },
    {
      "cells": [
        "https://rickandmortyapi.com",
        "/api/character/76",
        "Dead"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Information about Cousin Nicky",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test1"
    }
  ]
});
formatter.step({
  "name": "the character https://rickandmortyapi.com",
  "keyword": "Given "
});
formatter.match({
  "location": "RickAndMortyStepDefinition.theCharacter(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user wants to get the status of the character with /api/character/76",
  "keyword": "When "
});
formatter.match({
  "location": "RickAndMortyStepDefinition.theUserWantsToGetTheStatusOfTheCharacterWith(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see that he is Dead",
  "keyword": "Then "
});
formatter.match({
  "location": "RickAndMortyStepDefinition.theUserShouldSeeThatHeIsStatus(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Information about Evil Summer",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test2"
    }
  ]
});
formatter.step({
  "name": "the character \u003curl\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "the user wants to get the statusCode of the character with \u003cpath\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "the user should see that her statusCode is \u003cstatusCode\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "statusCode"
      ]
    },
    {
      "cells": [
        "https://rickandmortyapi.com",
        "/api/character/120",
        "200"
      ]
    },
    {
      "cells": [
        "https://rickandmortyapi.com",
        "/api/character/672",
        "404"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Information about Evil Summer",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test2"
    }
  ]
});
formatter.step({
  "name": "the character https://rickandmortyapi.com",
  "keyword": "Given "
});
formatter.match({
  "location": "RickAndMortyStepDefinition.theCharacter(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user wants to get the statusCode of the character with /api/character/120",
  "keyword": "When "
});
formatter.match({
  "location": "RickAndMortyStepDefinition.theUserWantsToGetTheStatusCodeOfTheCharacterWith(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see that her statusCode is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "RickAndMortyStepDefinition.theUserShouldSeeThatHerStatusCode(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Information about Evil Summer",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test2"
    }
  ]
});
formatter.step({
  "name": "the character https://rickandmortyapi.com",
  "keyword": "Given "
});
formatter.match({
  "location": "RickAndMortyStepDefinition.theCharacter(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user wants to get the statusCode of the character with /api/character/672",
  "keyword": "When "
});
formatter.match({
  "location": "RickAndMortyStepDefinition.theUserWantsToGetTheStatusCodeOfTheCharacterWith(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see that her statusCode is 404",
  "keyword": "Then "
});
formatter.match({
  "location": "RickAndMortyStepDefinition.theUserShouldSeeThatHerStatusCode(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Information about Evil Summer",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test3"
    }
  ]
});
formatter.step({
  "name": "the character \u003curl\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "the user wants to get the statusCode of the character with \u003cpath\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "the user should see that the statusCode is different to \u003cstatusCode\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "statusCode"
      ]
    },
    {
      "cells": [
        "https://rickandmortyapi.com",
        "/api/character/120",
        "404"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Information about Evil Summer",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test3"
    }
  ]
});
formatter.step({
  "name": "the character https://rickandmortyapi.com",
  "keyword": "Given "
});
formatter.match({
  "location": "RickAndMortyStepDefinition.theCharacter(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user wants to get the statusCode of the character with /api/character/120",
  "keyword": "When "
});
formatter.match({
  "location": "RickAndMortyStepDefinition.theUserWantsToGetTheStatusCodeOfTheCharacterWith(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see that the statusCode is different to 404",
  "keyword": "Then "
});
formatter.match({
  "location": "RickAndMortyStepDefinition.theUserShouldSeeThatTheStatusCodeIsDifferentTo(int)"
});
formatter.result({
  "status": "passed"
});
});