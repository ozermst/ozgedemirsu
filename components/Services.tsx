import Image from "next/image";
import VCard from "./VCard";
import styles from "../styles/Services.module.css";
import { styled } from "../stitches.config";

import adult from "../public/images/adult.jpeg";
import youngGirl from "../public/images/youngGirl.jpeg";
import family from "../public/images/family.jpeg";
import pupil from "../public/images/pupil.jpeg";

import services from "../data/services";

const Services = () => {
  return (
    <>
      <div className={styles.servicesWrapper}>
        <div className={styles.services}>
          {services.map(function (service) {
            return (
              <div key={service.id}>
                <VCard
                  title={service.title}
                  subTitle={service.subTitle}
                  content={service.content}
                  imageUrl={service.imageUrl}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
