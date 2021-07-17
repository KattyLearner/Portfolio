import React from 'react';
import style from './WorkFromHome.module.css';
import styleContainer from '../Common/Styles/Container.module.css';

function WorkFromHome() {
    return (
        <div className={style.wfhBlock}>
            <div className={`${styleContainer.container} ${style.wfhContainer}`}>
                <h3 className={style.title}>Do not mind remote work</h3>
                <button>Contact me</button>
            </div>
        </div>
    );
}

export default WorkFromHome;