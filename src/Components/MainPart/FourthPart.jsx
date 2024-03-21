import React from "react";
import classes from './MainPart.module.scss';
import logo from '../../assets/img/maf_logo-big.png';
import { FourthContainer } from "../Containers/FourthContainer";

export const FourthPart = () => { 

    return <>
        <div className={classes.mainWrapper}>
            <FourthContainer/>
            <div>
                <img src={logo} alt="logo" />
            </div>
        </div>
    </>
}