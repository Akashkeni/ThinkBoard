import ratelimit from "../config/upstash.js"


const rateLimiter = async (req,res,next) => {
    const key =req.ip;
    try {
        const {success}= await ratelimit.limit(key);                  
        if(!success){
            return res.status(429).json({
                message:"Too many requests"
            })
        }
        next()
    } catch (error) {
        console.log("Rate limit Error:",error)
        next(error)
    }
}

export default rateLimiter