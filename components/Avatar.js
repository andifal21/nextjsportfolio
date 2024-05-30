//  next image
import Image from "next/image";

const Avatar = () => {
  return <div className="hidden xl:flex xl:max-w-none">
    <Image src={'/avatar2.png'} width={937} height={778} alt="" className="translate-z-0 h-full w-full"/>
  </div>;
};

export default Avatar;
