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
    var errors =[];
    if(!req.body.name){
        errors.push('Name is required')
    }
    if(!req.body.phone){
        errors.push('Phone is required')
    }
    if(errors.length){
        res.render('users/create',{
            errors:errors,
           values:req.body
        });
        return;
    }   
   
    users.push(req.body)
    res.redirect('/users');
    }
