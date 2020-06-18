const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB',{ useNewUrlParser: true,useUnifiedTopology: true } );


 
const fruitSchema = new mongoose.Schema({
  name: {type:String,
required:[true,"Please check your data entry, no name specified"]},
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model('Fruit', fruitSchema);
const fruit = new Fruit({
    name : "Apple",
       score: 34,
       review:"Great fruits"
});
fruit.save();

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
  });
  
  const Person = mongoose.model('Person', personSchema);
  const person = new Person({
      name : "John",
         age: 33
  });

//   person.save();


  const Kiwi = new Fruit({
    name : "Kiwi",
    score: 10,
    review:"Best fruits"
  });

  const Orange = new Fruit({
    name : "Orange",
    score: 4,
    review:"Too Sour for me"
  });

  const Banana = new Fruit({
    name : "Banana",
    score: 3,
    review:"Weired Texture"
  });

//   Fruit.insertMany([Kiwi,Orange,Banana], function(err) {
//       if(err){
//           console.log(err);
//       }else{
//           console.log("Successfully save all the fruits in FruitsDBi!!")
//       }
//   });

  Fruit.find(function(err, fruits) {
    if(err){
        console.log(err);
    }else{
        mongoose.connection.close();
        fruits.forEach(function(fruit){
            console.log(fruit.name);
            
        })
    }

    
});



// Update One Record
// Fruit.updateOne({_id:""},{name:"Apple"},function(err){
//     if(err){
//         console.log(err);
//             }else{
//                 console.log("Succefully updated the document.");
                
//             }
// });


//Delete One Record

// Fruit.deleteOne({name:"Apple"},function(err){
//     if(err){
//         console.log(err);
//             }else{
//                 console.log("Succefully deleted the document.");
                
//             }
// });

// Delete Many Records

// Person.deleteMany({name:"John"},function(err){
//     if(err){
//         console.log(err);
//             }else{
//                 console.log("Succefully deleted all the documents.");
                
//             }
// });
