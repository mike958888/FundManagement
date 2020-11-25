module.exports= app => {
    const mongoose = require('mongoose')
    mongoose.connect('mongodb+srv:/database:<password>@moneymanagement.rwthf.mongodb.net/<dbname>?retryWrites=true&w=majority',{
        useNewUrlParser:true,
        useFindAndModify: false,
        useUnifiedTopology:true
    })
    .then(()=>{console.log('MongoDB connected')})
    .catch(error => console.log(error))
}