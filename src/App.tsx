import AppRouter from 'common/router/Router';
import { Banner, Footer, GlobalContainer, Title } from './common/components';

function App() {

  return (
    <>
      <Banner/>
      <GlobalContainer>
        <Title/>
        <AppRouter/>
      </GlobalContainer>
      <Footer/>
    </>
  );
}

export default App;
