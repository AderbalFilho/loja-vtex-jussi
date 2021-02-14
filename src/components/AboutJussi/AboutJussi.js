import { JButton, JSection, JText, JTitle } from '@ui';

import imageJussi1x from '@assets/img/image-jussi.png';
import imageJussi2x from '@assets/img/image-jussi@2x.png';

import './AboutJussi.scss';

function AboutJussi() {
  return (
    <JSection classes="about-jussi">
      <div className="about-jussi__container">
        <div className="about-jussi__text-container">
          <JTitle tag="h2" classes="about-jussi__title">
            Olá, somos a Jüssi
          </JTitle>
          <JText color="black" classes="about-jussi__description">
            A Jüssi é uma agência integrante do grupo global WPP que vem há 10
            anos consolidando o pensamento voltado para produtos e resolução de
            problemas. Nosso área dedicada exclusivamente para Produtos Digitais
            é organizada em 6 especialidades: Product Managamenet, User
            Experience Design, SEO, Tecnologia, Agile e User Behavior Analytics.
          </JText>
          <JButton
            tag="a"
            href="https://jussi.com.br/"
            target="_blank"
            rel="noreferrer noopener"
            classes="about-jussi__button"
          >
            Conheça a Jüssi
          </JButton>
        </div>
        <img
          src={imageJussi1x}
          srcSet={`${imageJussi1x}, ${imageJussi2x} 2x`}
          alt="Escritório da Jüssi, mostrando os funcionários trabalhando em suas mesas"
          className="about-jussi__img"
        />
      </div>
    </JSection>
  );
}

export default AboutJussi;
