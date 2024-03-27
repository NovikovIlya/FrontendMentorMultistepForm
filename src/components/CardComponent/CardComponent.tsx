import styles from "./CardComponent.module.css";
import BottomComponent from "../Bottom/BottomComponent";
import LeftComponent from "../Left/LeftComponent";
import TextComponent from "../Text/TextComponent";
import Body from "../Body/Body";

const CardComponent = () => {

  return (
    <div className={styles.container}>
      <LeftComponent />

      <div className={styles.right}>
        <div>
          <TextComponent />
          <Body />
        </div>
        <BottomComponent />
      </div>
    </div>
  );
};

export default CardComponent;
