import Image from "next/image";
import Logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className="px-4 pt-12 pb-8 text-white bg-white border-t border-gray-200">
      <div className="pt-4 pt-6 mt-10 text-center text-gray-500 ">
        © 2020 All Right Reserved{" "}
        <a href="https://muhammadzaindev.vercel.app/" target="_blank">
          Cikajogja.com
        </a>
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          | Powered by{" "}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </div>
    </footer>
  );
}
