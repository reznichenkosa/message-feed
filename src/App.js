import BaseLayout from "./components/BaseLayout/BaseLayout";
import HomePage from "./pages/HomePage./HomePage";
import 'normalize.css';
import './styles/global.scss';

function App() {

  return ( 
    <>
      <BaseLayout>
        <HomePage />
      </BaseLayout>
    </>
  );
}

export default App;