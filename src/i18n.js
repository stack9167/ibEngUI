import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        missionVission: "MISSION AND VISION",
        theBrainBehind: "the brain behind IB ENG",
        meetTheLeaders: "Meet the leaders",
        homeVisionTitle: "IB VISION",
        homeContainerOneShow: "Show",
        homeContainerOneShowLess: "Less",
        homeContainerOneShowMore: "More",
        homeMissionTitle: "IB MISSION",
        serviceHeading: "What  We Do",
        serviceHeadingSecondary: "Our Services",
        learnMore: "Learn More",
        phoneLabel: "Phone",
        emailLabel: "E-Mail",
        officeLabel: "Office address: ",
        officeAddressValue: "Wadi Elhaj St. Nazareth, Israel",
        btnSendLabel: "Send",
        nameLabel: "Your Name",
        footerEmailLabel: "Email Address",
        footerMessageLabel: "Your Message",
        socialMediaLabel:
          "Follow us on social media to stay updated with our latest projects, industry insights, and company news.",
        missionVissionHeading: "MISSION AND VISION",
        visionLabel: "IB VISION",
        visionTextOne:
          "At IB ENG, we are your one-stop-shop for all aspects of the construction process. We offer a full range of services that start with sourcing and checking the potential of the land, all the way through planning, management, construction, and even interior design.",
        visionTextTwo:
          "Our team of professionals is there for you every step of the way, providing customized and creative engineering solutions that meet your specific needs. We are committed to staying up-to-date with the latest technology and using cutting-edge tools like Building Information Modeling (BIM)to streamline the construction process and increase efficiency.",
        visionTextThree:
          "Our approach is focused on finding creative solutions that optimize both the construction and operational aspects of each project, ultimately saving our clients time and money. ",
        visionTextFour:
          "At IB ENG, we take pride in our ability to provide comprehensive and personalized service to each and every one of our clients. Whether you are looking to build a new home, renovate an existing building, or undertake a commercial project, we are here to help you achieve your goals.",
        missionTitle: "IB MISSION",
        missionTextOne:
          "At IB Engineering, our mission is to serve as your comprehensive partner in construction, offering a full spectrum of services that seamlessly guide your projects from inception to realization. We embark on this mission by beginning with thorough land assessment, ensuring that your chosen site aligns perfectly with your vision",
        missionTextTwo:
          "From there, our dedicated team employs the latest advancements in technology to craft meticulous plans that optimize efficiency and precision.",
        missionTextThree: `Our commitment extends beyond the drawing board, we actively manage every aspect of your project,
        keeping a keen eye on both construction and operational elements.`,
        missonTextFour:
          "At IB Engineering, we take immense pride in offering personalized service and expertise tailored to your unique needs. Whether you aspire to build a new home, breathe new life into an existing structure or embark on a commercial venture, we are your perfect partner, ready to transform your construction dreams into reality",
        whatWeDoTitleOne: "Build.",
        whatWeDoTitleTwo: "Solve.",
        whatWeDoTitleThree: "Evolve.",
        whatWeDoContainerTitle: "PLANNING SERVICES",
        whatWeDoContainerOne:
          "Our Planning Services offer comprehensive support for both developers and individuals seeking to build their dream projects.",
        whatWeDoContainerTwo:
          "We provide a team of expert planning engineers who can oversee every aspect of your project.",
        whatWeDoContainerThree:
          "From conceptualization to final plans, our professionals ensure that all necessary engineering components are meticulously designed, making your vision a reality.",
        whatWeDoContainerFour: "BUILDING INSPECTION",
        whatWedoContainerFive: `As part of our commitment to planning and building management, we offer Building Inspection services that ensure the highest standards of construction quality.`,
        whatWedoContainerSix: `Our qualified inspectors meticulously assess every detail of your project to guarantee that it meets industry regulations and your expectations.`,
        whatWedoContainerSeven: `With our expertise, you can confidently achieve superior building quality`,
        whatWedoContainerEight: "INTERIOR DESIGN",
        whatWedoContainerNine:
          "Transform your space into a masterpiece with our dedicated Interior Design department.",
        whatWedoContainerTen:
          "Our team of creative experts collaborates with you to bring your design aspirations to life.",
        whatWeDoContainerEleven:
          "Whether it's a residential or commercial project, our Interior Design services promise to create a harmonious and captivating environment that aligns with your vision.",
        whatWeDoTwelve: "ENGINEERING CONSULTATION",
        whatWeDoContainerThirteen:
          "Tap into our wealth of experience with our Engineering Consultation services.",
        whatWeDoContainerFourteen:
          "Whether you're embarking on a new project or seeking insights to enhance existing plans, our consultants offer expert guidance.",
        whatWeDoContainerFifteen:
          "From project conceptualization to cost analysis, our consultancy empowers you to navigate your project successfully and achieve your objectives.",
        theMindBehindeTitleOne: "THE MIND BEHIND",
        theMindBehindeTitleTwo: "IB ENG",
        theMindBehindSubTitleOne:
          "Our founder is a highly experienced and qualified construction engineer, with a Master's degree in building engineering and specialized expertise in earthquakes and traffic and transportation engineering. Registered in the register of engineers and architects since 1979,our founder has served as the city engineer of Nazareth from 1992 to 2016 and has been a member of steering committees on behalf of the Ministry of Transportation and the Ministry of Construction and Housing.",
        theMindBehindSubTitleTwo:
          "Our founder has also been a key participant in teams for editing instruction files for planning public transportation routes, mass transit systems in the Haifa metropolis, transportation master plans for the Haifa and northern districts, and other major infrastructure projects.",
        theMindBehindSubTitleTHree: `With decades of experience in planning, managing, and supervising projects in the public, residential, commercial, and infrastructure sectors, our founder has established a reputation for excellence in the industry. Our founder has always been passionate about his work in the field of engineering and construction.`,
        theMindBehindSubTitleFour: `Engineering Excellence, Forging Tomorrow's Innovation Today, in the Heart of Israel.`,
        theMindBehindSubTitleFive: `He has a strong focus on creativity, efficiency, and customer satisfaction. Additionally, our founder has a diverse set of hobbies and interests, including hiking, photography, and gardening. With over four decades of experience in the industry, our founder has a reputation for innovative solutions and a deep understanding of complex construction projects.`,
        theMindBehindSubTitleSix: `He has served as the city engineer of Nazareth and has been involved in multiple steering committees for the Ministry of Transportation and the Ministry of Construction and Housing. Our founder is committed to staying up-to-date with the latest advancements in technology and software in order to provide the highest quality services to our clients. He takes a holistic approach to projects, considering not only the construction aspect but also the functional and operational aspects.`,
        theMindBehindSubTitleSeven: `Our founder is passionate about passing on his knowledge and experience to the next generation of engineers and construction professionals. He has been involved in training and mentoring programs, and is dedicated to creating a legacy of excellence and professionalism in the industry.`,
        teamTitle: "MEET THE TEAM",
        leaderOneMainText: "Development Department Manager",
        leaderTextOne:
          "A dynamic professional, serves as the Business Development Department Manager at IB Engineering",
        leaderTextTwo:
          "With a diverse educational background, including a bachelor's degree in law and business administration from Reichman University and a master's degree in business administration specializing in real estate and appraisals, Alaa brings a unique blend of skills to the team.",
        leaderTextThree:
          "As a serial founder, entrepreneur, and VP of sales, he has played pivotal roles in several successful companies. His visionary leadership and extensive experience contribute significantly to IB Engineering's growth and success.",
        leaderTwoMainText: "Head of Planning Department",
        leaderTextTwoOne:
          "Is a rising star at IB ENG. Started as an intern, Today he is a licensed engineer, he honed his skills under our founder's guidance. ",
        leaderTextTwoTwo:
          "His youthful energy and extensive experience drive our planning department's commitment to excellence, ensuring that each project is meticulously planned and executed with precision. ",
        leaderTextTwoThree:
          "Mohammad's visionary leadership and collaborative. Approach inspire our team to achieve new heights in the world of construction planning",
        leaderThreeMainText: "Head of Interior Design Department",
        leaderTextThreeOne:
          "As the dedicated leader of our Interior Design Department, Rawan Beshara Sabah brings a wealth of expertise to IB Engineering.",
        leaderTextThreeTwo:
          "A distinguished alumna of the Technion with a degree in civil engineering, specialized in structures, and honored in interior design, Rawan has been a registered engineer and architect since 2009.",
        leaderTextThreeThree:
          "With over 15 years of experience, she has been the guiding force behind numerous construction and interior design projects, particularly in residential towers across central and northern regions.",
        leaderTextThreeFour:
          "Rawan's passion for art, fashion, and a discerning taste infuse her work with creativity and innovation, elevating every project to new heights of excellence.",
        protfoliHeadingOne: "National Leader in",
        protfoliHeadingTwo: "Engineering",
        protfoliSubHeadingOne: "PORTFOLIO",
        protfoliSubHeadingTwo: "Our Projects",
        whatOurClientSays: "What our clients say",
        contactUsTitle: "Get in Touch",
        contactSubTitleOne:
          "Have a specific inquiry or want to discuss a potential project?",
        contactSubTitleTwo: `Fill out the form when you click on “Contact Us” button, and one of our representatives will get back to you promptly. 
        We appreciate your interest in IB Engineering, and we look forward to working with you to turn your construction and engineering visions into reality.`,
        contactUsBtnText: "Contact Us",
        allRightsReserved: "All Rights Reserved",
        contactUsTitleTwo: "Contact",
        contactInputName: "Name",
        contactInputEmail: "E-mail",
        contactInputMobile: "Phone",
        contactInputMessage: "Message",
        contactFormError: "All feilds is required !",
        contactNameRequired: "Name is required !",
        contactEmailRequired: "Email is required !",
        contactNotEmailRequired: "Not an Email ",
        contactMessageRequired: "Message is required !",
      },
    },
    he: {
      translation: {
        missionVission: "החזון והמשימה",
        theBrainBehind: "המוח מאחורי",
        meetTheLeaders: "תכירו את המנהיגים",
        homeVisionTitle: " חזון",
        homeContainerOneShow: "הופעה",
        homeContainerOneShowLess: "פָּחוֹת",
        homeContainerOneShowMore: "יותר",
        homeMissionTitle: "משימה",
        serviceHeading: "מה אנחנו עושים",
        serviceHeadingSecondary: "השירותים שלנו",
        learnMore: "למד עוד",
        phoneLabel: "טלפון",
        emailLabel: "דואר אלקטרוני",
        officeLabel: "כתובת משרד",
        officeAddressValue: "ואדי אלחאג' רח׳ נצרת, ישראל",
        btnSendLabel: "לִשְׁלוֹחַ",
        nameLabel: "השם שלך",
        footerEmailLabel: "כתובת דול",
        footerMessageLabel: "ההודעה שלך",
        socialMediaLabel:
          "עקבו אחרינו ברשתות החברתיות כדי להישאר מעודכנים בפרויקטים האחרונים",
        missionVissionHeading: "החזון והמשימה",
        visionLabel: "חָזוֹן",
        visionTextOne:
          "ב- איי.ביי הנדסה, אנו החנות הOne-Stop-Shop שלך לכל ההיבטים של תהליך הבנייה. אנו מציעים מגוון רחב של שירותים המתחילים באיתור ובדיקת הפוטנציאל של הקרקע, לאורך כל הדרך באמצעות תכנון, ניהול, בנייה ואפילו עיצובהפנים",
        visionTextTwo: `צוות המקצוענים שלנו עומד לרשותכם בכל שלב, ומספק פתרונות הנדסיים מותאמים ויצירתיים העונים על הצרכים הספציפיים שלכם`,
        visionTextThree: `הגישה שלנו מתמקדת במציאת פתרונות יצירתיים המייעלים הן את הבנייה והן התפעולית היבטים של כל פרויקט, בסופו של דבר חוסך ללקוחותינו זמן וכסף.`,
        visionTextFour: `ב, אנו גאים ביכולתנו לספק שירות מקיף ומותאם אישית לכל אחד ואחד
        אחד מהלקוחות שלנו. בין אם אתם מחפשים לבנות בית חדש, לשפץ בניין קיים או להתחייב
        פרויקט מסחרי, אנחנו כאן כדי לעזור לך להשיג את המטרות שלך.`,
        missionTitle: "משימה",
        missionTextOne: `ב-איי.ביי הנדסה משימתנו היא לשמש שותף מקיף בתחום הבנייה, תוך
        הצעת מגוון שירותים המנחים את הפרויקטים שלך מהרגע הראשון ועד
        להגשמתם. אנו מתחילים את משימה זו בעריכת הערכה יסודית של הקרקע,
        ודואגים שהאתר שבחרת יתאים באופן מושלם לחזון שלך`,
        missionTextTwo: `משם, צוותנו המסור מעסיק את ההתקדמויות העדכניות ביותר בטכנולוגיה כדי ליצור תוכניות מדוקדקות הממקסמות יעילות ודיוק. התחייבותנו נטויה מעבר ללוח השרטוטים, אנו ניהולם באופן פעיל לכל פקטור בפרויקט שלך, תוך שמירה על עין חדה הן על אלמנטים של הבנייה והן על ההיבטים התפעוליים`,
        missionTextThree: `אנו מתגאים באופן עצום בהצעת שירות אישי ומומחיות המותאמים לצרכים הייחודיים שלך`,
        missionTextFour: `בין אם אתה שואף לבנות בית חדש, להנשים חיים חדשים במבנה קיים או להתחיל ביוזמה מסחרית, אנו השותף המושלם עבורך, מוכנים להפוך את חלומות הבנייה שלך למציאות`,
        whatWeDoTitleOne: "לתכנן",
        whatWeDoTitleTwo: "לבנות",
        whatWeDoTitleThree: "להתפתח",
        whatWeDoContainerTitle: "שירותי תכנון",
        whatWeDoContainerOne: `חברתנו מתמחה בתכנון קונסטרוקציה ותנועה, אנו מציעים תמיכה מקיפה ליזמים ויחידים שמטרתם להגשים את החזונות שלהם.`,
        whatWeDoContainerTwo: `צוות מהנדסי התכנון המומחים שלנו מצטיין ביצירת תוכניות בנייה מדוקדקות ועומדות בסטנדרטים הגבוהים של התעשייה`,
        whatWeDoContainerThree:
          "מעבר לתכנון קונסטרוקציה ותנועה אנו מעניקים גם סיוע בהרכבת `כל היועצים הנדרשים לתכנן פרויקט החלומות שלכם.",
        whatWeDoContainerFour: `פיקוח צמוד`,
        whatWedoContainerFive: `כחלק מהמחויבות שלנו לתכנון וניהול בניה, אנו מציעים שירותי פיקוח צמוד לבניה שמבטיחים את הסטנדרטים הגבוהים ביותר של איכות הבנייה`,
        whatWedoContainerSix: `המפקחים המוסמכים שלנו מעריכים בקפדנות כל פרט בפרויקט שלך כדי להבטיח שהוא עומד בתקנות התעשייה ובציפיות שלך.`,
        whatWedoContainerSeven: `עם המומחיות שלנו, אתה יכול להשיג בביטחון איכות בנייה מעולה`,
        whatWedoContainerEight: "עיצוב פנים",
        whatWedoContainerNine:
          "הפוך את החלל שלך ליצירת מופת עם מחלקת עיצוב הפנים הייעודית שלנו",
        whatWedoContainerTen:
          "צוות המומחים היצירתיים שלנו משתף איתך פעולה כדי להחיות את שאיפות העיצוב שלך",
        whatWeDoContainerEleven:
          " בין אם מדובר בפרויקט מגורים או מסחרי, שירותי עיצוב הפנים שלנו יוצר סביבה הרמונית שמתיישרת עם החזון שלך",
        whatWeDoTwelve: "ייעוץ הנדסי",
        whatWeDoContainerThirteen:
          "נצל את הניסיון העשיר שלנו עם שירותי הייעוץ ההנדסי",
        whatWeDoContainerFourteen:
          " בין אם אתה יוצא לפרויקט חדש או מחפש תובנות לשיפור התוכניות הקיימות, היועצים שלנו מציעים הכוונה מומחית",
        whatWeDoContainerFifteen:
          " מהמשגה של פרויקט ועד לניתוח עלויות, הייעוץ שלנו מאפשר לך לנווט בפרויקט שלך בהצלחה ולהשיג את היעדים שלך",
        theMindBehindeTitleOne: "המוח מאחורי",
        theMindBehindeTitleTwo: "איי.ביי הנדסה",
        theMindBehindSubTitleOne:
          "המייסד שלנו הוא המהנדס עיסא בשארה, מהנדס בניין מנוסה ומוכשר ביותר, עיסא בעל תואר שני בהנדסת בניין ומתמחה ברעידות אדמה והנדסת תנועה ותחבורה. רשום בפנקס המהנדסים והאדריכלים משנת 1979, עיסא שימש כמהנדס העיר נצרת בשנים 1992 עד 2016 וחבר בוועדות היגוי מטעם משרד התחבורה ומשרד הבינוי והשיכון",
        theMindBehindSubTitleTwo:
          "עיסא היה גם שותף מרכזי בצוותים לעריכת תיקי הנחיות לתכנון נתיבי תחבורה ציבורית, מערכות הסעת המונים במטרופולין חיפה, תוכניות אב תחבורתיות למחוזות חיפה והצפון ופרויקטים של תשתית גדולים נוספים",
        theMindBehindSubTitleTHree: `עם עשרות שנות ניסיון בתכנון, ניהול ופיקוח על פרויקטים במגזר הציבורי, המגורים, המסחר והתשתיות, עיסא יצר מוניטין של 
        עיסא בשארה תמיד היה נלהב מעבודתו בתחום ההנדסה והבנייה`,
        theMindBehindSubTitleFour: `מצויינות בהנדסה, יצירת חדשנות של מחר מהיום, בלב ישראל`,
        theMindBehindSubTitleFive: ` יש לו התמקדות חזקה ביצירתיות, יעילות ושביעות רצון לקוחות. בנוסף, יש לו מגוון רחב של תחביבים ותחומי עניין, כמו טיולים, סודוקו וגינון. מצוינות 
        עם למעלה מארבעה עשורים של ניסיון בתעשייה, לעיסא יש מוניטין של פתרונות חדשניים והבנה עמוקה של פרויקטי בנייה מורכבים`,
        theMindBehindSubTitleSix: `ע שימש כמהנדס העיר נצרת והיה מעורב במספר ועדות היגוי של משרד התחבורה ומשרד הבינוי 
        המייסד שלנו מחויב להישאר מעודכן עם ההתקדמות העדכנית ביותר בטכנולוגיה ובתוכנה על מנת לספק את השירותים האיכותיים ביותר ללקוחותינו. הוא נוקט בגישה הוליסטית לפרויקטים, תוך התחשבות לא רק בהיבט הבנייה אלא גם בהיבטים התפקודיים`,
        theMindBehindSubTitleSeven: `המייסד שלנו עיסא נלהב להעביר את הידע והניסיון שלו לדור הבא של מהנדסים ואנשי מקצוע בתחום הבנייה. הוא היה מעורב בתוכניות הכשרה וליווי ליצירת מורשת של מצוינות ומקצועיות בתעשייה`,
        teamTitle: "להכיר את הצוות",
        leaderOneMainText: "מנהל מחלקת פיתוח",
        leaderTextOne: "עלאא בשארה, מנהל מחלקת פיתוח עסקי ב-איי.ביי הנדסה",
        leaderTextTwo: `בעל רקע לימודי מגוון הכולל תואר ראשון במשפטים ומנהל עסקים מאוניברסיטת רייכמן ותואר שני במנהל עסקים בהתמחות בנדל"ן ושמאות, עלאא מביא לצוות שילוב מיומנויות ייחודי.`,
        leaderTextThree: `כמייסד סדרתי, יזם וסמנכ"ל מכירות, הוא שיחק תפקידים מרכזיים במספר חברות מצליחות. מנהיגותו בעלת החזון וניסיונו הרב תורמים באופן משמעותי לצמיחתה והצלחתה של איי.ביי הנדסה`,
        leaderTwoMainText: "ראש מחלקת תכנון",
        leaderTextTwoOne:
          "מומחד הוא כוכב עולה ב-איי.ביי הנדסה. החל כמתמחה, היום הוא מהנדס רשוי, הוא חידד את כישוריו בהנחיית המייסד שלנו",
        leaderTextTwoTwo:
          " האנרגיה הצעירה שלו וניסיונו הרב מניעים את המחויבות של מחלקת התכנון שלנו למצוינות, ומבטיחים שכל פרויקט מתוכנן בקפידה ומבוצע בדייקנות",
        leaderTextTwoThree:
          " המנהיגות בעלת החזון והגישה השיתופית של מוחמד נותנת השראה לצוות שלנו להגיע לשיאים חדשים בעולם תכנון הבנייה",
        leaderThreeMainText: "ראש מחלקת עיצוב פנים",
        leaderTextThreeOne:
          "בתור המנהיגה המסורה של מחלקת עיצוב הפנים שלנורואן בשארה סבאח מביאה שפע של מומחיות ל איי",
        leaderTextThreeTwo:
          "ביי הנדסה,בוגרת מכובדת של הטכניון, בעלת תואר בהנדסה אזרחית,",
        leaderTextThreeThree:
          "מתמחה במבנים ותעודה בעיצוב פנים,רואן היא מהנדסת רשומה משנת 2009.",
        leaderTextThreeFour:
          "עם ניסיון של למעלה מ-15 שנים, התשוקה של רואן לאמנות, אופנה מעלה כל פרויקט לשיאים חדשים של מצוינות יצירתיות וחדשנות",
        protfoliHeadingOne: "חברה מובילה",
        protfoliHeadingTwo: "בתחום ההנדסה",
        protfoliSubHeadingOne: "פורטפוליו",
        protfoliSubHeadingTwo: "פרוייקטים",
        whatOurClientSays: "ממליצים עלינו",
        contactUsTitle: "ליצור קשר",
        contactSubTitleOne: `יש לך בירור ספציפי או רוצה לדון בפרויקט פוטנציאלי? מלא את הטופס למטה, ואחד מנציגינו יחזור אליך בהקדם`,
        contactSubTitleTwo: `תודה ששקלת את איי.ביי הנדסה לצרכי התכנון או הבנייה שלך
        . אנו נמצאים כאן כדי להתחבר אליך ולחקור כיצד נוכל לשתף פעולה בפרויקט הבא שלך. בין אם יש לך שאלות, זקוק לסיוע או מוכן להתחיל, אנחנו כאן בשבילך.`,
        contactUsBtnText: `צור קשר`,
        allRightsReserved: "כל הזכויות שמורות",
        contactUsTitleTwo: "צור קשר",
        contactInputName: "שם",
        contactInputEmail: "דואר אלקטרוני",
        contactInputMobile: "טלפון",
        contactInputMessage: "הודעה",
        contactFormError: "כל הטעמים נדרשים",
        contactNameRequired: "נדרש שם",
        contactEmailRequired: "יש צורך במייל",
        contactNotEmailRequired: "לא אימייל",
        contactMessageRequired: "נדרשת הודעה",
      },
    },
  },
});

export default i18n;
