import { assert } from 'chai';
import $$ from 'webdriverio/build/commands/browser/$$';
import NavigationMenu from '../pages/NavigationMenu';

describe('Motor health check: ', () => {
    beforeEach(() => {
        NavigationMenu.loadMotorPage();
    });

    it('Strat checking', () => {
        browser.pause(10000);

    });
});
