function calculate() {
    let rarity = parseFloat(document.getElementById("rarity").value);
    let luck = parseFloat(document.getElementById("luck").value) || 0;
    let boostedFish = parseFloat(document.getElementById("boostedFish").value) || 0;
    let seconds = parseFloat(document.getElementById("seconds").value);

    if (!rarity || !seconds) {
        document.getElementById("result").innerHTML = "Please enter valid values.";
        return;
    }

    // Convert rarity to probability
    let baseChance = 1 / rarity;

    // Apply BOTH boosts
    let boostedChance = baseChance * (1 + (luck / 100)) * (1 + (boostedFish / 100));

    // Cap at 100%
    if (boostedChance > 1) boostedChance = 1;

    // Expected attempts
    let expectedAttempts = 1 / boostedChance;

    // Time calculations
    let totalSeconds = expectedAttempts * seconds;
    let hours = totalSeconds / 3600;
    let days = hours / 24;

    document.getElementById("result").innerHTML = `
        <strong>Results:</strong><br><br>
        🎯 Expected Catch Attempts: ${expectedAttempts.toFixed(2)}<br>
        🕒 Number of Hours: ${hours.toFixed(2)} hrs<br>
        📅 Number of Days: ${days.toFixed(2)} days
    `;
}
