import { assert } from 'chai';
import $$ from 'webdriverio/build/commands/browser/$$';
import NavigationMenu from '../pages/NavigationMenu';
import testData from '../data/testData';

describe('Motor health check: ', () => {
    beforeEach(() => {
        NavigationMenu.loadMotorPage();
    });

    it('Strat checking', () => {
        browser.pause(10000);

        //////page 1//////
        const makeModel = $('#make_and_model');
        makeModel.setValue(testData.makeModel);
        console.log(makeModel.getValue());
        

        const yearOfRegistration = $('#yearOfMake');
        yearOfRegistration.selectByVisibleText(testData.yearOfRegistration);
        console.log(yearOfRegistration.getValue());

        const registrationNum = $('#car_registration_number');
        registrationNum.setValue(testData.registrationNum);
        console.log(registrationNum.getValue());

        
        const offPeak = $('#offpeak_no');
        
        var ind1Offpeak = 0;
        while(ind1Offpeak < 5) {

            if(offPeak.isClickable()) {
                console.log("page 1 offPeak btn clickable");
                offPeak.click();
                break;
            }else {
                console.log("page 1 offPeak btn NOT clickable, retry");
                browser.pause(5000);
                ind1Offpeak ++;
            }
        }
        console.log(offPeak.getValue());

        const nric = $('#nric');
        nric.setValue(testData.nric);
        console.log(nric.getValue());

        const dob = $('.m-textbox-group');
        dob.$$('li')[0].$('input').setValue(testData.dobDate);
        dob.$$('li')[1].$('input').setValue(testData.dobMonth);
        dob.$$('li')[2].$('input').setValue(testData.dobYear);

        browser.pause(5000);

        const ncd = $('#renewalNcd');
        ncd.selectByVisibleText(testData.ncd);
        console.log(ncd.getValue());

        const claimNum = $('#claimCount_0');
        
        var ind1Claim = 0;
        while(ind1Claim < 5) {

            if(claimNum.isClickable()) {
                console.log("page 1 claim btn clickable");
                claimNum.click();
                break;
            }else {
                console.log("page 1 claim btn NOT clickable, retry");
                browser.pause(5000);
                ind1Claim ++;
            }
        }
        console.log(claimNum.getValue());



        const licenseYears = $('#drivingLicenseYear');
        licenseYears.selectByVisibleText(testData.licenseYears);
        console.log(licenseYears.getValue());


        const postCode = $('#postalCode');
        postCode.setValue(testData.postCode);
        console.log(postCode.getValue());


        const checkTcc = $('span=No');
        console.log(checkTcc.getText());
        
        var ind1Tcc = 0;
        while(ind1Tcc < 5) {

            if(checkTcc.isClickable()) {
                console.log("page 1 check TCC btn clickable");
                checkTcc.click();
                break;
            }else {
                console.log("page 1 check TCC btn NOT clickable, retry");
                browser.pause(5000);
                ind1Tcc ++;
            }
        }


        browser.pause(5000);


        const page1Nextbtn = $('a=Get my premium');
        
        var ind1Next = 0;
        while(ind1Next < 5) {

            if(page1Nextbtn.isClickable()) {
                console.log("page 1 netx btn clickable");
                page1Nextbtn.click();
                break;
            }else {
                console.log("page 1 next btn NOT clickable, retry");
                browser.pause(5000);
                ind1Next ++;
            }
        }


        browser.pause(15000);


        //////page 2//////
        const page2NextBtn = $('a=Select');
        console.log(page2NextBtn.getText());
        
        var ind2Next = 0;
        while(ind2Next < 5) {

            if(page2NextBtn.isClickable()) {
                console.log("page 2 netx btn clickable");
                page2NextBtn.click();
                break;
            }else {
                console.log("page 2 next btn NOT clickable, retry");
                browser.pause(5000);
                ind2Next ++;
            }
        }


        browser.pause(15000);

        //////page 3//////




        browser.pause(10000);

    });
});
