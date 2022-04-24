import SectionTitle from "../../components/Atoms/SectionTitle";
import BlogCard from "../../components/Atoms/BlogCard";
import blogs from "../../data/dummy_blog.json";

export default function Blogs() {
  return (
    <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
      <div className="container">
        <SectionTitle
          titleMain="Our Recent News"
          titleDescription="There are many variations of passages of Lorem Ipsum available
            but the majority have suffered alteration in some form."
        />
        <div className="mx-4 flex flex-wrap">
          {blogs.map((item) => (
            <BlogCard
              blogDate={item.date}
              blogTitle={item.title}
              blogExcerpt={item.execrpt}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
