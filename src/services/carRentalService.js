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
                    locationId: data.locationId,
                    note: data.note
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
                || !data.contentHTML || !data.contentMarkdown
                || !data.description || !data.image

            ) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameter!'
                })
            } else {
                await db.Car_rental.create({
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

let getInforCarRentalHome = async (limitInput) => {
    return new Promise(async (resolve, reject) => {
        try {
            let dataTrip = await db.Car_rental.findAll({
                limit: limitInput,
                order: [["createdAt", "ASC"]],
                attributes: { exclude: ['contentMarkdown', 'contentHTML'] },

                include: [
                    { model: db.Allcode, as: 'locationTypeData', attributes: ['valueEn', 'valueVi'] },

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

let getInforCarRentalById = async (inputId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let dataTrip = await db.Car_rental.findOne({
                where: { id: inputId },
                //attributes: { exclude: ['contentMarkdown', 'contentHTML'] },

                include: [
                    { model: db.Allcode, as: 'locationTypeData', attributes: ['valueEn', 'valueVi'] },

                ],
                raw: true,
                nest: true
            })
            if (!dataTrip) dataTrip = {};
            else {
                dataTrip.image = new Buffer(dataTrip.image, 'base64').toString('binary');
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

let getInforCarByLocation = async (inputId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let dataTrip = await db.Car_infors.findAll({
                where: { locationId: inputId },
                //attributes: { exclude: ['contentMarkdown', 'contentHTML'] },

                include: [
                    { model: db.Allcode, as: 'location', attributes: ['valueEn', 'valueVi'] },
                    { model: db.Allcode, as: 'priceData', attributes: ['valueEn', 'valueVi'] },

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


let SaveCarRentalClient = (data) => {
    return new Promise(async (resolve, reject) => {
        try {

            if (!data.address
                || !data.carId
                || !data.number
                || !data.startDate || !data.endDate
                || !data.customerName || !data.phoneNumber
                || !data.email || !data.note

            ) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameter!'
                })
            } else {
                await db.Save_car_rentals.create({
                    address: data.address,
                    carId: data.carId,
                    statusId: data.statusId,
                    number: data.number,
                    token: data.token,
                    startDate: data.startDate,
                    endDate: data.endDate,
                    customerName: data.customerName,
                    phoneNumber: data.phoneNumber,
                    email: data.email,
                    note: data.note,
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
    SaveCarRental,
    getInforCarRentalHome,
    getInforCarRentalById,
    getInforCarByLocation,
    SaveCarRentalClient
}