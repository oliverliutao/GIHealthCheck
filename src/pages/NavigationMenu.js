import screenPresenceLocators from '../selectors/screenPresenceLocators';

class NavigationMenu {
    constructor() {
        this.screenLocators = screenPresenceLocators;
        this.homepage = '/hm/home/#/getQuote';
        this.travelpage = '/gi/travel/#/getQuote';
        this.motorpage = '/directinsurance/gimotor.htm';
        this.papage = '/directinsurance/pa.htm';
    }

    loadhomePage() {
        browser.url(this.homepage);
    }

    loadTravelPage() {
        browser.url(this.travelpage);
    }

    loadPaPage() {
        browser.url(this.papage);
    }

    loadotorPage() {
        browser.url(this.motorpage);
    }
}

module.exports = new NavigationMenu();
