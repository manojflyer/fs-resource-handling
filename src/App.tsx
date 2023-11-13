import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Mastery from "./pages/mastery";

function App() {
  const router = createBrowserRouter([{ path: "/", element: <Mastery /> }]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
