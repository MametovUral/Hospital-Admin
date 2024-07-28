import { privateInstance } from "../client/client";
import { hospitalEndpoints } from "../endpoints";

const RoomService = {
  async getAllRooms() {
    const { data } = await privateInstance.get(hospitalEndpoints.getAllRooms);
    return data;
  },
  async getRoom(roomId: string) {
    const { data } = await privateInstance.get(
      hospitalEndpoints.getRoom(roomId)
    );
    return data;
  },
  async deleteRoom(roomId: string) {
    const { data } = await privateInstance.delete(
      hospitalEndpoints.deleteRoom(roomId)
    );
    return data;
  },
  async updateRoom(roomId: string, room: any) {
    const { data } = await privateInstance.put(
      hospitalEndpoints.updateRoom(roomId),
      room
    );
    return data;
  },
  async createRoom(room: any) {
    const { data } = await privateInstance.post(
      hospitalEndpoints.createRoom,
      room
    );
    return data;
  },
};

export default RoomService;
