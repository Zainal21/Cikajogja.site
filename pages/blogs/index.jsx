import Head from "next/head";
import SectionTitle from "../../components/Atoms/SectionTitle";
import BlogCard from "../../components/Atoms/BlogCard";
import blogs from "../../data/dummy_blog.json";

export default function Blogs() {
  return (
    <>
      <Head>
        <title>Home | Cikajogja</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
        <div className="container mt-10">
          {/* <SectionTitle
            titleMain="Our Recent News"
            titleDescription="There are many variations of passages of Lorem Ipsum available
            but the majority have suffered alteration in some form."
          /> */}
          <div className="mx-4 mt-5 flex flex-wrap">
            <h1 className="text-3xl font-bold">
              Cooming Soon{" "}
              <a className="text-red-600" href="https://nextjs.org">
                Articles of New Cikajogja.com!
              </a>
            </h1>
            {/* {blogs.map((item) => (
            <BlogCard
              blogDate={item.date}
              blogTitle={item.title}
              blogExcerpt={item.execrpt}
              key={item.id}
            />
          ))} */}
          </div>
        </div>
      </section>
    </>
  );
}
