var Koa=require('koa');
var router = require('koa-router')(); 

var app=new Koa();

router.get('/api/test', async (ctx, next) => {
    var a = ctx.query.a;
    var b = eval(a)
    ctx.body = {
        returnCode: 0,
        returnMessage: b
    };
});


app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000);
