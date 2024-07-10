import express  from "express";
import { validationMiddleware } from "../../middleware/Validation.Middelware";
import { VcategorySchema } from "./category.validation";

const route = express.Router();


route.post('/categories', validationMiddleware(VcategorySchema) );
route.get('/cetegories', (req,res)=>{
    res.status(200).json({
        message:"All categories"
    })
})

export const CategoryRoute = route;