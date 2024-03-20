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


module.exports = {
    getTripInforById,
    SaveDetailTrip,
    getTripInforBylocation
}