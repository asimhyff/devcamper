import {Request , Response} from 'express'

// @desc    get all bootcamps
// @route   GET api/v1/bootcamps
// @access  Public
export const getBootcamps = (req: Request , res: Response) => {
    res
    .status(200)
    .json({
        success: true , msg:`Get all bootcamps`
    })
}

// @desc    get a bootcamp
// @route   GET api/v1/bootcamps/:id
// @access  Public
export const getBootcamp = (req: Request , res: Response) => {
    res
    .status(200)
    .json({
        success: true , msg:`Get a bootcamp of id ${req.params.id}`
    })
}

// @desc    create a new bootcamp
// @route   POST api/v1/bootcamps
// @access  Public
export const createBootcamp = (req: Request , res: Response) => {
    res
    .status(200)
    .json({
        success: true , msg:`Create a new Bootcamp`
    })
}


// @desc    update a bootcamps
// @route   PUT api/v1/bootcamps/:id
// @access  Public
export const updateBootcamp = (req: Request , res: Response) => {
    res
    .status(200)
    .json({
        success: true , msg:`Update bootcamp of id ${req.params.id}`
    })
}


// @desc    delete a bootcamp
// @route   Delete api/v1/bootcamps/:id
// @access  Public
export const deleteBootcamp = (req: Request , res: Response) => {
    res
    .status(200)
    .json({
        success: true , msg:`Delete bootcamp of id ${req.params.id}`
    })
}
