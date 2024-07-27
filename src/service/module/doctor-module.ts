import { privateInstance } from "../client/client";
import { hospitalEndpoints } from "../endpoints";

const DoctorService = {
  async createDoctor(doctor: any) {
    const { data } = await privateInstance.post(
      hospitalEndpoints.createDoctor,
      doctor
    );
    return data;
  },
  async getAllDoctors() {
    const { data } = await privateInstance.get(hospitalEndpoints.getAllDoctors);
    return data;
  },
  async deleteDoctor(doctorId: string) {
    const { data } = await privateInstance.delete(
      hospitalEndpoints.deleteDoctor(doctorId)
    );
    return data;
  },
  async getDoctor(doctorId: string) {
    const { data } = await privateInstance.get(
      hospitalEndpoints.getDoctor(doctorId)
    );
    return data;
  },
  async updateDoctor(doctorId: string, doctor: any) {
    const { data } = await privateInstance.put(
      hospitalEndpoints.updateDoctor(doctorId),
      doctor
    );
    return data;
  },
};

export default DoctorService;
