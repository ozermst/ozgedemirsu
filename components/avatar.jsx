import Image from "next/image";
import { urlForImage } from "../lib/sanity";

export default function Avatar({ name, picture }) {
  return (
    <>
      <div>
        <Image
          src={urlForImage(picture).height(96).width(96).fit("crop").url()}
          layout="fill"
          className="rounded-full"
          alt={name}
        />
      </div>
      <div>{name}</div>
    </>
  );
}
