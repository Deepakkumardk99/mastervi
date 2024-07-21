const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://deepakkumarkingmaker:test1234@cluster0.jchgets.mongodb.net/",
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
