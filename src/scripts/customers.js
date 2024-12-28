import { Carousel } from "./carousel.js";

$(function () {
    const customers = [
        {
            name: "GTSS",
            website: "https://www.gtss.ro",
            logo: "",
        },
        {
            name: "Esstub",
            website: "https://www.esttub.ro",
            logo: "",
        },
        {
            name: "Smart Student",
            website: "https://www.smartstud.ro",
            logo: "",
        },
        {
            name: "Clinica Lotus",
            website: "https://lotuslife.ro/",
            logo: "",
        },
        {
            name: "Verso Radioguide",
            website: "https://lotuslife.ro/",
            logo: "",
        },
        {
            name: "Tec-Trac Inc.",
            website: "https://lotuslife.ro/",
            logo: "",
        },
        {
            name: "Clinica Lotus",
            website: "https://lotuslife.ro/",
            logo: "",
        },
        {
            name: "Clinica Lotus",
            website: "https://lotuslife.ro/",
            logo: "",
        },
        {
            name: "Clinica Lotus",
            website: "https://lotuslife.ro/",
            logo: "",
        },
        {
            name: "Clinica Lotus",
            website: "https://lotuslife.ro/",
            logo: "",
        },
        {
            name: "Clinica Lotus",
            website: "https://lotuslife.ro/",
            logo: "",
        },
    ];
    let customersContainer = $("#customers-carousel-container");

    for (let customer of customers) {
        customersContainer.children(".carousel-inner").append(`
            <div class="carousel-item">
                ${customer.name}
            </div>
        `);
    }

    let customersCarousel = Carousel.init(
        "#customers-carousel-container",
        ".carousel-inner",
        ".carousel-item",
        ".prev",
        ".next"
    );
});
