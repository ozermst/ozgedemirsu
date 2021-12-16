import Image from "next/image";

export default function Hero({ heroTitle, heroImageUrl }) {
  return (
    <>
      <div className="hero container">
        <div className="image">
          <Image
            src={heroImageUrl}
            alt="hero image"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>
      <style jsx>
        {`
          .hero {
            height: 50vh;
          }
          .image {
            position: relative;
            width: 100%;
            height: 100%;
          }
          @media screen and (min-width: 640px) {
            .hero {
              height: 80vh;
            }
          }
        `}
      </style>
    </>
  );
}
