import { privateInstance } from "../client/client";
import { hospitalEndpoints } from "../endpoints";

const DepartmentServise = {
  async getAllDepartments() {
    const { data } = await privateInstance.get(hospitalEndpoints.getAllDepartments);
    return data;
  },
  async getDepartment(departmentId: string) {
    const { data } = await privateInstance.get(
      hospitalEndpoints.getDepartment(departmentId)
    );
    return data;
  },
  async deleteDepartment(departmentId: string) {
    const { data } = await privateInstance.delete(
      hospitalEndpoints.deleteDepartment(departmentId)
    );
    return data;
  },
  async updateDepartment(departmentId: string, department:any) {
    const { data } = await privateInstance.put(
      hospitalEndpoints.updateDepartment(departmentId),
      department
    );
    return data;
  },
  async createDepartment(department:any) {
    const { data } = await privateInstance.post(
      hospitalEndpoints.createDepartment,
      department
    );
    return data;
  },
};

export default DepartmentServise;
