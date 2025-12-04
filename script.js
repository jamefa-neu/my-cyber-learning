
const learningData = [
    {
        title: "Module 1: Importance of IT Security",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", // Replace with your image URL
        summary: "Learned about how the CIA Triad is a foundational model in information security that guides policies and practices to protect critical information."
    },
    {
        title: "Module 2.A: Encryption Fundamentals",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        summary: "Covered Symmetric vs Asymmetric encryption. Learned how the Caesar Cipher works and moved on to modern standards like AES-256 and RSA keys."
    },
    {
        title: "Module 2.C: Cloud & Virtualization Fundamentals",
        image: "https://www.techrepublic.com/wp-content/uploads/2022/10/cloud-computing-virtualization.jpeg",
        summary: "Understood the defition and role of Hypervisors. Explained the functions of cloud storage and gave examples of cloud deployment models."
    },
    {
        title: "Module 2.D: Introduction to Web Application Security",
        image: "https://th.bing.com/th?id=OIF.%2BF0764Z3pwSwhpVoFHrASw&cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        summary: "Learned how to disect a URL and check the OWASP Top 10."
    },
    {
        title: "Module 3: Command Injection",
        image: "https://cdn.acunetix.com/wp-content/uploads/2019/06/11110845/command-injection.png",
        summary: "Understood how OS Command Injection is a serious vulnerability that can allow attackers to gain control of a system."
    },
    {
        title: "Module 4: SQL Injection",
        image: "https://tse4.mm.bing.net/th/id/OIP.Hpq-gzHHpPLYkAOzcwD3dgHaHa?cb=ucfimg2&pid=ImgDet&ucfimg=1&w=474&h=474&rs=1&o=7&rm=3",
        summary: "Learned SQLi is a serious vulnerability where attackers inject malicious SQL through user input to manipulate database queries."
    },
    {
        title: "Module 5: CWE-79 - XSS",
        image: "https://live.staticflickr.com/1616/26519416396_3463bfc62b.jpg",
        summary: "Attackers can take advantage of the victim using Cross-Site Scripting wherein they inject malicious JavaScript into a vulnerable webpage."
    },
    {
        title: "Module 6: CWE-35 - Path Traversal",
        image: "https://checkmarx.com/wp-content/uploads/2022/08/Blog_code-bug-1024x512.jpg",
        summary: "Learned that attackers can manipulate user input to construct file paths allowing them to access restricted files and directories."
    },
    {
        title: "Module 7: Network Traffic Analysis",
        image: "https://patrickdomingues.com/wp-content/uploads/2023/07/Network-Traffic-Analysis-in-Cyber-Security-Forensics.jpg",
        summary: "This module explains the process of monitoring, inspecting, and interpreting data packets moving accross a network to understand its behavior, detect anomalies, and ensure security."
    },
    {
        title: "Module 8: Email Security Fundamentals",
        image: "https://www.globalsign.com/application/files/8316/6634/3349/Email_security.png",
        summary: "The module aims to teach the student different types of threats and vulnerabilities that can be found on put in an email."
    },
    {
        title: "Module 9: Introduction to Event Logs",
        image: "https://tse1.mm.bing.net/th/id/OIF.AowbMFOdPOl9MN4XheoM4w?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        summary: "Learned how important it is to check event logs and codes to make sure that your pc or laptop is not compromised."
    }

];

const grid = document.getElementById('content-grid');

learningData.forEach(item => {

    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
        <div class="card-header">> ${item.title}</div>
        <img src="${item.image}" alt="${item.title}" class="card-img">
        <div class="card-body">
            <p>${item.summary}</p>
        </div>
    `;

    grid.appendChild(card);
});
