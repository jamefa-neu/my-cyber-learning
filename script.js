// DATA SECTION: Add your class summaries here
const learningData = [
    {
        title: "Module 1: Phishing Attacks",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", // Replace with your image URL
        summary: "Learned about social engineering. Phishing involves sending fraudulent emails to trick users into revealing sensitive info like passwords. We analyzed email headers to find spoofed domains."
    },
    {
        title: "Module 2: Encryption Basics",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        summary: "Covered Symmetric vs Asymmetric encryption. Learned how the Caesar Cipher works and moved on to modern standards like AES-256 and RSA keys."
    },
    {
        title: "Module 3: Firewalls & Network Security",
        image: "https://images.unsplash.com/photo-1558494949-ef2bb6db9844?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        summary: "Understood packet filtering. A firewall monitors and controls incoming and outgoing network traffic based on predetermined security rules."
    }
    // TO ADD MORE: Copy one block above (from { to },) and paste it here.
];

// PROGRAM LOGIC: This renders the data to the screen
const grid = document.getElementById('content-grid');

learningData.forEach(item => {
    // Create card div
    const card = document.createElement('div');
    card.className = 'card';

    // Fill HTML
    card.innerHTML = `
        <div class="card-header">> ${item.title}</div>
        <img src="${item.image}" alt="${item.title}" class="card-img">
        <div class="card-body">
            <p>${item.summary}</p>
        </div>
    `;

    // Add to grid
    grid.appendChild(card);
});