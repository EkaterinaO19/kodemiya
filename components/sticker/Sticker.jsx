import React from 'react';
import styles from './Sticker.module.scss'
import Image from "next/image";

const Sticker = ({text, sticker, top, left, right}) => {
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