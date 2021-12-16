import { OZGE_IMAGE_2_URL } from "../lib/constants";
import Image from "next/image";

export default function Methodology() {
  return (
    <>
      <div className="methodology container">
        <div className="image">
          <Image
            // src={OZGE_IMAGE_2_URL}
            src="/images/ozge2.jpeg"
            alt="Özgenin fotoğrafı"
            layout="fill"
            objectFit="cover"
            priority
          />
          {/* <Avatar imageUrl={imageForMethodology} width="150px" /> */}
        </div>
        <div className="content">
          <p>
            Psikolojik Danışmanlık bir süreç olmakla birlikte; süresi
            danışanların ihtiyaçları doğrultusunda değişkenlik gösterir. Bu
            süreçte kimi insanlar “ Ben kimim? Hayatımın amacı nedir? Nasıl
            mutlu olurum? “ sorularının cevabını ararken, kimi bireyler var olan
            sorunlarının çözümü üzerine odaklanır. Bazıları ise geçmiş
            yaşantılarının ışığında ruhsal dinamiklerini öğrenerek içsel
            dünyalarını keşfetmeyi arzular.
          </p>
          <p>
            Farklı beklenti ve ihtiyaçlar kimi zaman terapi sürecini
            şekillendirir. Dolayısıyla danışmanlık süreci bireye özgürdür. Bu
            süreci danışanlarla birlikte yürütürken farklı teknikler kullanırım.
          </p>
          <p>Bu teknikler:</p>
          <ul>
            <li>Psikodinamik Psikoterapi</li>
            <li>Bilişsel Davranışçı Psikoterapi</li>
            <li>Şema Terapi</li>
          </ul>
        </div>
      </div>
      <style jsx>
        {`
          .methodology {
            display: flex;
            flex-wrap: wrap;
            background-color: var(--purple);
            color: white;
          }
          .image {
            position: relative;
            width: 100%;
            aspect-ratio: 1 / 1;
          }
          .content {
            padding: 1rem 1rem;
          }
          .content ul {
            list-style-type: disc;
            margin: 1rem 0;
            padding-left: 40px;
          }
          .content p {
            margin: 1rem 0;
          }
          @media screen and (min-width: 640px) {
            .image {
              position: relative;
              width: 40%;
              height: 100%;
              aspect-ratio: 1 / 1;
            }
            .content {
              width: 60%;
            }
          }
        `}
      </style>
    </>
  );
}
