import React from 'react';
import style from './Footer.module.css';
import styleContainer from '../Common/Styles/Container.module.css';

function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h4 className={style.title}>Last name & First name</h4>
                <div className={style.contactsContainer}>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                </div>
                <div>@2019 All rights reserved</div>
            </div>
        </div>
    );
}

export default Footer;