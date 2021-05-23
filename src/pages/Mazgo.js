import React from 'react';
import Header from '../components/Header.js'
import imageWriter from '../img/Mazgo.jpg' // relative path to image
import imageBook1 from '../img/Mazgo_1.jpg' // relative path to image
import imageBook2 from '../img/Mazgo_2.jpg' // relative path to image
import { useTranslation } from 'react-i18next'
import "../../src/i18n"

import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

export default function Mazgo() {

    const { t } = useTranslation();

    return (
        <div>
            <Header />
            <div class="container">
                <h1 class="jumbotron-heading">{t("Mazgo.name")}</h1>
                <div class="row">
                    <div class="col-sm">
                        <img alt={t("Mazgo.name")} src={imageWriter} id="imgWriterDay" class="img-fluid"></img>
                    </div>
                    <div class="col-sm">
                        <p class="lead text-muted" id="description">
                            <strong>{t("t.name")}</strong> {t("Mazgo.name")}
                            <br></br>
                            <strong>{t("t.years-life")}</strong> {t("Mazgo.life-time")}
                            <br></br>
                            <strong>{t("t.brief-description")}</strong>{t("Mazgo.description")}
                        </p>
                    </div>
                </div>
            </div>
            <Timeline lineColor={'#ddd'}>
                <TimelineItem
                    key="001"
                    dateText={t("Mazgo.date1")}
                    dateInnerStyle={{ background: '#76bb7f', color: 'white' }}
                    style={{ color: '#76bb7f' }}
                    bodyContainerStyle={{
                        background: '#ddd',
                        padding: '20px',
                        borderRadius: '8px',
                        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                    }}
                >
                    <h3 style={{ color: '#76bb7f' }}>{t("t.birthday")}</h3>
                    <p style={{ textAlign: 'justify' }}>
                        {t("Mazgo.date1-description")}
                    </p>
                </TimelineItem>
                <TimelineItem
                    key="002"
                    dateText="1835 – 1880 "
                    dateInnerStyle={{ background: '#61b8ff', color: 'white' }}
                    style={{ color: '#61b8ff' }}
                    bodyContainerStyle={{
                        background: '#ddd',
                        padding: '20px',
                        borderRadius: '8px',
                        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                    }}
                >
                    <h3 style={{ color: '#61b8ff' }}>{t("t.activity")}</h3>
                    <p style={{ textAlign: 'justify' }}>
                        {t("Mazgo.date2-description")}
                    </p>
                </TimelineItem>
                <TimelineItem
                    key="004"
                    dateText={t("t.awards")}
                    dateInnerStyle={{ background: '#e86971' }}
                    style={{ color: '#e86971' }}
                    bodyContainerStyle={{
                        background: '#ddd',
                        padding: '20px',
                        borderRadius: '8px',
                        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                    }}
                >
                    <h3 style={{ color: '#e86971' }}>{t("t.awards")}</h3>
                    <p>
                        {t("Mazgo.date3-description")}
                    </p>
                </TimelineItem>
            </Timeline>
            <div class="container">
                <h1 class="jumbotron-heading">{t("t.gallery")}</h1>
                <div class="row">
                    <div class="col-sm">
                        <img alt="Якуб Колас" src={imageBook1} id="imgWriterDay" class="img-fluid"></img>
                    </div>
                    <div class="col-sm">
                        <img alt="Якуб Колас" src={imageBook2} id="imgWriterDay" class="img-fluid"></img>
                    </div>
                </div>

                <br></br>
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/02pAplxVeTE"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>                </div>
            </div>
            <div class="container">
                <div class="map-responsive">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38283.36859988144!2d24.770252018114324!3d53.15128931417132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46df721379e64451%3A0xf59ab827e69dfbfb!2z0JfQtdC70YzQstCw!5e0!3m2!1sru!2sby!4v1621772291379!5m2!1sru!2sby"
                        width="600" height="450" style="border:0;" allowFullScreen="" loading="lazy"></iframe>                </div>
                <br></br>
            </div>
        </div>
    );
}