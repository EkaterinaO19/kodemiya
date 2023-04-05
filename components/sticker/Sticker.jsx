import React from 'react';
import styles from './Sticker.module.scss'
import Image from "next/image";

const Sticker = ({text, avatar, sticker, top, left, right}) => {
    const divStyle = {
        position: 'absolute',
        display:'flex',
        top: top,
        left: left,
        right: right
    };

    return (
        <div style={divStyle}>
            <div className={styles.container}>
                {avatar &&
                    (<div className="message_avatar">
                        <img src={avatar} alt="Avatar"/>
                    </div>)
                }
                <p className={styles.text}>{text}</p>
                {sticker && <div className="message_sticker">
                    <Image src={sticker}
                           alt={'Sticker'}
                           width={30} height={30}/>
                </div>}
            </div>
        </div>
    );
};

export default Sticker;
// <div style={{position:'absolute', }}></div>