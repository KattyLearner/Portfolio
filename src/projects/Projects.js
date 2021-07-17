import React from 'react';
import style from './Projects.module.css';
import styleContainer from '../Common/Styles/Container.module.css';
import Project from "./project/Project";


function Projects() {
    return (
        <div className={style.projectBlock}>
            <div className={`${styleContainer.container} ${style.projectContainer}`}>
                <h2 className={style.title}>Projects</h2>
                <div className={style.projects}>
                  <Project title={'Project name 1'} description={'Short description 1'} />
                  <Project title={'Project name 2'} description={'Short description 2'}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;