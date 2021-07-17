import React from 'react';
import style from './Project.module.css';


function Project(props) {
    return (
        <div className={style.project}>
            <div className={style.imgContainer}>
                <button className={style.nav}>View</button>
            </div>
            <div className={style.descriptionContainer}>
            <span className={style.projectInfo}>{props.title}</span>
            <span className={style.projectInfo}>{props.description}</span>
            </div>
        </div>
    );
}

export default Project;