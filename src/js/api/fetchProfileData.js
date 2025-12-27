// Busca os dados do perfil (JSON)
export async function fetchProfileData(profileFile = 'profile.json') {
  const url = `./src/data/${profileFile}`
  const response = await fetch(url)
  return response.json()
}