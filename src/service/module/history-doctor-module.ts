import { privateInstance } from "../client/client";
import { hospitalEndpoints } from "../endpoints";

const HistoryDoctorService = {
  async getAllHistoryDoctors() {
    const { data } = await privateInstance.get(
      hospitalEndpoints.getAllHistoryDoctors
    );
    return data;
  },
  async createHistoryDoctor(history: any) {
    const { data } = await privateInstance.post(
      hospitalEndpoints.createHistoryDoctor,
      history
    );
    return data;
  },
  async updateHistoryDoctor(historyId: string, history: any) {
    const { data } = await privateInstance.put(
      hospitalEndpoints.updateHistoryDoctor(historyId),
      history
    );
    return data;
  },
  async deleteHistoryDoctor(historyId: string) {
    const { data } = await privateInstance.delete(
      hospitalEndpoints.deleteHistoryDoctor(historyId)
    );
    return data;
  },
  async getHistoryDoctor(historyId: string) {
    const { data } = await privateInstance.get(
      hospitalEndpoints.getHistoryDoctor(historyId)
    );
    return data;
  },
  async getAllHistoryByDoctor(doctorId: string) {
    const { data } = await privateInstance.get(
      hospitalEndpoints.getAllHistoryByDoctor(doctorId)
    );
    return data;
  },
  async createHistoryByDoctor(doctorId: string, history: any) {
    const { data } = await privateInstance.post(
      hospitalEndpoints.createHistoryByDoctor(doctorId),
      history
    );
    return data;
  },
};

export default HistoryDoctorService;
