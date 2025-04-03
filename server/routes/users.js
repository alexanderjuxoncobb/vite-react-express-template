import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  console.log("GET request to /api/users");
  res.json({ message: "User requested" });
});

router.post("/", (req, res) => {
  // Create user logic
  console.log("POST request to /api/users");

  res.json({ message: "User created" });
});

export default router;
