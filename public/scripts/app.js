let router = new Navigo(null, false);

router
    .on("#/products/books/:id", controllers.singleBook)
    .on("#/login", controllers.login)
    .on('#/contact', controllers.contact)
    .on('#/products/dvds', controllers.dvds)
    .on('#/products/cds', controllers.cds)
    .on('#/products/magazines', controllers.magazines)
    .on('#/products/books', controllers.books)
    .on('#/products/comics', controllers.comics)
    .on('#/home', controllers.home)
    .on(() => {
        router.navigate("#/home");
    })
    .resolve();

$('.btn-nav-logout').click(() => {
    controllers.logout();
});

$('.navigation').on('click', 'li', (ev) => {
    let $target = $(ev.target);
    $target.parents('nav').find('li').removeClass('active');
    $target.parents('li').addClass('active');
});
