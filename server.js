const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.use("/api", require("./routes/tiaRoutes"));

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
