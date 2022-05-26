export default function ServiceCard({
  serviceTitle,
  serviceIcon,
  serviceDescription,
}) {
  return (
    <div className="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
      <div className="single_services text-center mt-8 mx-3">
        <div className="services_icon">
          <i className="lni lni-layout"></i>
          {serviceIcon ? (
            serviceIcon
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
            >
              <g id="_40-Web_Development" data-name="40-Web Development">
                <path d="M47,24a1,1,0,0,0,1-1V5a5.006,5.006,0,0,0-5-5H5A5.006,5.006,0,0,0,0,5V33a5.006,5.006,0,0,0,5,5H16v4.465l-2.555,1.7A1,1,0,0,0,13,45v1a2,2,0,0,0,2,2H33a2,2,0,0,0,2-2V45a1,1,0,0,0-.445-.832L32,42.465V41a1,1,0,0,0-2,0v2a1,1,0,0,0,.445.832L33,45.535V46H15v-.465l2.555-1.7A1,1,0,0,0,18,43V38H43a5.006,5.006,0,0,0,5-5V28a1,1,0,0,0-1-1H6a1,1,0,0,0,0,2H46v4a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2H43a3,3,0,0,1,3,3V23A1,1,0,0,0,47,24Z" />
                <path d="M19.707,7.293a1,1,0,0,0-1.414,0l-6,6a1,1,0,0,0,0,1.414l6,6a1,1,0,0,0,1.414-1.414L14.414,14l5.293-5.293A1,1,0,0,0,19.707,7.293Z" />
                <path d="M28.293,20.707a1,1,0,0,0,1.414,0l6-6a1,1,0,0,0,0-1.414l-6-6a1,1,0,1,0-1.414,1.414L33.586,14l-5.293,5.293A1,1,0,0,0,28.293,20.707Z" />
              </g>
            </svg>
          )}
        </div>
        <div className="services_content mt-5 xl:mt-10">
          <h3 className="services_title text-black font-semibold text-xl md:text-2xl lg:text-xl xl:text-3xl">
            {serviceTitle}
          </h3>
          <p className="mt-4">{serviceDescription}</p>
        </div>
      </div>
    </div>
  );
}
