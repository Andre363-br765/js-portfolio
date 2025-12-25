export async function fetchProfileData() {
  const url = './src/data/lucas_andrade.json'
  const response = await fetch(url)
  return response.json()
}
