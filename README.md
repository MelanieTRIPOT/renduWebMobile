# renduWebMobile

## Melanie TRIPOT

### I - Workbox

1. liste des fonctionnalités offertes: 
- gestion du cache => 2 stratégies de mise en chache voir quesiton 2
- 
- 

2. Méthodes de cache et utilisations possibles

networkFirst : essaye de lancer la requête en mode connecté. si reponse garde la reponse pour la reservir si la meme requetes est passé plus tard et que le time out pete

cacheFirst : si la ressource est dans le cache elle est directment renvoyée. Sinon on charge la ressource.

cacheOnly : on ne regarde que dans le cache. Si la ressource n’est pas là nous avons une erreur. 

networkOnly :comportement classique -> la requete va direectement sur le reseau erreure si pas de reponse

staleWhileRevalidate : on regarde dans le cache et sur le network, la reponse du cache est chargée puis remplasé quand celle du reseau arrive



3. uses cases à intégrer dans le projet doctoliberal

### II - Page d'incitation à l'installation de PWA
 
1 ) Créer un composant (React / Vue / angular / HTML+CSS) pour inciter et surtout guider un utilisateur à installer la PWA
    - navigateur nécessaire
    - compatibilité du device
    - capacités supplémentaires, etc...
2 ) Expliquer en quoi il serait interessant de mettre en place une telle page

