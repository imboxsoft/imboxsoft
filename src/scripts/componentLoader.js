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
    }
})();