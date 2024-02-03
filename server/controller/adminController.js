import  admin  from "../models/adminModel.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { users, grains, equipments, agriLand, coldStLands } from "../models/userModel.js";
import organisations from "../models/organizationModel.js"

export const adminLoginController = async (request, response) => {
    try {
        const { email, password } = request.body;

        var existingAdmin = await admin.findOne({ email: email });
        if (existingAdmin == null) {
            response.status(202).json({ message: 'not exist' });
        } else {
            const password_status = await bcrypt.compare(password, existingAdmin.password);
            if (password_status) {
                let payload = {};
                const SECRET_KEY = process.env.JWT_SECRET_KEY;
                payload.data = {
                    email: email,
                    role: process.env.ADMIN_ROLE
                }

                const EXPIRY_TIME = {
                    expiresIn: '6d'
                }
                var token = jwt.sign(payload, SECRET_KEY, EXPIRY_TIME);
                console.log("Login Successfully");

                var logData = await admin.findOne(
                    { email: email },
                    { password: 0, _id: 0, __v: 0 }
                );
                console.log("LogData : ", logData);
                response.status(201).json({ message: 'success', token: token, log: logData, role: process.env.ADMIN_ROLE });
            }
            else {
                console.log("Password does'nt match");
                response.status(200).json({ message: 'wrong password' });
            }
        }
    } catch (err) {
        console.log("err", err);
    }
} 

export const adminGetUserListController = async (request, response) => {
    console.log("inside adminGetUserListController");
    try {
        var result = await users.find({ expert_status: false, user_status: true });
        console.log("result",result);
        response.status(200).json({ result })
    } catch (err) {
        console.log("err", err);
    }
}
export const adminGetOrganizationListController = async (request, response) => {
    try {
        var result = await organisations.find();
        console.log("result", result);
        response.status(200).json({ result })
    } catch (err) {
        console.log("err", err);
    }
}
export const adminViewsGrainController = async (request, response) => {
    try {
        var result = await grains.find();
        console.log("result", result);
        response.status(200).json({ result })
    } catch (err) {
        console.log("err", err);
    }
}
export const statusUpdateController = async (request, response) => {
    try {
        console.log("inside statusUpdateController");
        const { _id } = request.body
        var orgObj = await organisations.findOne({ _id: _id });
        var status = orgObj.status;
        console.log("status",status);
        if (status == "active") {
            await organisations.updateOne({ _id: _id }, { $set: { status: "deactive" } });
            console.log("inside if");
        }
        else {
            await organisations.updateOne({ _id: _id }, { $set: { status: "active" } });
            console.log("inside else");

        }
        response.status(201).json({ message: "success" })
    } catch (err) {
        console.log("err", err);
    }
}
export const statusUserController = async (request, response) => {
    try {
        const { _id } = request.body
        var userObj = await users.findOne({ _id: _id });
        var status = userObj.status;
        if (status == "active") {
            await users.updateOne({ _id: _id }, { $set: { status: "deactive" } });
        }
        else {
            await users.updateOne({ _id: _id }, { $set: { status: "active" } });
        }
        response.status(201).json({ message: "success" })
    } catch (err) {
        console.log("err", err);
    }
}
export const statusExpertController = async (request, response) => {
    try {
        const { _id } = request.body
        var userObj = await users.findOne({ _id: _id });
        var status = userObj.status;
        if (status == "active") {
            await users.updateOne({ _id: _id }, { $set: { status: "deactive" } });
        }
        else {
            await users.updateOne({ _id: _id }, { $set: { status: "active" } });
        }
        response.status(201).json({ message: "success" })
    } catch (err) {
        console.log("err", err);
    }
}
export const statusVerifyController = async (request, response) => {
    try {
        const { _id } = request.body
        var orgObj = await organisations.findOne({ _id: _id });
        var verify_status = orgObj.verify_status;
        if (verify_status == false) {
            await organisations.updateOne({ _id: _id }, { $set: { verify_status: true } });
        }
        else {
            await organisations.updateOne({ _id: _id }, { $set: { verify_status: false } });
        }
        response.status(201).json({ message: "success" })
    } catch (err) {
        console.log("err", err);
    }
}
export const statusVerifyupdateController = async (request, response) => {
    try {
        const { _id } = request.body
        var userObj = await users.findOne({ _id: _id });
        var verify_status = userObj.verify_status;
        if (verify_status == false) {
            await users.updateOne({ _id: _id }, { $set: { verify_status: true } });
        }
        else {
            await users.updateOne({ _id: _id }, { $set: { verify_status: false } });
        }
        response.status(201).json({ message: "success" })
    } catch (err) {
        console.log("err", err);
    }
}
export const statusVerifyExpertController = async (request, response) => {
    try {
        const { _id } = request.body
        var userObj = await users.findOne({ _id: _id });
        var verify_status = userObj.verify_status;
        if (verify_status == false) {
            await users.updateOne({ _id: _id }, { $set: { verify_status: true } });
        }
        else {
            await users.updateOne({ _id: _id }, { $set: { verify_status: false } });
        }
        response.status(201).json({ message: "success" })
    } catch (err) {
        console.log("err", err);
    }
}
export const verifyAdminStatusController = async (request, response) => {
    try {
        const { _id } = request.body
        var userObj = await grains.findOne({ _id: _id });
        var admin_verify = userObj.admin_verify;
        if (admin_verify == false) {
            await grains.updateOne({ _id: _id }, { $set: { admin_verify: true } });
        }
        else {
            await grains.updateOne({ _id: _id }, { $set: { admin_verify: false } });
        }
        response.status(201).json({ message: "success" })
    } catch (err) {
        console.log("err", err);
    }
}
export const verifyStatusAdminController = async (request, response) => {
    try {
        const { _id } = request.body
        var userObj = await equipments.findOne({ _id: _id });
        var admin_verify = userObj.admin_verify;
        if (admin_verify == false) {
            await equipments.updateOne({ _id: _id }, { $set: { admin_verify: true } });
        }
        else {
            await equipments.updateOne({ _id: _id }, { $set: { admin_verify: false } });
        }
        response.status(201).json({ message: "success" })
    } catch (err) {
        console.log("err", err);
    }
}
export const verifyAdminStatusAgController = async (request, response) => {
    try {
        const { _id } = request.body
        var userObj = await agriLand.findOne({ _id: _id });
        var admin_verify = userObj.admin_verify;
        if (admin_verify == false) {
            await agriLand.updateOne({ _id: _id }, { $set: { admin_verify: true } });
        }
        else {
            await agriLand.updateOne({ _id: _id }, { $set: { admin_verify: false } });
        }
        response.status(201).json({ message: "success" })
    } catch (err) {
        console.log("err", err);
    }
}
export const verifyAdminStatusColdController = async (request, response) => {
    try {
        const { _id } = request.body
        var userObj = await coldStLands.findOne({ _id: _id });
        var admin_verify = userObj.admin_verify;
        if (admin_verify == false) {
            await coldStLands.updateOne({ _id: _id }, { $set: { admin_verify: true } });
        }
        else {
            await coldStLands.updateOne({ _id: _id }, { $set: { admin_verify: false } });
        }
        response.status(201).json({ message: "success" })
    } catch (err) {
        console.log("err", err);
    }
}

export const adminGetExpertListController = async (request, response) => {
    try {
        var result = await users.find({ expert_status: true });
        response.status(200).json({ result })
    } catch (err) {
        console.log("err", err);
    }
}
export const adminVeiwEquipmentController = async (request, response) => {
    try {
        var result = await equipments.find();
        response.status(200).json({ result })
    } catch (err) {
        console.log("err", err);
    }
}
export const adminViewsAgriLandController = async (request, response) => {
    try {
        var result = await agriLand.find();
        response.status(200).json({ result })
    } catch (err) {
        console.log("err", err);
    }
}
export const adminColdStLandController = async (request, response) => {
    try {
        var result = await coldStLands.find();
        response.status(200).json({ result })
    } catch (err) {
        console.log("err", err);
    }
}
