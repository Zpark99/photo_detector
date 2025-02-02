import { useState, useRef, useEffect } from "react";


const ImageProccess = ({ file }) => {
  const [imageData, setImageData] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const img = new Image();
        img.src = e.target.result;
        img.onload = function() {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const pixelSize = 10; //픽셀 크기?

        canvas.width = img.width;
        canvas.height = img.hegith;
        ctx.drawImage(img, 0, 0);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.hegith);
        setImageData(imageData); // 이미지 데이터를 상태로 저장

        const data = imageData.data;

        for (let y = 0; y < canvas.hegith; y += pixelSize) {
          for (let x = 0; x < canvas.width; x += pixelSize) {
            const red = data[((y * canvas.width + x) * 4)];
            const green = data[((y * canvas.width + x) * 4) + 1];
            const blue = data[((y * canvas.width + x) * 4 + 2)];

            //픽셀화 효과
            ctx.fillStyle = `rgb(${red},${green},${blue})`;
            ctx.fillRect(x, y, pixelSize, pixelSize);
        }
      }
    };
  };
  reader.readAsDataURL(file);
}
  },[file]);

  return (
    <div>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default ImageProccess;