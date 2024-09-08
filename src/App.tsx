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

import { TbH1 } from "react-icons/tb";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Prejeto></Prejeto>} />
      <Route path="prejeto-glavno" element={<Prejeto></Prejeto>} />
      <Route path="osnutki" element={<Osnutki></Osnutki>} />
      <Route path="poslano" element={<Poslano></Poslano>} />
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
  /*    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>*/
}

export default App;
