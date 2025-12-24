export async function fetchProfileData() {
    const url = ''
    const response = await fetch(url)
    return response.json()
}
