import React from "react";
import classes from './GreenCard.module.scss';
import logo from '../../assets/img/logo1.png'

export const GreenCard = (props) => {

    console.log(props.data)

    const {title, logo, subtitle} = props.data

    return <>
    {title.map((el, id) => {
        return <div className={classes.cardWrapper}>
        <div className={classes.title}>
            <img className={classes.imgLogo} src={logo[id]} alt="logo" />
            <span>{el}</span>
        </div>
        <div className={classes.text}>
            <div>
                {subtitle[id]}
            </div>
        </div>
    </div>
    })}
    </>
}