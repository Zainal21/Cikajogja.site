import Image from "next/image";
export default function HeroShape({ cn, sourceImage }) {
  return (
    <div className={`container ${cn}`}>
      <Image src={sourceImage} alt="shape" width={40} height={100} />
    </div>
  );
}
