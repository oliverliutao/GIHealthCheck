import { assert } from 'chai';
import NavigationMenu from '../pages/NavigationMenu';

describe('Checkboxes test suite: ', () => {
    beforeEach(() => {
        NavigationMenu.loadhomePage();
    });

    it('Strat checking', () => {
        browser.pause(5000);
        
        //////page 1//////
        // const landlordbtn = $('#occupancy_LANDLORD');
        // console.log(landlordbtn.isClickable());
        // landlordbtn.click({ y: 10 });
        // browser.isElementEnable('#occupancy_LANDLORD');
        // browser.isElementDisplayed('#occupancy_LANDLORD');

        // select option in dropdown list
        const occupancy = $('#dwellingTypeRef');
        // index=0 is invalid which is "please select", so index start from 1
        occupancy.selectByIndex(1);
        // occupancy.selectByVisibleText('Detached');
        // occupancy.selectByAttribute("value", "DE")
        console.log(occupancy.getValue());

        // browser.scroll('.someClass');

        // find element by text
        const page1Nextbtn = $('button=Choose plan');
        console.log(page1Nextbtn.getText());
        page1Nextbtn.click();

        browser.pause(5000);

        //////page 2//////
        const page2NextBtn = $('a=Select');
        console.log(page2NextBtn.getText());
        page2NextBtn.click();

        browser.pause(5000);

        //////page 3//////
        const page3Nextbtn = $('a=Go to personal details');
        console.log(page3Nextbtn.getText());
        page3Nextbtn.click();

        browser.pause(5000);
        
        //////page 4//////

        browser.pause(15000);


    });
});
