import { assert } from 'chai';
import $$ from 'webdriverio/build/commands/browser/$$';
import NavigationMenu from '../pages/NavigationMenu';

describe('Home health check: ', () => {
    beforeEach(() => {
        NavigationMenu.loadhomePage();
    });

    it('Strat checking', () => {
        // browser.pause(5000);
        
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

        var ind1next = 0;
        while(ind1next < 5) {

            if(page1Nextbtn.isClickable()) {
                console.log("page 1 next btn clickable");
                page1Nextbtn.click();
                break;
            }else {
                console.log("page 1 next btn NOT clickable, retry");
                browser.pause(5000);
                ind1next ++;
            }
        }


        browser.pause(5000);

        //////page 2//////
        // find element by text
        const page2NextBtn = $('a=Select');
        console.log(page2NextBtn.getText());
    
        var ind2next = 0;
        while(ind2next < 5) {

            if(page2NextBtn.isClickable()) {
                console.log("page 2 next btn clickable");
                page2NextBtn.click();
                break;
            }else {
                console.log("page 2 next btn NOT clickable, retry");
                browser.pause(5000);
                ind2next ++;
            }
        }


        browser.pause(5000);

        //////page 3//////
        // find element by text
        const page3Nextbtn = $('a=Go to personal details');
        console.log(page3Nextbtn.getText());
        
        var ind3next = 0;
        while(ind3next < 5) {

            if(page3Nextbtn.isClickable()) {
                console.log("page 3 next btn clickable");
                page3Nextbtn.click();
                break;
            }else {
                console.log("page 3 next btn NOT clickable, retry");
                browser.pause(5000);
                ind3next ++;
            }
        }


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

        browser.pause(5000);

        // find element by text
        const page4Gender = $('span=Male');
        console.log(page4Gender.getText());
        
        var ind4Gender = 0;
        while(ind4Gender < 5) {

            if(page4Gender.isClickable()) {
                console.log("page 4 gender btn clickable");
                page4Gender.click();
                break;
            }else {
                console.log("page 4 gender btn NOT clickable, retry");
                browser.pause(5000);
                ind4Gender ++;
            }
        }


        //find elememt by name
        const page4Nric = $('[name="identificationNo"]')
        page4Nric.setValue('G3208127X');
        console.log(page4Nric.getValue()); 

        const dob = $('.m-textbox-group');
        dob.$$('li')[0].$('input').setValue('10');
        dob.$$('li')[1].$('input').setValue('12');
        dob.$$('li')[2].$('input').setValue('1982');

        
        const page4Mobile= $('#mobile');
        page4Mobile.setValue('93755748');
        console.log(page4Mobile.getValue());

        const page4Email= $('#email');
        page4Email.setValue('tao_liu@aviva-asia.com');
        console.log(page4Email.getValue());
        

        const page4PostalCode= $('#postalCode');
        page4PostalCode.setValue('160009');
        console.log(page4PostalCode.getValue());

        browser.pause(5000);
        
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

        browser.pause(5000);

        const page4PBlock= $('#addressLine1');
        const page4PStreet= $('#addressLine2');
        const page4PBuilding= $('#addressLine4');
        var block = page4PBlock.getValue();

        var ind4Address = 0;
        var autoFilled = false;
        while(ind4Address < 5) {

            if(block !== null && block !== '') {
                console.log("page 4 address auto-populated");
                autoFilled = true;
                break;
            }else {
                console.log("page 4 address NOT auto-populated, retry");
                browser.pause(5000);
                block = page4PBlock.getValue();
                ind4Address ++;
            }
        }


        if(autoFilled === false) {

            console.log("QAS API NOT working, manually fill in adress");
            page4PBlock.setValue('1');
            page4PStreet.setValue('street test');
            page4PBuilding.setValue('building test');

        }
        console.log(page4PBlock.getValue());
        console.log(page4PStreet.getValue());
        console.log(page4PBlock.getValue());


        const page4MailAddressOption = $('span=No');
        console.log(page4MailAddressOption.getText());
        
        var ind4MailAd = 0;
        while(ind4MailAd < 5) {

            if(page4Gender.isClickable()) {
                console.log("page 4 mail address option btn clickable");
                page4MailAddressOption.click();
                break;
            }else {
                console.log("page 4 mail address option btn NOT clickable, retry");
                browser.pause(5000);
                ind4MailAd ++;
            }
        }


        const page4Next = $('button=Go to summary & payment');
        console.log(page4Next.getText());

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

        browser.pause(15000);

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
        const page6PaymentMode= $('h3=Pay with Visa or MasterCard');
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
                console.log("page 6 next btn clickable, locaing payment page");
                page6NextBtn.click();
                break;
            }else {
                console.log("page 6 next btn NOT clickable, retry");
                browser.pause(5000);
                ind6Next ++;
            }
        }


        browser.pause(30000);

        var expectURL = 'https://secureacceptance.cybersource.com/payment';
        var currentUrl = browser.getUrl();
        console.log(currentUrl);

        var indUrl = 0;
        while(indUrl < 10) {

            if(currentUrl === expectURL) {
                console.log("reach payment page ~~ Health check completed ~~ Everything OK");
                
                break;
            }else {
                console.log("NOT reach payment page yet, waiting");
                browser.pause(15000);
                currentUrl = browser.getUrl();
                console.log(currentUrl);
                indUrl ++;
            }
        }

        assert.equal(currentUrl, expectURL, 'PASS');


        // browser.pause(600000);

    });
});
