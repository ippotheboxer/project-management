import React from "react";
import Sidebar from "./components/Sidebar";
import ProjectForm from "./components/ProjectForm";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar />
      <NoProjectSelected />
    </main>
  )
}

export default App
