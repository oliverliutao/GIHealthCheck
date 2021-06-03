import { assert } from 'chai';
import $$ from 'webdriverio/build/commands/browser/$$';
import NavigationMenu from '../pages/NavigationMenu';
import testData from '../data/testData';
import pageUrl from '../data/pageUrl';

describe('Home health check: ', () => {
  beforeEach(() => {
    NavigationMenu.loadHomePage();
  });

  it('Strat checking', () => {
    // browser.pause(10000);

    console.log(browser.capabilities);

    /// ///page 1//////

    // body/div/div[1]/div/form/div/div[6]/div/ul/li[2]/label
    const occupancyBtn = $('//body/div/div[1]/div/form/div/div[6]/div/ul/li[2]/label');
    occupancyBtn.waitForClickable({ timeout: 20000, timeoutMsg: 'occupancy btn not clickable, timeout' });
    occupancyBtn.click();

    // find element by id, start with #
    const page1DewllingType = $('#dwellingTypeRef');
    // index=0 is invalid which is "please select", so index start from 1
    // page1DewllingType.selectByIndex(1);
    page1DewllingType.selectByVisibleText(testData.dwellType);
    // page1DewllingType.selectByAttribute("value", "DE")
    console.log(page1DewllingType.getValue());

    // find element by text
    const page1Nextbtn = $('button=Choose plan');
    console.log(page1Nextbtn.getText());
    page1Nextbtn.waitForClickable({ timeout: 15000, timeoutMsg: 'page 1 next btn not clickable, timeout' });
    page1Nextbtn.click();

    /// ///page 2//////
    // find element by text
    const page2NextBtn = $('a=Select');
    console.log(page2NextBtn.getText());
    page2NextBtn.waitForClickable({ timeout: 15000, timeoutMsg: 'page 2 btn not clickable, timeout' });
    page2NextBtn.click();

    /// ///page 3//////
    // find element by text
    const page3Nextbtn = $('a=Go to personal details');
    console.log(page3Nextbtn.getText());
    page3Nextbtn.waitForClickable({ timeout: 15000, timeoutMsg: 'page 3 next btn not clickable, timeout' });
    page3Nextbtn.click();

    /// ///page 4//////
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

    // browser.pause(5000);

    // find element by text
    const page4Gender = $('span=Male');
    console.log(page4Gender.getText());
    page4Gender.waitForClickable({ timeout: 15000, timeoutMsg: 'page 4 gender btn not clickable, timeout' });
    page4Gender.click();

    // find elememt by name
    const page4Nric = $('[name="identificationNo"]');
    page4Nric.setValue(testData.nric);
    console.log(page4Nric.getValue());

    // browser.pause(5000);

    const dob = $('.m-textbox-group');
    dob.$$('li')[0].$('input').setValue(testData.dobDate);
    dob.$$('li')[1].$('input').setValue(testData.dobMonth);
    dob.$$('li')[2].$('input').setValue(testData.dobYear);

    // browser.pause(5000);

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

    // browser.pause(5000);

    const page4Addressbtn = $('a=Find my address');
    console.log('Find my address');
    // browser.pause(10000);
    // page4Addressbtn.waitForClickable({ timeout: 20000, timeoutMsg: 'page 4 address btn not clickable, timeout', interval: 1000 });
    page4Addressbtn.waitUntil(function () {
      return this.isClickable();
    }, {
      timeout: 20000,
      timeoutMsg: 'find address btn not clickable',
      interval: 2000,
    });
    page4Addressbtn.click();

    // const addressBlock = $('//body/div[1]/div[1]/div/div/div[3]/form/div[6]');
    // addressBlock.waitForEnabled({ timeout: 20000, timeoutMsg: 'address block not enabled'});

    browser.pause(15000);

    // browser.saveScreenshot('./logs/home_screenshot.png');
    const page4PBlock = $('#addressLine1');

    // browser.waitUntil(
    //     () => page4PBlock.getValue() !== '',
    //     {
    //         timeout: 20000,
    //         timeoutMsg: 'address info retrieval failed'
    //     }
    // );
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

    const page4MailAddressOption = $('span=No');
    console.log(page4MailAddressOption.getText());
    page4MailAddressOption.waitForClickable({ timeout: 15000, timeoutMsg: 'page 4 mail address option btn not clickable, timeout' });
    page4MailAddressOption.click();

    const page4Next = $('button=Go to summary & payment');
    console.log(page4Next.getText());
    page4Next.waitForClickable({ timeout: 15000, timeoutMsg: 'page 4 next btn not clickable, timeout' });
    page4Next.click();

    /// ///page 5//////
    const page5Nextbtn = $('a=I agree - buy now');
    console.log(page5Nextbtn.getText());
    page5Nextbtn.waitForClickable({ timeout: 30000, timeoutMsg: 'page 5 next btn not clickable, timeout' });
    page5Nextbtn.click();

    /// ///page 6//////
    const page6PaymentMode = $('h3=Pay with Visa or MasterCard');
    console.log(page6PaymentMode.getText());
    page6PaymentMode.waitForClickable({ timeout: 15000, timeoutMsg: 'page 6 payment mode not clickable, timeout' });
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
        timeoutMsg: 'Home portal >> NOT reach payment page yet, waiting',
      },
    );

    const currentUrl = browser.getUrl();
    assert.equal(currentUrl, expectURL, 'PASS');

    // browser.pause(600000);
  });
});
