import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "../components/cover-image";
import PostTitle from "../components/post-title";

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="avatar">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="coverImage">
        <CoverImage title={title} image={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="avatarMobile">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="date">
          <Date dateString={date} />
        </div>
      </div>
      <style jsx>{`
        .avatar {
          display: none;
        }
        .avatarMobile {
          display: block;
          margin-bottom: 1.5rem;
        }
        .coverImage {
          margin-bottom: 2rem;
          margin-left: 0px;
          margin-right: 0px;
        }
        .date {
          margin-bottom: 1.5rem;
          font-size: 1.125rem;
          line-height: 1.75rem;
        }
        @media screen and (min-width: 640px) {
          .avatar {
            display: block;
            margin-bottom: 3rem;
          }
          .avatarMobile {
            display: none;
          }
          .coverImage {
            margin-bottom: 4rem;
          }
        }
      `}</style>
    </>
  );
}
