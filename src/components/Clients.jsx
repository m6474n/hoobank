import { clients } from "../constants";
import styles from "../styles";
const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div
            className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[120px]`}
          >
            <img
              src={client.logo}
              alt={client.id}
              className="sm:min-w-[192px] w-[100px] object-contain hover:bg-blue-gradient"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
export default Clients;
