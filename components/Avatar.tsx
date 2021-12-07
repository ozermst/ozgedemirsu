import Image from "next/image";

const Avatar = (props: any) => {
  return (
    <>
      <div className="avatar">
        <Image src={props.imageUrl} alt="" layout="fill" objectFit="cover" />
      </div>
      <style jsx>
        {`
          .avatar {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: ${props.width};
            height: ${props.width};
            border-color: white;
            border-style: solid;
            border-width: 3px;
            border-radius: 9999px;
            overflow: hidden;
          }
        `}
      </style>
    </>
  );
};

export default Avatar;
