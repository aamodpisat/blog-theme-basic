/**
 * Created by Aamod Pisat on 12-08-2016.
 */

var Hooks = {};
Hooks.serverExtends = function(app, Blog) {
    app.use(Blog.Routes.home, function(req, res, next){
        Blog.getRecentPosts()
            .spread(function success(entries){
                req.getViewContext().set('recentPosts', entries);
                next();
            });
    }, function(req, res, next){
        Blog.getAuthors()
            .spread(function success(entries){
                req.getViewContext().set('authors', entries);
                next();
            });
    }, function(req, res, next){
        Blog.getCategories()
            .spread(function success(entries){
                req.getViewContext().set('categories', entries);
                next();
            });
    });
};
Hooks.templateExtends = function(engine) {
};
module.exports =  Hooks;