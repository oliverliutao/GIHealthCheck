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
        makeModel.setValue(testData.makeModelStartWith);
        //click dropdown list, offset is 100px
        makeModel.click({ y: 100 });
        console.log(makeModel.getValue());
        

        const yearOfRegistration = $('#yearOfMake');
        yearOfRegistration.selectByVisibleText(testData.yearOfRegistration);
        console.log(yearOfRegistration.getValue());

        const registrationNum = $('#car_registration_number');
        registrationNum.setValue(testData.registrationNum);
        console.log(registrationNum.getValue());

        
        const offPeak = $('span=No');
        
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

        // find element by text
        const page1Gender = $('span=Male');
        console.log(page1Gender.getText());
        
        var ind1Gender = 0;
        while(ind1Gender < 5) {

            if(page1Gender.isClickable()) {
                console.log("page 1 gender btn clickable");
                page1Gender.click();
                break;
            }else {
                console.log("page 1 gender btn NOT clickable, retry");
                browser.pause(5000);
                ind1Gender ++;
            }
        }

        const ncd = $('#renewalNcd');
        ncd.selectByVisibleText(testData.ncd);
        console.log(ncd.getValue());

        const claimNum = $('span=0');
        
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

// mindef_no
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
        const page2NextBtn = $('button=Select');
        
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
        const driverOptionCheck = $('#driverOptionCheck');
        
        var ind3Check1 = 0;
        while(ind3Check1 < 5) {
            if(driverOptionCheck.isClickable()) {
                console.log("page 3 1st checkbox clickable");
                driverOptionCheck.click()
                break;
            }else {
                console.log("page 3 2nd checkbox btn NOT clickable, retry");
                browser.pause(5000);
                ind3Check1 ++;
            }
        }


        const excessOptionCheck = $('#excessOptionCheck');
        excessOptionCheck.click();


        const page3NextBtn = $('a=Go to personal details');
        page3NextBtn.clcik();





        browser.pause(10000);

    });
});
