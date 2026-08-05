'use client'
import { useEffect } from 'react'

const CSS = `
  .cvwrap{min-height:100vh;background:#0a0a0a;padding:0 0 60px}
  .cvbar{position:sticky;top:0;z-index:20;display:flex;justify-content:space-between;align-items:center;
    padding:14px 20px;background:rgba(10,10,10,.92);backdrop-filter:blur(8px);border-bottom:1px solid rgba(255,255,255,.06)}
  .cvbar a,.cvbar button{font-size:13px;font-weight:700;text-decoration:none;cursor:pointer;border:0}
  .cvback{color:#9aa3b2}
  .cvback:hover{color:#fff}
  .cvdl{background:linear-gradient(90deg,#f97316,#ea580c);color:#fff;padding:9px 16px;border-radius:9px}
  .cvdl:hover{filter:brightness(1.08)}
  .sheet{max-width:820px;margin:30px auto;background:#fff;color:#222;padding:46px 52px;border-radius:6px;
    box-shadow:0 8px 40px rgba(0,0,0,.5);font-family:'Segoe UI',-apple-system,Roboto,Helvetica,Arial,sans-serif;line-height:1.45;font-size:15px}
  .firebar{height:5px;border-radius:5px 5px 0 0;margin:-46px -52px 26px;background:linear-gradient(90deg,#fbbf24,#f97316,#ea580c,#ef4444)}
  .nm{font-size:32px;font-weight:800;color:#111;letter-spacing:.3px;background:linear-gradient(90deg,#f97316,#ea580c,#ef4444);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
  .nm small{font-size:14px;color:#777;font-weight:600;-webkit-text-fill-color:#777}
  .role{font-size:16px;color:#ea580c;font-weight:700;margin-top:4px}
  .ct{font-size:13px;color:#444;margin-top:8px}
  .ct a{color:#ea580c;text-decoration:none}
  h2{font-size:15px;color:#ea580c;text-transform:uppercase;letter-spacing:1.5px;border-bottom:2px solid #f1d9c6;padding-bottom:4px;margin:22px 0 10px}
  .sum{font-size:14.5px;color:#333}
  .row{display:flex;justify-content:space-between;align-items:baseline;gap:14px}
  .job{font-weight:700;color:#111;font-size:15px}
  .org{color:#ea580c;font-weight:600}
  .meta{font-size:12.5px;color:#777;white-space:nowrap}
  .skills{font-size:14px;color:#333}
  .skills b{color:#111}
  ul{margin:6px 0 12px 18px}
  li{margin:3px 0;font-size:14px;color:#333}
  @media print{
    @page{size:A4;margin:14mm 15mm}
    .cvwrap{background:#fff;padding:0}
    .cvbar{display:none}
    .sheet{box-shadow:none;margin:0;max-width:none;padding:0;border-radius:0;-webkit-print-color-adjust:exact;print-color-adjust:exact}
    .nm{-webkit-text-fill-color:#ea580c}
  }
`

export default function CV() {
  useEffect(() => { document.title = 'Isaac Yap — CV' }, [])
  return (
    <div className="cvwrap">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="cvbar">
        <a className="cvback" href="/">← isaacyap.ai</a>
        <button className="cvdl" onClick={() => window.print()}>↓ Save as PDF</button>
      </div>

      <div className="sheet">
        <div className="firebar" />
        <div className="nm">Isaac Yap <small>(Yap Weng Choy)</small></div>
        <div className="role">AI Solutions Architect · Claude Developer · Anthropic Claude Partner Network</div>
        <div className="ct">📍 Singapore / Johor Bahru — currently working in Singapore &nbsp;|&nbsp; ✉️ <a href="mailto:isaac@isaacyap.ai">isaac@isaacyap.ai</a> &nbsp;|&nbsp; 📱 +65 8026 8821 &nbsp;|&nbsp; <a href="https://www.linkedin.com/in/isaacyap90">in/isaacyap90</a> &nbsp;|&nbsp; <a href="https://isaacyap.ai">isaacyap.ai</a></div>

        <h2>Summary</h2>
        <div className="sum">AI Solutions Architect and member of Anthropic&rsquo;s Claude Partner Network. I build, ship, and support production AI systems on the Claude API, MCP, and Agent SDK, and I teach others to do the same. I troubleshoot live Claude integrations daily and translate complex AI tooling into clear, patient guidance for technical and non-technical users alike &mdash; the core of great product support.</div>

        <h2>Core Strengths</h2>
        <div className="skills">
          <b>Claude &amp; AI tooling:</b> Claude API · MCP (Model Context Protocol) · Agent SDK · Claude Code · prompt engineering<br/>
          <b>Product support:</b> technical troubleshooting of live integrations (auth, rate limits, tool use, agent behaviour) · customer enablement &amp; onboarding · clear written communication<br/>
          <b>Build:</b> Python · JavaScript/TypeScript · React · Supabase · REST API integration · WhatsApp Business API<br/>
          <b>Security:</b> Google Cybersecurity Professional Certificate &nbsp;·&nbsp; <b>Languages:</b> English, Mandarin, Malay (full APAC coverage)
        </div>

        <h2>Experience</h2>
        <div className="row"><div><span className="job">AI Solutions Architect / Founder</span> — <span className="org">IonicX AI (Singapore-registered AI studio)</span></div><div className="meta">2025 – Present · Singapore &amp; Malaysia</div></div>
        <ul>
          <li>Design, build, and support production AI applications for SME clients on the Claude API, MCP, and Agent SDK — chatbots, scheduling agents, admin dashboards, and full custom systems.</li>
          <li>Delivered end-to-end client products incl. shrimphome.sg, tattbylyds.com, and ultimatebeatdownfl.com (online fighter registration + a digital judging scorecard).</li>
          <li>Provide ongoing technical support to clients: diagnosing and resolving real integration and product issues post-launch.</li>
          <li>Member of Anthropic&rsquo;s Claude Partner Network (2026).</li>
        </ul>

        <div className="row"><div><span className="job">Instructor — AI &amp; Claude Tooling</span> — <span className="org">IonicX Academy</span></div><div className="meta">2026 · Singapore &amp; Malaysia</div></div>
        <ul>
          <li>Built and teach courses on Claude Code and the MCP SDK, turning advanced AI developer tooling into beginner-friendly, step-by-step lessons — demonstrated ability to explain complex products simply.</li>
        </ul>

        <div className="row"><div><span className="job">Chief Official</span> — <span className="org">Ultimate Beatdown (combat-sports league)</span></div><div className="meta">2011 – Present · Malaysia</div></div>
        <ul>
          <li>Lead officiating for a long-running event series: real-time judgment, dispute resolution, and composure under pressure — directly transferable to high-stakes customer escalations.</li>
        </ul>

        <h2>Certifications</h2>
        <ul>
          <li><b>Anthropic Claude Partner Network</b> — IonicX AI (2026)</li>
          <li><b>Google Cybersecurity Professional Certificate</b> — 8-course program (2024)</li>
          <li><b>NVIDIA Connect</b> — Member</li>
        </ul>

        <h2>Education</h2>
        <div className="row"><div><span className="job">Professional Diploma in Business Management</span> — <span className="org">UTMSPACE, Universiti Teknologi Malaysia</span></div><div className="meta">2024</div></div>
      </div>
    </div>
  )
}
