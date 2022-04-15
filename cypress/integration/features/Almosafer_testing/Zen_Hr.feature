Feature: Zen_HR


  Scenario: verify_sign_page
    Given User navigate to "/en/users/sign_in"
    Then user validate sign-in page


  Scenario Outline: check_links_are_functional
    Given User navigate to "/en/users/sign_in"
    When user is logged in using "<user>" and "<pass>"
    Then user signed in successfully
    Then user validate all links are not broken
    Examples:
      | user |pass|
      | tillawy@hotmail.com  |   password      |


  Scenario Outline: verify_logout_is_working
    Given User navigate to "/en/users/sign_in"
    When user is logged in using "<user>" and "<pass>"
    Then user signed in successfully
    When user click on left-side menu
    Then user is logged out
    Examples:
      | user |pass|
      | tillawy@hotmail.com  |   password      |
