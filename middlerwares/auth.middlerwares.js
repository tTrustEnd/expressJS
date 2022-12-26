    // module.exports.requireAuth = function(req, res, next){
    //     if(!req.cookies.userId){
    //         res.redirect('/auth/login');
    //         return;
    //     }
    //     var user = users.find(function(x){
    //         return x.id = req.cookies.userId; 
    //         // nhập đúng thì uer sex ko xác định vì mình nhập nó có lưu cái cookie vào file đâu mà so sánh :))
    //     })
    //     if (!user){
    //         res.direct('/auth/login');
    //         return;
    //     }
    //     next();
    // }
