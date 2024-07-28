import { privateInstance } from "../client/client";
import { hospitalEndpoints } from "../endpoints";

const RegionService = {
  async getAllRegions() {
    const { data } = await privateInstance.get(hospitalEndpoints.getAllRegions);
    return data;
  },
  async getRegion(regionId: string) {
    const { data } = await privateInstance.get(
      hospitalEndpoints.getRegion(regionId)
    );
    return data;
  },
  async deleteRegion(regionId: string) {
    const { data } = await privateInstance.delete(
      hospitalEndpoints.deleteRegion(regionId)
    );
    return data;
  },
  async updateRegion(regionId: string, region: any) {
    const { data } = await privateInstance.put(
      hospitalEndpoints.updateRegion(regionId),
      region
    );
    return data;
  },
  async createRegion(region: any) {
    const { data } = await privateInstance.post(
      hospitalEndpoints.createRegion,
      region
    );
    return data;
  },
};

export default RegionService;
