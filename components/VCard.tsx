import Image from "next/image";
import styles from "../styles/VCard.module.css";
import { styled } from "@stitches/react";

const VCard = (props: any) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.header}></div>
        <div className={styles.image}>
          <Image
            src={props.imageUrl}
            alt="Birincilik ödülü"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles.body}>
          <div className={styles.title}>{props.title}</div>
          <div className="subtitle">{props.subTitle}</div>
          <div className="content">{props.content}</div>
        </div>
        <div className="footer"></div>
      </div>
    </>
  );
};

export default VCard;
