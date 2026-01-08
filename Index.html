<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SYLVIA | 创意实验室 - 叙事建筑师智能信息图</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/plotly.js/2.27.1/plotly.min.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@100;300;400;700;900&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary: #2DD4BF; /* 薄荷绿 */
            --secondary: #F97316; /* 夕阳橘 */
            --accent: #8B5CF6; /* 活力紫 */
            --bg-base: #F8FAFC; 
            --glass: rgba(255, 255, 255, 0.7);
        }
        body {
            font-family: 'Noto Sans SC', sans-serif;
            background-color: var(--bg-base);
            color: #1E293B;
            overflow-x: hidden;
            background-image: radial-gradient(var(--primary) 0.5px, transparent 0.5px), radial-gradient(var(--secondary) 0.5px, #F8FAFC 0.5px);
            background-size: 40px 40px;
            background-position: 0 0, 20px 20px;
            background-attachment: fixed;
        }
        /* 创意趣味卡片 */
        .lab-card {
            background: var(--glass);
            backdrop-filter: blur(12px);
            border: 2px solid #000;
            border-radius: 20px;
            box-shadow: 8px 8px 0px 0px #000;
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .lab-card:hover {
            transform: translate(-4px, -4px);
            box-shadow: 12px 12px 0px 0px var(--primary);
        }
        /* 标题动态装饰 */
        .fun-title {
            position: relative;
            display: inline-block;
        }
        .fun-title::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 12px;
            background: var(--secondary);
            z-index: -1;
            opacity: 0.3;
            transform: skewX(-15deg);
        }
        /* 图表容器 */
        .chart-wrapper {
            position: relative;
            width: 100%;
            height: 350px;
        }
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
        }
        .floating { animation: float 4s ease-in-out infinite; }
        
        /* AI Loading Animation */
        .ai-pulse {
            animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: .5; }
        }
    </style>
</head>
<body class="antialiased p-4 md:p-8">

    <!-- 实验室顶部 -->
    <header class="max-w-7xl mx-auto py-20 relative text-center">
        <div class="absolute top-0 left-0 text-8xl opacity-5 font-black select-none pointer-events-none">SYLVIA'S LAB</div>
        <div class="space-y-6 relative z-10">
            <div class="inline-block px-4 py-1 bg-black text-white text-xs font-bold tracking-widest uppercase rounded-full mb-4">
                Architecture × Literature × Data
            </div>
            <h1 class="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 leading-none">
                叙事<span class="text-violet-600">建筑师</span> <br>
                <span class="fun-title italic">Sylvia</span> 的实验室
            </h1>
            <p class="text-xl md:text-2xl text-slate-600 font-light pt-6 max-w-3xl mx-auto">
                在<span class="font-bold border-b-4 border-teal-400">空间逻辑</span>中寻找锚点，用<span class="font-bold border-b-4 border-orange-400">文字能量</span>引爆品牌。
            </p>
        </div>
    </header>

    <main class="max-w-7xl mx-auto space-y-12">

        <!-- ✨ Gemini AI 控制台 -->
        <section class="lab-card p-8 md:p-12 bg-gradient-to-br from-violet-50 to-teal-50 border-4 border-black">
            <div class="flex items-center gap-4 mb-8">
                <div class="text-4xl">✨</div>
                <div>
                    <h3 class="text-3xl font-black">AI 智能中控台</h3>
                    <p class="text-slate-500 text-sm">Powered by Gemini - 探索 Sylvia 的能力极限</p>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- 职位匹配 -->
                <div class="space-y-4">
                    <label class="block font-black text-lg">✨ 职位匹配分析器</label>
                    <textarea id="jobDescription" placeholder="粘贴您的职位描述或需求..." class="w-full h-32 p-4 border-2 border-black rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-violet-400"></textarea>
                    <button onclick="analyzeFit()" id="analyzeBtn" class="w-full py-4 bg-black text-white font-black rounded-xl hover:bg-violet-600 transition-all flex items-center justify-center gap-2">
                        <span>生成匹配度报告</span>
                    </button>
                </div>

                <!-- 创意启发 -->
                <div class="space-y-4">
                    <label class="block font-black text-lg">✨ 文旅创意灵感泵</label>
                    <input type="text" id="creativeTopic" placeholder="输入关键词，如：老旧厂房、海边村落..." class="w-full p-4 border-2 border-black rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-teal-400">
                    <button onclick="generateIdea()" id="generateBtn" class="w-full py-4 bg-teal-400 text-black font-black border-2 border-black rounded-xl hover:bg-teal-300 transition-all flex items-center justify-center gap-2 shadow-[4px_4px_0px_0px_#000]">
                        <span>爆破创意灵感</span>
                    </button>
                </div>
            </div>

            <!-- AI Output Area -->
            <div id="aiOutput" class="mt-8 p-6 border-2 border-black rounded-2xl bg-white hidden">
                <div class="flex items-center justify-between mb-4 border-b-2 border-black pb-2">
                    <span class="font-black" id="outputTitle">✨ 实验室报告</span>
                    <button onclick="closeOutput()" class="text-slate-400 hover:text-black">关闭 ×</button>
                </div>
                <div id="aiResponseText" class="text-slate-700 leading-relaxed whitespace-pre-wrap"></div>
            </div>
        </section>

        <!-- 第一排：才华星图 & 社交力 -->
        <section class="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div class="lg:col-span-7 lab-card p-8 md:p-12">
                <div class="flex justify-between items-start mb-10">
                    <div>
                        <h3 class="text-3xl font-black">才华星图</h3>
                        <p class="text-slate-500 text-sm italic">The Constellation of My Skills</p>
                    </div>
                    <div class="px-4 py-2 bg-teal-100 text-teal-700 font-black rounded-lg text-xs">多元复合态</div>
                </div>
                <div class="chart-wrapper">
                    <canvas id="competencyRadar"></canvas>
                </div>
            </div>

            <div class="lg:col-span-5 grid grid-cols-1 gap-8">
                <div class="lab-card p-10 bg-violet-50 flex flex-col items-center justify-center text-center">
                    <div class="text-sm font-black text-violet-600 tracking-[0.3em] uppercase mb-4">Content Reach</div>
                    <div class="text-7xl font-black text-slate-900 mb-2">12w+</div>
                    <div class="text-sm font-medium text-slate-500">社交媒体单篇最高流量</div>
                    <div class="mt-4 text-2xl">🔥</div>
                </div>
                <div class="lab-card p-10 bg-orange-50 flex flex-col items-center justify-center text-center">
                    <div class="text-sm font-black text-orange-600 tracking-[0.3em] uppercase mb-4">Deep Reading</div>
                    <div class="text-7xl font-black text-slate-900 mb-2">5000+</div>
                    <div class="text-sm font-medium text-slate-500">网文阅读积累 (洞察流行密码)</div>
                    <div class="mt-4 text-2xl">📖</div>
                </div>
            </div>
        </section>

        <!-- 第二排：成长的奥德赛 -->
        <section class="lab-card p-12 overflow-hidden bg-white/40">
            <h3 class="text-3xl font-black mb-12 text-center">成长的<span class="text-violet-600">奥德赛</span></h3>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                <div class="hidden md:block absolute top-12 left-0 w-full h-1 bg-black opacity-10 -z-10"></div>
                <div class="space-y-4">
                    <div class="w-12 h-12 bg-teal-400 border-2 border-black rounded-xl flex items-center justify-center font-black text-xl shadow-[4px_4px_0px_0px_#000]">01</div>
                    <h4 class="font-black text-lg">天大启航</h4>
                    <p class="text-sm text-slate-500">建筑学逻辑训练 + 汉语言文学审美，确立双核大脑。</p>
                </div>
                <div class="space-y-4">
                    <div class="w-12 h-12 bg-orange-400 border-2 border-black rounded-xl flex items-center justify-center font-black text-xl shadow-[4px_4px_0px_0px_#000]">02</div>
                    <h4 class="font-black text-lg">政院磨砺</h4>
                    <p class="text-sm text-slate-500">中建院项目策划与住建委政策研究，打通实战全链路。</p>
                </div>
                <div class="space-y-4">
                    <div class="w-12 h-12 bg-violet-400 border-2 border-black rounded-xl flex items-center justify-center font-black text-xl shadow-[4px_4px_0px_0px_#000]">03</div>
                    <h4 class="font-black text-lg">安仁巅峰</h4>
                    <p class="text-sm text-slate-500">主导 5A 景区提升。创新策划沉浸叙事，见证价值飞跃。</p>
                </div>
                <div class="space-y-4">
                    <div class="w-12 h-12 bg-pink-400 border-2 border-black rounded-xl flex items-center justify-center font-black text-xl shadow-[4px_4px_0px_0px_#000]">04</div>
                    <h4 class="font-black text-lg">字节进化</h4>
                    <p class="text-sm text-slate-500">互联网大厂高压质控，掌握数字时代的高效生产工具。</p>
                </div>
            </div>
        </section>

        <!-- 第三排：明星项目 深度实验室 -->
        <section class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div class="lab-card p-10 flex flex-col">
                <div class="flex items-center gap-4 mb-8">
                    <div class="p-3 bg-black text-white rounded-2xl text-2xl font-black italic">5A</div>
                    <h3 class="text-2xl font-black">安仁古镇：文旅炼金术</h3>
                </div>
                <p class="text-slate-600 mb-8 leading-relaxed">
                    在安仁古镇的项目中，我通过对红色文化的基因重组，结合沉浸式剧本杀与NFT数字藏品，打造了一场跨时空的文化交互体验。
                </p>
                <div class="chart-wrapper mt-auto">
                    <canvas id="anrenChart"></canvas>
                </div>
            </div>

            <div class="lab-card p-10 flex flex-col bg-teal-50/50">
                <div class="flex items-center gap-4 mb-8">
                    <div class="p-3 bg-teal-500 text-white rounded-2xl text-2xl">🐱</div>
                    <h3 class="text-2xl font-black">人猫共处：废地觉醒</h3>
                </div>
                <p class="text-slate-600 mb-8 leading-relaxed">
                    7周时间，从0到1。我们精准挖掘师生与流浪猫的需求，将废弃场地改造为充满温情的互动坐标。
                </p>
                <div class="grid grid-cols-2 gap-4">
                    <div class="p-6 bg-white border-2 border-black rounded-2xl">
                        <div class="text-3xl font-black mb-1">7 Wks</div>
                        <div class="text-xs text-slate-500 uppercase font-bold">全流程交付</div>
                    </div>
                    <div class="p-6 bg-white border-2 border-black rounded-2xl">
                        <div class="text-3xl font-black mb-1">Impact</div>
                        <div class="text-xs text-slate-500 uppercase font-bold">校内外好评</div>
                    </div>
                </div>
                <div class="mt-8 text-6xl text-center opacity-10">🐾🐾🐾</div>
            </div>
        </section>

        <!-- 第四排：数字军火库 -->
        <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="lab-card p-10">
                <h4 class="text-xl font-black mb-8 flex items-center gap-3">
                    <span class="p-2 bg-teal-400 rounded-lg">🎨</span> 设计与建构套件
                </h4>
                <div class="chart-wrapper" style="height: 280px;">
                    <canvas id="designSkillsChart"></canvas>
                </div>
            </div>
            <div class="lab-card p-10">
                <h4 class="text-xl font-black mb-8 flex items-center gap-3">
                    <span class="p-2 bg-orange-400 rounded-lg">📊</span> 逻辑与数据套件
                </h4>
                <div class="chart-wrapper" style="height: 280px;">
                    <canvas id="dataSkillsChart"></canvas>
                </div>
            </div>
        </section>

    </main>

    <footer class="py-32 text-center">
        <div class="floating inline-block">
            <h2 class="text-5xl font-black mb-12 tracking-tighter">
                期待在<span class="text-teal-500">商业空间</span>中 <br>
                与您共同<span class="text-orange-500">爆破灵感</span>
            </h2>
        </div>
        <br>
        <button class="px-16 py-5 bg-black text-white rounded-full font-black text-xl hover:bg-violet-600 transition-all shadow-[8px_8px_0px_0px_rgba(45,212,191,1)]">
            入驻我的创意实验室
        </button>
        <div class="mt-20 text-slate-400 text-xs tracking-[1em] font-black uppercase">
            SYLVIA STUDIO • 2025 ALL RIGHTS RESERVED
        </div>
    </footer>

    <script>
        // --- 错误预防与异步库加载 ---
        window.addEventListener('load', function() {
            initApp();
        });

        // --- Gemini API 集成 ---
        const apiKey = "";
        const SYLVIA_BIO = `Sylvia 是一名具有建筑学（天津大学）和汉语言文学双背景的叙事建筑师。
        核心优势：空间策划、投资回报ROI分析、品牌营销策划。
        经历：安仁古镇5A升级（数字藏品、沉浸式剧本杀）、字节跳动质控运营、校园建构项目（7周完成人猫互动空间）。
        技能：Python, SPSS, AutoCAD, PS/AI, Stable Diffusion, 文案创作。`;

        async function callGemini(prompt, systemInstruction) {
            const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
            const payload = {
                contents: [{ parts: [{ text: prompt }] }],
                systemInstruction: { parts: [{ text: systemInstruction }] }
            };

            const delays = [1000, 2000, 4000, 8000, 16000];
            for (let i = 0; i < 5; i++) {
                try {
                    const response = await fetch(url, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload)
                    });
                    if (!response.ok) throw new Error('API Request Failed');
                    const data = await response.json();
                    return data.candidates?.[0]?.content?.parts?.[0]?.text || "抱歉，实验室内暂时无法生成内容。";
                } catch (e) {
                    if (i === 4) return "连接超时或 API 调用失败，请稍后重试。";
                    await new Promise(r => setTimeout(r, delays[i]));
                }
            }
        }

        async function analyzeFit() {
            const jd = document.getElementById('jobDescription').value;
            if (!jd) return;
            
            const btn = document.getElementById('analyzeBtn');
            const output = document.getElementById('aiOutput');
            const responseText = document.getElementById('aiResponseText');
            
            btn.disabled = true;
            btn.innerHTML = "<span class='ai-pulse'>✨ 分析中...</span>";
            output.classList.remove('hidden');
            responseText.innerText = "正在调取多维数据进行匹配...";

            const result = await callGemini(
                `职位描述：\n${jd}\n\n请分析 Sylvia 与此岗位的匹配度。分核心匹配点、潜在增量价值、面试切入点回答。`,
                `你现在是 Sylvia 的数字实验室助理。语气：专业、犀利、有创意。背景：${SYLVIA_BIO}`
            );
            responseText.innerText = result;
            btn.disabled = false;
            btn.innerHTML = "<span>生成匹配度报告</span>";
        }

        async function generateIdea() {
            const topic = document.getElementById('creativeTopic').value;
            if (!topic) return;
            
            const btn = document.getElementById('generateBtn');
            const output = document.getElementById('aiOutput');
            const responseText = document.getElementById('aiResponseText');
            
            btn.disabled = true;
            btn.innerHTML = "<span class='ai-pulse'>✨ 构思中...</span>";
            output.classList.remove('hidden');
            responseText.innerText = "正在基于叙事建筑学进行策划...";

            const result = await callGemini(
                `主题：${topic}。策划一个创新文旅项目思路。含响亮标题、空间叙事创意点、商业价值。`,
                `你现在是叙事建筑师 Sylvia 本人。语气：感性理性交织。背景：${SYLVIA_BIO}`
            );
            responseText.innerText = result;
            btn.disabled = false;
            btn.innerHTML = "<span>爆破创意灵感</span>";
        }

        function closeOutput() {
            document.getElementById('aiOutput').classList.add('hidden');
        }

        // --- 绘图逻辑与安全执行 ---
        function wrapLabel(label) {
            if (typeof label !== 'string' || label.length <= 16) return label;
            const words = label.split(' ');
            const lines = [];
            let currentLine = words[0];
            for (let i = 1; i < words.length; i++) {
                if (currentLine.length + 1 + words[i].length <= 16) {
                    currentLine += ' ' + words[i];
                } else {
                    lines.push(currentLine);
                    currentLine = words[i];
                }
            }
            lines.push(currentLine);
            return lines;
        }

        const commonTooltip = {
            backgroundColor: '#000',
            titleFont: { family: 'Noto Sans SC', size: 14, weight: '900' },
            bodyFont: { family: 'Noto Sans SC', size: 12 },
            padding: 16,
            cornerRadius: 12,
            callbacks: {
                title: (tooltipItems) => {
                    const item = tooltipItems[0];
                    const label = item.chart.data.labels[item.dataIndex];
                    return Array.isArray(label) ? label.join(' ') : label;
                }
            }
        };

        function renderLab() {
            try {
                // Chart.js 全局配置
                if (typeof Chart !== 'undefined') {
                    Chart.defaults.color = '#334155';
                    Chart.defaults.font.family = "'Noto Sans SC', sans-serif";

                    new Chart(document.getElementById('competencyRadar').getContext('2d'), {
                        type: 'radar',
                        data: {
                            labels: ['空间叙事能力', '投研ROI分析', '品牌创意逻辑', '内容爆点挖掘', '敏捷项目统筹'].map(wrapLabel),
                            datasets: [{
                                data: [95, 88, 92, 85, 90],
                                backgroundColor: 'rgba(45, 212, 191, 0.2)',
                                borderColor: '#000',
                                pointBackgroundColor: '#F97316',
                                pointBorderColor: '#000',
                                pointRadius: 6,
                                borderWidth: 3
                            }]
                        },
                        options: {
                            maintainAspectRatio: false,
                            scales: {
                                r: {
                                    angleLines: { color: 'rgba(0,0,0,0.1)' },
                                    grid: { color: 'rgba(0,0,0,0.1)' },
                                    pointLabels: { font: { size: 12, weight: '900' }, color: '#000' },
                                    ticks: { display: false },
                                    suggestedMin: 0, suggestedMax: 100
                                }
                            },
                            plugins: { legend: { display: false }, tooltip: commonTooltip }
                        }
                    });

                    new Chart(document.getElementById('anrenChart').getContext('2d'), {
                        type: 'doughnut',
                        data: {
                            labels: ['文化基底重组', '沉浸式技术叠加', 'ROI可行性验证', '全网营销爆破'].map(wrapLabel),
                            datasets: [{
                                data: [40, 25, 20, 15],
                                backgroundColor: ['#2DD4BF', '#8B5CF6', '#F97316', '#F43F5E'],
                                borderWidth: 3,
                                borderColor: '#000'
                            }]
                        },
                        options: {
                            cutout: '75%',
                            maintainAspectRatio: false,
                            plugins: {
                                legend: { position: 'right', labels: { boxWidth: 10, padding: 15, font: { weight: 'bold' } } },
                                tooltip: commonTooltip
                            }
                        }
                    });

                    new Chart(document.getElementById('designSkillsChart').getContext('2d'), {
                        type: 'bar',
                        data: {
                            labels: ['视觉 (Ps/Ai)', '建模 (CAD/SU)', 'AI生成 (SD)', '动态剪辑'].map(wrapLabel),
                            datasets: [{
                                data: [92, 95, 88, 80],
                                backgroundColor: '#2DD4BF',
                                borderColor: '#000',
                                borderWidth: 2,
                                borderRadius: 8
                            }]
                        },
                        options: {
                            indexAxis: 'y',
                            maintainAspectRatio: false,
                            scales: {
                                x: { display: false, max: 100 },
                                y: { grid: { display: false }, ticks: { color: '#000', font: { weight: 'bold' } } }
                            },
                            plugins: { legend: { display: false }, tooltip: commonTooltip }
                        }
                    });

                    new Chart(document.getElementById('dataSkillsChart').getContext('2d'), {
                        type: 'bar',
                        data: {
                            labels: ['Python/SPSS', 'Office三件套', 'Notion/XMind', '新媒体分析'].map(wrapLabel),
                            datasets: [{
                                data: [85, 98, 92, 90],
                                backgroundColor: '#F97316',
                                borderColor: '#000',
                                borderWidth: 2,
                                borderRadius: 8
                            }]
                        },
                        options: {
                            indexAxis: 'y',
                            maintainAspectRatio: false,
                            scales: {
                                x: { display: false, max: 100 },
                                y: { grid: { display: false }, ticks: { color: '#000', font: { weight: 'bold' } } }
                            },
                            plugins: { legend: { display: false }, tooltip: commonTooltip }
                        }
                    });
                }

                // Plotly 初始化
                if (typeof Plotly !== 'undefined' && document.getElementById('jobFitFunnel')) {
                    Plotly.newPlot('jobFitFunnel', [{
                        type: 'funnel',
                        y: ["学术基因", "复合工具链", "硬核实战", "终极价值"],
                        x: [100, 85, 70, 45],
                        textinfo: "text",
                        text: ["天大建筑+文学", "跨界数字化套件", "5A景区+大厂运营", "战略投研与品牌专家"],
                        marker: {
                            color: ["#F1F5F9", "#2DD4BF", "#8B5CF6", "#F97316"],
                            line: { width: 2, color: '#000' }
                        },
                        connector: { line: { color: "rgba(0,0,0,0.1)", width: 1 } }
                    }], {
                        margin: { l: 150, r: 20, t: 0, b: 0 },
                        font: { family: "Noto Sans SC", color: "#000", size: 14, weight: 'bold' },
                        paper_bgcolor: "rgba(0,0,0,0)",
                        plot_bgcolor: "rgba(0,0,0,0)",
                        showlegend: false
                    }, {displayModeBar: false, responsive: true});
                }
            } catch (err) {
                console.error("图表渲染失败:", err);
            }
        }

        function initApp() {
            if (typeof Chart !== 'undefined' && typeof Plotly !== 'undefined') {
                renderLab();
            } else {
                setTimeout(initApp, 200);
            }
        }
    </script>
</body>
</html>
