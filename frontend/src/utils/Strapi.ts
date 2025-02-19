const ENV = process.env;

export function generateStrapiBaseURL(url: string) {
    return `${ENV.STRAPI_BASE_URL}${url}`;
}

export function generateStrapiAPIURL(url: string) {
    return `${ENV.STRAPI_BASE_URL}${ENV.STRAPI_API_ROUTE}${url}`;
}
