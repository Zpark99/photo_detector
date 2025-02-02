import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "./DragDrop.css"

const DragDrop = () => {
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles);
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  return (
    <div className="border" {...getRootProps()} >
          <input {...getInputProps()} />
          {
            isDragActive ?
              <p>Drop the files ...</p> :
              <p>드래그, 혹은 클릭해서 파일 첨부</p>
          }
        </div>
  );
};

export default DragDrop;