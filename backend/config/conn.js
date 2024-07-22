const mongoose = require("mongoose");
require("dotenv").config();
const mongourl=process.env.mongourl
mongoose
  .connect(
    mongourl,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });
// () => {
//   console.log("DB Connected");
// }
