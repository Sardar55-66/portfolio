import React from "react";
import classes from './MainPart.module.scss';
import logo from '../../assets/img/maf_logo-big.png';
import { CardsContainer } from "../Containers/CardsContainer";

export const MainPart = () => { 

    return <>
        <div className={classes.mainWrapper}>
            <CardsContainer/>
            <div>
                <img src={logo} alt="logo" />
            </div>
        </div>
    </>
}