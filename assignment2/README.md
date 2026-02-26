# Node.js Assignment 2 - Product API

This project is a simple REST API built with Node.js and Express for managing a product inventory.

## Objective
The objective of this assignment is to implement basic CRUD (Create, Read, Update) operations for a product list and handle specific attribute updates like stock and price.

## API Routes

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/` | Check if the server is running. |
| **GET** | `/products` | Retrieve all products in the inventory. |
| **GET** | `/products/:id` | Get details of a single product by its ID. |
| **GET** | `/products/category/:categoryName` | Find a product by its category name (case-insensitive). |
| **POST** | `/products` | Add a new product to the inventory. |
| **PUT** | `/products/:id` | Update all or specific details of a product. |
| **PUT** | `/products/:id/stock` | Update only the stock level of a product. |
| **PUT** | `/products/:id/price` | Update only the price of a product. |



## Deployed Link
**Live API**: [https://assignment02-a2gj.onrender.com/products](https://assignment02-a2gj.onrender.com/products)