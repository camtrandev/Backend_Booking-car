import { v4 as uuidv4 } from 'uuid';
const db = require('../models/index')
const {
    sendSimpleEmail
} = require('./emailService')

let buildUrlEmail = (doctorId, token) => {

    let result = `${process.env.URL_REACT}/verify-booking?token=${token}&doctorId=${doctorId}`

    return result;
}

const postBookAppointment = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.email || !data.driveId || !data.tripId || !data.fullName
            ) {
                resolve({
                    erCode: 1,
                    errMessage: 'Missing parameter!!'
                })
            } else {

                let token = uuidv4();

                await sendSimpleEmail({
                    receiverEmail: data.email,
                    patientName: data.fullName,
                    language: data.language,
                    redirectLink: buildUrlEmail(data.doctorId, token),
                    locationStart: data.locationStart,
                    locationEnd: data.locationEnd
                })



                //upsert 
                let user = await db.User.findOrCreate({
                    where: { email: data.email },
                    default: {
                        email: data.email,
                        roleId: 'R3'
                    }
                });


                //Create table Booking
                if (user && user[0]) {
                    await db.Booking.findOrCreate({
                        where: { customerId: user[0].id },
                        defaults: {
                            statusId: 'S1',
                            driveId: data.driveId,
                            customerId: user[0].id,
                            tripId: data.tripId,
                            token: token
                        }

                    })
                }

                resolve({
                    errCode: 0,
                    errMessage: 'Success'
                })
            }

        } catch (e) {
            reject(e);
            console.log("Error:  ", e);
        }
    })
}

module.exports = {
    postBookAppointment
}