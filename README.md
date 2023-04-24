Så går det till att använda mitt API:

1. Du ska stå i rooten och installera alla npm paket med npm istall
2. Sedan flyttar till mappen strapi och installera alla paket där också
3. Efter det ska du starta både strapi och express server genom att öppna två terminal och skriva npm start. Se till att du står i rätt mapp i varje terminal.
4. Sedan startar du POSTMAN. Serveradress per default http://localhost:8008 som möter dig med information att det är en startsida och att du inte är inloggad
5. Som icke inloggad person kan du ta fram all information om audios,computers,television och mobiles genom att använda endpoints:
/audios
/computers
/television
/mobiles
6. För att kunna göra alla CRUD operationer ska du vara registrerad. Det gör du genom att använda endpont 
http://localhost:8008/users/register
och skicka en json object i format:
{
    "username":"emil",
    "password":"test321"
}
7. När du har registrerad dig går du vidare till
http://localhost:8008/users/login
och ckiacka samma json objekt som var vid registreringen
{
    "username":"emil",
    "password":"test321"
}
I response får du en JWT nyckel som du ska använda i autorisation vid varje CREATE/UPDATE/DELETE operationer genom att skriva in det i headers. 
alla endpoints:
http://localhost:8008/mobiles
http://localhost:8008/mobiles/id
http://localhost:8008/computers
http://localhost:8008/computers/id
http://localhost:8008/audios
http://localhost:8008/audios/id
http://localhost:8008/television
http://localhost:8008/televisions/id
8. För att skapa ett nytt objekt, du ska skicka JSON objekt i format:
{
    "data":{
        "name":"name",
        "description":"info,
        "maker":"maker",
        "price": price(number),
        "effect": effect(number)
    }
}
för visa objekt sista egenskapet varieras. Du ska kolla hur interfaces ser ut för att skicka rätt objekt. 

