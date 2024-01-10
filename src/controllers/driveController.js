import driveService from '../services/driveService'

// viết api lấy ra thông tin bác sĩ
const getAllDrive = async (req, res) => {
    try {
        let drives = await driveService.getAllDrives();
        return res.status(200).json(drives);

    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}

const postInforDrive = async (req, res) => {

    try {
        let response = await driveService.saveDetailInforDrive(req.body);
        return res.status(200).json(response);

    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}


module.exports = {
    getAllDrive,
    postInforDrive
}