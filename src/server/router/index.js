import director from 'director';
import appHandler from '../handlers/app';
const Router = director.http.Router;


let router = new Router();
router.get('/', appHandler);


export default router;
