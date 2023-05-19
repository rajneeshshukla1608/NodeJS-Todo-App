import jwt from "jsonwebtoken"

export const sendCookie = (user, res, message, statuscode = 201)=>{
    const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET);
    res
    .status(statuscode)
    .cookie("token", token, {
        httpOnly : true,
        maxAge : 15 * 5 * 1000,
        secure : process.env.NODE_ENV === "Development" ? false : true,
        sameSite : process.env.NODE_ENV === "Development" ? "lax" :"none",
    })
    .json({
        success: true,
        message
    });
};