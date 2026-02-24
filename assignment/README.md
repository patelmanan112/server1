# Student Management API

## Objective
The objective of this project is to practice building a RESTful API using Node.js and Express.js, focusing specifically on the `GET` method. It demonstrates how to manage and retrieve student data through various endpoints, including filtering by branch, finding toppers, and calculating averages.

## List of Implemented Routes

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/students` | Retrieves a list of all students. |
| `GET` | `/students/:id` | Retrieves details of a specific student by their `ID`. |
| `GET` | `/students/topper` | Returns the student with the highest CGPA. |
| `GET` | `/students/average` | Calculates and returns the average CGPA of all students. |
| `GET` | `/students/count` | Returns the total count of students in the records. |
| `GET` | `/students/branch/:branchname` | Returns a list of students belonging to a specific branch. |


## Deployed Link
[Click here to view the deployed application](https://server1-7-f477.onrender.com/students)