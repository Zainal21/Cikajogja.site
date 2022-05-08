export default function ServiceCard(props) {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
        <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-warning">
          {props.ServiceIcon}
        </div>
        <h4 className="mb-3 text-xl font-semibold text-dark">
          {props.ServiceName}
        </h4>
        <p className="text-body-color">{props.serviceDescription}</p>
      </div>
    </div>
  );
}
