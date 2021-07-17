import React from 'react';
import style from './Contacts.module.css';
import styleContainer from '../Common/Styles/Container.module.css';

function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h4 className={style.title}>Contact me</h4>
                    <form className={style.formContainer}>
                        <input className={style.input}/>
                        <input className={style.input}/>
                        <textarea className={style.input}/>
                    </form>
                <button>Send</button>
            </div>
        </div>
    );
}

export default Contacts;