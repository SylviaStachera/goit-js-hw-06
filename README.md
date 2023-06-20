# goit-js-hw-06

## Task 1
Create a script that counts and prints in the console the number of categories (li.item elements) in the ul#categories list. For each li.item element, find and print in the console the header text (h2 tag) and the number of elements within that category (all the li elements). The console should display the following messages:

Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5

## Task 2
In HTML, there is an empty ul#ingredients list. In JavaScript, there is an array of strings called "ingredients." Write a script that creates a separate <li> element for each element in the ingredients array. Use the document.createElement() method to create the elements and add the item class to each element. Finally, append all the <li> elements to the ul#ingredients list.

## Task 3
Write a script to create an image gallery based on the data array. In HTML, there is a ul.gallery list. Use the images array of objects to create <img> elements wrapped in <li> elements. Use template strings and the insertAdjacentHTML() method to create the elements. All gallery elements should be added to the DOM in a single operation. Enhance the gallery using flexbox or grid layouts with CSS classes.

## Task 4
The counter consists of a span element and buttons that, when clicked, should increase or decrease its value by one. The initial counter value should be 0. Add click event listeners to the buttons to increment or decrement the counter value. Update the HTML view with the new counter value after each change.

## Task 5
Write a script that updates the text in the span#name-output based on the text entered in the input#name-input field. If the input field is empty, the span should display the text "Anonymous."

## Task 6
Write a script that, on the blur event of the input field, checks if the user input meets the validation condition (has the appropriate length). The required number of characters is specified in the input's data-length attribute. If the input value has the correct length, set the input's border color to green; otherwise, set it to red. Use the valid and invalid CSS classes provided in the source files.

## Task 7
Write a script that reacts to changes in the input#font-size-control value (input event) and updates the inline style of the span#text, changing the font-size property. As a result, the text size in the span should change according to the value selected on the range input.

## Task 8
Write a script to handle form submission in the login form. When the form is submitted, prevent the page from refreshing. If any of the form fields are empty, display an alert reminding the user to fill in all the fields. If all fields are filled, retrieve the field values as an object, where the field name becomes the property name and the field value becomes the property value. Access the form elements using the elements property. Print the object with the form values to the console and reset the input values using the reset() method.

## Task 9
Write a script that changes the background color of the <body> element (inline style) when the button.change-color is clicked. Display the color value in the span.color. Use the getRandomHexColor function to generate a random color.

## Task 10
Write a script for creating and removing a collection of elements. The user enters the number of elements in the input field and clicks the Create button, which creates the collection of elements. Clicking the Destroy button removes the collection of elements.

