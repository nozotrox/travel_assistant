import Typewriter from "typewriter-effect";
import styles_main from "../styles/main.module.scss";

const Banner = () => {
  return (
    <center className={styles_main.banner}>
      <div className={styles_main.banner_text}>
        <Typewriter
          options={{
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("Where do you want to go next?")
              .callFunction(() => {
                console.log("String typed out!");
              })
              .pauseFor(5000)
              .deleteAll()
              .callFunction(() => {
                console.log("All strings were deleted");
              })
              .start();
          }}
        />
        <p>
          Welcome to the best travel assistant there is. Search for the city you
          wish to obtain information or use our interactive maps to navigate. We
          hope you Enjoy!
        </p>
      </div>
    </center>
  );
};


export default Banner;