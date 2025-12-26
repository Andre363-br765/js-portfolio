export function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile-portfolio')
    portfolio.innerHTML = profileData.portfolio
        .map(project => `
            <li>
                <h3 ${project.github ? 'class="github"' : ''}>
                    ${project.name}
                </h3>
                <a href="${project.url}" target="_blank">${project.url}</a>
            </li>
        `)
        .join('')
}
