import React from "react";
import classes from './Containers.module.scss';
import logo from '../../assets/img/Saudi_Aramco-logo.png'
import exonLogos from '../../assets/img/Exxon_Mobil_Logo.png'

export const SecondPartContainer = () => {


    return <>
        <div className={classes.cardsContainer}>
            <div className={classes.title}>
                Первичный сектор (Сельское хозяйство и добывающая промышленность)
            </div>

            <div className={classes.divider}></div>

            <div className={classes.secondTitle}>
                Saudi Aramco (ARAMCO)
            </div>
            <div className={classes.aramcoLogo}>
                <img src={logo} alt="logo" />
            </div>

            <div className={classes.thirdTitle}>
                Saudi Aramco (3 Arabian Oil Company) - это одна из крупнейших и национальных нефтегазовых компаний в мире. Вот некоторые ключевые аспекты деятельности и достижения Добывающая деятельность:
            </div>

            <div className={classes.listOfAspects}>
                <ul className={classes.list}>

                    <li>Добывающая деятельность:</li>
                    <div>
                    - Saudi Aramco занимается добычей и добычей нефти и природного газа в Саудовской Аравии. Компания управляет обширной инфраструктурой нефтегазовых         месторождений и скважин.
                    </div>

                    <li>Нефтепереработка и химическая промышленность:</li>
                    <div>
                    - Компания также владеет и управляет нефтеперерабатывающими заводами и химическими предприятиями. Saudi Aramco занимается производством различных нефтепродуктов и химических продуктов, включая пластмассы, удобрения и другие химические вещества.
                    </div>

                    <li>Глобальные резервы:</li>
                    <div>
                    - Saudi Aramco обладает огромными запасами углеводородов, включая месторождения с низким содержанием серы и высокой извлекаемостью, что является важным     фактором для экономической эффективности производства.
                    </div>

                    <li>Стратегическое партнерство:</li>
                    <div>
                    - Saudi Aramco активно развивает стратегические партнерства с другими нефтегазовыми компаниями и инвесторами по всему миру. Компания вступает в соглашения о совместном предприятии, инвестициях и сотрудничестве с ключевыми игроками на мировом энергетическом рынке.
                    </div>

                    <li>Публичное предложение акций:</li>
                    <div>
                    - В 2019 году Saudi Aramco провела одно из самых крупных публичных предложений акций (IPO) в истории. После этого компания стала котируемой на бирже Saudi Tadawul.
                    </div>

                    <li>Технологические инновации:</li>
                    <div>
                    - Saudi Aramco активно внедряет технологические инновации в своей деятельности, такие как новые методы добычи, современные технологии переработки и улучшенные методы добычи нефти.
                    </div>
                </ul>
            </div>

            <div className={classes.fourthTitle}>
                Почему Saudi Aramco будет востребована в дальнейшем:
            </div>

            <div className={classes.listOfAspects}>
                <ul className={classes.list}>

                    <li>Глобальный энергетический спрос:</li>
                    <div>
                    - С учетом растущего мирового спроса на энергию и нефть, Saudi Aramco, как крупнейший добывающий игрок, будет востребована в качестве ключевого поставщика энергетических ресурсов.
                    </div>

                    <li>Стратегическое положение:</li>
                    <div>
                    - Саудовская Аравия обладает стратегически важными месторождениями нефти с низкой стоимостью добычи, что делает Saudi Aramco важным участником в мировой энергетике.
                    </div>

                    <li>Инвестиции в разнообразные секторы:</li>
                    <div>
                    - Компания активно инвестирует в различные секторы, включая химическую промышленность и технологические инновации, что позволяет ей расширять свою деятельность и разнообразить источники доходов.
                    </div>

                    <li>Сотрудничество с глобальными партнерами::</li>
                    <div>
                    - Заключение стратегических соглашений и партнерств с ключевыми игроками в отрасли позволяет компании укреплять свою позицию на мировом рынке и эффективно реагировать на изменения в экономических условиях.
                    </div>

                    <li>Инновации и устойчивость:</li>
                    <div>
                    - Продолжение инвестиций в технологические инновации и стратегии устойчивого развития делает Saudi Aramco конкурентоспособной в долгосрочной перспективе. <br /><br />
                    В общем, востребованность Saudi Aramco связана с ее ключевой ролью в мировой энергетической индустрии, стратегическими ресурсами и устойчивостью в условиях изменчивости на рынке энергии.
                    </div>
                </ul>
            </div>

            <div className={classes.secondDivider}></div>

            <div className={classes.fifthTitle}>
                ExxonMobil Corporation (XOM)
            </div>

            <div className={classes.exonLogo}>
                <img src={exonLogos} alt="logo" />
            </div>

        </div>
    </>
}