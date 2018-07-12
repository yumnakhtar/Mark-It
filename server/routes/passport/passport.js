const router = require("express").Router();
const passport = require('passport');


router.get('/user', (req, res) => {
  if (req.isAuthenticated()) {
    res.json(true)
  }
  else {
    res.json(false)
  }
});


// =====================================
// LOGOUT ==============================
// =====================================

router.get('/logout', (req, res) => {
  req.session.destroy(err => {
    req.logout();
    res.clearCookie("user_sid");
    res.clearCookie("user_email");
    res.clearCookie("user_uuid");
    res.clearCookie("authenticated");
    res.json(false);
  });
});

// =====================================
// LOGIN ===============================
// =====================================

// process the login form
router.post('/signin', (req, res, next) => {
  passportAuthenticate('local-login', req, res, next);
});

// =====================================
// SIGNUP ==============================
// =====================================

// process the signup form
router.post('/signup', (req, res, next) => {
  passportAuthenticate('local-signup', req, res, next);
});

// =====================================
// passport local strategy =============
// =====================================

passportAuthenticate = (localStrategy, req, res, next) => {
  passport.authenticate(localStrategy, function (err, user, info) {
    if (err) {
      return next(err); // will generate a 500 error
    }
    // Generate a JSON response reflecting authentication status
    if (!user) {
      return res.send({ success: false, message: 'authentication failed' });
    }

    // ***********************************************************************
    // "Note that when using a custom callback, it becomes the application's
    // responsibility to establish a session (by calling req.login()) and send
    // a response."
    // Source: http://passportjs.org/docs
    // ***********************************************************************

    else{
      req.login(user, loginErr => {
        if (loginErr) {
          return next(loginErr);
        }

        res.cookie('user_uuid', user.uuid );
        res.cookie('user_email', user.email );
        res.cookie('authenticated', "true" );

        return res.json(true);
      });
    }
  })(req, res, next);
}

module.exports = router;
