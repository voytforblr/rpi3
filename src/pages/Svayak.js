import React from 'react';
import Header from '../components/Header.js'
import imageWriter from '../img/Yagoudik.jpg' // relative path to image
import imageBook1 from '../img/Yagoudik_1.jpg' // relative path to image
import imageBook2 from '../img/Yagoudik_2.jpg' // relative path to image
import { useTranslation } from 'react-i18next'
import "../../src/i18n"

import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

export default function Yagoudik() {

    const { t } = useTranslation();

    return (
        <div>
            <Header />
            <div class="container">
                <h1 class="jumbotron-heading">{t("Yagoudik.name")}</h1>
                <div class="row">
                    <div class="col-sm">
                        <img alt={t("Yagoudik.name")} src={imageWriter} id="imgWriterDay" class="img-fluid"></img>
                    </div>
                    <div class="col-sm">
                        <p class="lead text-muted" id="description">
                            <strong>{t("t.name")}</strong> {t("Yagoudik.name")}
                            <br></br>
                            <strong>{t("t.years-life")}</strong> {t("Yagoudik.life-time")}
                            <br></br>
                            <strong>{t("t.brief-description")}</strong>{t("Yagoudik.description")}
                        </p>
                    </div>
                </div>
            </div>
            <Timeline lineColor={'#ddd'}>
                <TimelineItem
                    key="001"
                    dateText={t("Yagoudik.date1")}
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
                        {t("Yagoudik.date1-description")}
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
                        {t("Yagoudik.date2-description")}
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
                        {t("Yagoudik.date3-description")}
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
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/WMOaVQd7Dyc"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>                </div>
            </div>
            <div class="container">
                <div class="map-responsive">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37087.93732644181!2d30.270464581155395!3d54.48065093937992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d01d8ed4ae265b%3A0x1c878eba7b869531!2z0JHQsNGA0LDQvdGM!5e0!3m2!1sru!2sby!4v1621773388511!5m2!1sru!2sby"
                        width="600" height="450" style="border:0;" allowFullScreen="" loading="lazy"></iframe>                </div>
                <br></br>
            </div>
        </div>
    );
}