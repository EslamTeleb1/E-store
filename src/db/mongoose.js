
const monoogse=require('mongoose');


monoogse.connect(process.env.MONGODB_URL,{

useNewUrlParser:true,
useCreateIndex:true,
useUnifiedTopology: true,
useFindAndModify:false
})
