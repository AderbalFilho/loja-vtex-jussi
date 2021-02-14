import MainStores from '@components/MainStores';
import ThePresentation from '@components/ThePresentation';
import OurSolutions from '@components/OurSolutions';
import AboutJussi from '@components/AboutJussi';

import { SOLUTIONS } from '@constants';

function TheHome() {
  return (
    <>
      <ThePresentation />
      <MainStores />
      <OurSolutions solutions={SOLUTIONS} />
      <AboutJussi />
    </>
  );
}

export default TheHome;
