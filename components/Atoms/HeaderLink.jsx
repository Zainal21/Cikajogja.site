import Link from "next/link";

export default function HeaderLinks({ link, name }) {
  return (
    <li className="relative group">
      <Link passHref href={link}>
        <a className="px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative text-md">
          {name}
        </a>
      </Link>
    </li>
  );
}
