import tw from "tailwind-styled-components";

const Container = tw.div`
  h-screen
  overflow-scroll
  z-20
`;
const Content = tw.div`
  flex-col
  w-full
  bg-gradient-to-tl
  from-indigo-400
  to-[#FEF7E4]/30 
  dark:from-indigo-500
  dark:to-orange-200/50
  transition-colors
  duration-1000
  overflow-hidden
  absolute 
  top-0
  z-30
`;

const ImageAssetWrap = tw.div`
  flex items-center justify-center md:justify-start
`;

const ImageAssetCover = tw.div`
  bg-[url('/team/rea-v1.jpg')] bg-cover
  h-[400px] w-[400px] rounded-full
`;

const ImageAsset = () => (
  <ImageAssetWrap>
    <ImageAssetCover />
  </ImageAssetWrap>
);

export { Container, Content, ImageAsset };
