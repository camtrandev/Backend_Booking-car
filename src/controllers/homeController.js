
const express = require('express');
const db = require('../models/index')
const {
    createNewUser,
    getAllUser
} = require('../services/CRUDservices')


let getHomePage = async (req, res) => {

    try {
        let data = await db.User.findAll();
        return res.render('homePage.ejs', {
            data: JSON.stringify(data)
        });

    } catch (error) {
        console.log(error);
     }

}
const getCrud = (req, res) => {
    res.render('Crud.ejs');
}

const postCrud = async (req, res) => {
    let message = await createNewUser(req.body);
    console.log(message)
    return res.send('post crud from');
}
const displayGetCrud = async(req, res) => {

    let data = await getAllUser();
    
    return res.render('display.ejs',{
        dataTable: data
    })
}

module.exports = {
    getHomePage,
    getCrud,
    postCrud,
    displayGetCrud
}