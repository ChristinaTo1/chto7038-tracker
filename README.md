# chto7038-tracker

URL
http://localhost:8888

HOW TO RUN
Using command node server.js in the terminal (couldn't use npm run start because I ran into some errors when trying to do express setup)

PROJECT OVERVIEW
Your Recipe Book is a recipe tracking application, which allows the user to create, add and track the recipes that they use on a frequent basis. 

The index.html file contains the main interfece that the user will interact with. It also acts as the space where the recipes that the user has created will be displayed. 

The create.html file contains the form that users will need to complete when creating a new recipe. It is filled with a variety of input elements for the user to fill in which include name, description etc. Users are also able to select a course category to the recipe eg main, side wtc and a recipe tag eg vegan, vegetarian to better categorize their recipes.

Once the user is happy with the recipe, the user can then submit the form and the recipe will appear on the home page to be accesses at any time.

DEVELOPMENT DOCUMENTATION
I was able to replicate majority of the stylistic features that I had planned out in my wireframes, this include the colour palette and the overall look of the interface. This also applied to the form page which turned out looking identical to the mockups I did of the section. I had success with implementing the input elements of the form, incorporating some of the feedback I received from the previous assignment, to which I tried to create more variety in the inputs besides just the text inputs. I also managed to make the buttons on the pages more interactive with the help of Josh Comeau, which gave the application more character (the source code is listed below). However, I struggled to implement the 'Add Image' section how I envisioned it to be. Initially I wanted for a preview of the image to display after the user selected a file to upload, however the function that I had for the backend didn't seem to be working, so I decided to scrap the element. 

Although the front-end of the project seemed to be on track, I struggled immensely with trying to implement the back-end. I initially wanted to contain the data from the completed form into a JS object, storing this object in Local storage then retrieving it to display the data on the home page in the form of a 'pop-up window'. However, I wasn't able to get the backend working. This has definitely provided a big window for improvement, as I am a complete novice with JS and was under restrictive time constraints at the time. For the furture, the back-end of the application needs to be future developed and should be a core focus for developers who are partaking in this project.

REFERENCES:

BUTTONS
https://www.joshwcomeau.com/animation/3d-button/

GRID TEMPLATE
https://grid.layoutit.com/ 

COLUMNS
https://www.educative.io/answers/how-to-create-columns-in-html