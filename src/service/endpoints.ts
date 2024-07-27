const hospitalEndpoints = {
  // Auth
  login: "api/users/login",
  logout: "api/users/logout",
  resetPassword: "api/users/resetPassword",
  resetAdminPassword: "api/users/teserdrowssapnimda",

  // User
  createUser: "api/users/create",
  updateUser: (userId: string) => `api/users/${userId}`,
  deleteUser: (userId: string) => `api/users/${userId}`,
  getMe: "api/users/me",
  getUser: (userId: string) => `api/users/${userId}`,
  getAllUsers: "api/users",

  // Doctor
  createDoctor: "api/doctors",
  getAllDoctors: "api/doctors",
  deleteDoctor: (doctorId: string) => `api/doctors/${doctorId}`,
  getDoctor: (doctorId: string) => `api/doctors/${doctorId}`,
  updateDoctor: (doctorId: string) => `api/doctors/${doctorId}`,

  // Patient
  getPatient: (patientId: string) => `api/patients/${patientId}`,
  createPatient: "api/patients",
  getAllPatients: "api/patients",
  getPatientsByDoctor: (doctorId: string) =>
    `api/patients/bydoctor/${doctorId}`,
  updatePatient: (patientId: string) => `api/patients/${patientId}`,
  deletePatient: (patientId: string) => `api/patients/${patientId}`,

  // Worker
  getAllWorkers: "api/workers",
  getWorker: (workerId: string) => `api/workers/${workerId}`,
  deleteWorker: (workerId: string) => `api/workers/${workerId}`,
  updateWorker: (workerId: string) => `api/workers/${workerId}`,
  createWorker: "api/workers",

  // History Doctor
  getAllHistoryDoctors: "api/history-doctor",
  createHistoryDoctor: "api/history-doctor",
  updateHistoryDoctor: (historyId: string) => `api/history-doctor/${historyId}`,
  deleteHistoryDoctor: (historyId: string) => `api/history-doctor/${historyId}`,
  getHistoryDoctor: (historyId: string) => `api/history-doctor/${historyId}`,
  getAllHistoryByDoctor: (doctorId: string) =>
    `api/doctors/${doctorId}/history`,
  createHistoryByDoctor: (doctorId: string) =>
    `api/doctors/${doctorId}/history`,

  // History Patient
  getAllHistoryPatients: "api/history-patient",
  createHistoryPatient: "api/history-patient",
  updateHistoryPatient: (historyId: string) =>
    `api/history-patient/${historyId}`,
  deleteHistoryPatient: (historyId: string) =>
    `api/history-patient/${historyId}`,
  getHistoryPatient: (historyId: string) => `api/history-patient/${historyId}`,
  getAllHistoryByPatient: (patientId: string) =>
    `api/patients/${patientId}/history`,
  createHistoryByPatient: (patientId: string) =>
    `api/patients/${patientId}/history`,

  // Spec
  getAllSpecs: "api/specs",
  getSpec: (specId: string) => `api/specs/${specId}`,
  deleteSpec: (specId: string) => `api/specs/${specId}`,
  updateSpec: (specId: string) => `api/specs/${specId}`,
  createSpec: "api/specs",

  // District
  getAllDistricts: "api/districts",
  getDistrict: (districtId: string) => `api/districts/${districtId}`,
  deleteDistrict: (districtId: string) => `api/districts/${districtId}`,
  updateDistrict: (districtId: string) => `api/districts/${districtId}`,
  createDistrict: "api/districts",

  // Region
  getAllRegions: "api/regions",
  getRegion: (regionId: string) => `api/regions/${regionId}`,
  deleteRegion: (regionId: string) => `api/regions/${regionId}`,
  updateRegion: (regionId: string) => `api/regions/${regionId}`,
  createRegion: "api/regions",

  // Department
  getAllDepartments: "api/departments",
  getDepartment: (departmentId: string) => `api/departments/${departmentId}`,
  deleteDepartment: (departmentId: string) => `api/departments/${departmentId}`,
  updateDepartment: (departmentId: string) => `api/departments/${departmentId}`,
  createDepartment: "api/departments",

  // Room
  getAllRooms: "api/rooms",
  getRoom: (roomId: string) => `api/rooms/${roomId}`,
  deleteRoom: (roomId: string) => `api/rooms/${roomId}`,
  updateRoom: (roomId: string) => `api/rooms/${roomId}`,
  createRoom: "api/rooms",
};

export { hospitalEndpoints };
