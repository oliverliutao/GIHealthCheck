import screenPresenceLocators from '../selectors/screenPresenceLocators';

class NavigationMenu {
    constructor() {
        this.screenLocators = screenPresenceLocators;
        this.homepage = '/hm/home/#/getQuote';
    }

    loadCheckboxesPage() {
        browser.url(this.homepage);
    }
}

module.exports = new NavigationMenu();
