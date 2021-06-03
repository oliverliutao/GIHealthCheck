import { assert } from 'chai';
import $$ from 'webdriverio/build/commands/browser/$$';
import NavigationMenu from '../pages/NavigationMenu';
import testData from '../data/testData';
import pageUrl from '../data/pageUrl';

describe('Motor health check: ', () => {
    beforeEach(() => {
        NavigationMenu.loadMotorPage();
    });

    it('Strat checking', () => {
        // browser.pause(10000);

        console.log(browser.capabilities);

        /// ///page 1//////
        const makeModel = $('#make_and_model');
        makeModel.setValue(testData.makeModelStartWith);
        // click dropdown list, offset is 100px
        makeModel.click({ y: 100 });
        console.log(makeModel.getValue());

        const yearOfRegistration = $('#yearOfMake');
        yearOfRegistration.selectByVisibleText(testData.yearOfRegistration);
        console.log(yearOfRegistration.getValue());

        const registrationNum = $('#car_registration_number');
        registrationNum.setValue(testData.registrationNum);
        console.log(registrationNum.getValue());

        const offPeak = $('span=No');
        offPeak.waitForClickable({ timeout: 20000, timeoutMsg: 'offPeak btn not clickable, timeout' });
        offPeak.click();

        console.log(offPeak.getValue());

        const nric = $('#nric');
        nric.setValue(testData.nric);
        console.log(nric.getValue());

        const dob = $('.m-textbox-group');
        dob.$$('li')[0].$('input').setValue(testData.dobDate);
        dob.$$('li')[1].$('input').setValue(testData.dobMonth);
        dob.$$('li')[2].$('input').setValue(testData.dobYear);

        // browser.pause(5000);

        // find element by text
        const page1Gender = $('span=Male');
        console.log(page1Gender.getText());
        page1Gender.waitForClickable({ timeout: 20000, timeoutMsg: 'gender btn not clickable, timeout' });
        page1Gender.click();


        const ncd = $('#renewalNcd');
        ncd.selectByVisibleText(testData.ncd);
        console.log(ncd.getValue());

        const claimNum = $('span=0');
        claimNum.waitForClickable({ timeout: 20000, timeoutMsg: 'claimNum btn not clickable, timeout' });
        claimNum.click();
        console.log(claimNum.getValue());

        const licenseYears = $('#drivingLicenseYear');
        licenseYears.selectByVisibleText(testData.licenseYears);
        console.log(licenseYears.getValue());

        const postCode = $('#postalCode');
        postCode.setValue(testData.postCode);
        console.log(postCode.getValue());

        // mindef_no
        const checkTcc = $('span=No');
        checkTcc.waitForClickable({ timeout: 20000, timeoutMsg: 'checkTcc btn not clickable, timeout' });
        checkTcc.click();
        console.log(checkTcc.getText());


        const page1Nextbtn = $('a=Get my premium');
        page1Nextbtn.waitForClickable({ timeout: 20000, timeoutMsg: 'page 1 next btn not clickable, timeout' });
        page1Nextbtn.click();

        /// ///page 2//////
        // first select button
        // const firstBtn = $('//body/div/form/div[1]/div[2]/div[4]/div[1]/div/div[1]/table/tbody/tr/td[2]/button');

        // second select button
        const secondBtn = $('//body/div/form/div[1]/div[2]/div[4]/div[1]/div/div[1]/table/tbody/tr/td[3]/button');
        secondBtn.waitForClickable({ timeout: 30000, timeoutMsg: '2nd select premium btn not clickable, timeout' });
        secondBtn.click();
        // third select button
        // const secondBtn = $('//body/div/form/div[1]/div[2]/div[4]/div[1]/div/div[1]/table/tbody/tr/td[4]/button');


        /// ///page 3//////
        // get emement by xPath
        // body div1 form div div4 div3 div label input/span
        const driverOptCheck = $('//body/div[1]/form/div/div[4]/div[3]/div/label/span');
        driverOptCheck.waitForClickable({ timeout: 20000, timeoutMsg: 'driverOptCheck btn not clickable, timeout' });
        driverOptCheck.click();

        // find element by xPath
        const excessOptCheck = $('//body/div[1]/form/div/div[4]/div[5]/div/label/span');
        excessOptCheck.waitForClickable({ timeout: 20000, timeoutMsg: 'excessOptCheck btn not clickable, timeout' });
        excessOptCheck.click();

        const page3NextBtn = $('a=Go to personal details');
        page3NextBtn.waitForClickable({ timeout: 20000, timeoutMsg: 'page 3 next btn not clickable, timeout' });
        page3NextBtn.click();


        /// ///page 4//////
        const page4Salutation = $('#salutation');
        page4Salutation.selectByVisibleText('Mr');
        console.log(page4Salutation.getValue());

        const page4familyname = $('#surname');
        page4familyname.setValue(testData.familyName);

        const page4givenname = $('#givname');
        page4givenname.setValue(testData.givenName);

        const page4mobilenumber = $('#mobile_number');
        page4mobilenumber.setValue(testData.phoneNumber);

        const page4PBlock = $('#motor_block');
        const block = page4PBlock.getValue();
        if (block !== null && block !== '') {
            const page4Addressbtn = $('a=Find my address');
            console.log(page4Addressbtn.getText());
            page4Addressbtn.waitForClickable({ timeout: 20000, timeoutMsg: 'page 4 address btn not clickable, timeout' });
            page4Addressbtn.click();
        }

        // browser.pause(10000);

        const previousInsurer = $('#previousInsurer');
        previousInsurer.selectByVisibleText(testData.previousInsurer);

        const page4Email = $('#email');
        page4Email.setValue(testData.email);
        console.log(page4Email.getValue());

        // browser.pause(5000);

        const page4financeagreement = $('span=No');
        console.log(page4financeagreement.getText());
        page4financeagreement.waitForClickable({ timeout: 20000, timeoutMsg: 'page 4 finance agreement btn not clickable, timeout' });
        page4financeagreement.click();


        const page4Next = $('a=Go to summary and payment');
        // console.log(page4Next.getText());
        page4Next.waitForClickable({ timeout: 20000, timeoutMsg: 'page 4 next btn not clickable, timeout' });
        page4Next.click();


        /// ///page 5//////
        const page5Nextbtn = $('a=I agree - buy now');
        console.log(page5Nextbtn.getText());
        page5Nextbtn.waitForClickable({ timeout: 20000, timeoutMsg: 'page 5 next btn not clickable, timeout' });
        page5Nextbtn.click();


        /// ///page 6//////
        // 2nd radio: Pay with Visa or MasterCard
        // body/form/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/label
        const page6PaymentMode = $('//body/form/div[1]/div/div[3]/div[2]/div/div[1]/div[2]/label');
        console.log(page6PaymentMode.getText());
        page6PaymentMode.waitForClickable({ timeout: 20000, timeoutMsg: 'page 6 payment mode btn not clickable, timeout' });
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
                timeoutMsg: 'Motor portal >> NOT reach payment page yet, waiting',
            },
        );

        const currentUrl = browser.getUrl();
        assert.equal(currentUrl, expectURL, 'PASS');

    // browser.pause(300000);
    });
});
