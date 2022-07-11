import {useTranslation} from "react-i18next";
import {availableLanguages} from "../i18n";
import './Header.scss';

const Header = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="header">
      <div className="lang-bar">
        <p>{t('chooseLang')}: </p>
        <select defaultValue={i18n.language} onChange={(e) => i18n.changeLanguage(e.target.value)}>
          {availableLanguages.map((language) => (
            <option key={language}>{language}</option>
          ))}
        </select>
      </div>
      <div className="header-bar">
        <img src="https://www.politsei.ee/_nuxt/img/favicon-32-full.a40abce.png" alt="police logo" />
        <h1>{t('header')}</h1>
        <img src="https://www.politsei.ee/_nuxt/img/favicon-32-full.a40abce.png" alt="police logo" />
      </div>
      <p>{t('headerBottomText')}</p>
    </div>
  );
}

export default Header;