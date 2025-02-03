import Footer from "./components/footer.jsx";
import Header from "./components/nav.jsx"
import DragDrop from "./components/DragDrop.jsx";
import ImageProccess from "./components/ImageProccess.jsx";
import { useState } from "react";
import "./App.css"

const App = () => {
  const [file, setFile] = useState(null); // 파일 상태 관리

  const handleFileDrop = (droppedFile) => {
    setFile(droppedFile);
  ;}

  return (
    <div className="layout">
      <Header/>
      <div className="main">
        <DragDrop onFileDrop={handleFileDrop} />
        {file && <ImageProccess file={file} />}
      </div>
      <Footer />
    </div>
  );
};
  

export default App;
