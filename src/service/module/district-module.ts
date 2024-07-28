import { privateInstance } from "../client/client";
import { hospitalEndpoints } from "../endpoints";

const DistrictService = {
  async getAllDistricts() {
    const { data } = await privateInstance.get(
      hospitalEndpoints.getAllDistricts
    );
    return data;
  },
  async getDistrict(districtId: string) {
    const { data } = await privateInstance.get(
      hospitalEndpoints.getDistrict(districtId)
    );
    return data;
  },
  async deleteDistrict(districtId: string) {
    const { data } = await privateInstance.delete(
      hospitalEndpoints.deleteDistrict(districtId)
    );
    return data;
  },
  async updateDistrict(districtId: string, district: any) {
    const { data } = await privateInstance.put(
      hospitalEndpoints.updateDistrict(districtId),
      district
    );
    return data;
  },
  async createDistrict(district: any) {
    const { data } = await privateInstance.post(
      hospitalEndpoints.createDistrict,
      district
    );
    return data;
  },
};

export default DistrictService;
