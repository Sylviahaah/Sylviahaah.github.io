// ============================================================
// DATA: Projects
// Replace placeholder content with your real project data
// ============================================================

export const projects = [
    {
        id: 'promptpal-ai-tool',
        title: 'PromptPal — AI Prompt Manager',
        tagline: 'Browser extension for organizing and reusing AI prompts across platforms',
        category: 'AI Product',
        year: '2024',
        status: 'Beta',
        color: '#8B5CF6',
        tags: ['Chrome Extension', 'JavaScript', 'User Research', 'MVP'],
        metrics: [
            { label: 'User Interviews', value: '30+' },
            { label: 'Platform Coverage', value: '90%' },
            { label: 'GitHub Stars', value: '45' },
        ],
        summary: 'A Chrome extension that helps AI users manage prompts across ChatGPT, Claude, and Gemini with a unified interface.',
        problem: 'Frequent AI users struggle with prompt fragmentation — saving prompts in random places, rewriting common prompts, and context-switching between platforms. Existing solutions have <20% adoption due to complexity.',
        solution: 'Designed a "capture-organize-trigger" loop with dual management modes: quick-save for speed and folders for organization. Built with vanilla JavaScript for lightweight performance.',
        outcome: 'Validated with 30+ user interviews. V1.3.2 achieves core workflow coverage across 90%+ mainstream AI platforms. Open-sourced on GitHub with 45 stars.',
        process: [
            { phase: 'Discovery', detail: 'Interviewed 12 AI users across roles, identified pain points in prompt management. Mapped user journeys to find friction points.' },
            { phase: 'Design', detail: 'Created low-fidelity prototypes testing two mental models: "tag first" vs "folder first". Iterated based on user feedback.' },
            { phase: 'Build', detail: 'Developed MVP as Chrome extension with local storage. Implemented core capture and trigger functionality.' },
            { phase: 'Launch', detail: 'Released on GitHub, collected feedback from early adopters. Planning Chrome Web Store release.' },
        ],
        learnings: 'Users prefer flexibility over strict organization. The dual-mode approach was the key insight from user interviews — forcing a single structure was the #1 reason competing tools were abandoned.',
    },
    {
        id: '3d-printed-landscape',
        title: 'Digital Landscape Construction',
        tagline: 'Low-budget, high-impact public space transformation using 3D printing',
        category: 'Design',
        year: '2024',
        status: 'Shipped',
        color: '#10B981',
        tags: ['3D Printing', 'Rhino', 'Sketchup', 'D5 Render', 'Budget Management'],
        metrics: [
            { label: 'Budget', value: '¥2000' },
            { label: 'Timeline', value: '10 Weeks' },
            { label: 'Cost Reduction', value: '40%' },
        ],
        summary: 'Transformed an abandoned campus corner into an interactive landscape installation with minimal budget.',
        problem: 'An abandoned campus corner needed revitalization with only ¥2000 budget and a 10-week timeline. Traditional construction methods were too expensive and slow.',
        solution: 'Leveraged 3D printing for custom modular elements, coordinated with security and logistics departments to repurpose idle campus materials.',
        outcome: 'Completed installation within budget, achieving 40% cost savings versus initial estimates. Created a gathering space now used daily by students and local elderly residents.',
        process: [
            { phase: 'Planning', detail: 'Analyzed site constraints, identified available resources. Proposed 3D printing approach to reduce costs.' },
            { phase: 'Coordination', detail: 'Negotiated with security and logistics departments for site access and material reuse.' },
            { phase: 'Production', detail: '3D printed modular components in parallel with site preparation to compress timeline.' },
            { phase: 'Installation', detail: 'Assembled on-site with student volunteers. Documented process for future community projects.' },
        ],
        learnings: 'Creative constraints breed innovation. The tight budget forced unconventional material sourcing — the best design decisions came from working with what existed rather than ordering new.',
    },
];
