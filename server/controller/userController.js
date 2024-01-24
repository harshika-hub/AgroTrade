import { users, grains, equipments, coldStLands, agriLand, cart } from "../models/userModel.js";
import mongoose from "mongoose";
import { ObjectId } from 'mongodb';

export const newExpertController = async (req, res) => {
    const { experience, education, consultancy_field, consultancy_type, consultancy_fee_video, consultancy_fee_chat, email } = req.body
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
        const grain = await grains.find();
        response.status(200).json({ grain: grain });

    } catch (err) {
        console.log("error in getMarketGrain", err);
        response.status(500).json({ msg: 'err while fetching grain for market' })

    }


}
export const getMarketEquipmentContrller = async (request, response) => {
    try {
        const equipment = await equipments.find();
        response.status(200).json({ equipment: equipment });

    } catch (err) {
        console.log("error in equipment", err);
        response.status(500).json({ msg: 'err while fetching equiment for market' })

    }


}
export const getMarketLandContrller = async (request, response) => {
    try {
        const agriland = await agriLand.find();
        response.status(200).json({ agriLand: agriland });

    } catch (err) {
        console.log("error in getMarketAgriLand", err);
        response.status(500).json({ msg: 'err while fetching agriLand for market' })

    }


}

export const getMarketStorageContrller = async (request, response) => {
    try {
        const storage = await coldStLands.find();
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
            // Check if the product is already in the cart
            const existingProductIndex = existingCart.products.findIndex(p => p.product.toString() === productId.toString());

            if (existingProductIndex !== -1) {
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
                    grainname: '$productDetails.grainname'
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
