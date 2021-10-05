import React from 'react';
import Typed from 'react-typed';


const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Développeur Web </h1>
                <Typed
                    className="typed-text" 
                    strings={["Dev React JS" , "Dev J2EE" , "Dev Symfony" , "QA Engineering"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#" className="btn-main-offer">Contactez-moi</a>
            </div>

        </div>
    )
}

export default Header;