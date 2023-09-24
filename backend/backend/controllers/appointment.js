const { StatusCodes } = require('http-status-codes')

const Models = require('../models/index')
const Errors = require('../errors/index')


const create = async (req, res) => {

    const appointment = await Models.Appointment.create({ ...req.body })
    
    return res.status(StatusCodes.CREATED).json({

        appointment,
        isValid: true,
    })
}

const list = async (req, res) => {

    const { id, type } = req.body

    console.log({id,type})

    let appointments = []

    if(type==="patient")
    {
        appointments = await Models.Appointment.find({ patient: id }).populate('patient').populate('doctor')
    }
    else if(type==="doctor")
    {
        appointments = await Models.Appointment.find({ doctor: id }).populate('patient').populate('doctor')
    }
    else
    {
        appointments = await Models.Appointment.find({})
        console.log(appointments)
    }
    
    return res.status(StatusCodes.OK).json({

        appointments,
        nbHits: appointments.length,
        isValid: true,
    })
}


const cancel = async (req, res) => {

    const { appointmentID } = req.body

    let result = Models.Appointment.findOneAndDelete(appointmentID);

    // const page = Number(req.query.page) || 1;
    // const limit = Number(req.query.limit) || 10;
    // const skip = (page - 1) * limit;

    // result = result.skip(skip).limit(limit);

    

    return res.status(StatusCodes.OK).json({

        isValid: true 
    
    });

}



const update = async (req, res) => {

    const { appointmentID } = req.body

    const filter = { _id: appointmentID };
    
    const update = { ...req.body };

    const appointment = await Models.Appointment.findOneAndUpdate(filter, update, { new: true });


    return res.status(StatusCodes.OK).json({

        appointment,
        isValid: true,
    })

}


module.exports = {
    
    create,
    update,
    cancel,
    list
}