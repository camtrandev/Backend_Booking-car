
const express = require('express');
const db = require('../models/index')
const {
    createNewUser,
    getAllUser,
    getUserInfoById,
    upDateUserData
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

// hiển thị user
const displayGetCrud = async(req, res) => {

    let data = await getAllUser();
    
    return res.render('displayCRUD.ejs',{
        dataTable: data
    })
}

// kiểm tra xem có user trong databasc không nếu có thì render ra màn hình để edit
const getEditCrud = async (req, res) => {

    let userId = req.query.id;
    if (userId) {
        let userData = await getUserInfoById(userId);

        // check user data not found

        return res.render('editCRUD.ejs', {
            userData: userData
        })
    }
    else {
        return res.send('User not found!')
    }
}

// Hàm thực thi khi ấn vào nút Update để chỉnh sửa user
const putCrud = async (req, res) => {
    let data = req.body;
    let allUsers = await upDateUserData(data);
    // lưu biến AllUser để khi thực hiện upDate xong chúng ta sẽ trả lại tất cả người dùng sau khi sửa 
    // logic bên file CRUDservice.js
    return res.render('displayCRUD.ejs', {
        dataTable: allUsers
    });
}

const deleteCrud = async (req, res) => {
    let id = req.query.id;
    if (id) {
        await deleteUserById(id);
        return res.send('Delete user the succeed');
    }else {
        return res.send ('User not found');
    }
}

module.exports = {
    getHomePage,
    getCrud,
    postCrud,
    displayGetCrud,
    getEditCrud,
    putCrud,
    deleteCrud
}