const cmdInput = document.getElementById('cmd-input');
const history = document.getElementById('history');

// Command Responses
const commands = {
    help: `Available commands to learn more about me:
  <span class="highlight">about</span>    - Brief summary of who I am
  <span class="highlight">skills</span>   - My technical & operational toolkit
  <span class="highlight">exp</span>      - My professional experience history
  <span class="highlight">certs</span>    - My certifications and Continuous Education
  <span class="highlight">links</span>    - How to get in touch with me
  <span class="highlight">clear</span>    - Clear the terminal screen`,
    
    about: `<span class="title">Jake Hernandez - Senior Computer Technician & Samsung Engineer</span>
------------------------------------------------------------
Result-driven technical professional combining enterprise-level 
hardware engineering with heavy-hitting business operations management. 
Known for rapid information retention and solving complex technical puzzles.`,
    
    skills: `<span class="title">Technical Infrastructure:</span>
- Linux (Arch, Debian/Ubuntu ecosystem), Windows CLI, Bash/Shell Scripting
- Hardware Diagnostics, Component-Level Repair, Systems Provisioning
- Networking & Security Fundamentals

<span class="title">Operations & Leadership:</span>
- Team Leadership & Training, Process Improvement, Sales Strategy`,

    exp: `<span class="title">Senior Computer Technician / Samsung Engineer</span> | Ubreakifix (2024 - Present)
- Perform hardware diagnostics/repairs on diverse device ecosystems.
- Leverage Linux/Windows CLI to automate configurations and troubleshoot.
- Maintain a 95%+ QA repair rating across 20+ assets weekly.

<span class="title">Head of Acquisitions / Partner</span> | Action Home Buyers (2021 - 2023)
- Generated $850K+ net profit; led and trained a cross-functional team of 14.
- Led team of 14 including direct reports and remote staff, running daily meetings and training.
- Negotiated acquisitions of residential, commercial, and vacant properties.
- Directed marketing efforts including radio, video, social media, and PPC campaigns.

<span class="title">Audio Visual Technician</span> | Piraino Consulting (2015) 
- Installed AV infrastructure and configured localized networking systems`,

    certs: `<span class="title">Certifications & Continuous Education</span>
- <span class="highlight">Asurion Certified Repair Technician</span>, ID: HERNA12100502
- <span class="highlight">Samsung GSPN Engineer</span>, ID: 5386094922
- CS50: Introduction to Computer Science | HarvardX / edX (In Progress)
Algorithmic thinking, data structures, resource management, and software engineering fundamentals using C and Python.
- SOC Level 1 (Blue Team) Track | TryHackMe (In Progress)
Hands-on laboratory training in security operations, log analysis, network traffic monitoring, and incident response methodologies.
- Cybersecurity Fundamentals | CodingX (In Progress)
Core security principles, threat landscapes, network security architectures, and system hardening basics.`,
    
    links: `<span class="title">Contact & Connect</span>
    <a href="mailto:jacob.hernandez313@gmail.com" class="terminal-link">jacob.hernandez313@gmail.com</a> | 
    <a href="https://www.linkedin.com/in/jakehernandez313" target="_blank" rel="noopener noreferrer" class="terminal-link">linkedin.com/in/jakehernandez313</a>`,

};

// Handle command input
cmdInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const input = cmdInput.value.trim().toLowerCase();
        
        logOutput(`<span class="highlight">hire.me@jakeshell:~#</span> ${cmdInput.value}`, false);
        
        if (input !== '') {
            executeCommand(input);
        }
        
        
        cmdInput.value = '';
        window.scrollTo(0, document.body.scrollHeight);
    }
});

document.addEventListener('click', () => cmdInput.focus());

function executeCommand(cmd) {
    if (cmd === 'clear') {
        history.innerHTML = '';
        return;
    }
    
    if (commands[cmd]) {
        logOutput(commands[cmd], true);
    } else {
        logOutput(`sh: command not found: ${cmd}. Type <span class="highlight">'help'</span> for options.`, true);
    }
}

function logOutput(text, addSpacing) {
    const div = document.createElement('div');
    div.innerHTML = text;
    history.appendChild(div);
    if (addSpacing) {
        history.appendChild(document.createElement('br'));
    }
}