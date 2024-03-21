import React from "react";
import classes from './MainPart.module.scss';
import logo from '../../assets/img/maf_logo-big.png';
import { SecondPartContainer } from "../Containers/SecondPartContainer";

export const SecondPart = () => { 

    return <>
        <div className={classes.mainWrapper}>
            <SecondPartContainer/>
            <div>
                <img src={logo} alt="logo" />
            </div>
        </div>
    </>
}