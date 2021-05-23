import React from 'react';
import Header from '../components/Header.js'
import imageWriter from '../img/Kupale.jpg' // relative path to image 
import imageBook1 from '../img/Kupale_1.jpg' // relative path to image 
import imageBook2 from '../img/Kupale_2.jpg' // relative path to image 
import { useTranslation } from 'react-i18next'
import "../../src/i18n"
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

export default function Kuppalle() {

    const { t } = useTranslation();

    return (
        <div>
            <Header />
            <Container>
                <h1 class="jumbotron-heading">{t("Kupale.name")}</h1>
                <Row>
                    <Col md={12} lg={6}>
                        <img alt={t("Kupale.name")} src={imageWriter} id="imgWriterDay" class="img-fluid"></img>
                    </Col>
                    <Col md={12} lg={6}>
                        <p class="lead text-muted" id="description">
                            <strong>{t("t.name")}</strong> {t("Kupale.name")}
                            <br></br>
                            <strong>{t("t.years-life")}</strong> {t("Kupale.life-time")}
                            <br></br>
                            <strong>{t("t.brief-description")}</strong>{t("Kupale.description")}
                        </p>
                    </Col>
                </Row>
            </Container>
            <Timeline lineColor={'#ddd'}>
                <TimelineItem
                    key="001" dateText={t("Kupale.date1")} dateInnerStyle={{ background: '#76bb7f', color: 'white' }} style={{ color: '#76bb7f' }}
                    bodyContainerStyle={{ background: '#ddd', padding: '20px', borderRadius: '8px', boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)', }}
                >
                    <h3 style={{ color: '#76bb7f' }}>{t("t.birthday")}</h3>
                    <p style={{ textAlign: 'justify' }}> {t("Kupale.date1-description")}</p>
                </TimelineItem>
                <TimelineItem
                    key="002" dateText="1835 – 1880 " dateInnerStyle={{ background: '#61b8ff', color: 'white' }} style={{ color: '#61b8ff' }}
                    bodyContainerStyle={{ background: '#ddd', padding: '20px', borderRadius: '8px', boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)', }}
                >
                    <h3 style={{ color: '#61b8ff' }}>{t("t.activity")}</h3>
                    <p style={{ textAlign: 'justify' }}>{t("Kupale.date2-description")}</p>
                </TimelineItem>
                <TimelineItem
                    key="004" dateText={t("Kupale.date3")} dateInnerStyle={{ background: '#e86971' }} style={{ color: '#e86971' }}
                    bodyContainerStyle={{ background: '#ddd', padding: '20px', borderRadius: '8px', boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)', }}
                >
                    <h3 style={{ color: '#e86971' }}>{t("t.death")}</h3>
                    <p>{t("Kupale.date3-description")}</p>
                </TimelineItem>
            </Timeline>
            <Container>
                <h1 class="jumbotron-heading">{t("t.gallery")}</h1>
                <Row>
                    <Col md={12} lg={6}><img alt={t("Kupale.name")} src={imageBook1} id="imgWriterDay" class="img-fluid"></img></Col>
                    <Col md={12} lg={6}><img alt={t("Kupale.name")} src={imageBook2} id="imgWriterDay" class="img-fluid"></img></Col>
                </Row>
                <br></br>
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe width="1280" height="720" src="https://www.youtube.com/embed/JHgphHjmc-Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </Container>
            <Container>
                <div class="map-responsive">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18712.1362099627!2d27.174959338884157!3d54.10890157932545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbec59040878cd%3A0x89c684e28491971f!2z0JLRj9C30YvQvdC60LA!5e0!3m2!1sru!2sby!4v1620054277576!5m2!1sru!2sby"
                        width="600" height="450" frameborder="0" style={{ border: 0 }} allowfullscreen></iframe>
                </div>
                <br></br>
            </Container>
        </div>
    );
}