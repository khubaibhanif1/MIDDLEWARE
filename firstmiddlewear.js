module.exports = {
    onlyAdmin:function  (req, res, next){    
        console.log(req.query.admin);
        if ("jakarta" !== req.query.admin){
            return res.redirect("/")
        } 
        next();
    }
}