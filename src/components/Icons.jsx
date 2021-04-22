import React, {useState} from 'react'
import BARS from './../images/icons/menu.png';
import TIMES from './../images/icons/times.png';


export function BarsIcons(props) {
    const {handleClick} = props;

    return (
        <img onClick={handleClick} src={BARS} alt={BARS} />
    )
}

export function TimesIcons(props) {
    const {handleClick} = props;

    return (
        <img onClick={handleClick} src={TIMES} alt={TIMES} />
    )
}
