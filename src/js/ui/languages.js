export function updateLanguages(profileData) {
    const languages = document.getElementById('profile-languages')
    // renderiza os idiomas no HTML
    languages.innerHTML = profileData.languages
        .map(language => `<li>${language}</li>`)
        .join('')
}
