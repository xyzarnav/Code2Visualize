const BASE_URL = "http://localhost:8080/api";

export async function getHello() {

    const response = await fetch(`${BASE_URL}/hello`);

    return response.text();
}