# expense-tracker

To use my app:
1) go to https://www.marcauscruz.com/expense-tracker/

This web application is my first full-stack React project and is built off of a very simplified version from this Udemy course: https://www.udemy.com/course/react-the-complete-guide-incl-redux/ .

The initial project taught me the basics of React; things like hooks, components, props, how to pass information all along the component tree and JSX. The functionality of this project concluded with having an in-code copy of an array that acted like a database, filtering expenses by year, and the ability to add expenses to the array until page refresh.

I've redesigned the UI of the app to my liking and connected a Firebase REST API so users have the ability to create and login to their account, and have their own list of expenses rather than just dummy data. Going from a tutorial to implementing features that I wanted on my own was an extremely fun jump and I learned exponentially from that point onward.

Features I've added:

- Register User
The user can input a username and password to register an account. This will insert that user into a users table in the database and automatically log them in upon registration. There is simple error handling and validation, such as the username and password being [1,30] characters long and prompting user to sign in if their entry already exists. I could - but didn't add more robust validation because I'm planning on only showing it off for demonstrative purposes.

- Login User
The user is able to log in after creating an account. This also has a character length check for both username and password fields and prompts user a sign in problem if their entry doesn't exist in the users table.

- Add expense
Users are able to add expenses which inserts into a database with their corresponding user ID which is auto generated. These expenses have 4 fields: an auto incremented primary key, a name, a price, and a date that is split into 3 subsections (month, day, year). Again, some validation but not to scale. Every field has to have an entry and the price has to be a number.

- Remove expense
Users are able to click on the large 'edit' button which will change the state of the program. From there, an X button will appear on every expense shown. If the user clicks on it, it will remove the expense from both the database and the list.

- Edit expense
After clicking the large 'edit' button, next to the delete button on each expense there is a small edit button. If the user clicks this button, a form will render within that expense with the data of each field that is currently in the database. The user can change any and all fields they'd like, and that expense will be re-inserted into the database under the same ID. These fields must have some data in them of their respective types.

- Sort expenses in chronological order
The initial project had expenses render on the list as they were stored in the array. I added functionality to order the list by date for whichever year was filtered.

- Filter Months
I added clickable divs to the labels of the months which filters expenses with any month selected. The user can select and deselect as many months as they want and the list will update accordingly. The initial state is all 12 months unselected, rendering expenses for the entire year that is selected. 

