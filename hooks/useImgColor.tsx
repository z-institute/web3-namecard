import getColors from "get-image-colors";
import { useState } from "react";

const useImgColor = (imgUrl: string) => {
  const [color, setColor] = useState(undefined);
  getColors(imgUrl)
    .then((colors) => {
      // console.log(colors);
      setColor(colors);
    })
    .catch((err) => {
      // console.log(err);
    });

  return color;
};
export default useImgColor;
