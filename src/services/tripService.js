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

module.exports = {
    getTripInforById,
    SaveDetailTrip
}