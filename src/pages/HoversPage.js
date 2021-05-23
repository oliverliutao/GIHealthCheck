import BasePage from './BasePage';
import screenPresenceLocators from '../selectors/screenPresenceLocators';

class HoversPage extends BasePage {
    constructor() {
        super();
        this.screenPresenceLocators = screenPresenceLocators;
        this.captionsLocator = '.figcaption';
        this.figureLocator = '.figure';
    }

    get captions() {
        return browser.$$(this.captionsLocator);
    }

    hoverOverImage(position) {
        const figure = browser.$$(this.figureLocator)[position];
        const hoverImg = figure.$('img');
        hoverImg.moveTo();
        browser.pause(500);
        browser.waitUntil(() => browser.$$(this.captionsLocator).length > 0);
    }

    clickViewProfile(position) {
        this.hoverOverImage(position);
        const captionSection = browser.$$(this.captionsLocator)[position];
        const link = captionSection.$('a');
        link.click();
        browser.$(screenPresenceLocators.userprofile).waitForDisplayed();
    }

    returnToHoversPage() {
        browser.back();
        browser.$(this.screenPresenceLocators.hovers).waitForDisplayed();
    }

    getUserName(position) {
        this.hoverOverImage(position);
        const captionSection = browser.$$(this.captionsLocator)[position];
        return captionSection.$('h5').getText().trim().replace('name: ', '');
    }
}
module.exports = new HoversPage();
