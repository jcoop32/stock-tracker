# Stock Tracker
Live site [here](https://rocky-beyond-05208-0615d6b7d815.herokuapp.com/)

### For this web application, a user can input any stock that they want to track. They can add, view, edit, and delete stocks from their list.
---

## Process of creating and building web application
- Brainstorm different functionalities to add
    - CRUD
- Create wireframe
- Create Schema
- Determine specific routes
- Design and create view
- create functionality in controller
- Style site
- Test

Technologies used - 
- MongoDB
- Mongoose.js
- Express.js
- Node.js
- CSS
- Bootstrap
- EJS
---
### Major Problem and Solution 
### API call
This first problem took me around 10 hours to finally figure out. I think it took so long, because it was my first time using an API in an application. 
### Main Problem:
Can't parse correct data to the screen. 
### Soluton:
To start I called my API using the `fetch()` api inside of an async function. At first I was able to log out the value of want I wanted, I just couldn't figure out how to pass that value to the controller then onto the screen. After many hours of staring at the screen and researching many different things I finally realized I need to set the `fetch()` api to a variable in the async function and then return that value in a parsed `json()` format. After I got that value I used that function in the controller and then accessed the repsonse object and grabbed the price for that stock. I finally set that value to the API call price to the document price in my model and passed it to the view.

---
## Future Features:
In the future I would like to add AJAX to have a live search feature to view all avaliable tickers. I would also like to add a refresh interval after a certain period of time.



