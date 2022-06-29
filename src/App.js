import React, { useEffect } from "react";
import { BrowserRouter,  Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar ,Footer,Sidebar,ThemeSettings} from "./components";
import { Ecommerce,Orders,Kanban,Employee,Editor,ColorPicker,Calendar,Customer,Line,Area,Bar,pie,Pyramid,Pie,ColorMapping,Stacked} from "./pages";
import "./App.css";

const App = () => {
  const activeMenu = true;
  return (
    <BrowserRouter>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4 " style={{ zIndex: "1000" }}>
          <TooltipComponent content="settings" position="Top">
            <button
              className="text-5xl hover:bg-light-gray text-white "
              style={{ background: "#42f5ec", borderRadius:"50%" }}
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg">
            <Sidebar/>
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">Sidebar 2</div>
        )}
        <div
          className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
            activeMenu ? "md:ml-72" : "flex-2"
          }`}
        >
          <div className="fixed md:static dark:bg-main-bg bg-main-bg navbar w-full">
            <Navbar/>
          </div>

          <div>
            <Routes>
              {/* Dashboards */}
              <Route path="/" element={<Ecommerce/>} />
              <Route path="/ecommerce" element={<Ecommerce/>} />
               {/* Pages */}
              <Route path="/orders" element={<Orders/>} />
              <Route path="/employees" element={<Employee/>} />
              <Route path="/customers" element={<Customer/>} />
              {/* Apps */}
              <Route path="/kanban" element={<Kanban/>} />
              <Route path="/editor" element={<Editor/>} />
              <Route path="/calender" element={<Calendar/>} />
              <Route path="/employees" element={<Employee/>} />
              <Route path="/color-picker" element={<ColorPicker/>} />
              {/* Charts */}
              <Route path="/line" element={<Line/>} />
              <Route path="/area" element={<Area/>}/>
              <Route path="/bar" element={<Bar/>} />
              <Route path="/financial" element={<Pie/>}/>
              <Route path="/color-mapping" element={<ColorMapping/>} />
              <Route path="/pyramide" element={<Pyramid/>}/>
              <Route path="/stacked" element={<Stacked/>} />


            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
