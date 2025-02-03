import { useDropzone } from "react-dropzone";
import "./DragDrop.css"
import PropTypes from "prop-types";

const DragDrop = ({ onFileDrop }) => {
  const onDrop = (acceptedFiles) => {
    onFileDrop(acceptedFiles[0]);
    };

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

DragDrop.propTypes = {
  onFileDrop: PropTypes.object.isRequired, // Adding prop validation for file
};

export default DragDrop;