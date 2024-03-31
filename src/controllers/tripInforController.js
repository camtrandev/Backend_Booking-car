import tripService from '../services/tripService'


let getTripInforById = async (req, res) => {
    try {
        let infor = await tripService.getTripInforById(req.query.id);
        return res.status(200).json(infor);
    } catch (e) {
        console.log("Error:   ", e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}

const SaveDetailTrip = async (req, res) => {
    try {
        let infor = await tripService.SaveDetailTrip(req.body);
        return res.status(200).json(infor);

    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}

let getTripInforBylocation = async (req, res) => {
    try {
        let infor = await tripService.getTripInforBylocation(req.query.locationStart, req.query.locationEnd);
        return res.status(200).json(infor);
    } catch (e) {
        console.log("Error:   ", e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}


const SaveDetailIncentive = async (req, res) => {
    try {
        let infor = await tripService.SaveDetailIncentive(req.body);
        return res.status(200).json(infor);

    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}

const getTopIncentiveHome = async (req, res) => {
    let limit = req.query.limit;
    if (!limit) { limit = 8 }
    try {
        let response = await tripService.getTopIncentiveHome(+limit);
        return res.status(200).json(response)

    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: 'Error from server'
        })
    }
}

let getInforIncentiveById = async (req, res) => {
    try {
        let infor = await tripService.getInforIncentiveById(req.query.id);
        return res.status(200).json(infor);
    } catch (e) {
        console.log("Error:   ", e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}



module.exports = {
    getTripInforById,
    SaveDetailTrip,
    getTripInforBylocation,
    SaveDetailIncentive,
    getTopIncentiveHome,
    getInforIncentiveById
}