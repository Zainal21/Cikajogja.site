export default function HeroSection({ children }) {
  return (
    <div className="relative bg-white pt-[120px] pb-[110px] lg:pt-[150px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-5/12">
            <div className="hero-content">
              <h1 className="mb-3 text-4xl font-bold leading-snug text-dark sm:text-[42px] lg:text-[40px] xl:text-[42px]">
                CV.Cipta <span className="text-red-600">Karya Abadi</span>
                <br />
              </h1>
              <p className="mb-8 max-w-[480px] text-md text-body-color">
                <strong>CV Cipta Karya Abadi</strong> is an information
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
                {/* <img src="assets/images/hero/Illustration.png" alt="hero" className="max-w-full lg:ml-auto" /> */}
                <span className="absolute -left-8 -bottom-8 z-[-1]">
                  <svg
                    width="93"
                    height="93"
                    viewBox="0 0 93 93"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2.5" cy="2.5" r="2.5" fill="#F9C107" />
                    <circle cx="2.5" cy="24.5" r="2.5" fill="#F9C107" />
                    <circle cx="2.5" cy="46.5" r="2.5" fill="#F9C107" />
                    <circle cx="2.5" cy="68.5" r="2.5" fill="#F9C107" />
                    <circle cx="2.5" cy="90.5" r="2.5" fill="#F9C107" />
                    <circle cx="24.5" cy="2.5" r="2.5" fill="#F9C107" />
                    <circle cx="24.5" cy="24.5" r="2.5" fill="#F9C107" />
                    <circle cx="24.5" cy="46.5" r="2.5" fill="#F9C107" />
                    <circle cx="24.5" cy="68.5" r="2.5" fill="#F9C107" />
                    <circle cx="24.5" cy="90.5" r="2.5" fill="#F9C107" />
                    <circle cx="46.5" cy="2.5" r="2.5" fill="#F9C107" />
                    <circle cx="46.5" cy="24.5" r="2.5" fill="#F9C107" />
                    <circle cx="46.5" cy="46.5" r="2.5" fill="#F9C107" />
                    <circle cx="46.5" cy="68.5" r="2.5" fill="#F9C107" />
                    <circle cx="46.5" cy="90.5" r="2.5" fill="#F9C107" />
                    <circle cx="68.5" cy="2.5" r="2.5" fill="#F9C107" />
                    <circle cx="68.5" cy="24.5" r="2.5" fill="#F9C107" />
                    <circle cx="68.5" cy="46.5" r="2.5" fill="#F9C107" />
                    <circle cx="68.5" cy="68.5" r="2.5" fill="#F9C107" />
                    <circle cx="68.5" cy="90.5" r="2.5" fill="#F9C107" />
                    <circle cx="90.5" cy="2.5" r="2.5" fill="#F9C107" />
                    <circle cx="90.5" cy="24.5" r="2.5" fill="#F9C107" />
                    <circle cx="90.5" cy="46.5" r="2.5" fill="#F9C107" />
                    <circle cx="90.5" cy="68.5" r="2.5" fill="#F9C107" />
                    <circle cx="90.5" cy="90.5" r="2.5" fill="#F9C107" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
