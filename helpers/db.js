// const mongoose = require('mongoose')
// //mongodb+srv://candidateprj:candidateprj@cluster0.snnk0.mongodb.net/candidatedata?retryWrites=true&w=majority

// module.exports = ()=>{
//     mongoose.connect('mongodb://localhost:27017/test');
//     mongoose.connection.on('open',()=>{console.log('Connected')})
//     mongoose.connection.on('error',()=>{console.log('Connect failed')})
// }
const mongoose = require("mongoose");

module.exports = () => {
  mongoose.connect(
    "mongodb+srv://candidateprj:candidateprj@cluster0.snnk0.mongodb.net/candidatedata",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  mongoose.connection.on("open", () => {
    console.log("MongoDB: Connected.");
  });
  mongoose.connection.on("error", () => {
    console.log("MongoDB: Connection Failed.");
  });
  mongoose.Promise = global.Promise;
};
