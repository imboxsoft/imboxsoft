import "./componentLoader";

export function initGlobal() {
    $(".current-year-el").text(new Date().getFullYear().toString());
}
