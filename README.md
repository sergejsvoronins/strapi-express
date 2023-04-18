Inlämningsuppgift
Examinerande Inlämningsuppgift: Integration med Strapi
Ditt uppdrag är att bygga ett API i Node med Express och integrera det med Strapi. För att detta ska fungera behöver du skapa fyra samlingar (collections) i Strapi: "computers", "mobile_devices", "audio_systems" och "televisions". Här följer en beskrivning av varje samling och vilka fält de bör innehålla:

computer: namn (text), beskrivning (text), tillverkare (text), pris (float) och processor (text)


mobile: namn (text), beskrivning (text), tillverkare (text), pris (float) och skärmtyp (text)


audio_device: namn (text), beskrivning (text), tillverkare (text), pris (float) och effekt (integer)


television: namn (text), beskrivning (text), tillverkare (text), pris (float) och skärmstorlek (integer)

Du behöver sedan skapa några produkter i varje samling, det räcker med 1-4 i varje.

Ditt eget API som anropar Strapi kan du döpa till vad du vill men vi kommer referera till API-et som elektronik-APIet fortsättningsvis, nedan följer en lista med resurser som ditt API ***måste*** innehålla:

/computers - kopplas till computer i Strapi
/mobiles - kopplas till mobile i Strapi
/audio - kopplas till audio i Strapi
/televisions - kopplas till television i strapi

Som konsument av Elektronik-APIet ska man kunna göra GET, POST, PUT och DELETE för varje resurs.

För VG:

För att uppnå högre betyg ska du även skapa en databas för din egen server som lagrar användare och autentiseringsinformation. När användaren har registrerat sig ska deras användarnamn och lösenord sparas i databasen.

Du kommer behöva lägga till två resurser:

/register
/login

När man registrerar sig räcker det med "user_name" och "password" som fält.

Skapa ett middleware som kollar om en användare är inloggad, om den inte är det så ska APIet svara med en status som berättar för klienten att anropet inte är tillåtet utan autentisering. Som konsument av Elektronik-APIet ska jag kunna göra GET utan att ha loggat in, men alla andra operationer ska låsas bakom autentisering. Enbart inloggade användare ska alltså kunna göra en POST, PUT eller DELETE.

För uppgiften räcker det med att göra dina Strapi collections publika, du behöver ***inte*** implementera autentisering via Strapi-API:et det räcker med autentisering via ditt API.

Inför inlämningen:

Skriv din kod med hjälp av Express (det är valfritt att köra JS eller TS), om du använder en databaslösning för någon del av uppgiften ska du använda SQLite.

Skapa ett projekt där du samlar koden för
1. Ditt eget API
2. Strapi

Så projekstrukturen kan se ut så här:

/examination
-/src
--/index.ts
--/m.m.
-/strapi

Lägg upp din kod i ett github-repo och länka till den när du lämnar in uppgiften.

Slutligen ska du inkludera en README.md där du berättar för mig, steg för steg hur jag använder ert projekt.

Har ni implementerat autentisering får ni berätta hur jag autentiserar mig, t.ex. via en JWT som jag får återanvända mig av i alla Postman-anrop.
