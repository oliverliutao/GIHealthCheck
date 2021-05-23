import BasePage from './BasePage';
import loginSelectors from '../selectors/login';

class LoginPage extends BasePage {
    constructor() {
        super();
        this.loginSelectors = loginSelectors;
    }

    get username() {
        return browser.$(this.loginSelectors.usernameLocator);
    }

    get password() {
        return browser.$(this.loginSelectors.passwordLocator);
    }

    get loginButton() {
        return browser.$(this.loginSelectors.loginButtonLocator);
    }

    enterLoginInformation(usernameValue, passwordValue) {
        this.username.setValue(usernameValue);
        this.password.setValue(passwordValue);
    }

    clickSubmitButton() {
        // Same issue with the antivirus pop occurs with webdriverio as well as webdriver.
        // The workaround is to click with javascript to bypass the pop-up.
        try {
            this.loginButton.click();
        } catch (err) {
            browser.execute(() => {
                document.getElementsByClassName('radius')[0].click();
            });
        }
    }

    login(usernameValue, passwordValue) {
        const securedScreenPresenceLocator = 'a.radius';
        this.enterLoginInformation(usernameValue, passwordValue);
        this.clickSubmitButton();
        browser.$(securedScreenPresenceLocator).waitForDisplayed();
    }
}

module.exports = new LoginPage();
