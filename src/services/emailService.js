require('dotenv').config();
import nodemailer from 'nodemailer'

let sendSimpleEmail = async (dataSend) => {

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_APP,
            pass: process.env.EMAIL_PASSWORD,
        },
    });


    let info = await transporter.sendMail({
        from: '"Cầm trần 👻" <camtm2004@gmail.com>', // sender address
        to: dataSend.receiverEmail, // list of receivers
        subject: "Thông tin đặt chuyến ✔", // Subject line
        html:
            getBodyHtmlEmail(dataSend)
        ,
    });
}


let getBodyHtmlEmail = (dataSend) => {
    let result = '';
    if (dataSend.language === 'vi') {
        result = `
         <h3>Xin chào ${dataSend.patientName}</h3>
         <p>Email này thông báo bạn đã đặt chuyến đi online trên App đặt lịch BookingCar</p>
         <p>Thông tin chuyến: </p>
         <div><b>Thời gian: 17h30 </b></div>
         <div><b>Bác tài:Trần Mạnh cầm </b></div>
         <div><b>Từ:${dataSend.locationStart} </b></div>
         <div><b>Đến:${dataSend.locationEnd} </b></div>
         <div>Vui lòng đọc kĩ thông tin và Click vào đường link để xác nhận chuyến đi của mình : </div>
          <div><b>Xin chân thành cảm ơn chúc quý khách có một chuyến đi vui vẻ </b></div>
         <div>
           <a href=${dataSend.redirectLink} target="_blank">Click here</a>
         </div>
         <div> Xin chân thành cảm ơn!</div>
        `
    }
    if (dataSend.language === 'en') {
        result = `
         <h3>Deal: ${dataSend.patientName}</h3>
         <p>This email notifies you that you have booked your trip online on the BookingCar booking app</p>
         <p>Trip information: </p>
         <div><b>Time: 17h30 </b></div>
         <div><b>Drive:Trần Mạnh cầm </b></div>
         <div><b>To:${dataSend.locationStart} </b></div>
         <div><b>From:${dataSend.locationEnd} </b></div>
         <div>Please read the information carefully and Click on the link to confirm your trip : </div>
          <div><b>Thank you very much and wish you a pleasant trip </b></div>
         <div>
           <a href=${dataSend.redirectLink} target="_blank">Click here</a>
         </div>
         <div> Thank you!</div>
        `
    }
    return result;
}



module.exports = {
    sendSimpleEmail: sendSimpleEmail
}
