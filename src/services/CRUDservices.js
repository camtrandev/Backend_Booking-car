
const bcrypt = require('bcryptjs');
const db = require('../models/index')

const salt = bcrypt.genSaltSync(10);

// tạo mới user BẰNG form đăng nhập 
let createNewUser = async (data) => {

    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFormBcrypt = await hashUserPassword(data.password);
            await db.User.create({
                email: data.email,
                password: hashPasswordFormBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phoneNmuber: data.phoneNmuber,
                gender: data.gender === '1' ? true : false,
                roleId: data.roleId
            });

            // trả về 1 chuối messgae -- tương đương với câu lênh return
            resolve('ok create a new user succeed')
        } catch (e) {
            reject(e)
        }
    })

}

const hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (e) {
            reject(e);
        }
    })
}

// render dữ liệu ra ngoài màn  hình 
const getAllUser = () => {
    // Promise dùng để sử lý bất đông bộ , được hiểu là nó sẽ chạy xong thằng promise rồi mới đến thằng tiếp theo
    // resolve là chấp nhận còn reject là từ chối
    return new Promise(async (resolve, reject) => {
        try {
            // Dùng db để tham chiếu đến các table bằng cách db.modelName trong từng models 
            // chuyền vào trong findAll 1 cái array  để lấy ra tất cả dữ liệu gốc 
            let users = db.User.findAll({
                raw: true,
            });
            // để thoát khỏi promise ta dùng resolve nó tương đương với return 
            resolve(users)

        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    createNewUser,
    getAllUser

}