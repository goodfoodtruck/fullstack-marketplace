
# fullstack-marketplace

Ce dépôt a été réalisé dans le cadre d'un test technique.

Il est coupé en deux applications différentes : 
- Le client dans le dossier **app-marketplace**
- Le back-office dans le dossier **test-marketplace**


## Installation

Après avoir cloné, les deux applications nécessitent une installation de leurs paquets. Se placer dans chacun des deux dossiers et rentrer la commande suivante :

```bash
 npm install
```



## Run Locally

Pour lancer le **back**, rentrer la comande suivante :
```bash
 npm run rev
```

Pour lancer le **client**, rentrer la commande suivante :
```bash
 npm start
```


## Serveur

Le serveur (**back**) est une API développée avec Express.js. Il est relié à une base de données locale (`database.sqlite`) et opère sur celle-ci à la réception de requêtes pré-configurées.

Il génère également un back-office en page web, qui permet d'administrer les produits ainsi que de les créer.

L'adresse de l'API est par défaut : `http://localhost:3007`

Vous pouvez accéder au **back-office** sur la page : `http://localhost:3007/products/admin`

### Routes disponibles :
#### Panier
Créer un panier

`http://localhost:3007/cart/`

Récupérer un panier existant à l'aide de son id

`http://localhost:3007/cart/:id`

Lister les Items d'un panier

`http://localhost:3007/cart/:id/items`

Rendre le panier checked_out

`http://localhost:3007/cart/:id/checkout`

#### Item
Récupérer ou créer un Item (si inexistant) à l'aide d'un id de panier, d'un id de produit et de la quantité voulue

`http://localhost:3007/items/:cartId/:productId/:quantity`

## Client

Le client est une application développée avec React.js. Elle s'occupe d'afficher le catalogue de produit, de choisir la quantité de produit voulue et de commander le panier.

Elle est reliée avec le **back** avec des requêtes pré-configurées pour pouvoir afficher ses informations et intéragir avec les base de données.

### Panier
Le panier côté client est enregistré sous forme d'identifiant (`cartId`) sur le navigateur localement à l'aide de la Web Storage API. 