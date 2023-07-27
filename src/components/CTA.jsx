import React from "react";
import styles from "../styles";
import Button from "./Button";
const CTA = () => {
  return (
    <section
      className={`${styles.flexCenter} sm:mx-16 mx-6 ${styles.marginY} ${styles.padding} sm:flex-row flex-col rounded-[20px] bg-black-gradient-2 box-shadow`}
    >
      <div className="flex flex-col flex-1">
        <h2 className={styles.heading2}>Let’s try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className={`${styles.flexCenter} md:ml-10 ml-0 sm:mt-0 my-6`}>
        <Button />
      </div>
    </section>
  );
};

export default CTA;
