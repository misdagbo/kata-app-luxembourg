import { Before, Given, Then, When } from "cucumber";
import { expect } from "chai";

import { DiagnosticPage } from "../../pages/diagnostic-patient/diagnostic.po";
import { browser } from "protractor";

let page: DiagnosticPage;

Before(() => {
  page = new DiagnosticPage();
});

Given("Je vais la page de diagnostic patient", async () => {
  page.navigateTo();
  await browser.sleep(1000);
});

When("Je click sur le champ de selection à choix multiples", async () => {
  page.getMultipleSelectField().click();
  await browser.sleep(2000);
});

When("Je check sur un symptôme dans la liste des symptôtmes", async () => {
  await page.checkOptionInput(2).click();
  await browser.sleep(2000);
});

Then(
  "Je voudrais voir le symptôme sélectionné dans le champ à selection multiple",
  async () => {
    expect(await page.getOptionInput(2).isPresent()).to.equal(true);
  }
);
