import { useState } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import reactLogo from "./assets/react.svg";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Prejeto from "./pages/Prejeto";
import Osnutki from "./pages/Osnutki";
import Poslano from "./pages/Poslano";
import Details from "./components/Details";
import "./styles/CircleDiv.css";
import "./styles/General.css";
import "./styles/Holder.css";
import "./styles/Main.css";
import "./styles/Navbar.css";
import "./styles/Searchbar.css";
import "./styles/Sidebar.css";
import "./styles/SideOption.css";
import "./styles/Scrollable.css";
import "./styles/ScrollableTop.css";
import "./styles/Mail.css";
import "./styles/ProgressBar.css";
import "./styles/File.css";
import "./styles/Top1.css";
import "./styles/CustomTop1.css";
import "./styles/DropDowns.css";
import "./styles/Buttons.css";
import "./styles/EmailUser.css";
import "./styles/NewMail.css";

import { TbH1 } from "react-icons/tb";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Prejeto></Prejeto>} />
      <Route path="prejeto-glavno" element={<Prejeto></Prejeto>} />
      <Route path="osnutki" element={<Osnutki></Osnutki>} />
      <Route path="poslano" element={<Poslano></Poslano>} />
      <Route path="details/:id" element={<Details></Details>} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>

      {/*<Navbar></Navbar>
      <Main></Main>*/}
    </>
  );
}

export default App;
