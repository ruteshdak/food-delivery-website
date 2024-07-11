const mongoose = require('mongoose');
mongoose.set('strictQuery', true)
const mongoURI='mongodb+srv://ruteshdak:ZW6HonnNs3oH0fAo@test-pro-db.qirlzdv.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=test-pro-db'
const mongoDB=async()=>{
    await mongoose.connect(mongoURI,{useNewUrlParser:true},async(err,result)=>{
      if(err) console.log("---",err)
      else{
        console.log("connected");
        const fetched_data=await mongoose.connection.db.collection("food_items2");
        fetched_data.find({}).toArray(async function(err,data){
            const foodCategory=await mongoose.connection.db.collection("foodCategory");
            foodCategory.find({}).toArray(function(err,catData){
                if(err) console.log(err);
                else {
                    global.food_items2=data;
                    global.foodCategory=catData;
                }
            })
            // 
            // 
            //     console.log({});

            // }
        })
    }   
        
    });
}

module.exports=mongoDB;
