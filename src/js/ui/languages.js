export function updateLanguages(profileData) {
    const languages = document.getElementById('profile.languages')
    languages.innerHTML = profileData.languages
        .map(language => `<li>${language}</li>`)
        .join('')
}
