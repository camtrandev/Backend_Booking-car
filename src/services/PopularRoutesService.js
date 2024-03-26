import db from "../models";

let getPopularRoutes = async (limitInput) => {
    return new Promise(async (resolve, reject) => {
        try {
            let dataTrip = await db.TripInfor.findAll({
                limit: limitInput,
                order: [["createdAt", "DESC"]],
                // attributes: {
                //     exclude: ['password']
                // },
                include: [
                    { model: db.Allcode, as: 'priceTypeData', attributes: ['valueEn', 'valueVi'] },
                    { model: db.Allcode, as: 'locationStartTypeData', attributes: ['valueEn', 'valueVi'] },
                    { model: db.Allcode, as: 'paymentTypeData', attributes: ['valueEn', 'valueVi'] },
                    { model: db.Allcode, as: 'locationEndTypeData', attributes: ['valueEn', 'valueVi'] },
                    { model: db.User, as: 'driveData', attributes: ['firstName', 'lastName'] },
                ],
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

module.exports = {
    getPopularRoutes
}