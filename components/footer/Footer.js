// File: components/footer/Footer.js

import React from 'react'
import Link from "next/link";
import Logo from '/public/images/footer-logo.svg'
import Image from 'next/image';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Footer = (props) => {
    return (
        <footer className="wpo-site-footer">
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <Image src={Logo} alt="Flyttdirekt Logo"/>
                                </div>
                                <p>FlyttDirekt är din pålitliga partner för alla typer av flytt- och städtjänster i hela Sverige. Vi garanterar en smidig och stressfri upplevelse.</p>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Snabblänkar</h3>
                                </div>
                                <ul>
                                    <li><Link href="/om-oss">Om Oss</Link></li>
                                    <li><Link href="/priser">Priser</Link></li>
                                    <li><Link href="/blogg">Blogg</Link></li>
                                    <li><Link href="/kontakt">Kontakta Oss</Link></li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Populära Guider</h3>
                                </div>
                                <ul>
                                    {/* *** START: NEW LINK ADDED *** */}
                                    <li><Link onClick={ClickHandler} href="/flyttfirma-helsingborg/">Flyttfirma Helsingborg</Link></li>
                                    {/* *** END: NEW LINK ADDED *** */}
                                    <li><Link onClick={ClickHandler} href="/guider/vad-kostar-flyttfirma-stockholm">Vad kostar en flyttfirma?</Link></li>
                                    <li><Link onClick={ClickHandler} href="/guider/guide-till-pianons-vikt">Vad väger ett piano?</Link></li>
                                    <li><Link onClick={ClickHandler} href="/guider/rutavdrag-flyttfirma-guide">Allt om RUT-avdrag</Link></li>
                                    <li><Link onClick={ClickHandler} href="/guider/basta-flyttfirman-stockholm-tips">Välja bästa flyttfirman</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Tjänster</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} href="/flytthjalp">Flytthjälp</Link></li>
                                    <li><Link onClick={ClickHandler} href="/flyttstadning">Flyttstädning</Link></li>
                                    <li><Link onClick={ClickHandler} href="/magasinering">Magasinering</Link></li>
                                    <li><Link onClick={ClickHandler} href="/foretagsflytt">Företagsflytt</Link></li>
                                    <li><Link onClick={ClickHandler} href="/pianoflytt">Pianoflytt</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <p className="copyright"> Copyright © 2025 Flyttdirekt.se | Alla rättigheter förbehållna</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;