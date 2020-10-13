import { getRepository } from "typeorm";
import { User } from "../../entity/User";

export default {
  Query: {
    userById: async (arg) => {
      const user = getRepository(User, "default");
      return await user.find();
    }
  }, 
  Mutation: {
    login: async (arg, {email, password}) => {
      const user = new User();
      user.firstName = email;
      user.password = password;
      return await getRepository(User, "default").save(user);
    }
  }
}