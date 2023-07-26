import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import HomeLayout from "./Layouts/HomeLayout";
import Navbar from "./Components/Navbar/Navbar";

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Navbar/>}>
      <Route index element={<HomeLayout/>}/>
    </Route>
  ))

  return (
    <RouterProvider router={router} />
  )
}

export default App
