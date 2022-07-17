import getColors from "get-image-colors";
import { useState, useEffect } from "react";

const useImgColor = (imgUrl: string) => {
  const [color, setColor] = useState(undefined);

  useEffect(() => {
    getColors(imgUrl)
      .then((colors) => {
        setColor(colors);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, [imgUrl]);
  return color;
};
export default useImgColor;
