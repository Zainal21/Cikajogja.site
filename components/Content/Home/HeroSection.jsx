import Image from "next/image";
import HeroImage from "../../../assets/hero/Report.svg";
import CircleElement from "../../Icons/CircleElement";

export default function HeroSection({ children }) {
  return (
    <div className="relative bg-white pt-[120px] pb-[110px] lg:pt-[150px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-5/12">
            <div className="hero-content">
              <h1 className="mb-3 text-3xl font-bold leading-snug text-dark sm:text-[42px] lg:text-[40px] xl:text-[42px]">
                CV.Cipta <span className="text-danger">Karya Informatika</span>
                <br />
              </h1>
              <p className="mb-8 max-w-[480px] text-md text-body-color">
                <strong>CV Cipta Karya (CIKA) JOGJA</strong> is an information
                technology solutions provider company based in Sleman D.I
                Yogyakarta. We've been in the works since July 2012. You Want
                IT, We Make IT !!!, Independent Consultant With IT Based
                Implementation
              </p>
              <div className="clients pt-16">
                <h5 className="mb-2 flex items-center text-md font-normal text-body-color">
                  Some Of Our Clients
                  <span className="ml-2 inline-block h-[1px] w-8 bg-body-color"></span>
                </h5>
                {/* <div className="flex items-center">
                     <div className="mr-4 w-full py-3">
                     <img src="assets/images/JTL LOGO 2.PNG" alt="jtl" />
                     </div>
                     <div className="mr-4 w-full py-3">
                     <img src="assets/images/logo-diy.png" alt="diy" />
                     </div>
                     <div className="mr-4 w-full py-3">
                     <img src="assets/images/logo-diy.png" alt="diy" />
                     </div>
                     <div className="mr-4 w-full py-3">
                     <img src="assets/images/logo-diy.png" alt="diy" />
                     </div>
                  </div> */}
              </div>
            </div>
          </div>
          <div className="hidden px-4 lg:block lg:w-1/12"></div>
          <div className="w-full px-4 lg:w-6/12">
            <div className="lg:ml-auto lg:text-right">
              <div className="relative z-10 inline-block pt-11 lg:pt-0">
                <Image
                  src={HeroImage}
                  alt="hero"
                  className="max-w-full lg:ml-auto"
                />
                <span className="absolute -left-8 -bottom-8 z-[-1]">
                  <CircleElement />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
