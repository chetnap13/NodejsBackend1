var User = require('../models/note.models')

exports.createUser = (req,res)=>{
        if(!req.body.name){
            return res.status(400).send({
                message:'name should not be empty'

            })
        }

        var ageByDob =getAge(req.body.DOB)
        if(ageByDob<18){
            return res.status(401).send({
                message:'age should be greater than 18'
            })
        }
        const user = new User({
            name:req.body.name,
            city:req.body.city,
            age:ageByDob,
            DOB:req.body.DOB

        })
        user.save()
        .then((userData)=>{
            res.send(userData)
        }).catch((err)=>{
            res.status(500).send({
                message:'something went wrong'
            })
        })
}
function getAge(DOB) {
    var today = new Date();
    var birthDate = new Date(DOB);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age = age - 1;
    }

    return age;
}