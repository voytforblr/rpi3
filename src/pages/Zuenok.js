import React from 'react';
import Header from '../components/Header.js'
import imageWriter from '../img/Zuenok.jpg' // relative path to image 
import imageBook1 from '../img/Zuenok_1.jpg' // relative path to image 
import imageBook2 from '../img/Zuenok_2.jpg' // relative path to image 
import { useTranslation } from 'react-i18next'
import "../../src/i18n"

import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

export default function Zuenok() {
    
    const { t } = useTranslation();

    return (
        <div>
            <Header />
            <div class="container">
                <h1 class="jumbotron-heading">{t("Zuenok.name")}</h1>
                <div class="row">
                    <div class="col-sm">
                        <img alt={t("Zuenok.name")} src={imageWriter} id="imgWriterDay" class="img-fluid"></img>
                    </div>
                    <div class="col-sm">
                        <p class="lead text-muted" id="description">
                            <strong>{t("t.name")}</strong> {t("Zuenok.name")}
                            <br></br>
                            <strong>{t("t.years-life")}</strong> {t("Zuenok.life-time")}
                            <br></br>
                            <strong>{t("t.brief-description")}</strong>{t("Zuenok.description")}
                            </p>
                    </div>
                </div>
            </div>
            <Timeline lineColor={'#ddd'}>
                <TimelineItem
                    key="001"
                    dateText={t("Zuenok.date1")}
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
                    {t("Zuenok.date1-description")}
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
                    {t("Zuenok.date2-description")}
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
                    {t("Zuenok.date3-description")}
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
                <iframe width="964" height="723" src="https://www.youtube.com/embed/sr8bmkVRe0w" title="YouTube video player" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div class="container">
                <div class="map-responsive">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18859.56219313109!2d27.572318288084496!3d53.78156207462974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbd3f4c5d4bdf7%3A0xca144f652e1a0242!2z0JzQsNGH0YPQu9C40YnQuA!5e0!3m2!1sru!2sby!4v1620057752687!5m2!1sru!2sby"
                        width="600" height="450" frameborder="0" style={{ border: 0 }} allowfullscreen></iframe>
                </div>
                <br></br>
            </div>
        </div>
    );
}