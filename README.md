Salut à vous, voici mon projet pour Stockoss.

Alors pour commencer, je ne pense pas que ce soit faisable d'une façon "propre" et belle en 3/4h. 
Vous avez mentionnez de faire le test de façon fonctionnelle, s'agissant d'un poste de front, j'ai donc mis le minimum de mise en page. :)
Pour être honnête j'ai du mettre 6h, pas à fond évidemment et en incluant le temps de réflexion. Il reste tout le coté "temps", que j'ai préféré ne pas focus pour être un peu dans les créneaux et ne pas chercher à aller trop loin. 

J'utilise donc les hooks, notamment le useContext et le useReducer de React pour esquiver tout les states possibles, car qu'on se le dise la gestion des states dans React peut vite nuire au framework lui même(le rendre trop long, mal écrit, et surtout c'est pour avoir une sorte de BDD, en one lifecycle). 

Je n'ai pas utilisé le LocalStorage, j'aurais pu pour gérer le stockage des ressources par exemple.
J'ai aussi intégré Typescript, React hook form, Material UI. 
Je suis encore un petit jeune coté Typescript, mais j'ai évidemment compris les principales utilisations pour typer javascript. 
J'avoues bien aimé la dernière version de Matérial UI, car je travailles aujourd'hui sur React admin qui utilise MUI mais une ancienne version et que je trouve vieillissante.

Donc voici ma vue d'ensemble sur cette idée de Foobartory, il suffit juste de cliquer sur les boutons pour miner, switch quand il y a besoin de ressource (pour miner du foobar par exemple), les boutons seront disabled tant que les conditions nécessaire ne seront pas remplies pour la création de la resource.

J'avoues avoir eu un problème de conception et de logique sur la création des timers, laissant cette partie de coté pour finir le test.


Pour lancer le projet après l'avoir cloné, il suffit d'installer les dépendances avec un Yarn install ou en passant avec npm, et puis de faire un yarn start après l'installation des dépendances.

Je n'ai pas mis en place les tests, mais je connais très bien l'environnement de test en utilisant jest avec react testing library de façon journalière. 