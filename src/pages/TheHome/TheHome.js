import AboutJussi from '@components/AboutJussi';
import ContactUs from '@components/ContactUs';
import MainStores from '@components/MainStores';
import OurSolutions from '@components/OurSolutions';
import ThePresentation from '@components/ThePresentation';

import { SOLUTIONS } from '@constants';

function TheHome() {
  return (
    <>
      <ThePresentation />
      <MainStores />
      <OurSolutions solutions={SOLUTIONS} />
      <AboutJussi />
      <ContactUs />
    </>
  );
}

export default TheHome;
