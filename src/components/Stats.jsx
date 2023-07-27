import { stats } from "../constants";
import styles from "../styles";
const Stats = () => {
  return (
    <section
      className={`${styles.flexCenter} flex flex-row flex-wrap sm:mb-20 mb-6 px-10`}
    >
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`flex-1 flex flex-row justify-center items-center m-3
          } `}
        >
          <h4 className="font-poppins font-semibold xs:text-[36px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
            {stat.value}
          </h4>
          <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient ml-3 uppercase">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
