import { privateInstance } from "../client/client";
import { hospitalEndpoints } from "../endpoints";

const WorkerService = {
  async getAllWorkers() {
    const { data } = await privateInstance.get(hospitalEndpoints.getAllWorkers);
    return data;
  },
  async getWorker(workerId: string) {
    const { data } = await privateInstance.get(
      hospitalEndpoints.getWorker(workerId)
    );
    return data;
  },
  async deleteWorker(workerId: string) {
    const { data } = await privateInstance.delete(
      hospitalEndpoints.deleteWorker(workerId)
    );
    return data;
  },
  async updateWorker(workerId: string, worker:any) {
    const { data } = await privateInstance.put(
      hospitalEndpoints.updateWorker(workerId),
      worker
    );
    return data;
  },
  async createWorker(worker:any) {
    const { data } = await privateInstance.post(
      hospitalEndpoints.createWorker,
      worker
    );
    return data;
  },
};

export default WorkerService;
