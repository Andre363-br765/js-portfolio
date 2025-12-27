export function updateProfileInfo(profileData) {
    // foto e dados principais
    const photo = document.getElementById('profile-photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    // informações básicas
    document.getElementById('profile-name').innerText = profileData.name
    document.getElementById('profile-job').innerText = profileData.job
    document.getElementById('profile-location').innerText = profileData.location

    // telefone 
    const phone = document.getElementById('profile-phone')
    phone.innerText = profileData.phone
    phone.href = `tel:${profileData.phone}`

    // email
    const email = document.getElementById('profile-email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`
}
