const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome', { page: 'Welcome', menuId: 'welcome' }));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) => res.render('dashboard', { page: 'Dashboard', menuId: 'dashboard', user: req.user }));

module.exports = router;
