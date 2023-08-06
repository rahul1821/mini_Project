// module.exports.profile = function(req, res){
//     return res.end("<h1>User Profile</h1>");
// }

module.exports.profile = function(req, res){
    return res.render('user_profile', {
        title: "Profile"
        
    })
}

// render the signup page
module.exports.signUp = function(req, res){
    return res.render('user_sign_up', {
        title: "Sign Up"
    })
}
// render the signin page
module.exports.signIn = function(req, res){
    return res.render("user_sign_in",{
        title: "Sign In"
    })
}

// get the sign up data

module.exports.create = function(req, res){

}

// get the sign in data

module.exports.create = function(req, res){
    
}