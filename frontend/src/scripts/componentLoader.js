(() => {
    let loadedComponents = {};
    const customComponents = {
        navbar: {
            key: "navbar",
            component: "/src/components/navbar.html",
            container: document.getElementsByTagName("header")[0],
            onloadcallback: function () {},
        },
        home: {
            key: "home",
            component: "/src/components/home.html",
            container: document.getElementById("app-router"),
            routed: true,
            onloadcallback: function () {
                const headerHeight = $("header").height();
                $(".scroll-section").css("padding-top", ` ${headerHeight}px`);
            },
        },
        contact: {
            key: "contact",
            component: "/src/components/contact.html",
            container: document.getElementById("app-router"),
            routed: true,
            onloadcallback: function () {
                const headerHeight = $("header").height();
                $("#contact").css("padding-top", ` ${headerHeight}px`);
            },
        },
        footer: {
            key: "footer",
            component: "/src/components/footer.html",
            container: document.getElementsByTagName("footer")[0],
            onloadcallback: function () {},
        },
    };
    const appRoutes = {
        home: {
            path: "/",
            component: customComponents["home"],
        },
        contact: {
            path: "/contact",
            component: customComponents["contact"],
        },
    };
    const currentRoute = function () {
        const pathanme = window.location.pathname;
        for (let route in appRoutes) {
            if (pathanme === route.path) {
                return appRoutes[route];
            }
        }
        return appRoutes.home;
    };

    window.loadComponent = async function loadComponent(component) {
        if (typeof component === "string" || component instanceof String) {
            component = customComponents[component];
        }
        try {
            if (component.key in loadedComponents) {
                throw new Error("Component already loaded!");
            }
            loadedComponents[component.key] = component;
            const template = await fetch(component.component);
            if (template.ok) {
                component.container.innerHTML = await template.text();
                component.onloadcallback();
            }
        } catch (e) {
            console.log(e);
        }
    };
    window.unloadComponent = async function unloadComponent(component) {
        try {
            if (!component.key in loadedComponents) {
                throw new Error("Component not loaded!");
            }
            delete loadedComponents[component.key];
            component.container.innerHTML = "";
        } catch (e) {
            console.log(e);
        }
    };
    window.appNavigate = async function appNavigate(e, route) {
        e.preventDefault();
        try {
            for (let appRoute in appRoutes) {
                if (route != appRoute) {
                    await window.unloadComponent(appRoutes[appRoute].component);
                }
            }
            window.loadComponent(appRoutes[route].component);
            window.history.pushState({}, "", appRoutes[route].path);
        } catch (e) {
            console.log(e);
        }
    };

    [
        customComponents.navbar,
        customComponents.footer,
        currentRoute().component,
    ].forEach((obj) => {
        window.loadComponent(obj);
    });
})();
