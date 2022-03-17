import hotelDetailsModel from "../models/hotelDetailsModel.js"

//ADD HOTEL DETAILS BY ID
export const addHotel = async (req, res) =>{
    try{
        const newHotel = new hotelDetailsModel(req.body)
        const hotel = await newHotel.save()
        res.status(200).json(hotel)

    }catch(err){
        res.status(401).json(err)
    }
}

//UPDATE HOTEL DETAILS BY ID
export const updateHotel = async (req, res) =>{
    try{
        const hotel = await hotelDetailsModel.findById(req.params.hotelId)
        if(req.params.hotelId===req.body.hotel_id){
            try{
                updatedHotel = await hotelDetailsModel.findOneAndUpdate(req.params.hotelId, {
                    $set : req.body
                }, {new:true})
                res.status(200).json(updatedHotel)
            }
            catch(err){
                res.status(300).json(err)
            }
        }
        else{
            res.status(400).json("You can only Update your Hotel")
        }
    }catch(err){
        res.status(401).json(err)
    }
}

//DELETE HOTEL DETAILS BY ID
export const deleteHotel = async (req,res) =>{
    const hotel = await hotelDetailsModel.findById(req.params.hotelId)
    if(req.body.hotel_id === req.params.hotelId){
        try{
            await hotelDetailsModel.findByIdAndDelete(req.params.hotelId)
            res.status(200).json("Hotel Deleted Successfully")
        }
        catch(err){
            res.status(400).json(err)
        }
    }
    else{
        res.status(400).json("You can only delete your Hotel")
    }
}

//Not Working
//GET HOTEL DETAILS BY ID
export const getHotel = async (req, res) =>{
    try{
        hotel = await hotelDetailsModel.findById(req.params.hotelId)
        res.status(200).json(hotel)
    }catch(err){
        res.status(400).json(err)
    }
}