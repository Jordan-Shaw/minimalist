import React from "react";
import { ReactComponent as LinkedIn } from "../svg/inkedin.svg";
import { ReactComponent as GitHub } from "../svg/github.svg";
import { ReactComponent as Instagram } from "../svg/instagram.svg";
import { ReactComponent as Home } from "../svg/home.svg";
import { ReactComponent as Code } from "../svg/code.svg";
import { ReactComponent as Profile } from "../svg/profile.svg";
import { ReactComponent as Email } from "../svg/email.svg";





export default function NavBar() {
  return (
    <div className="NavBar">
      <div className="portfolioLinks">
        <Home className="portfolioIcon"/>
        <Code className="portfolioIcon"/>
        <Profile className="portfolioIcon"/>
        <Email className="portfolioIcon"/>
      </div>
      <div className="socialMedia">
        <LinkedIn className="icon"/>
        <GitHub className="icon"/>
        <Instagram className="icon"/>
      </div>
    </div>
  );
}
