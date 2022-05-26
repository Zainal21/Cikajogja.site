import Image from "next/image";

export default function ClientCard({ ImageProps }) {
  return (
    <a
      href="#"
      className="mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
    >
      <Image src={ImageProps} alt="JTLExpress" priority />
    </a>
  );
}
