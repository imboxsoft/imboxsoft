const ENV = process.env;

export function generateBaseURL(url: string) {
    return `${ENV.STRAPI_BASE_URL}${url}`;
}

export function generateAPIURL(url: string) {
    return `${ENV.STRAPI_BASE_URL}${ENV.STRAPI_API_ROUTE}${url}`;
}
