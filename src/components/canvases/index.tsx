// import { useRef } from "react";
// import rough from "roughjs/bin/rough";

// function Cav() {
//     const wrapperRef = useRef(null);
//     if (wrapperRef.current !== null) {
//         const wrapper = wrapperRef.current;
//         // wrapper.replaceChildren(rough.canvas);
//         const rc = rough.canvas(wrapper);
//         rc.rectangle(10, 10, 200, 200);
//         rc.circle(80, 120, 50); // centerX, centerY, diameter
//         rc.ellipse(300, 100, 150, 80); // centerX, centerY, width, height
//         rc.line(80, 120, 300, 100); // x1, y1, x2, y2
//     } else {

//     }
//     return (
//         <div className="canvas-wrapper" ref={wrapperRef} style={{ width: '900px', height: '900px' }}></div>
//     )
// };

// export default Cav;

import { useRef, useEffect } from 'react';
import rough from 'roughjs/bin/rough';

const RoughCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if(canvas != null) {

        const roughCanvas = rough.canvas(canvas);
        roughCanvas.rectangle(10, 10, 200, 200); // 例子：绘制一个矩形
        roughCanvas.circle(300, 150, 100); // 例子：绘制一个圆
    }

  }, []);

  return (
    <canvas ref={canvasRef} width={800} height={600} />
  );
};

export default RoughCanvas;