import Image from "next/image";
import ourServices from "../data/services";

export default function Services() {
  return (
    <>
      <div className="services container">
        {ourServices.map((service) => (
          <div className="service" key={service.id}>
            <div className="image">
              <Image
                src={service.imageUrl}
                alt="Our services"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="title">{service.title}</div>
            <div>{service.description}</div>
          </div>
        ))}
      </div>
      <style jsx>
        {`
          .services {
            display: grid;
            grid-template-columns: 1fr;
            row-gap: 1rem;
          }
          .service {
            height: 100%;
          }
          .image {
            position: relative;
            height: 200px;
          }
          @media screen and (min-width: 640px) {
            .services {
              grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
              column-gap: 1rem;
              align-items: stretch;
              justify-items: center;
            }
          }
        `}
      </style>
    </>
  );
}
