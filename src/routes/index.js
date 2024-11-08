import siteRoute from './site.route.js'; // Đổi extension sang .js nếu cần

function route(app) {
    app.use('/', siteRoute);
}

export default route;
