import React from 'react';
import Header from '../components/Header.js'
import imageWriter from '../img/Kuleshov.jpg' // relative path to image
import imageBook1 from '../img/Kuleshov_1.jpg' // relative path to image
import imageBook2 from '../img/Kuleshov_2.jpg' // relative path to image
import { useTranslation } from 'react-i18next'
import "../../src/i18n"

import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

export default function Kolas() {

    const { t } = useTranslation();

    return (
        <div>
            <Header />
            <div class="container">
                <h1 class="jumbotron-heading">{t("Kuleshov.name")}</h1>
                <div class="row">
                    <div class="col-sm">
                        <img alt={t("Kuleshov.name")} src={imageWriter} id="imgWriterDay" class="img-fluid"></img>
                    </div>
                    <div class="col-sm">
                        <p class="lead text-muted" id="description">
                            <strong>{t("t.name")}</strong> {t("Kuleshov.name")}
                            <br></br>
                            <strong>{t("t.years-life")}</strong> {t("Kuleshov.life-time")}
                            <br></br>
                            <strong>{t("t.brief-description")}</strong>{t("Kuleshov.description")}
                        </p>
                    </div>
                </div>
            </div>
            <Timeline lineColor={'#ddd'}>
                <TimelineItem
                    key="001"
                    dateText={t("Kuleshov.date1")}
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
                        {t("Kuleshov.date1-description")}
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
                        {t("Kuleshov.date2-description")}
                    </p>
                </TimelineItem>
                <TimelineItem
                    key="004"
                    dateText={t("Kuleshov.date3")}
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
                        {t("Kuleshov.date3-description")}
                    </p>
                </TimelineItem>
            </Timeline>
            <div class="container">
                <h1 class="jumbotron-heading">{t("t.gallery")}</h1>
                <div class="row">
                    <div class="col-sm">
                        <img alt={t("Kuleshov.name")} src={imageBook1} id="imgWriterDay" class="img-fluid"></img>
                    </div>
                    <div class="col-sm">
                        <img alt={t("Kuleshov.name")} src={imageBook2} id="imgWriterDay" class="img-fluid"></img>
                    </div>
                </div>
                <br></br>
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/isJFJY95eRY"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </div>
            </div>
            <div class="container">
                <div class="map-responsive">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9541.623199550888!2d32.071870725347665!3d53.282265481182264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d24c48dd100f15%3A0x90990ac3553bd74a!2z0J3QvtCy0YvQtSDQodCw0LzQvtGC0LXQstC40YfQuA!5e0!3m2!1sru!2sby!4v1621772429094!5m2!1sru!2sby"
                        width="600" height="450" style="border:0;" allowFullScreen="" loading="lazy"></iframe>                </div>
                <br></br>
            </div>
        </div>
    );
}

