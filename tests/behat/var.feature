@editor @editor_atto @atto @atto_var @_bug_phantomjs
Feature: Atto var button
  To format text in Atto, I need to use the var button.

  @javascript
  Scenario: Variablise some text
    Given I log in as "admin"
    And I open my profile in edit mode
    And I set the field "Description" to "Badger"
    And I select the text in the "Description" Atto editor
    When I click on "Variable" "button"
    And I press "Update profile"
    And I follow "Preferences" in the user menu
    And I follow "Editor preferences"
    And I set the field "Text editor" to "Plain text area"
    And I press "Save changes"
    And I click on "Edit profile" "link" in the "region-main" "region"
    Then I should see "<var>Badger</var>"

  @javascript
  Scenario: Unvar some text
    Given I log in as "admin"
    And I open my profile in edit mode
    And I set the field "Description" to "Mouse"
    And I select the text in the "Description" Atto editor
    When I click on "Variable" "button"
    And I click on "Variable" "button"
    And I press "Update profile"
    And I follow "Preferences" in the user menu
    And I follow "Editor preferences"
    And I set the field "Text editor" to "Plain text area"
    And I press "Save changes"
    And I click on "Edit profile" "link" in the "region-main" "region"
    Then I should not see "<var>Mouse</var>"
    And I should see "Mouse"
