document.addEventListener('DOMContentLoaded', () => {
    const sidenav = document.querySelector('.sidenav');
    M.Sidenav.init(sidenav, {});

    const scrollspy = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(scrollspy);

    const fixedActionBtns = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(fixedActionBtns, {});

    const modals = document.querySelectorAll('.modal');
    M.Modal.init(modals, {});
});