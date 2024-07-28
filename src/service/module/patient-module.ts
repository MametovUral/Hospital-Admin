import { privateInstance } from "../client/client";
import { hospitalEndpoints } from "../endpoints";

const PatientService = {
  async getPatient(patientId: string) {
    const { data } = await privateInstance.get(
      hospitalEndpoints.getPatient(patientId)
    );
    return data;
  },
  async createPatient(patient: any) {
    const { data } = await privateInstance.post(
      hospitalEndpoints.createPatient,
      patient
    );
    return data;
  },
  async getAllPatients() {
    const { data } = await privateInstance.get(
      hospitalEndpoints.getAllPatients
    );
    return data;
  },
  async getPatientsByDoctor(doctorId: string) {
    const { data } = await privateInstance.get(
      hospitalEndpoints.getPatientsByDoctor(doctorId)
    );
    return data;
  },
  async updatePatient(patientId: string, patient: any) {
    const { data } = await privateInstance.put(
      hospitalEndpoints.updatePatient(patientId),
      patient
    );
    return data;
  },
  async deletePatient(patientId: string) {
    const { data } = await privateInstance.delete(
      hospitalEndpoints.deletePatient(patientId)
    );
    return data;
  },
};

export default PatientService;
