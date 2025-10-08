# Photo Gallery App (Ionic/Angular)
la photo gallery est une application mobile permet de prendre des photos, de les afficher dans une galerie et de les sauvegarder localement sur l’appareil.
cette application est développée avec Ionic + Angular et utilise Capacitor pour accéder à la caméra et Filesystem pour stocker le  fichiers.

## Fonctionnalités de l'application
- Prendre une photo avec la caméra du téléphone
- Sauvegarder la photo dans le stockage local (Filesystem)
- Afficher les photos dans une galerie (Tab2)
- Supprimer une photo avec un menu d’options (ActionSheet)
- diponibilité : les photos restent disponibles après la fermeture de l’application grâce à Preferences
## Technologies utilisées
- ionic framework
- agular
## Installation du projet
  1.Cloner le projet :
  ```
  git@github.com:Hounaida-ali/photo-gallery.git
  cd photo-gallery
```

  2.nstaller les dépendances :
  ```
  npm install
  ```
  3.Ajouter Capacitor pour Android/iOS
  ```
  ionic capacitor add android
  ionic capacitor add ios
```

  4.Lancer l’application dans le navigateur :
  ```
  ionic serve
```
  
## Guide d'Utilisation
- Cliquer sur le bouton pour prendre une photo
- La photo est ajoutée à la galerie immédiatement
- Cliquer sur une photo pour supprimer ou annuler via l’ActionSheet
- Les photos sont sauvegardées automatiquement et disponibles après redémarrage de l’app
## Présentation de l’interface de l’application
### Écran principal (Tabs)
L’application utilise un système d’onglets (Tabs) :
- Tab1 : (optionnel) pourrait contenir des fonctionnalités supplémentaires
- Tab2 : Galerie de photos (principal)
- Tab3 : (optionnel) autre page ou profil
<img width="444" height="897" alt="Capture d’écran du 2025-10-08 16-19-05" src="https://github.com/user-attachments/assets/96879fa8-4e31-4bee-b5af-db55fa977b0e" />
