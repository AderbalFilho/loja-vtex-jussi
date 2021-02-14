import { JLink } from '@ui';
import { SOCIAL_MEDIAS } from '@constants';

import wppCompany1x from '@assets/img/wppcompany.png';
import wppCompany2x from '@assets/img/wppcompany@2x.png';

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
          {SOCIAL_MEDIAS.map((socialMedia) => {
            return (
              <JLink
                key={socialMedia.imgAlt}
                href={socialMedia.link}
                target="_blank"
                rel="noreferrer noopener"
                classes="the-footer__icon-link"
              >
                <img
                  src={socialMedia.img1x}
                  srcSet={`${socialMedia.img1x}, ${socialMedia.img2x} 2x`}
                  alt={socialMedia.imgAlt}
                  className="the-footer__icon"
                />
              </JLink>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default TheFooter;
