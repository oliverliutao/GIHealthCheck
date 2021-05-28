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
        browser.pause(10000);

        console.log(browser.capabilities);

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
        //first select button
        // const firstBtn = $('//body/div/form/div[1]/div[2]/div[4]/div[1]/div/div[1]/table/tbody/tr/td[2]/button');

        //second select button
        const secondBtn = $('//body/div/form/div[1]/div[2]/div[4]/div[1]/div/div[1]/table/tbody/tr/td[3]/button');

        //third select button
        // const secondBtn = $('//body/div/form/div[1]/div[2]/div[4]/div[1]/div/div[1]/table/tbody/tr/td[4]/button');
        
        // const page2NextBtns = $$('button=Select');
      
        var ind2Next = 0;
        while(ind2Next < 5) {

            if(secondBtn.isClickable()) {
                console.log("page 2 netx btn clickable");
                secondBtn.click();
                break;
            }else {
                console.log("page 2 next btn NOT clickable, retry");
                browser.pause(5000);
                ind2Next ++;
            }
        }


        browser.pause(15000);

        //////page 3//////
        //get emement by xPath
        // body div1 form div div4 div3 div label input/span
        const driverOptCheck = $('//body/div[1]/form/div/div[4]/div[3]/div/label/span');

        var ind3Check1 = 0;
        while(ind3Check1 < 5) {
            if(driverOptCheck.isClickable()) {
                console.log("page 3 1st checkbox clickable");
                driverOptCheck.click()
                break;
            }else {
                console.log("page 3 1st checkbox btn NOT clickable, retry");
                browser.pause(5000);
                ind3Check1 ++;
            }
        }

        // find element by xPath
        const excessOptCheck = $('//body/div[1]/form/div/div[4]/div[5]/div/label/span');
        var ind3Check2 = 0;
        while(ind3Check2 < 5) {
            if(excessOptCheck.isClickable()) {
                console.log("page 3 2nd checkbox clickable");
                excessOptCheck.click()
                break;
            }else {
                console.log("page 3 2nd checkbox btn NOT clickable, retry");
                browser.pause(5000);
                ind3Check2 ++;
            }
        }


        
        const page3NextBtn = $('a=Go to personal details');
        
        var ind3next= 0;
        while(ind3next < 5) {
            if(page3NextBtn.isClickable()) {
                console.log("page 3 next btn clickable");
                page3NextBtn.click();
                break;
            }else {
                console.log("page 3 next btn NOT clickable, retry");
                browser.pause(5000);
                ind3next ++;
            }
        }

        //////page 4//////
        const page4Salutation= $('#salutation');
        page4Salutation.selectByVisibleText('Mr');
        console.log(page4Salutation.getValue());


        const page4familyname = $('#surname');
        page4familyname.setValue(testData.familyName);

        const page4givenname = $('#givname');
        page4givenname.setValue(testData.givenName);

        const page4mobilenumber = $('#mobile_number');
        page4mobilenumber.setValue(testData.phoneNumber);

        const page4PBlock= $('#motor_block');
        var block = page4PBlock.getValue();
        if(block !== null && block !== '') {
            
            const page4Addressbtn = $('a=Find my address');
            console.log(page4Addressbtn.getText()); 
    
            var indaddress = 0;
            while(indaddress < 5) {
    
                if(page4Addressbtn.isClickable()) {
                    console.log("QAS Address btn clickable");
                    page4Addressbtn.click();
                    break;
                }else {
                    console.log("QAS Address btn NOT clickable, retry");
                    browser.pause(5000);
                    indaddress ++;
                }
            }
        }

        browser.pause(10000);

        const previousInsurer = $('#previousInsurer');
        previousInsurer.selectByVisibleText(testData.previousInsurer);


        const page4Email= $('#email');
        page4Email.setValue(testData.email);
        console.log(page4Email.getValue());

        browser.pause(5000);

        const page4financeagreement = $('span=No');
        console.log(page4financeagreement.getText());


        var ind4fa = 0;
        while(ind4fa < 5) {

            if(page4financeagreement.isClickable()) {
                console.log("page 4 finiance agreement btn clickable");
                page4financeagreement.click();
                break;
            }else {
                console.log("page 4 finiance agreement btn NOT clickable, retry");
                browser.pause(5000);
                ind4fa ++;
            }
        }

        const page4Next = $('a=Go to summary and payment');
        // console.log(page4Next.getText());

        var ind4next = 0;
        while(ind4next < 5) {

            if(page4Next.isClickable()) {
                console.log("page 4 next btn clickable");
                page4Next.click();
                break;
            }else {
                console.log("page 4 next btn NOT clickable, retry");
                browser.pause(5000);
                ind4next ++;
            }
        }


        //////page 5//////
        const page5Nextbtn = $('a=I agree - buy now');
        console.log(page5Nextbtn.getText());
        
        var ind5next = 0;
        while(ind5next < 5) {

            if(page5Nextbtn.isClickable()) {
                console.log("page 5 next btn clickable");
                page5Nextbtn.click();
                break;
            }else {
                console.log("page 5 next btn NOT clickable, retry");
                browser.pause(5000);
                ind5next ++;
            }
        }

        //////page 6//////
        //2nd radio: Pay with Visa or MasterCard
        //body/form/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/label
        const page6PaymentMode= $('//body/form/div[1]/div/div[3]/div[2]/div/div[1]/div[2]/label');
        console.log(page6PaymentMode.getText());
        var ind6PaymentMode = 0;
        while(ind6PaymentMode < 5) {

            if(page6PaymentMode.isClickable()) {
                console.log("page 6 Pay with Visa or MasterCard btn clickable");
                page6PaymentMode.click();
                break;
            }else {
                console.log("page 6 Pay with Visa or MasterCard btn NOT clickable, retry");
                browser.pause(5000);
                ind6PaymentMode ++;
            }
        }

        browser.pause(3000);

        const page6NextBtn = $('a=Proceed to payment');
        console.log(page6NextBtn.getText());

        var ind6Next = 0;
        while(ind6Next < 5) {

            if(page6NextBtn.isClickable()) {
                console.log("page 6 next btn clickable, loading payment page");
                page6NextBtn.click();
                break;
            }else {
                console.log("page 6 next btn NOT clickable, retry");
                browser.pause(5000);
                ind6Next ++;
            }
        }


        browser.pause(30000);

        var expectURL = pageUrl.paymentGatewayUrl;
        var currentUrl = browser.getUrl();
        console.log(currentUrl);

        var indUrl = 0;
        while(indUrl < 10) {

            if(currentUrl === expectURL) {
                console.log("Motor portal >> reach payment page ~~ Health check completed ~~ Everything OK");
                
                break;
            }else {
                console.log("Motor portal >> NOT reach payment page yet, waiting");
                browser.pause(15000);
                currentUrl = browser.getUrl();
                console.log(currentUrl);
                indUrl ++;
            }
        }

        assert.equal(currentUrl, expectURL, 'PASS');


        // browser.pause(300000);

    });
});
