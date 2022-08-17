### Please Read This :

This's Avaxia Company Project.
Avaxia Has Give Me The Approval To Publish This Project With Some Modification.

# Snowflake Node Api Project

## Prerequisites

- NVM

## How to use :

- You need Postman App to Execute Query With Post Request.
- All need to do is to Send on request body a query value with query text.
- Routes :
  - GET on "/" : Welcome Message.
  - POST on "/" : Execute Snowflake Query.
  - POST on "/pool" : Execute Snowflake Query.

Request Body Example

```js
{
    "query":"select * from SNOWFLAKE_SAMPLE_DATA.WEATHER.DAILY_14_TOTAL Limit 10;"
}

```
