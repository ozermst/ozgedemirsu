import Link from "next/link";
import CoverImage from "./cover-image";
import Date from "./date";
import Avatar from "./avatar";

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <>
      <section>
        <div className="">
          <CoverImage slug={slug} title={title} image={coverImage} />
        </div>
        <div className="title">
          <h3>
            <Link href={`/posts/${slug}`}>
              <a className="link">{title}</a>
            </Link>
          </h3>
        </div>
        <div>
          <p className="">{excerpt}</p>
        </div>
        <div>
          <Date dateString={date} />
        </div>
        <div>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </section>
      <style jsx>{`
        .link:hover {
          text-decoration: underline;
          text-underline-offset: 0.2rem;
        }

        @media screen and (min-width: 640px) {
        }
      `}</style>
    </>
  );
}
