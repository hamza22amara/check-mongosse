const express = require('express');
const router = express.Router()
const contact = require('../Models/contactSchema');
let arrayOfPeople = require('../arrayOfPeople');
let exemple = new contact({
    _id : '0', name : "Ahmed", age : 30, favoriteFood : ['paeila','lasagne','allfredou-pasta']
});
exemple.save((err,exemple)=>{
    if (err) return handleError(err);
    else console.log('exemple created and  saved successfully: ' ,exemple);
    contact.find({name:"Salah"},(err,documents)=>{
        if (err) return handleError(err);
        else console.log('contact find by name: ' ,documents)
    });
    contact.findOne({favoriteFood :'lasagne'},(err,documents)=>{
        if (err) return handleError(err);
        else console.log('contact find by favoriteFood: ' ,documents)
    });
    contact.findById('1',(err,documents)=>{
        if (err) return handleError(err);
        else console.log('contact find by Id: ' ,documents)
    });
    contact.findById('1',(err,documents)=>{
        if (err) return handleError(err);
        else {
            documents.favoriteFood.push('spaghetti au fruit de mer');
            console.log('find one contact by Id and edit:',documents);
        }
    });
    contact.findOneAndUpdate({name: 'rania'},{age:28},{new:true},(err,documents)=>{
        if (err) return handleError(err);
        else console.log('find contact and update age to 28:',documents)
    });
    contact.findByIdAndRemove('1',(err,documents)=>{
        if (err) return handleError(err);
        else console.log('find contact and remove :',documents)
    });
    contact.find({favoriteFood:'tajine'}).sort({name:1}).limit(2).select({age : false}).exec().then(docs=>{
        console.log('chain search results:',docs)
    })
    .catch(err =>{
        console.error('err')
    })
});
contact.create(arrayOfPeople,(err, data) =>{
    if (err) return handleError(err)
    else console.log('collection created : ', data)

})
module.exports = router