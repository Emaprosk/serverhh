import bcrypt from "bcrypt";
import User from "../Models/UserModel.js";
import UserModel from "../Models/UserModel.js";

export const LogIn = async (req, res) => {
    const { body } = req;
    const { username, password } = body;

    try {
        const user = await User.findOne({
            where: { username: username },
        });

        const passwordCorrect =
            user === null
                ? false
                : await bcrypt.compare(password, user.password);

        if (!passwordCorrect) {
            res.status(401).json({ message: "Error credenciales" });
            console.log(passwordCorrect);
        } else {
            res.status(200).send({
                id: user.id,
                username: user.username,
                password: user.password,
            });
        }
    } catch (error) {
        console.log(error);
    }
};

export const ChangePassword = async (req, res) => {
    let { id, password, newPassword } = req.body;
    const saltRounds = 10;

    if (!(password.trim().length === 0) && !(newPassword.trim().length === 0)) {
        try {
            const user = await User.findOne({
                where: { id: id },
            });
            const passwordCorrect =
                user === null
                    ? false
                    : await bcrypt.compare(password, user.password);
            console.log(passwordCorrect);
            if (passwordCorrect) {
                newPassword = bcrypt.hashSync(newPassword, saltRounds);
                const user = { password: newPassword };
                await UserModel.update(user, {
                    where: {
                        id: id,
                    },
                });

                res.status(200).json("Constraseña cambiada");
            } else {
                res.status(201).json("La contraseña actual es incorrecta");
            }
        } catch (error) {
            console.log(error);
        }
    } else {
        res.status(202).json("Error credenciales");
    }
};

export const GetUserToken = async (req, res) => {
    let { token } = req.body;

    try {
        const user = await UserModel.findAll({
            where: {
                password: token,
            },
        });
        res.json(user[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/*

loginRouter.post('/', async (req, res) => {
    const {body} = req;
    const {username, password} = body;

    const user = await User.findOne({username: username});
    const passwordCorrect = user === null
    ? false 
    : await bcrypt.compare(password, user.password);

    if (!passwordCorrect) {
        res.status(401).json({message: 'Invalid Credentials'});
    }

    res.send({
        username: user.username
    });
})*/
