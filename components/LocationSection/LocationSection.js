// File: components/LocationSection/LocationSection.js

import React from 'react';
import Link from 'next/link';
import locations from '../../api/locations';

const LocationSection = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    
    // فلترة لعرض أهم المواقع في ستوكهولم
    const stockholmLocations = locations.filter(loc => 
        ['stockholm', 'sollentuna', 'nacka', 'taby', 'solna', 'sodermalm', 'bromma'].includes(loc.slug)
    ).slice(0, 7); // عرض 7 مواقع فقط من ستوكهولم

    return (
        <section className="wpo-work-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-12">
                        <div className="wpo-section-title">
                            <span>Våra Områden</span>
                            <h2>Här Jobbar Vi</h2>
                            <p>Vi är stolta över att erbjuda våra professionella flyttjänster i hela Sverige. Hitta din ort nedan eller begär en kostnadsfri offert idag.</p>
                        </div>
                    </div>
                </div>
                <div className="wpo-work-wrap">
                    <div className="row">
                        {/* عرض المواقع المفلترة من ستوكهولم */}
                        {stockholmLocations.map((location, litem) => (
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={litem}>
                                <div className="wpo-work-item">
                                    <div className="wpo-work-text">
                                        <h3><Link onClick={ClickHandler} href={`/flytthjalp/${location.slug}`}>{location.name}</Link></h3>
                                        <p>Flytthjälp & Städ</p>
                                        <Link className="read-more" onClick={ClickHandler} href={`/flytthjalp/${location.slug}`}>Begär Offert</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                        
                        {/* *** START: NEW CUSTOM BOX FOR HELSINGBORG *** */}
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <div className="wpo-work-item" style={{ background: 'var(--theme-primary-color, #3d86f7)', color: '#fff' }}>
                                <div className="wpo-work-text">
                                    <h3 style={{ color: '#fff' }}><Link onClick={ClickHandler} href="/flyttfirma-helsingborg/">Helsingborg</Link></h3>
                                    <p style={{ color: 'rgba(255,255,255,0.8)' }}>Flytt & Fjärrflytt</p>
                                    <Link className="read-more" style={{ color: '#fff' }} onClick={ClickHandler} href="/flyttfirma-helsingborg/">Läs Mer</Link>
                                </div>
                            </div>
                        </div>
                        {/* *** END: NEW CUSTOM BOX FOR HELSINGBORG *** */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LocationSection;