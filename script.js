function showSection(sectionId) {
    // Hide all sections
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Show the selected section
    document.getElementById(sectionId).classList.add('active');

    // Add active class to the clicked button
    event.currentTarget.classList.add('active');
}
function toggleCert(certId) {
    var img = document.getElementById(certId);
    
    // ፎቶው ተደብቆ ከሆነ ያሳየዋል፣ ከታየ ደግሞ ይደብቀዋል
    if (img.style.display === "none") {
        img.style.display = "block";
    } else {
        img.style.display = "none";
    }
}

// ያንተ ነባር showSection ፋንክሽን ከታች ይኑር
function showSection(sectionId) {
    document.querySelectorAll('.tab-content').forEach(section => {
        section.classList.remove('active');
    });
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
    event.currentTarget.classList.add('active');
}
function closeAllCerts() {
    // 1. ሁሉንም የሰርቲፊኬት ፎቶዎች በ class ስማቸው ይፈልጋል
    const allImages = document.querySelectorAll('.cert-img');
    
    // 2. እያንዳንዱን ፎቶ display: none በማድረግ ይደብቃል
    allImages.forEach(img => {
        img.style.display = "none";
    });
}
document.querySelectorAll('.tag').forEach(tag => {
    tag.addEventListener('click', function() {
        const info = this.getAttribute('data-info');
        const detailText = document.getElementById('skill-text');
        
        // ጽሁፉን መቀየር
        detailText.innerText = info;
    });
});
