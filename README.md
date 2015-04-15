# Correction du TP Noté

##Connection
La connection est effectué dans `connection.js` qui est appelé uniqument par `bin/www`

##Schéma et modèle
Le schema est définit dans `models/unicorns.js`

##Service
Les opération de backend sont mises dans un service `models/unicornsServices.js`, qui enrobe les opérations sur le modèle

##Router
L'application de CRUD des licornes est dans son propre routeur `routes/unicorns.js`