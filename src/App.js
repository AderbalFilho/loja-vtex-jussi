import TheHeader from '@components/TheHeader';
import TheFooter from '@components/TheFooter';
import Routes from '@/routes';

import './App.scss';

function App() {
  return (
    <>
      <TheHeader />
      <Routes />
      <TheFooter />
    </>
  );
}

export default App;
