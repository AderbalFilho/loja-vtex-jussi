import { JIcon, JInput, JLink } from '@ui';
import TheNavbar from '@components/TheNavbar';

import jussiLogo from '@assets/img/logoJussiVectorGreen.svg';

import './TheHeader.scss';

function TheHeader() {
  const links = [
    { url: 'https://jussi.com.br/services.html', label: 'Nossas soluções' },
    { url: 'https://jussi.com.br/', label: 'Conheça a Jüssi' },
  ];

  return (
    <header className="the-header">
      <div className="the-header__left">
        <JLink href="#">
          <img src={jussiLogo} alt="Logo Jüssi - The business agency" />
        </JLink>
        <TheNavbar links={links} />
      </div>
      <div className="the-header__right">
        <JInput
          classesContainer="the-header__input"
          type="text"
          placeholder="Buscar"
          icon="search"
        />
        <JLink classes="the-header__login" href="#">
          Login
        </JLink>
        <JIcon icon="shoppingCart" />
      </div>
    </header>
  );
}

export default TheHeader;
