Feature: The Rick and Morty Api automation
  I, as a user, want to get and verify the information about Rick and Morty characters

@Test1
  Scenario Outline: Information about Cousin Nicky
    Given the character <url>
    When the user wants to get the status of the character with <path>
    Then the user should see that he is <status>
    Examples:
      |            url            |         path      | status |
      |https://rickandmortyapi.com| /api/character/76 |  Dead  |

  @Test2
  Scenario Outline: Information about Evil Summer
    Given the character <url>
    When the user wants to get the statusCode of the character with <path>
    Then the user should see that her statusCode is <statusCode>
    Examples:
      |            url            |         path      | statusCode |
      |https://rickandmortyapi.com| /api/character/120|  200   |
      |https://rickandmortyapi.com| /api/character/672|  404   |



  @Test3
  Scenario Outline: Information about Evil Summer
    Given the character <url>
    When the user wants to get the statusCode of the character with <path>
    Then the user should see that the statusCode is different to <statusCode>
    Examples:
      |            url            |         path      | statusCode |
      |https://rickandmortyapi.com| /api/character/120|  404       |