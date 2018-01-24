Terminálból bekérjük a user felhasználó nevét. Vizsgálni kell, hogy csak létező usernevet adhat meg.
Majd megkérdezzük, hogy a posztjait, vagy a teendőit szeretnénk látni. Itt választania kell lehetőségek közül, pl 1 = posztok, 2 = teendők

A választásnak megfelelően lekérdezzük az entitásokat.

Ezután a kapott adatokat kimentjük egy fileba, amit a felhasználónévvel mentünk el. Posztoknál a title + body, todoknál pedig a title -t.
Ha todokat mentünk, akkor a file lső sorában összegezzük, hogy mennyi elvégzett, és mennyi el nem végzett todo tartozik a userhez.
Ha tartozik már a userheez file, akkor sorszámozzuk, pl.:

username: paul

fileok:
paul.txt
paul-1.txt
paul-2.txt
