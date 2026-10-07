function showMessage() {
    alert("Hello Sahil! 👋 Welcome to my digital card.");
}

function shareProfile() {

    const profileUrl =
        "https://sahil593-jpg.github.io/Sahil-kumar-Digital-Card/";

    const shareData = {
        title: "Sahil Kumar - Digital Card",
        text: "Check out Sahil Kumar's Digital Card! 🚀",
        url: profileUrl
    };

    if (navigator.share) {

        navigator.share(shareData);

    } else {

        navigator.clipboard.writeText(profileUrl);

        alert("Profile link copied! 🔗");

    }
}
function downloadCard() {
    window.print();
}
