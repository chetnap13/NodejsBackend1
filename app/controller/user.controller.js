var userServices = require('../services/user.service')


exports.createUser = (req, res) => {
    try {
        req.assert('name', 'name cannot be empty.').notEmpty();
        req.assert('city', 'city cannot be empty.').notEmpty();
        req.assert('DOB', 'DOB cannot be empty.').notEmpty();
        var errors = req.validationErrors();
        if (errors) {
            res.send(errors)
        }
        else {
            return userServices.createUser(req, res)
        }
    } catch (error) {
        return res.send(error)
    }
}