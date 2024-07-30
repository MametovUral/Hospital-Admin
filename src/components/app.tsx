import RootLayout from "@/layouts/root-layout";
import Dashboard from "@/pages/dashboard";
import DoctorPage from "@/pages/doctor-page";
import ErrorPage from "@/pages/error-page";
import PatientPage from "@/pages/patient-page";
import WorkerPage from "@/pages/worker-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "worker", element: <WorkerPage /> },
      { path: "doctor", element: <DoctorPage /> },
      { path: "patient", element: <PatientPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
