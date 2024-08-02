
document.title = "GuruKul 2.0";

const text_a = "Welcome to Gurukul, your one-stop destination for comprehensive, chapter-wise study materials designed to take your technical knowledge beyond the traditional syllabus.Curated and maintained by the innovative minds at YantraYodha, our college's premier hardware project and coding club, Gurukul aims to enhance your engineering mindset and productivity.\nAt Gurukul, we believe in the power of continuous learning and hands-on experience. Our platform is dedicated to providing students with valuable resources that complement their academic curriculum, fostering a deeper understanding of technical concepts and practical skills.Whether you're looking to strengthen your fundamentals or explore advanced topics, our materials are tailored to meet your learning needs.";

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function typeWriter(text, elementId, speed) {
    const element = document.getElementById(elementId);
    let i = 0;
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {

    let temp = typeWriter(text_a, "typing-text-a", 4)

    await sleep(3000); // Sleep for 2 seconds

    // Essential Study Materials
    content_box.appendChild(createDiv(['Essential Study Materials', 'esm', 'Electronics', 'Networking', 'C Programming', "Sensors", "Arduino"]));

    await sleep(30);
    // rogramming Essentials
    content_box.appendChild(createDiv(['Programming Essentials', 'pe', 'C Programming', 'Python', 'JavaScript', 'HTML', 'CSS', 'Power Shell', 'Bash', 'SQL', 'C++']));

    await sleep(40);
    // GitHub Essentials
    content_box.appendChild(createDiv(['Version control system', 'git', 'Git & GitHub']));

    await sleep(50);
    // Advanced Tech
    content_box.appendChild(createDiv(['Advanced Tech', 'adv', "Gemini Ai", 'Microsoft Copilot', 'Chat GPT', 'Raspberry Pi', 'Kotlin', 'Swift', 'Go', 'React', 'Linux', 'TensorFlow', 'Docker', 'Cloud', 'Python librarys', 'DSA - Data Stracture']));

    await sleep(20);
    // Road Map
    content_box.appendChild(createDiv(['Road Map', 'rm', 'Electronics Engineering', 'App Devoloper', 'Web Devoloper', 'UI UX Designer', 'Python Devoloper', 'ML Engineer', 'AI Devoloper', 'Game Devoloper']));

    await sleep(20);

}

