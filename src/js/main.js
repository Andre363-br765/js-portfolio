import { fetchProfileData } from './api/fetchProfileData.js'

import { updateProfileInfo } from './ui/profile.js'
import { updateSoftSkills, updateHardSkills } from './ui/skills.js'
import { updateLanguages } from './ui/languages.js'
import { updatePortfolio } from './ui/portfolio.js'
import { updateProfessionalExperience } from './ui/experience.js'

import { initAcordeon } from './components/acordeon.js'
import { initProfileMenu } from './components/profileMenu.js'


async function loadProfile(profileFile) {
    const profileData = await fetchProfileData(profileFile)

    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
    updatePortfolio(profileData)
    updateProfessionalExperience(profileData)
}

(async () => {
    await loadProfile()
    initAcordeon()

    // 🔹 inicia menu de perfis
    initProfileMenu(loadProfile)
})()
