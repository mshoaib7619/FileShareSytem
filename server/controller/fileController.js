const File = require('../models/file')
const dotenv = require('dotenv')
dotenv.config()
const SERVER_PATH = process.env.SERVER_PATH
const addFile =async(req,res)=>{
    const fileObj ={
        path : req.file.path,
        name: req.file.originalname
    }
    try {
        const file =await File.create(fileObj)
        res.status(200).json({path:`${SERVER_PATH}/files/${file._id}`})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}


const downloadFile =async(req,res)=>{
    try {
        const file = await File.findById(req.params.fileId);
        // console.log(file)
        // res.json(file)
        file.downloadContent++;

        await file.save()
        res.download(file.path,file.name)

    } catch (error) {
        return res.status(500).json({error:error.message})

    }

}
module.exports={
    addFile,
    downloadFile
}
