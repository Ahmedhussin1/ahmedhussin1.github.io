import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiUpwork} from 'react-icons/si'
function HeaderSocials() {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/ahmed-m-hussein-b6b552202/"
        rel="noreferrer"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/Ahmedhussin1"
        rel="noreferrer"
        target="_blank"
      >
        <BsGithub />
      </a>
      <a
        href="https://www.upwork.com/freelancers/~01b9ae1a6e5758d962"
        rel="noreferrer"
        target="_blank"
      >
        <SiUpwork />
      </a>
    </div>
  );
}

export default HeaderSocials