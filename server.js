import { app } from "./app.js";

// server port
const port = 3000;

// run the server
app.listen(port, () => {
  console.log(`App listening on port localhost ${port}`);
});
