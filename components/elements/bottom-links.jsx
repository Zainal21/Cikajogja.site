import Link from "next/link";

export default function BottomLinks({ link, name, icon }) {
  return (
    <>
      {icon}
      <Link passHref href={link}>
        <a className="mx-1 mt- 5 px-3 sm:px-4 py-2 flex flex-col items-center text-md border-t-2 text-md transition-all">
          {name}
        </a>
      </Link>
    </>
  );
}
