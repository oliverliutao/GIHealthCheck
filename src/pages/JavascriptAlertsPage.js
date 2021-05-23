import BasePage from './BasePage';
import selectors from '../selectors/javascriptAlerts';

class JavaScriptAlertsPage extends BasePage {
    constructor() {
        super();
        this.selectors = selectors;
    }

    get jsAlertButton() {
        return browser.$(this.selectors.jsAlertButtonLocator);
    }

    get jsConfirmButton() {
        return browser.$(this.selectors.jsConfirmButtonLocator);
    }

    get result() {
        return browser.$(this.selectors.resultLocator);
    }

    clickJSAlertButton() {
        this.jsAlertButton.click();
    }

    clickJSConfirmButton() {
        this.jsConfirmButton.click();
    }

    getResult() {
        return this.result.getText().trim();
    }

    closeAlert() { // eslint-disable-line class-methods-use-this
        browser.acceptAlert();
    }
}
module.exports = new JavaScriptAlertsPage();
