import BasePage from './BasePage';

class CheckboxesPage extends BasePage {
    constructor() {
        super();
        this.checkboxes = '#checkboxes > input';
    }

    get checkboxOne() {
        return $$(this.checkboxes)[0];
    }

    get checkboxTwo() {
        return $$(this.checkboxes)[1];
    }
}
module.exports = new CheckboxesPage();
