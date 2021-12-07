import Image from "next/image";
import Avatar from "../components/Avatar";

const Cover = (props: any) => {
  const mobileAvatarWidth = "";
  const mobileAvatarMargin = "";

  return (
    <>
      <div className="cover">
        <div className="imageWrapper">
          <Image
            src={props.coverImageUrl}
            alt=""
            layout="fill"
            objectFit="cover"
          />
          <div className="avatarWrapper container">
            <Avatar imageUrl={props.profileImageUrl} width="150px" />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .cover {
            width: 100%;
            height: 350px;
          }
          .imageWrapper {
            display: flex;
            align-items: flex-end;
            position: relative;
            width: 100%;
            height: 100%;
          }
          .avatarWrapper {
            margin-bottom: -75px;
          }
          @media screen and (min-width: 640px) {
            .cover {
              width: 100%;
              height: 350px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Cover;
