import { privateInstance } from "../client/client";
import { hospitalEndpoints } from "../endpoints";

const SpecService = {
  async getAllSpecs() {
    const { data } = await privateInstance.get(hospitalEndpoints.getAllSpecs);
    return data;
  },
  async getSpec(specId: string) {
    const { data } = await privateInstance.get(
      hospitalEndpoints.getSpec(specId)
    );
    return data;
  },
  async deleteSpec(specId: string) {
    const { data } = await privateInstance.delete(
      hospitalEndpoints.deleteSpec(specId)
    );
    return data;
  },
  async updateSpec(specId: string, spec: any) {
    const { data } = await privateInstance.put(
      hospitalEndpoints.updateSpec(specId),
      spec
    );
    return data;
  },
  async createSpec(spec: any) {
    const { data } = await privateInstance.post(
      hospitalEndpoints.createSpec,
      spec
    );
    return data;
  },
};

export default SpecService;
