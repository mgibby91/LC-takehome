### Architectural/Structural Decisions

* Multi-page application (react-router-dom)
  - Easily scalable

* ElephantSQL
  - Cloud hosting for database security
  - Easily scalable
  - Will be simple to deploy

* Node/Express middleware
  - Easily compatible with React FE
  - API for routing for modularity/robustness
  - Simple db setup/connection using node-pg
  - DB reset setup for simple creating/deleting tables and seeding/reseeding data


### Database Design

* Please see ERD in root directory
* Logic is as follows

- There are many customers, therefore a customers table is created
- There are many quotes, therefore a quotes table is created
- One customer can have many quotes, and one quote can have many customers. Therefore, the relationship because customers and quotes is many-to-many.
- A join table must be created connecting customers and quotes
- The join table must contain a customer_id and quote_id
- The join table must also contain another customer_id (called booker_id) to identify the person who booked a group of people. - Example case: the mother of a family books her, her husband and 3 children. Each family member is assigned a unique customer_id, but the same quote_id. All of the entries in the 'customers_quote' table will have the same booker_id, which will be the customer_id of the mother.
- There can be many kinds of transportation methods for each quote. Therefore, the relationship is one (quote) to many (transportation), which means a transportation table must be created.
- Count of people per quote can be found using aggregate SQL function and therefore does not need to be a column in any table
