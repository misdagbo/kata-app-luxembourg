import { browser, by, element } from "protractor";

export class DiagnosticPage {
  navigateTo() {
    browser.get("/diagnostic");
  }

  checkOptionInput (num : number) {
    return element(by.css(`#mat-option-${num -1}`));
  }

  getOptionInput (num : number) {
    return element(by.css(`#mat-option-${num -1} > span`));
  }

  getMultipleSelectFieldInput (num : number) {
    return element(by.css(`#mat-select-${num-1} > div > div.mat-select-value > span > span`));
  }

  getMultipleSelectField() {
    return element(
      by.css(
        "body > app-root > app-main-nav > mat-sidenav-container > mat-sidenav-content > app-diagnostic-patient > div > div:nth-child(1) > mat-form-field"
      )
    );
  }
}


// #mat-select-0 > div > div.mat-select-value > span > span

// #mat-select-0 > div > div.mat-select-value > span > span


// #mat-option-2 > span
