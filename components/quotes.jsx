import quotes from "../data/quotes";
import Image from "next/image";

export default function Quotes() {
  return (
    <>
      <div className="quotes container">
        {quotes.map((quote) => (
          <div className="quote" key={quote.id}>
            <div className="image">
              <Image
                src={quote.imageUrl}
                alt="Authors photos"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="content">
              <p>{quote.content}</p>
              <p>{quote.author}</p>
            </div>
          </div>
        ))}
      </div>
      <style jsx>
        {`
          .quotes {
            display: flex;
            flex-direction: column;
            row-gap: 1rem;
          }
          .quote {
          }
          .image {
            position: relative;
            width: 100%;
            aspect-ratio: 1 / 1;
          }
          @media screen and (min-width: 640px) {
            .quotes {
              display: flex;
              flex-direction: column;
              row-gap: 1rem;
              width: 80%;
            }
            .quote {
              display: flex;
              column-gap: 1rem;
              width: 80%;
            }
            .image {
              position: relative;
              width: 30%;
              aspect-ratio: 1 / 1;
            }
            .content {
              width: 70%;
            }
          }
        `}
      </style>
    </>
  );
}
