var users=[
    {id:1 , name: 'Truong'},
    {id:2 , name: 'Chuong'},
    {id:2 , name: 'Chuongsss'}
   ] ;
module.exports.index = function(request, response){
    response.render('users/index', {
       users : users
    })};
module.exports.search = function(req, res){
    var q = req.query.q;
    matchedUsers = users.filter(function(user){
        return user.name.toLowerCase().indexOf(q.toLocaleLowerCase()) !== -1;
    })
    res.render('users/index',{
        users: matchedUsers
    
    })
}
module.exports.create = function(req, res){
    res.render('users/create')
    }
module.exports.createUser =function(req, res){
    users.push(req.body)
    console.log(req.body)
    res.redirect('/users');
    }