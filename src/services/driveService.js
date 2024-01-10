const db = require('../models/index')


const getAllDrives = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let drives = await db.User.findAll({
                where: { roleId: 'R2' },
                attributes: { exclude: ['password', 'image'] }
            })

            resolve({
                errCode: 0,
                data: drives
            })

        } catch (e) {
            reject(e);
        }
    })
}

const saveDetailInforDrive = (inputData) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!inputData.contentHTML || !inputData.contentMarkdown) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter'
                })
            } else {
                await db.Markdown.create({
                    contentHTML: inputData.contentHTML,
                    contentMarkdown: inputData.contentMarkdown,
                    description: inputData.description,
                    driveId: inputData.driveId
                });
                resolve({
                    errCode: 0,
                    errMessage: 'Save infor drive succeed'
                })
            }

        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    getAllDrives,
    saveDetailInforDrive
}