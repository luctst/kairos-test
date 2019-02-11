# Kairos-test
*Liste des personnages marvel.*

## Features:
* [API marvel](https://developer.marvel.com/)
* JavaScript ES6.
* ReactJs.
* Webpack.
* Babel.
* Prettier.
* Eslint.
* Bootstrap.
* Sass.

## Installation:
Forkez le projet et utilisez la commande:
```
git clone git@github.com:luctst/kairos-test.git
```
Ensuite utilisez `npm install` pour installer toutes les dépendances.

Pour lancer votre application rendez-vous à la section **Getting started > Lancer l'application**.

## Getting started:
*Comment se déroule l'application*

Les fichiers sur le serveur sont situés dans le dossier `docs` ils sont minifiés pour optimiser l'application.

Les fichiers de développement sont dans le dossier `src`, voiçi sa structure:

* Assets - contient les dossiers `img` et `scss`.
* Model - contient les fichiers pour gérer les différents models.
* View - contient les fichiers contenant les différents composants qui gérent l'interface.
* Le fichier `app.js` est le controller il contient le composant `App` qui est le composant principal et gére l'état de notre application, c'est également ce fichier qui sert de point d'entrée à webpack et sera bundlé pour `bundle.js`.
* Le fichier `index.html` est le fichier HTML principal.

### Lancer l'application:
Pour lancer votre application en local et pouvoir la tester utilisez la commande:
```
npm start
```
Webpack va alors lancer un serveur local sur lequel vous pourrez commencer à développer votre application. Pour cela webpack exécute plusieurs étapes:

* Bundle app.js - exécute tous les imports listés dans le fichier et utilise babel pour transpiler le code en un code accessible sur tous les navigateurs web.
* Prends le fichier `index.html` et l'utilise comme template avec `html-wepack-plugin` pour le placer dans le dossier `docs` avec tous les fichiers nécessaires comme `bundle.js`, `style.css`.
* Convertit le fichier `main.scss` en un fichier `style.css` et le place dans le dossier `docs`.

### build l'application:
Une fois que le code est prêt à être envoyé sur le serveur utilisez la commande:
```
npm run build
```
En interne webpack passe en mode `production` qui a pour effet de minifier les fichiers et les placent dans le dossier `docs` qui peuvent maintenant être envoyés sur un serveur.

## Authors:
* **Tostée Lucas** - Follow me on [Twitter](https://www.twitter.com/@ltostee), personal website [Tostée Lucas](https://www.lucas-tostee.com).
