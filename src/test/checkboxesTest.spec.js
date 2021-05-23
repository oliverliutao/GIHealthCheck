import { assert } from 'chai';
import NavigationMenu from '../pages/NavigationMenu';

describe('Checkboxes test suite: ', () => {
    beforeEach(() => {
        NavigationMenu.loadCheckboxesPage();
    });

    it('Strat checking', () => {
        browser.pause(5000);
        // assert.isFalse(browser.isElementSelected('#occupancy_HOMEOWNR'));

        // let element = $('[id="occupancy_HOMEOWNR"]');
        // console.log(element.isSelected());

        // let element1 = $('#a-radio__label');
        // console.log(element1.isSelected());
        // element1.click();

        // browser.elementClick('span=Landlord');
        // const landlordtxt = $('span=Landlord');
        // landlordtxt.execute();

        // const landlordbtn = $('#occupancy_LANDLORD');
        // console.log(landlordbtn.isClickable());
        // landlordbtn.click({ y: 10 });
        // browser.isElementEnable('#occupancy_LANDLORD');
        // browser.isElementDisplayed('#occupancy_LANDLORD');

        // select option in dropdown list
        const occupancy = $('#dwellingTypeRef');
        // console.log(occupancy.getValue());
        // occupancy.selectByIndex(0);
        occupancy.selectByVisibleText('Detached');
        // occupancy.selectByAttribute("value", "DE")
        // console.log(occupancy.getValue());

        // browser.scroll('.someClass');

        // find element by text
        const chooseplanbtn = $('button=Choose plan');
        console.log(chooseplanbtn.getText());
        chooseplanbtn.click();

        browser.pause(5000);

        const selectplanbtn = $('a=Select');
        console.log(selectplanbtn.getText());
        selectplanbtn.click();

        // const button = $('>>>.a-button a-button--full-width a-button--primary a-button--next btn btn--primary btn--full-width:not([hidden])')
        // button.click();
        // browser.pause(5000);
        // const occupancybtn = $('#occupancy_LANDLORD')
        // occupancybtn.waitForClickable({ timeout: 10000, timeoutMsg: 'occupancybutton not clickable'});
        // occupancybtn.click();
    });
});
