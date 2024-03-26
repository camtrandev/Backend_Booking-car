import bookingService from '../services/bookingService'


let postBookAppointment = async (req, res) => {
    try {
        let infor = await bookingService.postBookAppointment(req.body);
        return res.status(200).json(infor);

    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}

module.exports = {
    postBookAppointment
}