export function updateProfessionalExperience(profileData) {
    const experience = document.getElementById('profile-professionalExperience')

    // renderiza cada experiência no HTML
    experience.innerHTML = profileData.professionalExperience
        .map(exp => `
            <li>
                <h3 class="title">${exp.name}</h3>
                <p class="period">${exp.period}</p>
                <p>${exp.description}</p>
            </li>
        `)
        .join('')
}
