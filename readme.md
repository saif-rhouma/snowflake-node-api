# Snowflake Node API Project

## Overview

This Project, developed for Avaxia Company, has been approved for publication with modifications. It provides a simple Node.js-based API for executing queries on a Snowflake database.

## Prerequisites

Node Version Manager (NVM)
Ensure you have NVM installed to manage Node.js versions effectively.

## How to Use

### Requirements

- Postman: Use the Postman app (or any similar API client) to send and test requests.

### Endpoints

1. GET /

- Returns a welcome message.

2. POST /

- Executes a Snowflake query provided in the request body.

3. POST /pool

- Executes a Snowflake query using a connection pool.

### Request Body Example

To execute a query, include a query field in the request body with the desired SQL query as its value.

```js
{
  "query": "SELECT * FROM SNOWFLAKE_SAMPLE_DATA.WEATHER.DAILY_14_TOTAL LIMIT 10;"
}
```
