import Image from "next/image";
import Logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <section className="bg-white mb-10">
      <div className="max-w-screen px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
          © 2021 Cikajogja. All rights reserved. Built with Next JS &
          TailwindCSS
        </p>
      </div>
    </section>
  );
}
