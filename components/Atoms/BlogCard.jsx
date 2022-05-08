import Image from "next/image";
import BlogImage from "../../assets/portfolio/jtl-compro.png";

export default function BlogCard(props) {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="mx-auto mb-10 max-w-[370px]">
        <div className="mb-8 overflow-hidden rounded">
          <Image src={BlogImage} alt="image" className="w-full" />
        </div>
        <div>
          <span className="mb-5 inline-block rounded bg-warning py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
            {props.blogDate}
          </span>
          <h3>
            <a
              href="javascript:void(0)"
              className="mb-4 inline-block text-xl font-semibold text-gray-900 hover:text-gray-700 sm:text-2xl lg:text-xl xl:text-2xl"
            >
              {props.blogTitle}
            </a>
          </h3>
          <p className="text-base text-body-color">{props.blogExcerpt}</p>
        </div>
      </div>
    </div>
  );
}
