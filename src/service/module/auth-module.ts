import { hospitalEndpoints } from "../endpoints";
import { privateInstance } from "../client/client";

const AuthService = {
  async login(credentials: any) {
    const { data } = await privateInstance.post(
      hospitalEndpoints.login,
      credentials
    );
    return data;
  },
  async logout() {
    const { data } = await privateInstance.post(hospitalEndpoints.logout);
    return data;
  },
  async resetPassword(resetData: any) {
    const { data } = await privateInstance.post(
      hospitalEndpoints.resetPassword,
      resetData
    );
    return data;
  },
  async resetAdminPassword(resetData: any) {
    const { data } = await privateInstance.post(
      hospitalEndpoints.resetAdminPassword,
      resetData
    );
    return data;
  },
};

export default AuthService;
