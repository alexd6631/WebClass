# Correction du TP Not�

##Connection
La connection est effectu� dans `connection.js` qui est appel� uniqument par `bin/www`

##Sch�ma et mod�le
Le schema est d�finit dans `models/unicorns.js`

##Service
Les op�ration de backend sont mises dans un service `models/unicornsServices.js`, qui enrobe les op�rations sur le mod�le

##Router
L'application de CRUD des licornes est dans son propre routeur `routes/unicorns.js`