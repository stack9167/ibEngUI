export const isMobile = () => {
  console.log(
    Math.min(window.screen.width, window.screen.height) < 768 ||
      navigator.userAgent.indexOf("Mobi") > -1,
    " <>? UTIL"
  );
  return true;
};
