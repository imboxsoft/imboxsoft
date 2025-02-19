const ENV = process.env;

export function generateWPBaseURL(url: string) {
    return `${ENV.WP_API_BASE_URL}${url}`;
}
