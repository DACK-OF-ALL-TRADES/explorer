const db = require("../config/connection");

db.once("open", async () => {
  console.log("NO SEEDS YET!");
  process.exit(0);
});
