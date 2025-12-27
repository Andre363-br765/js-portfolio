export function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile-skills-softSkills')

    // renderiza as soft skills
    softSkills.innerHTML = profileData.skills.softSkills
        .map(skill => `<li>${skill}</li>`)
        .join('')
}

export function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile-skills-hardSkills')

    // renderiza as hard skills com ícones
    hardSkills.innerHTML = profileData.skills.hardSkills
        .map(skill =>
            `<li>
                <img src="${skill.logo}" alt="${skill.name}" title="${skill.name}">
            </li>`
        )
        .join('')
}
