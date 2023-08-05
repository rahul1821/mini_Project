// module.exports.profile = function(req, res){
//     return res.end("<h1>User Profile</h1>");
// }

module.exports.profile = function(req, res){
    return res.render('user_profile', {
        title: "Profile"
        
    })
}