import UserModel from "../Models/UserModel.js";
import PermisosModel from "../Models/PermisosModel.js";
import bcrypt from "bcrypt";

export const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getUser = async (req, res) => {
    try {
        const user = await UserModel.findAll({
            where: {
                id: req.params.id,
            },
        });
        res.json(user[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createUser = async (req, res) => {
    let { username, password, email, charactername } = req.body;
    const saltRounds = 10;
    //let { id_usuario, publicar, comentar, editar } = pow;
    try {
        password = bcrypt.hashSync(password, saltRounds);
        const user = { username, password, email, charactername };
        await UserModel.create(user);
        await PermisosModel.create();
        res.status(200).json({ message: "Usuario created successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error at creating user" });

        console.log("Error at creating user");
    }
};

export const updateUser = async (req, res) => {
    let { charactername } = req.body;
    try {
        const user = { charactername };
        await UserModel.update(user, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(user);
    } catch (error) {
        res.status(201).json();
    }
};

export const deleteUser = async (req, res) => {
    try {
        const user = await UserModel.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            message: "User deleted successfully",
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
