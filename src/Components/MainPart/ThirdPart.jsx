import React from "react";
import classes from './MainPart.module.scss';
import logo from '../../assets/img/maf_logo-big.png';
import { ThirdPartContainer } from "../Containers/ThirdPartContainer";

export const ThirdPart = () => { 

    return <>
        <div className={classes.mainWrapper}>
            <ThirdPartContainer/>
            <div>
                <img src={logo} alt="logo" />
            </div>
        </div>
    </>
}