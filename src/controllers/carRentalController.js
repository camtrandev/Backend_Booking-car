import carRentalService from '../services/carRentalService'

let SaveDetailCar = async (req, res) => {
    try {
        let infor = await carRentalService.SaveDetailCar(req.body);
        return res.status(200).json(infor);

    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}

let SaveCarRental = async (req, res) => {
    try {
        let infor = await carRentalService.SaveCarRental(req.body);
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
    SaveDetailCar,
    SaveCarRental
}