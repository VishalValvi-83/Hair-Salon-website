const loadMoreButton = document.getElementById('load-more');
const teamMembersContainer = document.getElementById('team-members-container');

let teamMembers = JSON.parse(localStorage.getItem('teamMembers')) || [];

loadMoreButton.addEventListener('click', () => {
    const teamMemberName = prompt('Enter team member\'s name:');
    const teamMemberTitle = prompt('Enter team member\'s title:');
    const teamMemberImage = prompt('Enter team member\'s image URL:');
    
    if (teamMemberName && teamMemberTitle && teamMemberImage) {
        const teamMember = {
            name: teamMemberName,
            title: teamMemberTitle,
            image: teamMemberImage
        };
        teamMembers.push(teamMember);
        localStorage.setItem('teamMembers', JSON.stringify(teamMembers));
        const teamMemberHTML = `
            <div>
                <img class="founder-img" src="${teamMemberImage}" alt="${teamMemberName}">
                <p class="">${teamMemberName} - ${teamMemberTitle}</p>
            </div>
        `;
        teamMembersContainer.innerHTML += teamMemberHTML;
    } else {
        alert('Please enter all the required information!');
    }
});
