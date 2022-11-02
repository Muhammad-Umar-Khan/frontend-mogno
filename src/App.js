import "./App.css";
import BackgroundContainer from "./components/projectComponents/BackgroundContainer";

import NavigationLogic from "./navigation/NavigationLogic";

function App() {
  return (
    <div>
      <div>
        <BackgroundContainer></BackgroundContainer>
        <NavigationLogic />
      </div>
    </div>
  );
}

export default App;
