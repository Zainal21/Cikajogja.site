export default function ButtonPrimary({ children, classProps }) {
  return (
    <button
      className={
        "py-3 lg:py-4 px-12 lg:px-16 text-white font-semibold rounded-lg bg-orange-500 hover:shadow-orange-md transition-all outline-none " +
        classProps
      }
    >
      {children}
    </button>
  );
}
