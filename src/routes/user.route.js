import { create } from "../contollers/user.controller.js";

const userRoutes = app =>{
    app.post("/user", create)
}

export default userRoutes