import { users, grains, equipments, coldStLands, agriLand, cart,cartEqp ,expertBook, grainOrder} from "../models/userModel.js";
import mongoose from "mongoose";
import { ObjectId } from 'mongodb';

export const newExpertController = async (req, res) => {
    const { experience, education, consultancy_field, consultancy_type, consultancy_fee_video, consultancy_fee_chat, email,grainOrder } = req.body
    const updateUser = {
        experience,
        education,
        consultancy_field,
        consultancy_type,
        certificate: req.file.filename,
        expert_status: true
    };

    // Check if consultancy_fee_video exists in req.body, then add it to updateUser
    if (consultancy_fee_video !== undefined) {
        updateUser.consultancy_fee_video = consultancy_fee_video;
    }

    // Check if consultancy_fee_chat exists in req.body, then add it to updateUser
    if (consultancy_fee_chat !== undefined) {
        updateUser.consultancy_fee_chat = consultancy_fee_chat;
    }
    try {
        console.log("body data in expert Controller", req.body);
        console.log("image", req.file)
        const user = await users.findOneAndUpdate({ email: email }, updateUser, { new: true });

        console.log("updated expert ", user);
        res.status(201).json({ msg: "Expert Details updated" })
    } catch (err) {
        console.log("error in expertController", err)
        res.status(500).json({ msg: "Error While updating User" })
    }

}
export const getUserController = async (req, res) => {
    console.log("ooooooooooooooo", req.body)
    try {
        const userData = await users.aggregate([{ $match: { email: req.body.email } }]);
        console.log(userData);
        res.status(200).json(userData);
    } catch (err) {
        console.log("error while getting user", err)
        res.status(500).json({ msg: "err while fetching user" })
    }


}
export const updateProfileController = async (req, res) => {
    req.body.image = req.file.filename;
    req.body.user_status = true;
    console.log("user data in update user router", req.body);
    try {
        const resp = await users.findOneAndUpdate({ email: req.body.email }, { $set: req.body });
        const userData = await users.aggregate([{ $match: { email: req.body.email } }]);

        // console.log("res in complete user", userData);
        res.status(201).json({ result: userData });

    } catch (err) {
        console.log("err while completing profile", err);
        res.status(500).json({ msg: "error while updating" });
    }
}

export const grainInsertController = async (request, response) => {
    try {
        var grainData = {
            ...request.body,
            image: request.file.filename
        };
        console.log("grainData", grainData);
        var newGrain = await grains.create(grainData);
        console.log("Insert Successfully");
        response.status(201).json({ message: "success" })
    } catch (err) {
        console.log("err", err);
    }
}
export const coldStLandsInsertController = async (request, response) => {
    try {
        const { image, image360 } = request.files;
        var coldStLandsData = {
            ...request.body,
            image: image ? image[0].filename : null,
            image360: image360 ? image360[0].filename : null,
        };
        var newGrain = await coldStLands.create(coldStLandsData);
        console.log("Insert Successfully");
        response.status(201).json({ message: "success" })
    } catch (err) {
        console.log("err", err);
    }
}

export const getGrainController = async (request, response) => {
    try {
        var result = await grains.find({ userEmail: request.body.userEmail });
        response.status(201).json({ result })
    } catch (err) {
        console.log("err", err);
    }
}
export const getcoldStLandsController = async (request, response) => {
    try {
        var result = await coldStLands.find({ userEmail: request.body.userEmail });
        console.log('cold',result);
        
        response.status(201).json({ result })
    } catch (err) {
        console.log("err", err);
    }
}

export const deleteGrainController = async (request, response) => {
    try {
        var result = await grains.deleteOne({ _id: request.body.GrainId });
        response.status(201).json({ message: "success" })
    } catch (err) {
        console.log("err", err);
    }
}

export const deleteColdStLandController = async (request, response) => {
    try {
        var result = await coldStLands.deleteOne({ _id: request.body.coldStId });
        response.status(201).json({ message: "success" })
    } catch (err) {
        console.log("err", err);
    }
}

export const updateColdStLandController = async (request, response) => {
    const { _id } = request.body;
    try {
        if (request.files && request.files.image) {
            const image = request.files.image[0].filename;
            request.body = { ...request.body, ["image"]: image };
        }

        if (request.files && request.files.image360) {
            const image360 = request.files.image360[0].filename;
            request.body = { ...request.body, ["image360"]: image360 };
        }
    } catch (err) {
        console.log("err", err);
    }
    const result = await coldStLands.updateOne({ _id: _id }, { $set: request.body });
    response.status(201).json({ message: "success" })
}
export const updateAgriLandController = async (request, response) => {
    const { _id } = request.body;
    try {
        if (request.files && request.files.image) {
            const image = request.files.image[0].filename;
            request.body = { ...request.body, ["image"]: image };
        }

        if (request.files && request.files.image360) {
            const image360 = request.files.image360[0].filename;
            request.body = { ...request.body, ["image360"]: image360 };
        }
    } catch (err) {
        console.log("err", err);
    }
    const result = await agriLand.updateOne({ _id: _id }, { $set: request.body });
    const Lands = await agriLand.find({ ownerEmail: request.body.ownerEmail });
    response.status(201).json({ message: "success", Lands })
}

export const updateGrainController = async (request, response) => {
    const { _id } = request.body;
    try {
        var image = '';
        if (request.file.filename != "undefined") {
            image = request.file.filename;
            request.body = { ...request.body, ["image"]: image };
        }
    } catch (err) {
        console.log("err");
    }
    const result = await grains.updateOne({ _id: _id }, { $set: request.body });
    response.status(201).json({ message: "success" })
}

export const addEquipmentController = async (request, response) => {
    try {
        var equipmentData = {
            ...request.body,
            image: request.file.filename
        };
        console.log('Equipment--->', equipmentData);

        var newEquipment = await equipments.create(equipmentData);
        response.status(201).json({ message: "success" });
    } catch (err) {
        console.log("addEquipment controller error", err);

    }
}

export const getEquipmentController = async (request, response) => {
    console.log("request.body", request.body.userEmail);
    try {
        var result = await equipments.find({ userEmail: request.body.userEmail })
        response.status(201).json({ result });
    } catch (err) {
        console.log("err", err);
    }
}

export const deleteEquipmentController = async (request, response) => {
    console.log("request.body", request.body.EquipmentId);
    try {
        var result = await equipments.deleteOne({ _id: request.body.EquipmentId });
        response.status(201).json({ message: "success" })
    } catch (err) {
        console.log("err", err);
    }
}

export const updateEquipmentController = async (request, response) => {
    const { _id } = request.body;
    try {
        var image = '';
        if (request.file.filename != "undefined") {
            image = request.file.filename;
            request.body = { ...request.body, ["image"]: image };
        }
    } catch (err) {
        console.log("err");
    }
    const result = await equipments.updateOne({ _id: _id }, { $set: request.body });
    response.status(201).json({ message: "success" })
}

export const addAgriLandController = async (request, response) => {
    try {
        const { image, image360 } = request.files;
        const landData = {
            ...request.body,
            image: image ? image[0].filename : null,
            image360: image360 ? image360[0].filename : null,
        };
        console.log(landData);
        const newAgriLand = await agriLand.create(landData);
        console.log("Agriculture Land Inserted Successfully");
        const Lands = await agriLand.find({ ownerEmail: request.body.ownerEmail });
        response.status(201).json({ message: "success", Lands: Lands });
    } catch (err) {
        console.log("err", err);
        response.status(500).json({ message: "Internal Server Error" });
    }
};

export const getAgriLandController = async (request, response) => {
    try {
        const Lands = await agriLand.find({ ownerEmail: request.query.ownerEmail });
        response.status(201).json({ message: "success", Lands });
    } catch (err) {
        console.log("err", err);
        response.status(500).json({ message: "Internal Server Error" });
    }
}
export const removeAgriLandController = async (request, response) => {
    try {
        console.log("hello");

        console.log(request.query);
        await agriLand.deleteOne({ _id: request.query._id });
        const Lands = await agriLand.find({ ownerEmail: request.query.ownerEmail });
        console.log("Land Deleted Sucessfully");
        response.status(201).json({ message: "success", Lands });
    } catch (err) {
        console.log("error in deleing Land");
        console.log("err", err);
        response.status(500).json({ message: "Internal Server Error" });
    }
}
export const getExpertContrller = async (req, res) => {
    try {
        const expert = await users.aggregate([{ $match: { expert_status: true } }]);
        if (expert.length === 0) {
            res.status(204).json({ msg: "There is no expert available" })
        } else {
            res.status(200).json({ expert: expert });

        }
    } catch (err) {
        res.status(500).json("error while fetching expert");

    }
}
export const getMarketGrainContrller = async (request, response) => {
    try {
        const grain = await grains.find({admin_verify:true});
        response.status(200).json({ grain: grain });

    } catch (err) {
        console.log("error in getMarketGrain", err);
        response.status(500).json({ msg: 'err while fetching grain for market' })

    }


}
export const getMarketEquipmentContrller = async (request, response) => {
    try {
        const equipment = await equipments.find({admin_verify:true});
        response.status(200).json({ equipment: equipment });

    } catch (err) {
        console.log("error in equipment", err);
        response.status(500).json({ msg: 'err while fetching equiment for market' })

    }


}
export const getMarketLandContrller = async (request, response) => {
    try {
        const agriland = await agriLand.find({admin_verify:true});
        response.status(200).json({ agriLand: agriland });

    } catch (err) {
        console.log("error in getMarketAgriLand", err);
        response.status(500).json({ msg: 'err while fetching agriLand for market' })

    }


}

export const getMarketStorageContrller = async (request, response) => {
    try {
        const storage = await coldStLands.find({admin_verify:true});
        response.status(200).json({ storage: storage });

    } catch (err) {
        console.log("error in getMarketStorage", err);
        response.status(500).json({ msg: 'err while fetching storage for market' })

    }

}

export const addcartController = async (request, response) => {
    try {
        const { _id, email } = request.body;
        console.log("id email", _id, email);

        const productId = new ObjectId(_id);

        const product = await grains.findOne({ _id: productId });

        const userIdObj = await users.aggregate([
            { $match: { email: email } },
            { $project: { _id: 1 } }
        ]);
        console.log("userId", userIdObj);
        const userId = userIdObj[0]._id;

        const existingCart = await cart.findOne({ userId: userId });

        if (existingCart) {
            const existingProductIndex = existingCart.products.findIndex(p => p.product.toString() === productId.toString());
            console.log("existing cart");

            if (existingProductIndex !== -1) {
                const existingProduct=existingCart.products[existingProductIndex].quantity;
                console.log("existing product quantity",existingProduct);

                // If the product is already in the cart, increase the quantity
                await cart.findOneAndUpdate(
                    { userId: userId, "products.product": productId },
                    { $inc: { "products.$.quantity": 1 } }
                );
            } else {
                await cart.findOneAndUpdate(
                    { userId: userId },
                    {
                        $push: {
                            products: {
                                product: productId,
                                quantity: 1,
                                date: new Date(),
                                price: product.price,
                            }
                        }
                    }
                );
            }
        } else {
            const newCart = new cart({
                userId: userId,
                products: [{
                    product: productId,
                    quantity: 1,
                    date: new Date(),
                    price: product.price,
                }],
            });

            await newCart.save();
        }

        response.status(201).json({ msg: "added successfully" });
    } catch (err) {
        console.log("error in cart controller", err);
        response.status(500).json({ error: 'Internal Server Error' });
    }
}

export const getCartController = async (request, response) => {
    try {
        const { email } = request.body;
        console.log("email", email);

        const userIdObj = await users.aggregate([
            { $match: { email: email } },
            { $project: { _id: 1 } }
        ]);
        console.log("userId", userIdObj);
        const userId = userIdObj[0]._id;

        const cartItems = await cart.aggregate([
            {
                $match: { userId: userId }
            },
            {
                $unwind: "$products"
            },
            {
                $lookup: {
                    from: 'grains',
                    localField: 'products.product',
                    foreignField: '_id',
                    as: 'productDetails'
                }
            },
            {
                $unwind: "$productDetails"
            },
            {
                $project: {
                    productId: '$products.product',
                    quantity: '$products.quantity',
                    date: '$products.date',
                    price: '$products.price',
                    productName: '$productDetails.name',
                    productDescription: '$productDetails.description',
                    grainname: '$productDetails.grainname',
                    image: '$productDetails.image'
                }
            }
        ]);

        console.log(cartItems);

        response.status(200).json(cartItems);
    } catch (err) {
        console.log("error in get cart controller", err);
        response.status(500).json({ error: 'Internal Server Error' });
    }
}

export const updateCartController = async (request, response) => {
    const { _id, productId, quantity, email } = request.body;
    console.log("inside update cart", _id, email, productId, quantity);
    const pid = new ObjectId(productId)
    const checkGrain = await grains.findOne({ _id: pid });
    if (checkGrain.quantity < quantity)
        response.status(500).json({ msg: "invalid quantity" });
    try {
        const result = await cart.updateOne(
            { _id: new ObjectId(_id), 'products.product': pid },
            { $set: { 'products.$.quantity': quantity } }
        );

        if (result.modifiedCount === 1) {
            response.status(200).json({ msg: 'Product quantity updated successfully' });
        } else {
            console.log("cart...............", result)
            response.status(404).json({ error: 'Product not found in the cart' });
        }
    } catch (error) {
        console.error('Error updating product quantity:', error);
        response.status(500).json({ error: 'Internal Server Error' });
    }

}

export const removeCartController = async(request, response) => {
    const { cartId, productId } = request.body;
    console.log("inside removecart",cartId, productId)
    const result =await cart.updateOne({ _id: new ObjectId( cartId) },
        { $pull: { products: { product: new ObjectId(productId) } } },
        
    )
   
    if (result.modifiedCount === 0) {
        console.log("removed successfully",result)

        return response.status(404).json({ msg: "product not found in the cart" })
    } else {
        console.log("removed successfully",result)
        return response.status(200).json({ msg: "removed successfully" })

    }

    }
    export const addcartEqpController=async (request, response) => {
        try {
            const { _id, email } = request.body;
            console.log("id email in EquipmentCart", _id, email);
    
            const productId = new ObjectId(_id);
    
            const product = await equipments.findOne({ _id: productId });
    
            const userIdObj = await users.aggregate([
                { $match: { email: email } },
                { $project: { _id: 1 } }
            ]);
            console.log("userId", userIdObj);
            const userId = userIdObj[0]._id;
    
            const existingCart = await cartEqp.findOne({ userId: userId });
    
            if (existingCart) {
                const existingProductIndex = existingCart.equips.findIndex(p => p.product.toString() === productId.toString());
                console.log("existing cart");
    
                if (existingProductIndex !== -1) {
                    const existingProduct=existingCart.equips[existingProductIndex].quantity;
                    console.log("existing product quantity",existingProduct);
    
                    // If the product is already in the cart, increase the quantity
                    await cartEqp.findOneAndUpdate(
                        { userId: userId, "products.product": productId },
                        { $inc: { "products.$.quantity": 1 } }
                    );
                } else {
                    await cartEqp.findOneAndUpdate(
                        { userId: userId },
                        {
                            $push: {
                                equips: {
                                    product: productId,
                                    quantity: 1,
                                    date: new Date(),
                                    price: product.price,
                                }
                            }
                        }
                    );
                }
            } else {
                const newCart = new cartEqp({
                    userId: userId,
                    equips: [{
                        product: productId,
                        quantity: 1,
                        date: new Date(),
                        price: product.price,
                    }],
                });
    
                await newCart.save();
            }
    
            response.status(201).json({ msg: "Equipment added successfully" });
        } catch (err) {
            console.log("error in Equipent cart controller", err);
            response.status(500).json({ error: 'Internal Server Error' });
        }
    }
    
    export const equipmentCartController= async (request, response) => {
        try {
            const { email } = request.body;
            console.log("email", email);
    
            const userIdObj = await users.aggregate([
                { $match: { email: email } },
                { $project: { _id: 1 } }
            ]);
            console.log("userId", userIdObj);
            const userId = userIdObj[0]._id;
    
            const cartItems = await cartEqp.aggregate([
                {
                    $match: { userId: userId }
                },
                {
                    $unwind: "$equips"
                },
                {
                    $lookup: {
                        from: 'equipments',
                        localField: 'equips.product',
                        foreignField: '_id',
                        as: 'productDetails'
                    }
                },
                {
                    $unwind: "$productDetails"
                },
                {
                    $project: {
                        productId: '$equips.product',
                        quantity: '$equips.quantity',
                        date: '$equips.date',
                        price: '$equips.price',
                        productName: '$productDetails.name',
                        productDescription: '$productDetails.description',
                        grainname: '$productDetails.grainname',
                        image: '$productDetails.image'
                    }
                }
            ]);
    
            console.log(cartItems);
    
            response.status(200).json(cartItems);
        } catch (err) {
            console.log("error in get equipment cart controller", err);
            response.status(500).json({ error: 'Internal Server Error' });
        }
    }
    
    export const updateCartequipmentController=async (request, response) => {
        const { _id, productId, quantity, email } = request.body;
        console.log("inside update equipment cart", _id, email, productId, quantity);
        const pid = new ObjectId(productId)
        const checkEquip = await equipments.findOne({ _id: pid });
        console.log("checEquip",checkEquip);
        if (checkEquip.quantity < quantity)
            response.status(500).json({ msg: "invalid quantity" });
    
        try {
            const result = await cartEqp.updateOne(
                { _id: new ObjectId(_id), 'equips.product': pid },
                { $set: { 'equips.$.quantity': quantity } }
            );
    
            if (result.modifiedCount === 1) {
                response.status(200).json({ msg: 'equipment quantity updated successfully' });
            } else {
                console.log("Equipment cart...............", result)
                response.status(404).json({ error: 'equipment not found in the cart' });
            }
        } catch (error) {
            console.error('Error updating equipment quantity:', error);
            response.status(500).json({ error: 'Internal Server Error' });
        }
    
    }
    
    export const removeCartequipmentController=async(request, response) => {
        const { cartId, productId } = request.body;
        console.log("inside removecart equipment",cartId, productId)
        const result =await cartEqp.updateOne({ _id: new ObjectId( cartId) },
            { $pull: { equips: { product: new ObjectId(productId) } } },
            
        )
       
        if (result.modifiedCount === 0) {
            console.log("removed successfully",result)
    
            return response.status(404).json({ msg: "product not found in the cart" })
        } else {
            console.log("removed successfully",result)
            return response.status(200).json({ msg: "removed successfully" })
    
        }
    
        }

       export const grainTotalorderController=async(request,response)=>{
            try{
                const order=await grainOrder.find();
                console.log("order in grain Order",order);
                response.status(200).json({order:order});
            }catch(err){
                console.log("error in grain order controller",err);
                response.status(500).json({msg:'error occured while getting order'});

            }
           
        }
export const bookExpertController = async (request, response) => {
    try{
        var userObj = await users.findOne({email:request.body.userEmail});
        var obj = {
            consultingTopic:request.body.consultingTopic,
            consultingType:request.body.consultingType,
            consultingDate:request.body.consultingDate,
            consultingTime:request.body.consultingTime,
            clientId:userObj._id,
            expertId:request.body.ExpertId
        }
        var result = await expertBook.create(obj);
        console.log("result",result);
        response.status(201).json({ message: "success" })
    }catch(err){
        console.log("err",err);
    }
}

export const expertViewDataController = async (request, response) => {  
    try {
        var obj = await users.findOne({email:request.body.email});
        var expert = obj._id;
        const result = await expertBook.aggregate([
            {
                $match: {
                    expertId: new mongoose.Types.ObjectId(expert)
                }
            },
            {
                $lookup: {
                    from: 'users',
                    localField: 'clientId',
                    foreignField: '_id',
                    as: 'client'
                }
            },
            {
                $lookup: {
                    from: 'users',
                    localField: 'expertId',
                    foreignField: '_id',
                    as: 'expert'
                }
            },
            {
                $unwind: '$client'
            },
            {
                $project: {
                    _id: 1,
                    expertId: 1,
                    clientId: 1,
                    consultingTopic: 1,
                    consultingType: 1,
                    consultingTime: 1,
                    consultingDate: 1,
                    confirm: 1,
                    'client.name': 1,
                }
            }
        ]);
        if (result.length > 0) {
            response.status(201).json({ message: "success", result });
        } else {
            response.status(500).json({ message: "Internal Server Error" });
        }
    } catch (error) {
        console.error('Error fetching consulting details:', error);
        throw error;
    }
}

export const statusVerifyupdateController = async(request, response) => {
    try{
        const {clientId} = request.body
        var userObj = await expertBook.findOne({clientId:clientId});
        var confirm = userObj.confirm;
        if(confirm==false){
            await expertBook.updateOne({clientId:clientId},{$set:{confirm:true}});
        }
        else{
            await expertBook.updateOne({clientId:clientId},{$set:{confirm:false}});
        }
        response.status(201).json({message:"success"})
    }catch(err){
        console.log("err",err);
    }
}
