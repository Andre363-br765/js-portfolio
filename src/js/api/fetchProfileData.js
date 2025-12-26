export async function fetchProfileData() {
  const url = './src/data/leticia.json'
  const response = await fetch(url)
  return response.json()
}
