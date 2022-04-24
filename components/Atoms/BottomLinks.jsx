import Link from "next/link";

export default function BottomLinks({ link, name, Children }) {
  return (
    <>
      <Link passHref href={link}>
        <a className="mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all">
          {name}
        </a>
      </Link>
      {Children}
    </>
  );
}
