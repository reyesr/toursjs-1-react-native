
Faire du mobile
- Webview (Cordova, etc)
- React Native, Native Script
- Natif IOS / Android
- Xamarin (C#)

Le périmètre
- skillset web / tooling web
- Look natif / composants de la plateforme
 - Factorisation du code entre plateformes

Toolé de base
- react-native start run-android run-ios
- build de prod: suivant les plateformes
- Babel inside. .babelrc customisable
- Pas prévu pour être utilisé par un autre outil de build, uniquement du CLI
- Basé sur NPM

Layout
- Flexbox

OpenSource: Facebook joue le jeux à moitié
- OpenSource pas un état d'esprit naturel chez FB
- License/Patent
- Vrai répo: Mercurial privé chez FB, synchronisé régulièrement
- Ne corrige vraiment que ce qui impacte FB dans ses applications (
  mais point positif: FB utilise RN en interne ! BAM google qui n'utilise pas angular

Qui utilise RN
Showcase https://facebook.github.io/react-native/showcase.html

Ne tourne pas dans une webview
-> pas de HTML (-> pas de bootstrap)
-> pas de DOM (-> aucune lib JS qui se base dessus)
Par contre
-> Tourne sur JavascriptCore (du projet WebKit), sauf en debug dans chrome (V8)
 . + 4Mo sur android
 . Pas de JIT sur IOS


DEV
 -> plein de lib Node fonctionnent (tant que pas d'appel à l'API)
   ie npm install left-pad
-> React -> libs et connaissances react fonctionnent

Architecture
- Bridge JavascriptCore <--> java/c++/objc
 (JS engine pluggable)
-  protocole de comm en JSON,
- Requêtes batchés
- ES6/7 = babel + polyfill


Performance
- JS donc pas de création de Thread
- Layout Thread (shadow queue: process le
- Main Thread (UIKit)
- JS Thread
- Affichage des frames
- Très mauvaise gestion du console.log pour les perfs

Fonctionnement virtual dom
- React -> virtual dom
- virtual dom -> composants natifs

API Android et IOS
- Beaucoup de classes en commun
- Des classes différentes sur les éléments spécifiques à la plateforme (PickerIOS, etc)
- Une API UI globalement pauvre
- Externalise tout ce qui peut ne pas être dans le core
- ListView complexe à appréhender mais performante

Exemple de getting started
 react-native init
 react-native run-android ou run-ios
 works

Exemple de code
- Hello World - counter

User Experience pour le dev
- Mode watch, hot reload
- ES6/ES7
- Layout Flexbox
- Très simple
- Debugger/console accessible sur emulateur ou device, via USB ou Wifi, très facilement

App Navigation
- Le point noir de RN
- Navigator (deprecated) / Navigator IOS (trop restrictif)
- Experimental Navigation

App Stockage
- AsyncStorage. Rien de plus.
- Sqlite en plugin (marche tres bien)

Animations
- Proche des perfs natives

Limitations
- Drawing, GL
- Webview mal bridgée, mal documentée

