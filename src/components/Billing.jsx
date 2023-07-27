import { apple, bill, google } from "../assets";
import styles, { layout } from "../styles";
const Billing = () => (
  <section id="section" className={`sm:pl-16 px-6  ${layout.sectionReverse}`}>
    <div className={`${layout.sectionImgReverse}`}>
      <img
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      <div className="absolute z-[3] -left-1/2 top-0 h-[50%] w-[50%]  white__gradient" />
      <div className="absolute z-[3] -left-1/2 bottom-0 h-[50%] w-[50%] pink__gradient " />
    </div>
    <div className={`${layout.sectionInfo}`}>
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing.
      </h2>
      <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>
      <div className="flex flex-wrap flex-row sm:mt-10 mt-6">
        <img
          src={apple}
          alt="apple store"
          className=" h-[42px] w-[128px] object-contain cursor-pointer mr-5"
        />
        <img
          src={google}
          alt="google playstore"
          className=" h-[42px] w-[128px] object-contain cursor-pointer mr-5"
        />
      </div>
    </div>
  </section>
);

export default Billing;
