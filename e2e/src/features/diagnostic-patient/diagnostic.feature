Feature: Tester la selection des symptôtmes du patient
  Selectionner les symptôtmes du patient lors du diagnostic

  Scenario: Page Diagnostic patient
    Given Je vais la page de diagnostic patient
    When Je click sur le champ de selection à choix multiples
    And Je check sur un symptôme dans la liste des symptôtmes
    Then Je voudrais voir le symptôme sélectionné dans le champ à selection multiple

