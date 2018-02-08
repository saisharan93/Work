Code your changes in each exercise component typescript file. and you can use above navigation links to view each component seperately or use this page to view all components.


## exercise one - writing service and rest api calls

*   update the Api class getCityState function to call below GET url thorugh Angular http client and return the observable with data after mapping the data to IApiResponse inerface object.
*   ex: use https://maps.googleapis.com/maps/api/geocode/json?sensor=true&address=12345 url for HTTP GET api. (12345 should be replace by passed zipcode parameter)
*   when city/state api call returns valid result, cache the result in applicaiton session so next call to same url will not be invoked by angular.
*   cache solution should be O(1) complexity based solution not O(n). (dont use browser storage or cookies, use vanilla js solution)


## exercise two - transclusion

*   add support to transclude multiple slide components into slide container component.
*   update slide container component to show list of buttons correspond to each transcluded slide.

*   use ngFor to loop and create button for each slide component available.
*   you will need to identify how many tab components are transcluded and create same number of buttons with the title property value of tab component as button text))
*   on click of each button de-select the current selected component (by executing onDeSelect function in selected component)
*   and select the corresponding component for clicked button (using onSelected function).

*   do not use any jquery or pure js dom manipulation or query functions for above.
*   Ex: working example
*   ![Alt text](/app/assets/ex2.gif?raw=true "Optional Title")


## exercise three - forms elements, angular inputs/outputs, validators, formatters

*   create form with below controls
*   ssn (textbox)
*   address component - update address component with below html inputs and functionality
    *   street (textbox)
    *   zip (textbox)
    *   city (textbox)
    *   state (dropdown)
    *   When valid 5 digit zip code is entered and user focus out from zip code textbox, populate the city and state automatically (using Api getCityState function implemented in exercise one.)
    *   set (VA, CA, KY) options in the state dropdown statically.
    *   using angular input we should be able to set the VA as the default selected state (when user intially lands to this page).
    *   use angular output to send back the selected state from dropdown back to parent component selectedState property. Hint: use angular input/output
*   create a angular formatter directive to format the ssn like ###-##-####.
    *   it should automatically add the dash when user types ssn (if on type not possible you can format on focus out).
    *   write a unit test for this formatter to make sure it works properly on any input value. (use exercise.spec.ts file to write your test cases, and you can run the unit tests using navigation link "Run Unit tests")
    *   Ex: 123 -> 123 12 -> 12 1234 -> 123-4 12345 -> 123-45 123456 -> 123-45-6 etc...
*   create a angular validator to validate the ssn input value is in ###-##-#### format.
    *   show validation error messages (below the input in red color) if ssn input is empty or invalid format.
    *   validation should only start when user focus out for the first time from the input, after that it will display the validation in realtime.
    *   input should contain red color border if invalid.
*   address component should have public function to return the formatted address in below format.
    *   ex: street, city, state zipcode
*   wrap all input elements inside the html form.a
    *   add a button to reset the form elements to default values.
    *   add another button to submit the form to dummy.json file with below json POST body and show the returned JSON response "successMessage" value in the html below the form. (note ssn doesnt have dashes and address is formatted using previous format function form address component.)
    *   `"ssn": "123456789", "address": "street, city, state zip"`
*   OPTIONAL - add a route guard for this route (exercise-three), so that it wont allow user to change the route without confirming (use vanilla js confirm window).
    *   only show this confirm when form is dirty. (if member reset form input elements this confirm message should not show up)
*   Ex: working example
*   ![Alt text](/app/assets/ex3.gif?raw=true "Optional Title")


## exercise four - structural directives, filters and ngTemplate

*   update ng.hide directive to add functionality to hide the element when given input condition is true.
    *   this should work simillar to angular v1 ngHide directive. (v1 uses css class to hide the element dynamically adding that on condition changes.)
*   Use ngTemplateOutlet to show the firstname and dob of each member in members array.
    *   create common ngTemplate that will accept member object as the context and bind the firstName and dob to the template html like given exmaple (you will need to setup how to pass member object as context to this template)
    *   use ngFor and ngTemplateOutlet. and pass the member data to ng-template to render both members using same ngTemplate given below.
    *   formate members dob as MMM dd, yyyy (Ex: Jan 05, 2012)
*   bind htmlContent value to below div element and make sure when anchor link is clicked javascript alert show up properly.
*   Ex: working example
*   ![Alt text](/app/assets/ex4.gif?raw=true "Optional Title")


## exercise five - vanilla javascript, host binding

*   whats wrong with below code. it is binding data coming back from api call but this code is not performance friendly or working properly.
    *   we just need to show members first name (from api response), fix this code (but do not use any additional variables or properties)  
        `Hi {{loggedInMember.firstName} } !!!`
*   update ClickGlobal component click function to update the last clicked time only when click on buttons with update-time css class.
    *   don't create new functions or add click event on buttons.
    *   update the existing click function with your solution.
*   append "_PRODCT" string to each array item in productArray. and sort the array in ascending order. do not use for loop or foreach iterators.
    *   complete this solution by using javascript in-built array functions.
*   Ex: working example
*   ![Alt text](/app/assets/ex5.gif?raw=true "Optional Title")


## exercise six - custom input control and npm scripts

*   update the angular route to show this component for exercise-six route and also update the express server script to handle /exercise-six url.
    *   update top navigation bar to include exercise-six navigation link.
*   create custom input control to handle radio button group.
    *   it should support ngModel binding like below and set / get model value.
    *   allow using input called items to give array of values, and given control should show radio buttons for the given array values.
    *   `<radio-group [(ngModel)]="selectedState" [items]="states"></radio-group>`
*   Ex: working example
*   ![Alt text](/app/assets/ex6.gif?raw=true "Optional Title")


