import fastfy from 'fastify';
import AlertaRoute from './routes/alertas';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const app = fastfy();
app.register(AlertaRoute, { prefix: 'alertas' });


app.listen({ port: 3333 }, (err, adress) => {
  if (err) {
    console.log(`Houve um erro ao iniciar a aplicação ${err}`);
    return;
  }

  console.log(`🔥 Servidor ouvindo em ${adress}`);
});
