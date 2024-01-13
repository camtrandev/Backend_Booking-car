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

const getDetailDriveById = (inputId) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!inputId) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameter!'
                })
            } else {
                let data = await db.User.findOne({
                    where: { id: inputId },
                    attributes: {
                        exclude: ['password']
                    },
                    // Sử dụng include có tác dụng là : nó lấy thông tin của user và kèm theo thông tin của nó tồn tại trong Markdown
                    // Giống như nối 2 bẳng (join)               
                    include: [
                        {
                            model: db.Markdown,
                            attributes: ['description', 'contentHTML', 'contentMarkdown']

                        },
                        { model: db.Allcode, as: 'positionData', attributes: ['valueEn', 'valueVi'] }
                    ],
                    raw: false,
                    // nest: giúp code trả ra nó gọn chia các object
                    nest: true
                })

                if (data && data.image) {
                    data.image = new Buffer(data.image, 'base64').toString('binary');
                }

                if (!data) data = {};

                resolve({
                    errCode: 0,
                    data: data
                })
            }

        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    getAllDrives,
    saveDetailInforDrive,
    getDetailDriveById
}