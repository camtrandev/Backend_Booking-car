import db from "../models";

let SaveDetailCar = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.Name
                || !data.phoneNumber || !data.email
                || !data.VehicleName || !data.carBrand
                || !data.priceId || !data.numberVehicles
                || !data.locationId || !data.image

            ) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameter!'
                })
            } else {
                await db.Car_infors.create({
                    Name: data.Name,
                    phoneNumber: data.phoneNumber,
                    email: data.email,
                    image: data.image,
                    VehicleName: data.VehicleName,
                    carBrand: data.carBrand,
                    priceId: data.priceId,
                    numberVehicles: data.numberVehicles,
                    locationId: data.locationId
                });
                resolve({
                    errCode: 0,
                    errMessage: 'Save infor Car succeed'
                })

            }

        } catch (e) {
            console.log("Error:  ", e)
            reject(e)
        }
    })
}
let SaveCarRental = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.locationId
                // || !data.contentHTML || !data.contentMarkdown
                // || !data.description || !data.image

            ) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameter!'
                })
            } else {
                await db.Car_infors.create({
                    locationId: data.locationId,
                    contentHTML: data.contentHTML,
                    contentMarkdown: data.contentMarkdown,
                    description: data.description,
                    image: data.image,

                });
                resolve({
                    errCode: 0,
                    errMessage: 'Save infor succeed'
                })

            }

        } catch (e) {
            console.log("Error:  ", e)
            reject(e)
        }
    })
}

module.exports = {
    SaveDetailCar,
    SaveCarRental
}