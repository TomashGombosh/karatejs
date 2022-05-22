Feature: Test karate

Scenario: 
    Given url baseUrl
    * path usersPath
    * params page = 2
    When method get
    Then status 200
    * match response.total_pages == 2 