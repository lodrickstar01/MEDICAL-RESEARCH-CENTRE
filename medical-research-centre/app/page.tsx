 "use client";

import { useMemo, useState } from "react";
import {
  Activity, ArrowDownRight, ArrowRight, Atom, BookOpen, Bookmark,
  Brain, Check, ChevronDown, CircleHelp, Dna, Download, Eye, FileText,
  FlaskConical, GraduationCap, HeartPulse, Library, LockKeyhole, Menu,
  Microscope, Search, ShieldCheck, Stethoscope, Users, X, Zap
} from "lucide-react";

const subjects = [
  { name: "Anatomy", icon: Brain, color: "blue", detail: "Human structure, organs and systems", count: "120+ resources" },
  { name: "Physiology", icon: HeartPulse, color: "cyan", detail: "How the human body functions", count: "95+ resources" },
  { name: "Biochemistry", icon: FlaskConical, color: "violet", detail: "Molecules, metabolism and enzymes", count: "80+ resources" },
  { name: "Dental Anatomy", icon: Activity, color: "gold", detail: "Teeth, oral structures and occlusion", count: "45+ resources" },
  { name: "Histology", icon: Microscope, color: "pink", detail: "Tissues and microscopic anatomy", count: "60+ resources" },
  { name: "Embryology", icon: Dna, color: "green", detail: "Human development from conception", count: "50+ resources" },
  { name: "Pathology", icon: Atom, color: "orange", detail: "Disease processes and mechanisms", count: "70+ resources" },
  { name: "Pharmacology", icon: Zap, color: "teal", detail: "Medicines, actions and therapeutics", count: "85+ resources" },
];

const resources = [
  { title: "OpenStax Anatomy & Physiology", kind: "Open textbook", subject: "Anatomy", meta: "Free online textbook", tag: "OPEN ACCESS" },
  { title: "Human Physiology — Study Guide", kind: "Study guide", subject: "Physiology", meta: "Revision notes", tag: "STUDY GUIDE" },
  { title: "Biochemistry Practice Questions", kind: "MCQ collection", subject: "Biochemistry", meta: "Self-assessment", tag: "MCQS" },
  { title: "Dental Anatomy Essentials", kind: "Learning resource", subject: "Dental Anatomy", meta: "Core concepts", tag: "LEARNING" },
  { title: "Histology Slide Atlas Resources", kind: "Visual learning", subject: "Histology", meta: "Microscopy learning", tag: "VISUAL" },
];

const papers = [
  { title: "Community approaches to improving health literacy", type: "Review article", authors: "Medical Research Centre community", date: "Example listing", views: "—" },
  { title: "A student-led approach to evidence-based learning", type: "Research proposal", authors: "Community submissions", date: "Example listing", views: "—" },
  { title: "Building accessible research resources in health sciences", type: "Perspective", authors: "Editorial collection", date: "Example listing", views: "—" },
];

export default function Home() {
  const [query, setQuery] = useState("");
  const [activeSubject, setActiveSubject] = useState("All");
  const [modal, setModal] = useState<"login" | "register" | "research" | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [notice, setNotice] = useState("");

  const filteredResources = useMemo(() => resources.filter((r) => {
    const matchesQuery = `${r.title} ${r.kind} ${r.subject}`.toLowerCase().includes(query.toLowerCase());
    const matchesSubject = activeSubject === "All" || r.subject === activeSubject;
    return matchesQuery && matchesSubject;
  }), [query, activeSubject]);

  function submitDemo(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setNotice("This is a design preview. Connect Supabase and a payment provider to activate accounts and membership.");
    setModal(null);
  }

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Medical Research Centre home">
          <span className="brand-mark"><Stethoscope size={28} /></span>
          <span className="brand-copy"><strong>MEDICAL RESEARCH<br />CENTRE</strong><small>Learn <b>•</b> Research <b>•</b> Advance</small></span>
        </a>
        <nav className={mobileOpen ? "nav-links nav-open" : "nav-links"}>
          <a className="active" href="#home" onClick={() => setMobileOpen(false)}>Home</a>
          <a href="#library" onClick={() => setMobileOpen(false)}>Library</a>
          <a href="#research" onClick={() => setMobileOpen(false)}>Research</a>
          <a href="#mcqs" onClick={() => setMobileOpen(false)}>MCQs</a>
          <a href="#community" onClick={() => setMobileOpen(false)}>Community</a>
          <a href="#about" onClick={() => setMobileOpen(false)}>About</a>
        </nav>
        <label className="nav-search"><Search size={16} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search resources..." /></label>
        <div className="nav-actions">
          <button className="btn btn-ghost btn-small" onClick={() => setModal("login")}>Login</button>
          <button className="btn btn-primary btn-small" onClick={() => setModal("register")}>Register</button>
        </div>
        <button className="menu-button" aria-label="Toggle menu" onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X /> : <Menu />}</button>
      </header>

      {notice && <button className="notice" onClick={() => setNotice("")}>{notice} <X size={15}/></button>}

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse-dot" /> KNOWLEDGE THAT MOVES HEALTHCARE FORWARD</div>
          <h1>MEDICAL<br /><span>RESEARCH CENTRE</span></h1>
          <p className="hero-lede">Your trusted platform for medical knowledge, research discovery, and professional growth.</p>
          <div className="hero-buttons">
            <a className="btn btn-primary" href="#library">Explore the Library <ArrowRight size={17}/></a>
            <button className="btn btn-ghost" onClick={() => setModal("register")}>Become a Member</button>
          </div>
          <div className="hero-stats">
            <div><BookOpen /><strong>Open learning</strong><small>Accessible resources</small></div>
            <div><Users /><strong>Research community</strong><small>Connect and collaborate</small></div>
            <div><ShieldCheck /><strong>Evidence focused</strong><small>Responsible scholarship</small></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="visual-grid" />
          <div className="dna-art"><Dna size={190} strokeWidth={0.85}/></div>
          <div className="hero-image-overlay" />
          <div className="visual-card card-top"><Microscope size={18}/><span><b>Explore knowledge</b><small>Across health sciences</small></span></div>
          <div className="visual-card card-bottom"><Activity size={18}/><span><b>Research together</b><small>Build better evidence</small></span></div>
          <div className="hero-visual-caption"><span>01 / KNOWLEDGE</span><span>LEARN. DISCOVER. ADVANCE.</span></div>
        </div>
      </section>

      <section className="ticker" aria-label="Platform features">
        <div className="ticker-track">
          {["ANATOMY", "PHYSIOLOGY", "BIOCHEMISTRY", "DENTAL ANATOMY", "HISTOLOGY", "EMBRYOLOGY", "RESEARCH", "MCQ PRACTICE", "ANATOMY", "PHYSIOLOGY", "BIOCHEMISTRY"].map((x, i) => <span key={i}><i />{x}</span>)}
        </div>
      </section>

      <section className="section-wrap section-block" id="library">
        <div className="section-heading">
          <div><span className="eyebrow">YOUR KNOWLEDGE HUB</span><h2>Explore the <span>library.</span></h2><p>Find open textbooks, study guides, manuals, diagrams, and practice questions.</p></div>
          <a href="#resource-list" className="text-link">Browse resources <ArrowRight size={16}/></a>
        </div>
        <div className="library-toolbar">
          <div className="big-search"><Search size={19}/><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search subjects, study guides, MCQs..." /><kbd>SEARCH</kbd></div>
          <div className="filter-row">
            {["All", ...subjects.map(s => s.name)].map(s => <button key={s} onClick={() => setActiveSubject(s)} className={activeSubject === s ? "filter-chip selected" : "filter-chip"}>{s}</button>)}
          </div>
        </div>
        <div className="subject-grid">
          {subjects.map((s, i) => {
            const Icon = s.icon;
            return <button key={s.name} className={`subject-card ${s.color}`} style={{animationDelay: `${i * 60}ms`}} onClick={() => { setActiveSubject(s.name); document.getElementById("resource-list")?.scrollIntoView({behavior:"smooth"}); }}>
              <span className="subject-icon"><Icon size={25}/></span><span className="subject-count">{s.count}</span><h3>{s.name}</h3><p>{s.detail}</p><span className="card-link">Explore subject <ArrowDownRight size={15}/></span>
            </button>
          })}
        </div>
        <div id="resource-list" className="resource-section">
          <div className="subheading"><div><span className="eyebrow">START LEARNING</span><h3>Featured resources</h3></div><span className="result-count">{filteredResources.length} resources shown</span></div>
          <div className="resource-grid">
            {filteredResources.length ? filteredResources.map((r, i) => <article className="resource-card" key={r.title} style={{animationDelay:`${i*70}ms`}}>
              <div className="resource-cover"><span className="cover-mark"><BookOpen size={28}/></span><span className="cover-label">{r.subject.toUpperCase()}</span><span className="cover-lines" /></div>
              <div className="resource-info"><span className="resource-tag">{r.tag}</span><h4>{r.title}</h4><p>{r.kind} · {r.meta}</p><button className="download-link" onClick={() => setNotice("Resource links will be connected to verified open-access sources in the next implementation stage.")}>View resource <ArrowRight size={14}/></button></div>
            </article>) : <div className="empty-state"><Search/><h3>No matching resources</h3><p>Try another search term or subject.</p><button className="btn btn-ghost" onClick={() => {setQuery("");setActiveSubject("All")}}>Clear filters</button></div>}
          </div>
          <p className="fine-print">Resource titles and counts in this preview are illustrative. Only materials that are open access or properly licensed should be added.</p>
        </div>
      </section>

      <section className="research-band" id="research">
        <div className="section-wrap research-layout">
          <div className="research-intro"><span className="eyebrow">FROM QUESTIONS TO EVIDENCE</span><h2>Your research<br/><span>deserves a home.</span></h2><p>Share original studies, reviews, case reports, and proposals. Build your research profile and connect with people working toward better health.</p><button className="btn btn-primary" onClick={() => setModal("research")}>Submit research <ArrowRight size={17}/></button><div className="research-points"><span><Check size={15}/> Author attribution</span><span><Check size={15}/> Editorial review</span><span><Check size={15}/> Ethical standards</span></div></div>
          <div className="paper-panel">
            <div className="panel-head"><div><span className="eyebrow">DISCOVER IDEAS</span><h3>Research repository</h3></div><span className="live-pill"><i/> PREVIEW</span></div>
            {papers.map((p, i) => <article className="paper-row" key={p.title}><div className="paper-icon"><FileText size={21}/></div><div className="paper-content"><span>{p.type}</span><h4>{p.title}</h4><p>{p.authors} · {p.date}</p></div><button className="round-arrow" aria-label="View research" onClick={() => setNotice("Research records will be loaded from the database after Supabase is connected.")}><ArrowRight size={17}/></button></article>)}
            <div className="panel-foot"><span>Example titles shown for layout preview</span><a href="#community">How publishing works <ArrowRight size={14}/></a></div>
          </div>
        </div>
      </section>

      <section className="section-wrap section-block" id="mcqs">
        <div className="section-heading"><div><span className="eyebrow">LEARN BY DOING</span><h2>Make knowledge <span>stick.</span></h2><p>Practice with topic-based MCQs and understand the reasoning behind each answer.</p></div></div>
        <div className="learning-grid">
          <div className="learning-card learning-main"><div className="learning-symbol"><GraduationCap size={30}/></div><span className="eyebrow">SELF-ASSESSMENT</span><h3>Practice with purpose.</h3><p>Build confidence with subject-based quizzes, explanations, and progress tracking.</p><button className="btn btn-primary" onClick={() => setNotice("MCQ quizzes will be enabled when question banks and user accounts are connected.")}>Explore MCQs <ArrowRight size={16}/></button><div className="learning-graphic"><div/><div/><div/><div/><div/><div/><div/></div></div>
          <div className="learning-card"><div className="mini-icon"><Bookmark/></div><h3>Save your resources</h3><p>Keep useful references and return to them from your member dashboard.</p><span className="muted-link">Available with member accounts <LockKeyhole size={14}/></span></div>
          <div className="learning-card"><div className="mini-icon"><CircleHelp/></div><h3>Learn the reasoning</h3><p>Use explanations to understand concepts instead of relying on memorisation alone.</p><span className="muted-link">Built for deeper learning <ArrowRight size={14}/></span></div>
        </div>
      </section>

      <section className="membership-section" id="community">
        <div className="section-wrap membership-layout">
          <div className="membership-copy"><span className="eyebrow">JOIN THE COMMUNITY</span><h2>Better knowledge.<br/><span>Better healthcare.</span></h2><p>Connect with medical students, healthcare professionals, educators, and researchers in one growing knowledge community.</p><div className="benefit-list"><div><Check/> Build your professional profile</div><div><Check/> Submit and track research</div><div><Check/> Bookmark learning resources</div><div><Check/> Discover research collaborators</div></div><button className="btn btn-primary" onClick={() => setModal("register")}>Create your account <ArrowRight size={16}/></button></div>
          <div className="membership-card"><div className="member-crown"><ShieldCheck size={25}/></div><span className="eyebrow">MEMBERSHIP</span><h3>Become a real member.</h3><p>Unlock member features and take part in the research community.</p><div className="price"><sup>$</sup>1<span>one-time registration fee · proposed</span></div><ul><li><Check/> Member dashboard</li><li><Check/> Research submission tools</li><li><Check/> Saved resources and profile</li><li><Check/> Community updates</li></ul><button className="btn btn-primary full" onClick={() => setModal("register")}>Join the community <ArrowRight size={16}/></button><small>Payment is not active in this preview. Never submit payment details here.</small></div>
        </div>
      </section>

      <section className="section-wrap section-block" id="about">
        <div className="section-heading"><div><span className="eyebrow">BUILT ON TRUST</span><h2>Designed for <span>discovery.</span></h2><p>Useful tools, responsible research practices, and a welcoming place to learn together.</p></div></div>
        <div className="values-grid">
          <div className="value-card"><div className="mini-icon"><Library/></div><h3>Open knowledge</h3><p>Prioritise open-access materials and link to legitimate sources.</p></div>
          <div className="value-card"><div className="mini-icon"><ShieldCheck/></div><h3>Research integrity</h3><p>Support transparent authorship, ethical standards, and editorial review.</p></div>
          <div className="value-card"><div className="mini-icon"><Users/></div><h3>Collaboration</h3><p>Bring learners and professionals together around shared questions.</p></div>
          <div className="value-card"><div className="mini-icon"><Zap/></div><h3>Accessible learning</h3><p>Keep the experience clear, responsive, and friendly on different devices.</p></div>
        </div>
      </section>

      <footer className="footer">
        <div className="section-wrap footer-top"><a className="brand" href="#home"><span className="brand-mark"><Stethoscope size={27}/></span><span className="brand-copy"><strong>MEDICAL RESEARCH<br/>CENTRE</strong><small>Learn <b>•</b> Research <b>•</b> Advance</small></span></a><p>Knowledge for learners. A platform for researchers.<br/>A shared commitment to better healthcare.</p><div className="footer-links"><a href="#library">Library</a><a href="#research">Research</a><a href="#community">Membership</a><a href="#about">About</a></div></div>
        <div className="section-wrap footer-bottom"><span>© 2026 Medical Research Centre · Website preview</span><span>Privacy · Terms · Research ethics</span><span>Learn better. Research better. Advance healthcare.</span></div>
      </footer>

      {modal && <div className="modal-backdrop" role="presentation" onMouseDown={(e) => {if(e.target === e.currentTarget) setModal(null)}}>
        <div className="modal-card" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <button className="modal-close" aria-label="Close dialog" onClick={() => setModal(null)}><X size={19}/></button>
          <span className="eyebrow">{modal === "login" ? "WELCOME BACK" : modal === "register" ? "JOIN THE COMMUNITY" : "CONTRIBUTE TO KNOWLEDGE"}</span>
          <h2 id="modal-title">{modal === "login" ? "Login to your account" : modal === "register" ? "Create your account" : "Submit your research"}</h2>
          <p className="modal-desc">{modal === "register" ? "Start your Medical Research Centre membership registration." : modal === "login" ? "Member authentication will be connected to Supabase." : "Share the basics of your work. Secure file uploads will be enabled after setup."}</p>
          <form onSubmit={submitDemo}>
            {modal === "register" && <label>Full name<input required placeholder="Enter your full name"/></label>}
            <label>Email address<input type="email" required placeholder="you@example.com"/></label>
            {modal !== "research" && <label>Password<input type="password" required minLength={8} placeholder="At least 8 characters"/></label>}
            {modal === "register" && <label>Your role<select required defaultValue=""><option value="" disabled>Select your role</option><option>Medical student</option><option>Doctor / physician</option><option>Dentist</option><option>Nurse / midwife</option><option>Researcher / educator</option><option>Other healthcare professional</option></select></label>}
            {modal === "research" && <><label>Research title<input required placeholder="Title of your work"/></label><label>Submission type<select defaultValue="Original research"><option>Original research</option><option>Review article</option><option>Case report</option><option>Research proposal</option></select></label></>}
            {modal === "register" && <p className="form-note"><ShieldCheck size={15}/> Proposed fee: $1 one-time. Payment is not connected in this demo.</p>}
            <button className="btn btn-primary full" type="submit">{modal === "login" ? "Continue to login" : modal === "register" ? "Continue registration" : "Save submission draft"} <ArrowRight size={16}/></button>
          </form>
          <p className="modal-switch">{modal === "login" ? "New here? " : "Already have an account? "}<button onClick={() => setModal(modal === "login" ? "register" : "login")}>{modal === "login" ? "Register" : "Login"}</button></p>
        </div>
      </div>}
    </main>
  );
}
