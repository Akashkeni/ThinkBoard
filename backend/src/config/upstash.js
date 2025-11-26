import {Ratelimit} from "@upstash/ratelimit"
import { Redis } from "@upstash/redis"
import dotenv from "dotenv"
dotenv.config()

const ratelimit= new Ratelimit({
    // Loads the env var for redis from the .env file
    redis:Redis.fromEnv(),
    
    // Sets the ratelimit for the requests here 10 requests per 10 sec
    limiter:Ratelimit.slidingWindow(100,"10 s")

})

export default ratelimit;
