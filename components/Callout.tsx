import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import styles from "../styles/Callout.module.css";
import { styled } from "../stitches.config";

const Callout = () => {
  return (
    <>
      <div className={styles.callout}>
        <p>
          <span style={{ display: "inline-block", marginRight: "1rem" }}>
            <FaQuoteLeft />
          </span>
          Amacım, birlikte hedefe ulaşmak için çalışacağımız konforlu ve güvenli
          bir ortam yaratmak.
        </p>
        <p>
          Ruhsal hastalıkların ve davranışsal sorunların değerlendirilmesi ve
          tedavisi ile ilgili olarak bana ulaşabilirsiniz.
          <span
            style={{
              display: "inline-block",
              marginLeft: "1rem",
            }}
          >
            <FaQuoteRight />
          </span>
        </p>
        <p style={{ textAlign: "right", margin: "0.5rem 0" }}>
          Özge Demirsu, Uzman Klinik Psikolog
        </p>
      </div>
    </>
  );
};

export default Callout;
