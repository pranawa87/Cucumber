Feature: Test Russel Metal Inc. Application

  Background: 
    Given User Launch the browser
    When User goto Russel Metal Application
    And User enters "JAMESR" and "PEMBROKE"
    And User clicks on Submit button of login page
    And User is on Menu page
    And User clicks on second link for IN451 program

  @Test_-Ve
  Scenario Outline: To test the functionality of Submit button on IN451-one (Option Two) Page
    Given User navigates to IN451_option_two page
    And User enter "<Customer_Name>" in customer name text box
    And User enter "<Customer_Number>" in customer number text box
    And User enter "<Part_Number>" in part number text box
    And user click at submit button on IN451 page
    Then User get an error message page

    Examples: 
      | Customer_Name | Customer_Number | Part_Number |
      |               |                 |             |
      |               |         9999999 |             |
      |               |         9510002 |             |
