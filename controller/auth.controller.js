var users=[
    {id:1 , name: 'Truong', email:'truong@gmail.com', passwork:'123456'},
                    
    {id:2 , name: 'Chuong'},
    {id:2 , name: 'Chuongsss'}

   ] ;

   module.exports.login = function(request, response){
    response.render('auth/login', {
    })};

    module.exports.postLogin = function(req, res){
        var email= req.body.email;
        var passwork= req.body.passwork;

      var userx =  users.find(function(x){
        return x.email = email;
      }) 
      if(!userx){
        res.render('auth/login',{
            errors:['User does not exits.'],
            values:req.body
        })
        return;
      }
      if(userx.passwork !== passwork){
        res.render('auth/login',{
            errors:['Wrong passwork']
          })
          return;
      }
      res.cookie('userID', user.id)
     res.redirect('/users');
    }