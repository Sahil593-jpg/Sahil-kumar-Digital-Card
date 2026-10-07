function showMessage() {
    alert("Hello Sahil! 👋 Welcome to my digital card.");
}function shareProfile() {

    const message =
        "Check out Sahil Kumar's Digital Card!";

    if (navigator.share) {

        navigator.share({
            title: "Sahil Kumar - Digital Card",
            text: message
        });

    } else {

        navigator.clipboard.writeText(message);

        alert("Profile message copied!");

    }
}