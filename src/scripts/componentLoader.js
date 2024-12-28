(() => {
    window.loadComponent = async function loadComponent(container, component) {
        try {
            const template = await fetch(component);
            if (template.ok) {
                container.innerHTML = await template.text();
            }
        } catch (e) {
            console.log(e);
        }
    };
    [
        {
            component: "/src/components/navbar.html",
            parent: document.getElementsByTagName("header")[0],
        },
        {
            component: "/src/components/home.html",
            parent: document.getElementsByTagName("main")[0],
        },
        {
            component: "/src/components/footer.html",
            parent: document.getElementsByTagName("footer")[0],
        },
    ].forEach((obj) => {
        window.loadComponent(obj.parent, obj.component);
    });
})();
