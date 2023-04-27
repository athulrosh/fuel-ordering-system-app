import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

// Generate JWT
const generateToken = (id, role) => {
    return jwt.sign({ id, role }, process.env.JWT_SECRET, {
        expiresIn: "30d"
    })
}

export { generateToken }