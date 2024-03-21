import React from "react";
import classes from './Header.module.scss'
import logo from '../../assets/img/maf_logo.png'


export const Header = () => {

    return <div className={classes.header}>
                <div className={classes.subheader}>

                    <div className={classes.logo}>
                        <img src={logo} alt="logo" />
                    </div>

                    <div className={classes.text}>
                        <span className={classes.title}>Portfolio</span> 
                        <span className={classes.subtext}>Agriculture & mining industry sector</span>
                    </div>

                </div>
        </div>
}