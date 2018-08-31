var JwtStrategy=require('passport-jwt').Strategy;
    ExtractJwt=require('passport-jwt').ExtractJwt;
const Admin=require('../models/adminUser/adminUser');
const config=require('../config/config');

module.exports=(passport)=>{
    var opts = {}
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("Bearer");
    opts.secretOrKey = config.secret;
    //opts.issuer = 'accounts.examplesoft.com';
    //opts.audience = 'yoursite.net';
    passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
      console.log(jwt_payload);
        Admin.findById(jwt_payload._id, function(err, user) {
            if (err) {
                return done(err, false);
            }
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
                // or you could create a new account
            }
        });
    }));
}