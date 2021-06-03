import { assert } from 'chai';
import date from 'date-and-time';
import $$ from 'webdriverio/build/commands/browser/$$';
import NavigationMenu from '../pages/NavigationMenu';
import testData from '../data/testData';
import pageUrl from '../data/pageUrl';

describe('Travel health check: ', () => {
    beforeEach(() => {
        NavigationMenu.loadTravelPage();
    });

    it('Strat checking', () => {
        // browser.pause(10000);

        console.log(browser.capabilities);

        /// ///page 1//////

        // find element by text
        const page1Annual = $('span=Annual');
        console.log(page1Annual.getText());
        page1Annual.waitForClickable({ timeout: 30000, timeoutMsg: 'page 1 annual btn not clickable, timeout' });
        page1Annual.click();


        const page1Nextbtn = $('button=Choose plan');
        console.log(page1Nextbtn.getText());
        page1Nextbtn.waitForClickable({ timeout: 30000, timeoutMsg: 'page 1 next btn not clickable, timeout' });
        page1Nextbtn.click();



        /// ///page 2//////
        // find element by text
        const page2NextBtn = $('a=Select');
        console.log(page2NextBtn.getText());
        page2NextBtn.waitForClickable({ timeout: 30000, timeoutMsg: 'page 2 next btn not clickable, timeout' });
        page2NextBtn.click();

 

        /// ///page 3//////
        // find element by text
        const page3Nextbtn = $('a=Go to personal details');
        console.log(page3Nextbtn.getText());
        page3Nextbtn.waitForClickable({ timeout: 30000, timeoutMsg: 'page 3 next btn not clickable, timeout' });
        page3Nextbtn.click();



        /// ///page 4//////
        // find elememt by name
        const page4Nric = $('[name="identificationNo"]');
        page4Nric.setValue(testData.nric);
        console.log(page4Nric.getValue());

        // browser.pause(5000);

        // find element by id
        const page4Salutation = $('#salutation');
        page4Salutation.selectByVisibleText('Mr');
        console.log(page4Salutation.getValue());

        // find element by name
        const page4Familyname = $('[name="familyName"]');
        page4Familyname.setValue(testData.familyName);
        console.log(page4Familyname.getValue());

        const page4Givenname = $('[name="givenName"]');
        page4Givenname.setValue(testData.givenName);
        console.log(page4Givenname.getValue());

        const dob = $('.m-textbox-group');
        dob.$$('li')[0].$('input').setValue(testData.dobDate);
        dob.$$('li')[1].$('input').setValue(testData.dobMonth);
        dob.$$('li')[2].$('input').setValue(testData.dobYear);

        // find element by text
        const page4Gender = $('span=Male');
        console.log(page4Gender.getText());
        page4Gender.waitForClickable({ timeout: 30000, timeoutMsg: 'page 4 gender btn not clickable, timeout' });
        page4Gender.click();


        const page4Mobile = $('#mobile');
        page4Mobile.setValue(testData.phoneNumber);
        console.log(page4Mobile.getValue());

        const page4Email = $('#email');
        page4Email.setValue(testData.email);
        console.log(page4Email.getValue());

        // browser.pause(5000);

        const page4PostalCode = $('#postalCode');
        page4PostalCode.setValue(testData.postCode);
        console.log(page4PostalCode.getValue());

        const page4Addressbtn = $('a=Find my address');
        console.log(page4Addressbtn.getText());
        page4Addressbtn.waitUntil(function () {
            return this.isClickable();
        }, {
            timeout: 20000,
            timeoutMsg: 'find address btn not clickable',
            interval: 2000,
        });
        page4Addressbtn.click();
        // page4Addressbtn.waitForClickable({ timeout: 30000, timeoutMsg: 'page 4 address btn not clickable, timeout' });


        browser.pause(15000);

        const page4PBlock = $('#addressLine1');
        const block = page4PBlock.getValue();
        const page4PStreet = $('#addressLine2');
        const page4PBuilding = $('#addressLine4');

        if (block === null || block === '') {
            console.log('QAS API not working, set address manually');
            page4PBlock.setValue(testData.block);
            page4PStreet.setValue(testData.street);
            page4PBuilding.setValue(testData.building);
        }
        console.log(page4PBlock.getValue());
        console.log(page4PStreet.getValue());
        console.log(page4PBuilding.getValue());



        const page4Next = $('button=Go to summary & payment');
        console.log(page4Next.getText());
        page4Next.waitForClickable({ timeout: 30000, timeoutMsg: 'page 4 next btn not clickable, timeout' });
        page4Next.click();



        /// ///page 5//////
        const page5Nextbtn = $('a=I agree - buy now');
        console.log(page5Nextbtn.getText());
        page5Nextbtn.waitForClickable({ timeout: 30000, timeoutMsg: 'page 5 next btn not clickable, timeout' });
        page5Nextbtn.click();



        /// ///page 6//////
        const page6PaymentMode = $('h3=Pay with Visa or MasterCard');
        console.log(page6PaymentMode.getText());
        page6PaymentMode.waitForClickable({ timeout: 30000, timeoutMsg: 'page 6 payment mode btn not clickable, timeout' });
        page6PaymentMode.click();



        const page6NextBtn = $('a=Proceed to payment');
        console.log(page6NextBtn.getText());
        page6NextBtn.waitForClickable({ timeout: 30000, timeoutMsg: 'page 6 next btn not clickable, timeout' });
        page6NextBtn.click();


        const expectURL = pageUrl.paymentGatewayUrl;
        browser.waitUntil(
            () => browser.getUrl() === expectURL,
            {
                timeout: 30000,
                timeoutMsg: 'Travel portal >> NOT reach payment page yet, waiting',
            },
        );

        const currentUrl = browser.getUrl();
        assert.equal(currentUrl, expectURL, 'PASS');

    // browser.pause(105000);
    });
});
