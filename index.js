const express = require("express");
const app = express();
const router = express.Router();
const db = require("./db");

// Test the database connection
db.getConnection()
  .then((connection) => {
    console.log("Connected to the database!");
    connection.release(); // Release the connection
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });

// Route to fetch data from the employee table
router.get("/employees", async (req, res) => {
  try {
    // Execute a query to select all data from the employee table
    const [rows, fields] = await db.execute(
      "SELECT * FROM businessdb.employees"
    );
    res.json(rows); // Send the query results as JSON
  } catch (error) {
    console.error("Error fetching employees:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Mount the router at the base URL
app.use("/", router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
