import getColors from "get-image-colors";

const useImgColor = (imgUrl: string) => {
  getColors(imgUrl).then((colors) => {
    console.log(colors);
  });
};
export default useImgColor;
