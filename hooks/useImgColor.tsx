import getColors from "get-image-colors";
import { useState, useEffect } from "react";

type colorRawType = {
  _rgb: [number, number, number],
}
const useImgColor = (imgUrl: string) => {
  const [color, setColor] = useState<Array<colorRawType>>([]);

  useEffect(() => {
    getColors(imgUrl)
      .then((colors) => {
        console.log(colors)
        setColor(colors.map((clr) => ({ _rgb: clr._rgb._unclipped })))
      })
      .catch((err) => {
        // console.log(err);
      });
  }, [imgUrl]);
  return color;
};
export default useImgColor;
