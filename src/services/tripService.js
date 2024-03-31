import db from "../models"

let getTripInforById = (InputId) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!InputId) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameter!'
                })
            } else {
                let data = await db.TripInfor.findOne({
                    where: { driveId: InputId },
                    raw: false,
                    nest: true
                })
                if (!data) data = {};
                else {
                    data.image = new Buffer(data.image, 'base64').toString('binary');
                }
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

// Lưu lịch trình khám bệnh của lái xe xuống database
const SaveDetailTrip = (data) => {

    return new Promise(async (resolve, reject) => {
        try {
            if (
                !data.maxNumber
                || !data.driveId
                || !data.locationStartId
                || !data.dateStart
                || !data.dateEnd
                || !data.locationEndId
                || !data.descriptionHTML
                || !data.descriptionMarkdown
            ) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing param !'
                })
            } else {

                if (data.action === 'CREATE') {
                    await db.TripInfor.create({
                        maxNumber: data.maxNumber,
                        driveId: data.driveId,
                        locationStartId: data.locationStartId,
                        dateStartId: data.dateStart,
                        dateEndId: data.dateEnd,
                        locationEndId: data.locationEndId,
                        descriptionHTML: data.descriptionHTML,
                        descriptionMarkdown: data.descriptionMarkdown,
                        priceId: data.selectedPrice,
                        paymentId: data.selectedPayment,
                        image: data.image
                    })
                } else if (data.action === 'EDIT') {
                    let tripData = await db.TripInfor.findOne({
                        where: { driveId: data.driveId },
                        raw: false
                    })

                    if (tripData) {

                        tripData.maxNumber = data.maxNumber;
                        tripData.driveId = data.driveId;
                        tripData.locationStartId = data.locationStartId;
                        tripData.dateStartId = data.dateStart;
                        tripData.dateEndId = data.dateEnd;
                        tripData.locationEndId = data.locationEndId;
                        tripData.descriptionHTML = data.descriptionHTML;
                        tripData.descriptionMarkdown = data.descriptionMarkdown;
                        tripData.priceId = data.selectedPrice;
                        tripData.paymentId = data.selectedPayment;
                        tripData.image = data.image;

                        await tripData.save();
                    }
                }



                resolve({
                    errCode: 0,
                    errMessage: 'Ok!'
                });
            }


        } catch (e) {
            reject(e)
        }
    })
}

let getTripInforBylocation = (locationStart, locationEnd) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!locationStart || !locationEnd) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameter!'
                })
            } else {
                let result = await db.TripInfor.findAll({
                    where: {
                        locationStartId: locationStart,
                        locationEndId: locationEnd,
                    },
                    include: [


                        { model: db.Allcode, as: 'priceTypeData', attributes: ['valueEn', 'valueVi'] },
                        { model: db.Allcode, as: 'locationStartTypeData', attributes: ['valueEn', 'valueVi'] },
                        { model: db.Allcode, as: 'paymentTypeData', attributes: ['valueEn', 'valueVi'] },
                        { model: db.Allcode, as: 'locationEndTypeData', attributes: ['valueEn', 'valueVi'] },
                        { model: db.User, as: 'driveData', attributes: ['firstName', 'lastName'] },
                    ],
                    raw: false,
                    nest: true
                })
                if (!result) result = {};
                else {
                    if (result && result.length >= 1) {
                        result.map(item => {
                            item.image = new Buffer(item.image, 'base64').toString('binary');
                            return item
                        })
                    } else {
                        result.image = new Buffer(result.image, 'base64').toString('binary');
                    }
                }
                resolve({
                    errCode: 0,
                    result: result
                })

            }
        } catch (e) {
            reject(e);
        }
    })
}

let SaveDetailIncentive = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.contentHTML
                || !data.contentMarkdown || !data.description
                || !data.voucherId || !data.garageId
                || !data.image
                || !data.expirationDate
            ) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameter!'
                })
            } else {
                await db.Incentive.create({
                    contentHTML: data.contentHTML,
                    contentMarkdown: data.contentMarkdown,
                    description: data.description,
                    image: data.image,
                    voucherId: data.voucherId,
                    garageId: data.garageId,
                    expirationDate: data.expirationDate
                });
                resolve({
                    errCode: 0,
                    errMessage: 'Save infor incentive succeed'
                })

            }

        } catch (e) {
            console.log("Error:  ", e)
            reject(e)
        }
    })
}

// render top ưu đãi

let getTopIncentiveHome = async (limitInput) => {
    return new Promise(async (resolve, reject) => {
        try {
            let dataTrip = await db.Incentive.findAll({
                limit: limitInput,
                order: [["createdAt", "ASC"]],
                // attributes: {
                //     exclude: ['password']
                // },
                // include: [
                //     { model: db.Allcode, as: 'priceTypeData', attributes: ['valueEn', 'valueVi'] },
                //     { model: db.Allcode, as: 'locationStartTypeData', attributes: ['valueEn', 'valueVi'] },
                //     { model: db.Allcode, as: 'paymentTypeData', attributes: ['valueEn', 'valueVi'] },
                //     { model: db.Allcode, as: 'locationEndTypeData', attributes: ['valueEn', 'valueVi'] },
                //     { model: db.User, as: 'driveData', attributes: ['firstName', 'lastName'] },
                // ],
                raw: true,
                nest: true
            })
            if (!dataTrip) dataTrip = {};
            else {
                if (dataTrip && dataTrip.length >= 1) {
                    dataTrip.map(item => {
                        item.image = new Buffer(item.image, 'base64').toString('binary');
                        return item
                    })
                } else {
                    dataTrip.image = new Buffer(dataTrip.image, 'base64').toString('binary');
                }
            }
            resolve({
                errCode: 0,
                data: dataTrip
            })

        } catch (e) {
            console.log("Error:  ", e)
            reject(e)
        }
    })
}

let getInforIncentiveById = (InputId) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!InputId) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameter!'
                })
            } else {

                let data = await db.Incentive.findOne({
                    where: { id: InputId },
                    raw: false,
                    nest: true
                })
                if (!data) data = {};
                else {
                    data.image = new Buffer(data.image, 'base64').toString('binary');
                }
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
    getTripInforById,
    SaveDetailTrip,
    getTripInforBylocation,
    SaveDetailIncentive,
    getTopIncentiveHome,
    getInforIncentiveById
}