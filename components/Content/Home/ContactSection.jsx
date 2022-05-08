import HouseIcon from "../../Icons/HouseIcon";
import MailIcon from "../../Icons/MailIcon";
import PhoneIcon from "../../Icons/PhoneIcon";
import CircleElement from "../../Icons/CircleElement";
import QuarterCircle from "../../Icons/QuarterCircle";

export default function ContactSection(props) {
  return (
    <section className="relative z-10 overflow-hidden bg-white py-20 lg:py-[120px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap lg:justify-between">
          <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
            <div className="mb-12 max-w-[570px] lg:mb-0">
              <span className="mb-4 block text-base font-semibold text-warning">
                Contact Us
              </span>
              <h2 className="mb-6 text-[32px] font-bold uppercase text-dark sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                Let's have a talk!
              </h2>
              <p className="mb-9 text-base leading-relaxed text-body-color">
                Contact us via our contact form or give us a call on the number
                below. We are expecting you.
              </p>

              <div className="mb-8 flex w-full max-w-[370px]">
                <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-warning bg-opacity-5 text-warning sm:h-[70px] sm:max-w-[70px]">
                  <HouseIcon />
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-xl font-bold text-dark">
                    Our Location
                  </h4>
                  <p className="text-base text-body-color">
                    Jl Dersono Ceper Wedomartani Ngemplak Sleman Yogyakarta
                  </p>
                </div>
              </div>

              <div className="mb-8 flex w-full max-w-[370px]">
                <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-warning bg-opacity-5 text-warning sm:h-[70px] sm:max-w-[70px]">
                  <PhoneIcon />
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-xl font-bold text-dark">
                    Phone Number
                  </h4>
                  <p className="text-base text-body-color">+6281200192231</p>
                </div>
              </div>

              <div className="mb-8 flex w-full max-w-[370px]">
                <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-warning bg-opacity-5 text-warning sm:h-[70px] sm:max-w-[70px]">
                  <MailIcon />
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-xl font-bold text-dark">
                    Email Address
                  </h4>
                  <p className="text-base text-body-color">
                    cikajogja@mail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="relative rounded-lg bg-white p-8 shadow-lg sm:p-12 shadow-lg">
              <form>
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="border-[f0f0f0] w-full rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-warning focus-visible:shadow-none"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="border-[f0f0f0] w-full rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-warning focus-visible:shadow-none"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Your Phone"
                    className="border-[f0f0f0] w-full rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-warning focus-visible:shadow-none"
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    rows="6"
                    placeholder="Your Message"
                    className="border-[f0f0f0] w-full resize-none rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-warning focus-visible:shadow-none"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full rounded border border-warning bg-warning p-3 text-white transition hover:bg-opacity-90"
                  >
                    Send Message
                  </button>
                </div>
              </form>
              <div>
                <span className="absolute -top-10 -right-9 z-[-1]">
                  <QuarterCircle />
                </span>
                <span className="absolute -right-10 top-[90px] z-[-1]">
                  <CircleElement />
                </span>
                <span className="absolute -left-7 -bottom-7 z-[-1]">
                  <CircleElement />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
