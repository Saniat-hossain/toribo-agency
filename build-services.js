const fs = require('fs');
const base = __dirname + '/dist/';
const home = fs.readFileSync(base + 'index.html', 'utf8');

const header = home.slice(home.indexOf('<header>'), home.indexOf('</header>') + 9)
  .replace(/href="#/g, 'href="/#')
  .replace('href="/#home" class="active" aria-current="location"', 'href="/"');
const footer = home.slice(home.indexOf('<footer'), home.indexOf('</footer>') + 9)
  .replace(/href="#/g, 'href="/#');

const tool = (n, f) => `<span title="${n}"><img src="/assets/${f}" alt="${n}" width="26" height="26" decoding="async"></span>`;

const services = [
  {
    id: 'automation', img: 'hero-workflow.webp', alt: 'Connected workflow automation', kicker: '01',
    name: 'AI Automation',
    desc: 'The repetitive work that quietly eats your team’s week — captured once, then handled automatically every time it happens.',
    items: ['Repetitive task automation', 'Automated follow-up sequences', 'Data entry and syncing between tools', 'Scheduled reports and reminders', 'Lead routing and assignment', 'Internal approval flows'],
    tools: [['n8n', 'n8n.svg'], ['Make', 'tools/make.svg'], ['Zapier', 'tools/zapier.svg'], ['Google Sheets', 'tools/googlesheets.svg'], ['Airtable', 'tools/airtable.svg']]
  },
  {
    id: 'agents', img: 'hero-agents.webp', alt: 'Custom AI agent interface', kicker: '02',
    name: 'Custom AI Agents',
    desc: 'An assistant trained on your business — your services, your prices, your rules — that handles one job properly instead of everything vaguely.',
    items: ['Customer support agents', 'Lead qualification agents', 'Intake and onboarding assistants', 'Internal knowledge assistants', 'WhatsApp and web chat agents', 'Human handover when it matters'],
    tools: [['OpenAI', 'openai.svg'], ['Claude', 'tools/claude.svg'], ['Gemini', 'tools/googlegemini.svg'], ['WhatsApp', 'whatsapp.svg'], ['Notion', 'tools/notion.svg']]
  },
  {
    id: 'voice', img: 'hero-voice.webp', alt: 'AI voice agent handling a call', kicker: '03',
    name: 'Voice Agents & Call Handling',
    desc: 'Calls answered, qualified and booked — including the ones that come at 9pm, during a rush, or while everyone is with a customer.',
    items: ['Inbound call answering', 'Missed-call recovery', 'Booking appointments by voice', 'Caller qualification and routing', 'After-hours and holiday coverage', 'Call summaries sent to your team'],
    tools: [['ElevenLabs', 'tools/elevenlabs.svg'], ['Twilio', 'tools/twilio.svg'], ['WhatsApp', 'whatsapp.svg'], ['Google Calendar', 'tools/googlecalendar.svg']]
  },
  {
    id: 'bookings', img: 'hero-bookings.webp', alt: 'Connected booking confirmation', kicker: '04',
    name: 'Bookings & Customer Systems',
    desc: 'One clear path from first enquiry to confirmed booking — instead of three apps, a notebook and someone’s memory.',
    items: ['Online booking flows', 'Confirmations and reminders', 'Customer portals', 'Websites connected to the system behind them', 'Rescheduling and cancellations', 'Payment links where needed'],
    tools: [['Google Calendar', 'tools/googlecalendar.svg'], ['WhatsApp', 'whatsapp.svg'], ['Telegram', 'tools/telegram.svg'], ['Stripe', 'tools/stripe.svg'], ['Vercel', 'tools/vercel.svg']]
  },
  {
    id: 'integration', img: 'hero-integration.webp', alt: 'Systems connected together', kicker: '05',
    name: 'System Integration',
    desc: 'Your existing tools, finally talking to each other — so information is entered once and shows up everywhere it should.',
    items: ['CRM integration', 'Connecting tools you already pay for', 'One-time data cleanup and migration', 'Two-way syncing between systems', 'Custom internal tools where nothing fits', 'Access and permissions set up properly'],
    tools: [['Supabase', 'tools/supabase.svg'], ['Airtable', 'tools/airtable.svg'], ['HubSpot', 'tools/hubspot.svg'], ['Shopify', 'tools/shopify.svg'], ['n8n', 'n8n.svg']]
  },
  {
    id: 'reporting', img: 'hero-analytics.webp', alt: 'Business reporting dashboard', kicker: '06',
    name: 'Reporting & Dashboards',
    desc: 'The numbers that actually tell you what is happening — pulled together automatically, not rebuilt by hand every month.',
    items: ['Automated weekly and monthly reports', 'Live dashboards', 'Lead and booking tracking', 'Response-time visibility', 'Alerts when something looks wrong', 'Reports delivered where you already work'],
    tools: [['Google Sheets', 'tools/googlesheets.svg'], ['Supabase', 'tools/supabase.svg'], ['HubSpot', 'tools/hubspot.svg'], ['Notion', 'tools/notion.svg']]
  }
];

const cards = services.map((s, i) => `
<article class="svc-card reveal" id="${s.id}" style="--delay:${(i % 2) * 80}ms">
<figure class="svc-visual"><img src="/assets/${s.img}" alt="${s.alt}" width="900" height="600" decoding="async"${i > 1 ? ' loading="lazy"' : ''}></figure>
<div class="svc-body">
<div class="svc-head"><span class="svc-kicker">${s.kicker}</span><h2>${s.name}</h2></div>
<p class="svc-desc">${s.desc}</p>
<ul class="svc-items">${s.items.map(t => `<li>${t}</li>`).join('')}</ul>
<div class="svc-tools"><span class="svc-tools-label">Built with</span>${s.tools.map(t => tool(t[0], t[1])).join('')}</div>
</div>
</article>`).join('\n');

const page = `<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#5B32E8">
<meta name="description" content="AI automation services from Toribo Agency - workflow automation, custom AI agents, voice agents, bookings, system integration and reporting.">
<title>Services &mdash; Toribo Agency</title>
<link rel="icon" href="/assets/favicon.svg">
<link rel="stylesheet" href="/assets/fonts/fonts.css">
<link rel="stylesheet" href="/styles.css">
<script src="/app.js" defer></script>
</head><body>
<a class="skip" href="#main">Skip to content</a>
${header}
<main id="main">

<section class="svc-hero">
<div class="wrap svc-hero-inner">
<p class="eyebrow reveal">WHAT WE BUILD</p>
<h1 class="reveal">Every service here starts<br><em>with the same question.</em></h1>
<p class="svc-hero-lead reveal">Not &ldquo;which package do you want?&rdquo; but &ldquo;where is your business actually losing time?&rdquo; The answer decides which of these you need &mdash; and it is often fewer than you expect.</p>
<a class="btn primary reveal" href="/#contact">Book a Free Analysis <span aria-hidden="true">&rarr;</span></a>
</div>
</section>

<section class="section svc-list-section">
<div class="wrap svc-list">
${cards}
</div>
</section>

<section class="section svc-included-section">
<div class="wrap">
<div class="section-heading center reveal"><p class="eyebrow">EVERY PROJECT, NOT JUST SOME</p><h2>What is included<br><em>whichever service you need.</em></h2></div>
<div class="svc-included reveal">
<div class="svc-inc"><strong>A free analysis first</strong><span>We find the real problem before anything is quoted or built.</span></div>
<div class="svc-inc"><strong>A written plan</strong><span>You see exactly what will be built, and why, before work starts.</span></div>
<div class="svc-inc"><strong>Built on your tools</strong><span>We connect what you already pay for instead of replacing it.</span></div>
<div class="svc-inc"><strong>Handover and support</strong><span>Docs, training, and help when your process changes later.</span></div>
</div>
</div>
</section>

<section class="section svc-cta-section">
<div class="wrap svc-cta reveal">
<h2>Not sure which of these<br><em>your business needs?</em></h2>
<p>Most people are not. That is exactly what the free business analysis answers &mdash; in writing, with no obligation.</p>
<div class="svc-cta-row"><a class="btn primary" href="/#contact">Book a Free Analysis <span aria-hidden="true">&rarr;</span></a><a class="svc-cta-alt" href="/#packages">See how packages work</a></div>
</div>
</section>

</main>
${footer}
</body></html>`;

fs.mkdirSync(base + 'services', { recursive: true });
fs.writeFileSync(base + 'services/index.html', page, 'utf8');
console.log('services page written:', page.length, 'chars |', services.length, 'services');
