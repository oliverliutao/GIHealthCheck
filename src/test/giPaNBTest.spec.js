import { assert } from 'chai';
import $$ from 'webdriverio/build/commands/browser/$$';
import NavigationMenu from '../pages/NavigationMenu';

describe('PA health check: ', () => {
    beforeEach(() => {
        NavigationMenu.loadPaPage();
    });

    it('Strat checking', () => {
        browser.pause(10000);

    });
});
