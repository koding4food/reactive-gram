import union from 'union';
import router from './router';
import ecstatic from 'ecstatic';


let server = union.createServer({
  before: [
    (req, res) => {
      let found = router.dispatch(req, res);
      if (!found) {
        res.emit('next');
      }
    },
    ecstatic({root: `build/public`})
  ],
  after: [
    () => {
      let stream = new union.ResponseStream();
      stream.once('pipe', function () {
        console.log(`[${this.res.statusCode}] ${this.req.method}: ${this.req.url}`);
      });
      return stream;
    }
  ]
});


server.listen(8000);
console.log('server listening on 8000');
