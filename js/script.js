function showInfluence(choice) {
    let message = "";

    switch (choice) {
        case "coffee":
            message = "Your Instagram feed is full of aesthetic coffee pics. Have you been influenced by trending café culture? ☕📱";
            break;
        case "tea":
            message = "Health blogs and wellness influencers often push tea as a calming drink. Are your choices shaped by online trends? 🍵🌿";
            break;
        case "netflix":
            message = "Netflix recommends shows based on your watch history. Are you really choosing, or is the algorithm choosing for you? 🎬📺";
            break;
        case "youtube":
            message = "YouTube's autoplay feature keeps you watching. How much of your choice is habit, and how much is tech design? 🔄🎥";
            break;
        case "Jeans":
            message = "Are you wearing jeans because you want to? Or is it due to fashion trends on social media?";
            break;
        case "Skirt":
            message = "Are you wearing a skirt because you want to? Or is it due to fashion trends on social media?";
            break;
        default:
            message = "Is this your choice, or have you been influenced?";
    }

    document.getElementById("result").innerText = message;
}

