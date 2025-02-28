import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"; // Detect language



const resources = {
    en: {
        translation: {
           home: 'Home',
           about: 'About',
           menu: 'Menu',
           contactUs: 'Contact us',
           nav_button: 'Restaurants',
           nav_content_heading: 'We Love Delicious',
           nav_content_button1: 'Restaurants',
           nav_content_button2: 'Learn More',
           mobile_nav_logo_title: "Maila's Kitchen",
           home_menu_title: "Our Menu",
           content_heading: "We Offer",
           sub_content_heading: "Coffe",
           sub_content_p: "Enjoy freshly brewed coffee made from the finest beans, giving you the perfect energy boost.",
           sub_content_heading_2: "Breakfast",
           sub_content_p2: "Start your day with a healthy and tasty breakfast that keeps you energized throughout the morning.",
           sub_content_heading3: "Lunch",
           sub_content_p3: "Delight in our wide variety of nutritious and delicious lunch options, perfect for a mid-day meal",
           footer_logo_text1: "Maila's",
           footer_logo_text3: "Kitchen",
           footer_text_p: "Discover delicious homemade food made with love. Order now and taste the difference!.",
           footer_nav_recepies: "Recipes",
           footer_nav_learn: "Learn How-To",
           footer_nav_sesonal: "Seasonal Sensations",
           footer_nav_shop:"Shop",
           footer_nav_rules: "Maila's Kitchen. All rights reserved.",
           footer_links_condition: "Terms & Conditions",
           footer_links_privecy: "Privacy Policy",
           about_heading: "About Us",
           about_textSection_heading: "Welcome to Maila's Kitchen",
           about_textSection_p1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
           about_textSection_p2: "lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
           about_textSection_heading2: "Lunch offer on weekdays from 10:00 a.m. to 3:00 p.m",
           about_textSection_p: "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
           about_button: "Learn More",
           contact_section_p: "Contact us",
           placeName: "Name",
           placeEmail: "Email",
           placeContact: "Contact",
           placeDesc: "Description",
           submit_button: "Submit"
        }
    },
    fi: {
        translation: {
            home: 'Etusivu',
            about: 'Tietoa meistä',
            menu: 'Ruokalista',
            contactUs: 'Ota yhteyttä',
            nav_button: 'Ravintolat',
            nav_content_heading: 'Rakastamme herkullista ruokaa',
            nav_content_button1: 'Ravintolat',
            nav_content_button2: 'Lue lisää',
            mobile_nav_logo_title: "Mailan Keittiö",
            home_menu_title: "Meidän menu",
            content_heading: "Tarjoamme",
            sub_content_heading: "Kahvi",
            sub_content_p: "Nauti vastapaahdetusta kahvista, joka on valmistettu parhaista pavuista ja antaa sinulle täydellisen energiaboostin.",
            sub_content_heading_2: "Aamiainen",
            sub_content_p2: "Aloita päiväsi terveellisellä ja maukkaalla aamiaisella, joka pitää sinut virkeänä koko aamun.",
            sub_content_heading3: "Lounas",
            sub_content_p3: "Nauti laajasta valikoimasta ravitsevia ja herkullisia lounasvaihtoehtoja, jotka sopivat täydellisesti keskipäivän aterialle.",
            footer_logo_text1: "Mailan",
            footer_logo_text3: "Keittiö",
            footer_text_p: "Löydä herkullinen kotiruoka, joka on valmistettu rakkaudella. Tilaa nyt ja maista ero!",
            footer_nav_recepies: "Reseptit",
            footer_nav_learn: "Opi tekemään",
            footer_nav_sesonal: "Kausiluonteiset herkut",
            footer_nav_shop: "Kauppa",
            footer_nav_rules: "Mailan Keittiö. Kaikki oikeudet pidätetään.",
            footer_links_condition: "Käyttöehdot",
            footer_links_privecy: "Tietosuojakäytäntö",
            about_heading: "Tietoa meistä",
            about_textSection_heading: "Tervetuloa Mailan Keittiöön",
            about_textSection_p1: "Lorem Ipsum on paino- ja taittoalan malliteksti. Lorem Ipsum on ollut alan vakioteksti jo 1500-luvulta lähtien, kun tuntematon painaja kokosi kirjasimia ja sekoitti niitä luodakseen kirjatyypin näytekirjan. Se on selvinnyt paitsi viisi vuosisataa myös harppauksen sähköiseen taittoon, säilyttäen olennaisesti muuttumattoman muotonsa. 1960-luvulla se tuli suosituksi Letraset-arkkien myötä, jotka sisälsivät Lorem Ipsum -tekstiä, ja myöhemmin sitä käytettiin tietokonepohjaisessa julkaisuohjelmistossa, kuten Aldus PageMakerissa, joka sisälsi Lorem Ipsum -versioita.",
            about_textSection_p2: "Lorem Ipsum on ollut alan vakioteksti jo 1500-luvulta lähtien, kun tuntematon painaja kokosi kirjasimia ja sekoitti niitä luodakseen kirjatyypin näytekirjan. Se on säilynyt tähän päivään asti ja on edelleen käytössä graafisessa suunnittelussa ja julkaisualalla.",
            about_textSection_heading2: "Lounastarjous arkisin klo 10.00–15.00",
            about_textSection_p: "Lorem Ipsum on paino- ja taittoalan malliteksti. Lorem Ipsum on ollut alan vakioteksti jo 1500-luvulta lähtien, kun tuntematon painaja kokosi kirjasimia ja sekoitti niitä luodakseen kirjatyypin näytekirjan.",
            about_button: "Lue lisää",
            contact_section_p: "Ota yhteyttä",
            placeName: "Nimi",
            placeEmail: "Sähköposti",
            placeContact: "Yhteystiedot",
            placeDesc: "Kuvaus",
            submit_button: "Lähetä"
        }
    }
}


i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ["localStorage", "navigator"],
            caches: ["localStorage"],
        }
    });

    export default i18n;