## Deployment Frontend

Detta är min frontend deployment som är kopplat till mitt repo!
[Frontend Deployment](golden-torrone-1b2280.netlify.app/)  

## Deployment Backend 

Detta är min backend deployment som är kopplat till min frontend deployment och mitt repo!
[Backend Deployment](https://u06-fullstack-recipe-app-denjinm.onrender.com)

## Kom igång med projektet

Kom igång med att starta projektet som gjorts med hjälp av Angular CLI version 17.2.3!

Klona projektet från GitHub:
Börja med att kopiera länken till repo:t. Nu ska du in i terminalen och befinna dig i rätt mapp där du vill spara projektet, och skriva följande:
“git clone https://github.com/chas-academy/u06-fullstack-recipe-app-DenjinM.git”

När detta är gjort och projektet har öppnats i VScode går de in i mappen där projektet är byggt, vilket är Tasty. Du kan högerklicka på mappen och trycka på "Open in integrated terminal". När du väl är inne i terminalen i mappen Tasty så kan du köra kommandot ```ng serve```.

Innan du sätter igång får du se till att ha det senaste Node installerat. Om inte kan du göra det genom kommandot ```npm install``` i terminalen. 

För att bygga upp projektet så skriver du in kommandot ```ng build``` i terminalen. 

Här är några steg för att komma åt databasen när du öppnar din container:

1. Kör igång devcontainern och gå sedan in i terminalen och skriv kommandot cd för att komma in i rätt mapp(u06-fullstack-recipe-app-DenjinM). 
2. Kör `composer update`
3. Ändra .env.example filen till .env
4. Kör `php artisan key:generate`
5. Kör `php artisan migrate` (skapa databasen)
6. Kör `php artisan db:seed`
7. Kör `php artisan serve`

Testa sedan de olika requesten du får tillgång till genom att importera filen: "Insomnia_U06_requests.json" till er Insomnia klient. Ni kan behöva registrera er till Insomnia (t.ex. med Github kontot) för att kunna importera en fil.

När ni testar API:et kommer ni att behöva plocka ut de bearer tokens ni får vid inlogg eller registrering och klistra in i Bearer fältet för att kunna få åtkomst till de API vägar som ligger bakom authentication. 