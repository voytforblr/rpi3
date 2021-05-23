import React from 'react';
import Header from '../components/Header.js'
import imageWriter from '../img/Kolas.jpg' // relative path to image 
import imageBook1 from '../img/Kolas-book1.jpg' // relative path to image 
import imageBook2 from '../img/Kolas-book2.jpg' // relative path to image 
import { useTranslation } from 'react-i18next'
import "../../src/i18n"

import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

export default function Kolas() {
    const { t } = useTranslation();

    return (
        <div>
            <Header />
            <div class="container">
                <h1 class="jumbotron-heading">{t("Kolas.name")}</h1>
                <div class="row">
                    <div class="col-sm">
                        <img alt={t("Kolas.name")} src={imageWriter} id="imgWriterDay" class="img-fluid"></img>
                    </div>
                    <div class="col-sm">
                        <p class="lead text-muted" id="description">
                            <strong>{t("t.name")}</strong> {t("Kolas.name")}
                            <br></br>
                            <strong>{t("t.years-life")}</strong> {t("Kolas.life-time")}
                            <br></br>
                            <strong>{t("t.brief-description")}</strong>{t("Kolas.description")}
                        </p>
                    </div>
                </div>
            </div>
            <Timeline lineColor={'#ddd'}>
                <TimelineItem
                    key="001"
                    dateText={t("Kolas.date1")}
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
                    {t("Kolas.date1-description")}
                    </p>
                </TimelineItem>
                <TimelineItem
                    key="002"
                    dateText="1902 – 1914"
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
                    {t("Kolas.date2-description")}
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                    {t("Kolas.date2-description1")}
                    </p>
                </TimelineItem>
                <TimelineItem
                    key="004"
                    dateText={t("Kolas.date3")}
                    dateInnerStyle={{ background: '#e86971' }}
                    style={{ color: '#e86971' }}
                    bodyContainerStyle={{
                        background: '#ddd',
                        padding: '20px',
                        borderRadius: '8px',
                        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                    }}
                >
                    <h3 style={{ color: '#e86971' }}>{t("t.death")}</h3>
                    <p>
                    {t("Kolas.date3-description")}
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
                    <iframe width="2118" height="908" src="https://www.youtube.com/embed/GNvCm0tK9gw" title="YouTube video player"
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
                picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div class="container">
                <div class="map-responsive">
                    <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Belarus+Stolbtsy"
                        width="600" height="450" frameborder="0" style={{ border: 0 }} allowfullscreen></iframe>
                </div>
                <br></br>
            </div>
        </div>
    );
}