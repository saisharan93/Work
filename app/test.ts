import '@angular/common/testing';
import 'rxjs/Rx';
import {BrowserDomAdapter} from '@angular/platform-browser'; //todo uncomment?
// BrowserDomAdapter.makeCurrent();

beforeEach(() => {
    jasmine.addMatchers({
        toContainText: function() {
            return {
                compare: function(actual, expectedText) {
                    var actualText = actual.textContent;
                    return {
                        pass: actualText.indexOf(expectedText) > -1, 
                        get message() { return 'Expected ' + actualText + ' to contain ' + expectedText; }
                    };
                }
            };
        }
    });
});