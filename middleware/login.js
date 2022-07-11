import jwt from "jsonwebtoken";
import dotenv from 'dotenv'


const login = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token, process.env.JWT_TOKEN)
        req.usuario = decode
        next()
    } catch (error) {
        res.status(401).json({
            Message: 'Erro na validação do usuário. O usuário precisa estar logado.'
        })
    }
}

export default login