## WET-BAT Travel Agency: Quoting Feature

This app-feature was created as a take-home challenge for the Launch Code interview process.

### Getting Started

Visit https://wetbat-takehome.netlify.app/. 

Or, for this repo and clone onto your machine. Then, from the LC-wetbat-API run `npm i` followed by `npm start` and from the LC-wetbat-client run `npm i` followed by `npm start`, which will automatically open the client. Open another tab and run `http://localhost:8088/api/debug/reset` to reset the DB.

### Technologies Used

* React for the front-end.
* Node/Express for the server/middleware.
* PostgreSQL for the database, using ElephantSQL for cloud hosting.

### Final Product

#### View all quotes

* View a list of all the current quotes

![screenshot of quotes list](https://github.com/mgibby91/LC-takehome/blob/master/screenshots/WB-quotes-list.png?raw=true)

#### View quote details

* View details of selected quote

![screenshot of quote details](https://github.com/mgibby91/LC-takehome/blob/master/screenshots/WB-quotes-view.png?raw=true)

#### Sort quotes

* Sort quotes by price or date

![screenshot of sorting quotes](https://github.com/mgibby91/LC-takehome/blob/master/screenshots/WB-quotes-sort.png?raw=true)

#### Delete quote

![screenshot of deleting quote](https://github.com/mgibby91/LC-takehome/blob/master/screenshots/WB-quotes-delete.png?raw=true)