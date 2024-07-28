import RootLayout from "@/layouts/root-layout";
import ErrorPage from "@/pages/error-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <RootLayout />, errorElement: <ErrorPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
