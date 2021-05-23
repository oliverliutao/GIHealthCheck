import { assert } from 'chai';
import $$ from 'webdriverio/build/commands/browser/$$';
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

        // find element by id, start with #
        const page1Occupancy = $('#dwellingTypeRef');
        // index=0 is invalid which is "please select", so index start from 1
        // occupancy.selectByIndex(1);
        page1Occupancy.selectByVisibleText('Detached');
        // occupancy.selectByAttribute("value", "DE")
        console.log(page1Occupancy.getValue());

        // browser.scroll('.someClass');

        // find element by text
        const page1Nextbtn = $('button=Choose plan');
        console.log(page1Nextbtn.getText());
        page1Nextbtn.click();

        browser.pause(5000);

        //////page 2//////
        // find element by text
        const page2NextBtn = $('a=Select');
        console.log(page2NextBtn.getText());
        page2NextBtn.click();

        browser.pause(5000);

        //////page 3//////
        // find element by text
        const page3Nextbtn = $('a=Go to personal details');
        console.log(page3Nextbtn.getText());
        page3Nextbtn.click();

        browser.pause(5000);

        //////page 4//////
        // find element by id
        const page4Salutation= $('#salutation');
        page4Salutation.selectByVisibleText('Mr');
        console.log(page4Salutation.getValue());

        // find element by name
        const page4Familyname = $('[name="familyName"]')
        page4Familyname.setValue('l');
        console.log(page4Familyname.getValue()); 

        
        const page4Givenname = $('[name="givenName"]')
        page4Givenname.setValue('t');
        console.log(page4Givenname.getValue()); 

        // find element by text
        const page4Geder = $('span=Male');
        console.log(page4Geder.getText());
        page4Geder.click();

        //find elememt by name
        const page4Nric = $('[name="identificationNo"]')
        page4Nric.setValue('G3208127X');
        console.log(page4Nric.getValue()); 

        const dob = $('.m-textbox-group');
        dob.$$('li')[0].$('input').setValue('10');
        dob.$$('li')[1].$('input').setValue('12');
        dob.$$('li')[2].$('input').setValue('1982');

        browser.pause(5000);



        browser.pause(15000);


    });
});
