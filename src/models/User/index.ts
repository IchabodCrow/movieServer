import { getRepository } from "typeorm";
import bcrypt = require("bcrypt") 
import jwt = require("jsonwebtoken");
import * as dotenv from "dotenv"
import { User } from "../../entity/User";

dotenv.config()

interface ILogin {
  email: string
  password: string
}

export default {
  Query: {
    userById: async (arg, {id} ) => {
      const user = getRepository(User, "default");
      return await user.find(id);
    },
  },
  Mutation: {
    login: async (arg, { email, password }: ILogin) => {
      const candidate = getRepository(User, "default").findOne({email: email});
      const passwordResult = await bcrypt.compare(
        password,
        (await candidate).password
      );
       
       return {
         token: jwt.sign(
           {
             email: (await candidate).email,
             userId: (await candidate).id,
           },
           process.env.JWT_SECRET,
           { expiresIn: 3600 }
         ),
       };
    }
  },
};