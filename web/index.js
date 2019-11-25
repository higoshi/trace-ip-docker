const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = JSON.stringify({
    ip: ctx.request.ip,
    ips: ctx.request.ips,
  });
});

app.listen(8888);
