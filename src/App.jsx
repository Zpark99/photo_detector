import Footer from "./components/footer.jsx";
import Header from "./components/nav.jsx"
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const App = () => {
  const onDrop = useCallback(acceptedFiles => {
  console.log(acceptedFiles);
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  return (
    <div className="layout">
      <Header/>
      <main className="main">
        <div className="border" {...getRootProps()} >
          <input {...getInputProps()} />
          {
            isDragActive ?
              <p>Drop the files ...</p> :
              <p>드래그, 혹은 클릭해서 파일 첨부</p>
          }
        </div>
      </main>
      <Footer />
    </div>
  );
};
  

export default App;
