import { privateInstance } from "../client/client";
import { hospitalEndpoints } from "../endpoints";

const HistoryPatienService = {
  async getAllHistoryPatients() {
    const { data } = await privateInstance.get(
      hospitalEndpoints.getAllHistoryPatients
    );
    return data;
  },
  async createHistoryPatient(history: any) {
    const { data } = await privateInstance.post(
      hospitalEndpoints.createHistoryPatient,
      history
    );
    return data;
  },
  async updateHistoryPatient(historyId: string, history: any) {
    const { data } = await privateInstance.put(
      hospitalEndpoints.updateHistoryPatient(historyId),
      history
    );
    return data;
  },
  async deleteHistoryPatient(historyId: string) {
    const { data } = await privateInstance.delete(
      hospitalEndpoints.deleteHistoryPatient(historyId)
    );
    return data;
  },
  async getHistoryPatient(historyId: string) {
    const { data } = await privateInstance.get(
      hospitalEndpoints.getHistoryPatient(historyId)
    );
    return data;
  },
  async getAllHistoryByPatient(patientId: string) {
    const { data } = await privateInstance.get(
      hospitalEndpoints.getAllHistoryByPatient(patientId)
    );
    return data;
  },
  async createHistoryByPatient(patientId: string, history: any) {
    const { data } = await privateInstance.post(
      hospitalEndpoints.createHistoryByPatient(patientId),
      history
    );
    return data;
  },
};

export default HistoryPatienService;
