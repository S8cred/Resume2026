const cmdInput = document.getElementById('cmd-input');
const history = document.getElementById('history');

// Define your command responses here
const commands = {
    help: `Available commands:
  <span class="highlight">about</span>    - Brief summary of who I am
  <span class="highlight">skills</span>   - My technical & operational toolkit
  <span class="highlight">exp</span>      - My professional experience history
  <span class="highlight">clear</span>    - Clear the terminal screen`,
    
    about: `<span class="title">Jake Hernandez - Senior Computer Tech & Operations Leader</span>
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
- Generated $850K+ net profit; led and trained a cross-functional team of 14.`
};

// Listen for the Enter key
cmdInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const input = cmdInput.value.trim().toLowerCase();
        
        // Log the prompt and the entered command to history
        logOutput(`guest@jakehernandez:~# ${cmdInput.value}`, false);
        
        if (input !== '') {
            executeCommand(input);
        }
        
        // Clear input and scroll down
        cmdInput.value = '';
        window.scrollTo(0, document.body.scrollHeight);
    }
});

// Focus input on clicking anywhere in the terminal
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