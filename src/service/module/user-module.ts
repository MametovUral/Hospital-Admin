import { privateInstance } from "../client/client";
import { hospitalEndpoints } from "../endpoints";

const UserService = {
  async createUser(user:any) {
    const { data } = await privateInstance.post(
      hospitalEndpoints.createUser,
      user
    );
    return data;
  },
  async updateUser(userId: string, user:any) {
    const { data } = await privateInstance.put(
      hospitalEndpoints.updateUser(userId),
      user
    );
    return data;
  },
  async deleteUser(userId: string) {
    const { data } = await privateInstance.delete(
      hospitalEndpoints.deleteUser(userId)
    );
    return data;
  },
  async getMe() {
    const { data } = await privateInstance.get(hospitalEndpoints.getMe);
    return data;
  },
  async getUser(userId: string) {
    const { data } = await privateInstance.get(
      hospitalEndpoints.getUser(userId)
    );
    return data;
  },
  async getAllUsers() {
    const { data } = await privateInstance.get(hospitalEndpoints.getAllUsers);
    return data;
  },
};

export default UserService;
