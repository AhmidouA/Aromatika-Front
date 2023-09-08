# categories

​

```js
/**
 * GET /categories - route pour avoir toutes les categories des huiles par famille
 */
router.get(“/categories/:family”, auth.checkToken, categoryController.getAllCategories);
​
/**
 * POST /categories - route pour ajouter une categories des huiles
 *
 */
router.post(“/categories/:family”, auth.checkToken, auth.isAdmin, categoryController.addCategory);
​
/**
 * GET /category route - Pour avoir une categorie des huiles
 *
 */
router.get(“/category/:id”, auth.checkToken, categoryController.getOneCategories);
​
/**
 * PATCH /category - route pour modifier une categorie des huiles
 *
 */
router.patch(“/category/:id”, auth.checkToken, auth.isAdmin, categoryController.updateCategory);
​
​
/**
 * DELETE /categories - route pour supprimer une categories des huiles
 * Pour la méthode DELETE il est important d’inclure
 * l’ID car nous voulons supprimer une ressource existante dans la base de données qui a un ID.
 */
router.delete(“/category/:id”, auth.checkToken, auth.isAdmin, categoryController.deleteCategory);
​
```

​
​
​
​
​

# Huile

​

```js
/**
 * GET /essential route - Pour avoir une huiles
 *
 */
router.get(“/essential/:id”, oilController.getOilById);
​
/**
 * POST /essential - route pour ajouter une huiles
 *
 */
router.post(“/essential”, auth.checkToken, auth.isAdmin, oilController.createOil);
​
/**
 * PATCH /essential - route pour modifier une huiles
 *
 */
router.patch(“/essential/:id”, auth.checkToken, auth.isAdmin, oilController.updateOilById);
​
/**
 * DELETE /essential - route supprimer une huile
 * Pour la méthode DELETE il est important d’inclure
 * l’ID car nous voulons supprimer une ressource existante dans la base de données qui a un ID.
 */
router.delete(“/essential/:id”, auth.checkToken, auth.isAdmin, oilController.deleteOilById);
​
```

​

# user

​

```js
​
/**
 * GET / - route pour la home Page (Page d’acceuil)
 */
router.get(“/”, userController.homePage);
​
/**
 * GET /signup - route pour récupere la page formulaire d’inscription
 * POST /signup - route pour completer le formulaire d’inscription
 */
router.get(“/signup”, userController.indexSignupPage);
router.post(“/signup”, userController.signup);
​
/**
 * GET /login - route pour récupere la page formulaire de connexion
 * POST /login - route pour completer le formulaire de connexion
 */
router.get(“/login”, userController.indexLoginPage);
router.post(“/login”, userController.login);
​
/**
 * GET /logout - route pour la décoonnexion
 */
router.get(“/logout”, auth.checkToken, userController.logout);
​
/**
 * GET /profile - route pour le profil de l’utilisateur avec un middleware token
 */
router.get(“/profile”, auth.checkToken, userController.profile);
​
/**
 * POST /profile/favorites - route pour ajouter un favoris
 */
router.post(‘/profile/favorites’, auth.checkToken, userController.addFavorite);
​
/**
 * DELETE /profile - route pour supprimer un favoris
 * Pour la méthode DELETE il est important d’inclure
 * l’ID car nous voulons supprimer une ressource existante dans la base de données qui a un ID.
 */
router.delete(‘/profile/favorites/:id’, auth.checkToken, userController.deleteFavorite);
​
/**
 * POST /profile/image - route pour ajouter une photo
 * Un seul ficher a la fois qui peux etre téléchargé
 * (‘image’) est le champs renseigner dans le form (champs) de l’uploade
 */
router.post(‘/profile/picture/:id’, auth.checkToken, public.single(‘image’), userController.addPicture);
​
```

​
