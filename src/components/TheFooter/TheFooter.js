import { JLink } from '@ui';

import wppCompany1x from '@assets/img/wppcompany.png';
import wppCompany2x from '@assets/img/wppcompany@2x.png';
import facebook1x from '@assets/img/facebook.png';
import facebook2x from '@assets/img/facebook@2x.png';
import instagram1x from '@assets/img/instagram.png';
import instagram2x from '@assets/img/instagram@2x.png';
import linkedin1x from '@assets/img/linkedin.png';
import linkedin2x from '@assets/img/linkedin@2x.png';

import './TheFooter.scss';

function TheFooter() {
  return (
    <footer className="the-footer">
      <div className="the-footer__container">
        <div className="the-footer__left">
          <img
            src={wppCompany1x}
            srcSet={`${wppCompany1x}, ${wppCompany2x} 2x`}
            alt="WPP Company logo"
          />
        </div>
        <div className="the-footer__right">
          <JLink
            href="https://pt-br.facebook.com/agencia.jussi/"
            target="_blank"
            rel="noreferrer noopener"
            classes="the-footer__icon-link"
          >
            <img
              src={facebook1x}
              srcSet={`${facebook1x}, ${facebook2x} 2x`}
              alt="Facebook logo"
              className="the-footer__icon"
            />
          </JLink>
          <JLink
            href="https://www.instagram.com/jussi/?hl=pt-br"
            target="_blank"
            rel="noreferrer noopener"
            classes="the-footer__icon-link"
          >
            <img
              src={instagram1x}
              srcSet={`${instagram1x}, ${instagram2x} 2x`}
              alt="Instagram logo"
              className="the-footer__icon"
            />
          </JLink>
          <JLink
            href="https://br.linkedin.com/company/agencia-jussi"
            target="_blank"
            rel="noreferrer noopener"
            classes="the-footer__icon-link"
          >
            <img
              src={linkedin1x}
              srcSet={`${linkedin1x}, ${linkedin2x} 2x`}
              alt="Linkedin logo"
              className="the-footer__icon"
            />
          </JLink>
        </div>
      </div>
    </footer>
  );
}

export default TheFooter;
