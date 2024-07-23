const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Définir le moteur de template EJS
app.set('view engine', 'ejs');

// Définir le répertoire des vues
app.set('views', path.join(__dirname, 'views'));

// Définir le répertoire des fichiers statiques (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Route pour la page d'accueil
app.get('/', (req, res) => {
  res.render('index', { title: 'Ma Page Web' });
});

 // Route pour le fichier connecter.ejs
app.get('/connecter', (req, res) => {
    res.render('connecter',{ title: 'Ma Page Web' });
});


 // Route pour le fichier connecter.ejs
 app.get('/insc', (req, res) => {
    res.render('insc',{ title: 'Ma Page Web' });
});

app.get('/admin', (req, res) => {
    res.render('admin',{ title: 'Ma Page Web' });
});


app.get('/test', (req, res) => {
    res.render('test',{ title: 'Ma Page Web' });
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});