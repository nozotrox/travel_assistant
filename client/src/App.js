import './App.css';
import NavigationBar from './components/navigation-bar.component';
import styles_main from "./styles/main.module.scss";
import Typewriter from "typewriter-effect";

function App() {
  return (
    <div id="app">
      <NavigationBar />
      <center className={styles_main.banner}>
        {/* <h1 className={styles_main.banner_text}>Where do you want to go next?</h1> */}
        <div className={styles_main.banner_text}>
          <Typewriter

            options={{
              loop: true
            }}

            onInit={(typewriter) => {
              typewriter.typeString('Where do you want to go next?')
                .callFunction(() => {
                  console.log('String typed out!');
                })
                .pauseFor(5000)
                .deleteAll()
                .callFunction(() => {
                  console.log('All strings were deleted');
                })
                .start();
            }}
          />
        </div>
      </center>
    </div>
  );
}

export default App;
