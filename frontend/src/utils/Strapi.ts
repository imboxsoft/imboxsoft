export function generateAPIURL(url: string) {
    return `${process.env.STRAPI_BASE_URL}${url}`;
}
