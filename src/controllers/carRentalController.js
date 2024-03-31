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
const getInforCarRentalHome = async (req, res) => {
    let limit = req.query.limit;
    if (!limit) { limit = 10 }
    try {
        let response = await carRentalService.getInforCarRentalHome(+limit);
        return res.status(200).json(response)

    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: 'Error from server'
        })
    }
}

const getInforCarRentalById = async (req, res) => {

    try {
        let response = await carRentalService.getInforCarRentalById(req.query.id);
        return res.status(200).json(response)

    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: 'Error from server'
        })
    }
}



const getInforCarByLocation = async (req, res) => {

    try {
        let response = await carRentalService.getInforCarByLocation(req.query.locationId);
        return res.status(200).json(response)

    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: 'Error from server'
        })
    }
}

let SaveCarRentalClient = async (req, res) => {
    try {
        let infor = await carRentalService.SaveCarRentalClient(req.body);
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
    SaveCarRental,
    getInforCarRentalHome,
    getInforCarRentalById,
    getInforCarByLocation,
    SaveCarRentalClient
}