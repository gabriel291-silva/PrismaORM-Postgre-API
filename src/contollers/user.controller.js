import { createUser } from "../repositorys/user.repository.js"

export const create = async (req,res)=>{
    try{
        const user = await createUser(req.body)
        console.log(user)
        console.log(req.body)
        res.send(user)
    }catch(e){
        console.log(e)
        res.status(400).send(e)

    }
}