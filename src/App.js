import { useTranslation } from 'react-i18next'

import React, { Suspense } from 'react';
import { Route } from "react-router-dom";
import Home from "./pages/Home"
import List from "./pages/List"
import Kolas from "./pages/Kolas"
import Kupale from "./pages/Kupale"
import Ryhor from "./pages/Ryhor"
import Dunin from "./pages/Dunin"
import Zuenok from "./pages/Zuenok"
import Kuleshov from "./pages/Kuleshov"
import Svayak from "./pages/Svayak"
import Mazgo from "./pages/Mazgo"
import Yagoudik from "./pages/Yagoudik"

import WriterPage from '../src/components/WriterPage'

// Купала
import imageWriterKupale from '../src/img/Kupale.jpg'
import imageBook_Kupale_1 from '../src/img/Kupale_1.jpg'
import imageBook_Kupale_2 from '../src/img/Kupale_2.jpg'

// Колас
import imageWriterKolas from '../src/img/Kolas.jpg'
import imageBook_Kolas_1 from '../src/img/Kolas_1.jpg'
import imageBook_Kolas_2 from '../src/img/Kolas_2.jpg'

// Рыгор
import imageWriterRyhor from '../src/img/Ryhor.jpg'
import imageBook_Ryhor_1 from '../src/img/Rygor_1.jpeg'
import imageBook_Ryhor_2 from '../src/img/Rygor_2.jpeg'

//Кулешов
import imageWriterKuleshov from '../src/img/Kuleshov.jpg'
import imageBook_Kuleshov_1 from '../src/img/Kuleshov_1.jpg'
import imageBook_Kuleshov_2 from '../src/img/Kuleshov_2.jpg'

// Дунин
import imageWriterDunin from '../src/img/Dunin.jpeg'
import imageBook_Dunin_1 from '../src/img/Dunin_1.jpg'
import imageBook_Dunin_2 from '../src/img/Dunin_2.jpg'

// Зуёнок
import imageWriterZuenok from '../src/img/Zuenok.jpg'
import imageBook_Zuenok_1 from '../src/img/Zuenok_1.jpg'
import imageBook_Zuenok_2 from '../src/img/Zuenok_2.jpg'

//Яговдик
import imageWriterYagoudik from '../src/img/Yagoudik.jpg'
import imageBook_Yagoudik_1 from '../src/img/Yagoudik_1.jpg'
import imageBook_Yagoudik_2 from '../src/img/Yagoudik_2.jpg'

//Сваяк
import imageWriterSvayak from '../src/img/Svayak.jpg'
import imageBook_Svayak_1 from '../src/img/Svayak_1.jpg'
import imageBook_Svayak_2 from '../src/img/Svayak_2.jpg'

//Мазго
import imageWriterMazgo from '../src/img/Mazgo.jpg'
import imageBook_Mazgo_1 from '../src/img/Mazgo_1.jpg'
import imageBook_Mazgo_2 from '../src/img/Mazgo_2.jpg'

export default function App() {

    const { t } = useTranslation();

    return (
        <div className="App">
            <Suspense fallback={null}>
                <Route exact path="/" component={Home} />
                <Route exact path="/List" component={List} />
                <Route exact path="/Kolas" component={ 
                    () => <WriterPage
                        name={t("Kolas.name")}
                        urlMainImage={imageWriterKolas}
                        urlImageBook1={imageBook_Kolas_1}
                        urlImageBook2={imageBook_Kolas_2}
                        description={t("Kolas.description")}
                        lifeTime={t("Kolas.life-time")}
                        date1={t("Kolas.date1")}
                        birthday={t("t.birthday")}
                        descriptionDate1={t("Kolas.date1-description")}
                        date2={t("Kolas.date2")}
                        activity={t("t.activity")}
                        descriptionDate2={t("Kolas.date2-description")}
                        date3={t("Kolas.date3")}
                        death={t("t.death")}
                        descriptionDate3={t("Kolas.date3-description")}
                        urlYouTube="https://www.youtube.com/embed/GNvCm0tK9gw"
                        urlMap="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Belarus+Stolbtsy"/>
                } />
                <Route exact path="/Kupale" component={
                    () => <WriterPage
                        name={t("Kupale.name")}
                        urlMainImage={imageWriterKupale}
                        urlImageBook1={imageBook_Kupale_1}
                        urlImageBook2={imageBook_Kupale_2}
                        description={t("Kupale.description")}
                        lifeTime={t("Kupale.life-time")}
                        date1={t("Kupale.date1")}
                        birthday={t("t.birthday")}
                        descriptionDate1={t("Kupale.date1-description")}
                        date2={t("Kupale.date2")}
                        activity={t("t.activity")}
                        descriptionDate2={t("Kupale.date2-description")}
                        date3={t("Kupale.date3")}
                        death={t("t.death")}
                        descriptionDate3={t("Kupale.date3-description")}
                        urlYouTube="https://www.youtube.com/embed/JHgphHjmc-Q"
                        urlMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18712.1362099627!2d27.174959338884157!3d54.10890157932545!2m3!1f0!2f0!3f0!3m
                    2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbec59040878cd%3A0x89c684e28491971f!2z0JLRj9C30YvQvdC60LA!5e0!3m2!1sru!2sby!4v1620054277576!5m2!1sru!2sby"/>
                } />
                <Route exact path="/Ryhor" component={
                    () => <WriterPage
                        name={t("Ryhor.name")}
                        urlMainImage={imageWriterRyhor}
                        urlImageBook1={imageBook_Ryhor_1}
                        urlImageBook2={imageBook_Ryhor_2}
                        description={t("Ryhor.description")}
                        lifeTime={t("Ryhor.life-time")}
                        date1={t("Ryhor.date1")}
                        birthday={t("t.birthday")}
                        descriptionDate1={t("Ryhor.date1-description")}
                        date2={t("Ryhor.date2")}
                        activity={t("t.activity")}
                        descriptionDate2={t("Ryhor.date2-description")}
                        date3={t("Ryhor.date3")}
                        death={t("t.death")}
                        descriptionDate3={t("Ryhor.date3-description")}
                        urlYouTube="https://www.youtube.com/embed/xXXaSXWLpsc"
                        urlMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251737.2790295673!2d28.68805438226472!3d55.2841488853343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46c4c7767edce15d%3A0xbdd517ba1ca8fc55!2z0KLQuNGF0L7QvdGP0YLRiw!5e0!3m2!1sru!2sby!4v1620057263901!5m2!1sru!2sby"/>
                } />
                <Route exact path="/Dunin" component={ 
                    () => <WriterPage
                    name={t("Dunin.name")}
                    urlMainImage={imageWriterDunin}
                    urlImageBook1={imageBook_Dunin_1}
                    urlImageBook2={imageBook_Dunin_2}
                    description={t("Dunin.description")}
                    lifeTime={t("Dunin.life-time")}
                    date1={t("Dunin.date1")}
                    birthday={t("t.birthday")}
                    descriptionDate1={t("Dunin.date1-description")}
                    date2={t("Dunin.date2")}
                    activity={t("t.activity")}
                    descriptionDate2={t("Dunin.date2-description")}
                    date3={t("Dunin.date3")}
                    death={t("t.death")}
                    descriptionDate3={t("Dunin.date3-description")}
                    urlYouTube="https://www.youtube.com/embed/NzDAnbltnPA"
                    urlMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9553.88632233111!2d29.167361027641505!3d53.22732235417633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d73458aeecdb69%3A0x764fc680011e0a60!2z0J_QsNC90Y7RiNC60L7QstC40YfQuCwg0JHQtdC70LDRgNGD0YHRjA!5e0!3m2!1sru!2sus!4v1620052558828!5m2!1sru!2sus"/>
                } />
                <Route exact path="/Kuleshov" component={
                    () => <WriterPage
                        name={t("Kuleshov.name")}
                        urlMainImage={imageWriterKuleshov}
                        urlImageBook1={imageBook_Kuleshov_1}
                        urlImageBook2={imageBook_Kuleshov_2}
                        description={t("Kuleshov.description")}
                        lifeTime={t("Kuleshov.life-time")}
                        date1={t("Kuleshov.date1")}
                        birthday={t("t.birthday")}
                        descriptionDate1={t("Kuleshov.date1-description")}
                        date2={t("Kuleshov.date2")}
                        activity={t("t.activity")}
                        descriptionDate2={t("Kuleshov.date2-description")}
                        date3={t("Kuleshov.date3")}
                        death={t("t.death")}
                        descriptionDate3={t("Kuleshov.date3-description")}
                        urlYouTube="https://www.youtube.com/embed/isJFJY95eRY"
                        urlMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9541.623199550888!2d32.071870725347665!3d53.282265481182264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d24c48dd100f15%3A0x90990ac3553bd74a!2z0J3QvtCy0YvQtSDQodCw0LzQvtGC0LXQstC40YfQuA!5e0!3m2!1sru!2sby!4v1621772429094!5m2!1sru!2sby"/>
                } />
                <Route exact path="/Zuenok" component={
                    () => <WriterPage
                        name={t("Zuenok.name")}
                        urlMainImage={imageWriterZuenok}
                        urlImageBook1={imageBook_Zuenok_1}
                        urlImageBook2={imageBook_Zuenok_2}
                        description={t("Zuenok.description")}
                        lifeTime={t("Zuenok.life-time")}
                        date1={t("Zuenok.date1")}
                        birthday={t("t.birthday")}
                        descriptionDate1={t("Zuenok.date1-description")}
                        date2={t("Zuenok.date2")}
                        activity={t("t.activity")}
                        descriptionDate2={t("Zuenok.date2-description")}
                        date3={t("t.awards")}
                        death={t("t.awards")}
                        descriptionDate3={t("Zuenok.date3-description")}
                        urlYouTube="https://www.youtube.com/embed/sr8bmkVRe0w"
                        urlMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18859.56219313109!2d27.572318288084496!3d53.78156207462974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbd3f4c5d4bdf7%3A0xca144f652e1a0242!2z0JzQsNGH0YPQu9C40YnQuA!5e0!3m2!1sru!2sby!4v1620057752687!5m2!1sru!2sby"/>
                } />
                <Route exact path="/Mazgo" component={
                    () => <WriterPage
                    name={t("Mazgo.name")}
                    urlMainImage={imageWriterMazgo}
                    urlImageBook1={imageBook_Mazgo_1}
                    urlImageBook2={imageBook_Mazgo_2}
                    description={t("Mazgo.description")}
                    lifeTime={t("Mazgo.life-time")}
                    date1={t("Mazgo.date1")}
                    birthday={t("t.birthday")}
                    descriptionDate1={t("Mazgo.date1-description")}
                    date2={t("Mazgo.date2")}
                    activity={t("t.activity")}
                    descriptionDate2={t("Mazgo.date2-description")}
                    date3={t("t.awards")}
                    death={t("t.awards")}
                    descriptionDate3={t("Mazgo.date3-description")}
                    urlYouTube="https://www.youtube.com/embed/02pAplxVeTE"
                    urlMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38283.36859988144!2d24.770252018114324!3d53.15128931417132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46df721379e64451%3A0xf59ab827e69dfbfb!2z0JfQtdC70YzQstCw!5e0!3m2!1sru!2sby!4v1621772291379!5m2!1sru!2sby"/>
                } />
                <Route exact path="/Svayak" component={
                    () => <WriterPage
                    name={t("Svayak.name")}
                    urlMainImage={imageWriterSvayak}
                    urlImageBook1={imageBook_Svayak_1}
                    urlImageBook2={imageBook_Svayak_2}
                    description={t("Svayak.description")}
                    lifeTime={t("Svayak.life-time")}
                    date1={t("Svayak.date1")}
                    birthday={t("t.birthday")}
                    descriptionDate1={t("Svayak.date1-description")}
                    date2={t("Svayak.date2")}
                    activity={t("t.activity")}
                    descriptionDate2={t("Svayak.date2-description")}
                    date3={t("t.awards")}
                    death={t("t.awards")}
                    descriptionDate3={t("Svayak.date3-description")}
                    urlYouTube="https://www.youtube.com/embed/WMOaVQd7Dyc"
                    urlMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37087.93732644181!2d30.270464581155395!3d54.48065093937992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d01d8ed4ae265b%3A0x1c878eba7b869531!2z0JHQsNGA0LDQvdGM!5e0!3m2!1sru!2sby!4v1621773388511!5m2!1sru!2sby"/>
                } />
                <Route exact path="/Yagoudik" component={
                    () => <WriterPage
                    name={t("Yagoudik.name")}
                    urlMainImage={imageWriterYagoudik}
                    urlImageBook1={imageBook_Yagoudik_1}
                    urlImageBook2={imageBook_Yagoudik_2}
                    description={t("Yagoudik.description")}
                    lifeTime={t("Yagoudik.life-time")}
                    date1={t("Yagoudik.date1")}
                    birthday={t("t.birthday")}
                    descriptionDate1={t("Yagoudik.date1-description")}
                    date2={t("Yagoudik.date2")}
                    activity={t("t.activity")}
                    descriptionDate2={t("Yagoudik.date2-description")}
                    date3={t("t.awards")}
                    death={t("t.awards")}
                    descriptionDate3={t("Yagoudik.date3-description")}
                    urlYouTube="https://www.youtube.com/embed/l9YQ-ilZq2M"
                    urlMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18859.56219313109!2d27.572318288084496!3d53.78156207462974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbd3f4c5d4bdf7%3A0xca144f652e1a0242!2z0JzQsNGH0YPQu9C40YnQuA!5e0!3m2!1sru!2sby!4v1620057752687!5m2!1sru!2sby"/>
                } />
            </Suspense>
        </div>
    );
}