/**
 * Created by macbook on 2016/11/18.
 */
module.exports=function(app){
    app.get("/index",function(req,res){
        res.render("index")
    })
    app.get('/login', function (req, res) {
        res.render('login');
    });
    app.get('/list', function (req, res) {
        res.render('list');
    });
    app.get('/about', function (req, res) {
        res.render('about');
    });
   app.post("/mm",function(req,res){
       var user = req.body.user;
       var pass = req.body.pass;
      if(user=="fmm" && pass=="123456"){
          res.redirect("login")
      }
       else{
          res.redirect("index")
      }
   })
}