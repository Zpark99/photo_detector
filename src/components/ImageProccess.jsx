import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

// 가우시안 노이즈를 이미지 데이터에 추가하는 함수
const addGaussianNoise = (data, width, height, mean = 0, sigma = 25) => {
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4; // 이미지 데이터 배열에서 해당 픽셀의 인덱스

      // RGB 채널에 가우시안 노이즈 추가
      const noiseR = mean + sigma * Math.random();
      const noiseG = mean + sigma * Math.random();
      const noiseB = mean + sigma * Math.random();

      // 픽셀 값 수정
      data[i] = Math.min(255, Math.max(0, data[i] + noiseR)); // 빨강
      data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noiseG)); // 초록
      data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noiseB)); // 파랑
    }
  }
  return data;
};

const ImageProccess = ({ file }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const img = new Image();
        img.src = e.target.result;
        img.onload = function () {
          const canvas = canvasRef.current;
          const ctx = canvas.getContext("2d");
          const pixelSize = 10; // 픽셀 크기 (픽셀화 효과)

          canvas.width = img.width;
          canvas.height = img.height;

          ctx.drawImage(img, 0, 0);

          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          let data = imageData.data;

          // 가우시안 노이즈를 이미지 데이터에 추가
          data = addGaussianNoise(data, canvas.width, canvas.height);

          // 픽셀화 효과 적용
          for (let y = 0; y < canvas.height; y += pixelSize) {
            for (let x = 0; x < canvas.width; x += pixelSize) {
              const i = (y * canvas.width + x) * 4;
              const red = data[i];
              const green = data[i + 1];
              const blue = data[i + 2];

              // 노이즈가 추가된 색상으로 픽셀화된 블록 그리기
              ctx.fillStyle = `rgb(${red},${green},${blue})`;
              ctx.fillRect(x, y, pixelSize, pixelSize);
            }
          }
        };
      };
      reader.readAsDataURL(file);
    }
  }, [file]);

  return <canvas ref={canvasRef}></canvas>;
};

ImageProccess.propTypes = {
  file: PropTypes.object.isRequired, // 파일 prop 타입 검증
};

export default ImageProccess;
