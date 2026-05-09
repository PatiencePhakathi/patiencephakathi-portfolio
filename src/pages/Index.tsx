import { useEffect, useState } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone, Sparkles, Cloud, Code2, Database, Brain, Shield, BarChart3 } from "lucide-react";
import portrait from "@/assets/patience-portrait.png";

const skills = [
  { name: "React", icon: Code2 },
  { name: "Java", icon: Code2 },
  { name: "Python", icon: Code2 },
  { name: "JavaScript", icon: Code2 },
  { name: "HTML / CSS", icon: Code2 },
  { name: "MySQL", icon: Database },
  { name: "SQL Server", icon: Database },
  { name: "Oracle Cloud", icon: Cloud },
  { name: "AWS", icon: Cloud },
  { name: "Google Cloud", icon: Cloud },
  { name: "Generative AI", icon: Brain },
  { name: "Data Science", icon: BarChart3 },
  { name: "Machine Learning", icon: Brain },
  { name: "Cybersecurity", icon: Shield },
];

const certifications = [
  { title: "Oracle Cloud Infrastructure", subtitle: "Generative AI Professional", color: "from-[hsl(214_100%_60%)] to-[hsl(199_95%_60%)]" },
  { title: "Oracle Cloud Infrastructure", subtitle: "Data Science Professional", color: "from-[hsl(214_100%_60%)] to-[hsl(199_95%_60%)]" },
  { title: "Google", subtitle: "Cybersecurity Certificate", color: "from-[hsl(14_100%_60%)] to-[hsl(35_100%_60%)]" },
  { title: "Google", subtitle: "Advanced Data Analytics", color: "from-[hsl(14_100%_60%)] to-[hsl(35_100%_60%)]" },
];

const projects = [
  {
    title: "Final Year Capstone Project",
    tag: "Applications Development",
    description: "Capstone project module showcasing full-stack application development, requirement gathering, and end-to-end delivery.",
    tech: ["React", "Java", "MySQL"],
  },
  {
    title: "IoT Smart Systems Module",
    tag: "Internet of Things",
    description: "Elective coursework exploring sensor networks, embedded systems, and cloud-connected device telemetry.",
    tech: ["Python", "MQTT", "OCI"],
  },
];

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen text-foreground">
      {/* NAV */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : ""}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#top" className="font-display font-bold text-lg tracking-tight">
            P<span className="text-gradient">P</span>.
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition">About</a>
            <a href="#skills" className="hover:text-foreground transition">Skills</a>
            <a href="#projects" className="hover:text-foreground transition">Projects</a>
            <a href="#experience" className="hover:text-foreground transition">Experience</a>
            <a href="#contact" className="hover:text-foreground transition">Contact</a>
          </div>
          <a
            href="https://github.com/PatiencePhakathi"
            target="_blank" rel="noreferrer"
            className="flex items-center gap-2 text-sm border border-border rounded-full px-4 py-2 hover:bg-secondary transition"
          >
            <Github className="w-4 h-4" /> GitHub
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="top" className="relative pt-36 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center relative">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-secondary/50 text-xs font-mono text-muted-foreground mb-6">
              <span className="w-2 h-2 rounded-full bg-[hsl(145_60%_50%)] animate-pulse" />
              Available for opportunities — South Africa
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] mb-6">
              Patience Phakathi.
              <br />
              <span className="text-gradient">IT Graduate</span> &
              <br />
              Cloud AI Specialist.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
              IT graduate and developer with a versatile foundation across <span className="text-foreground">full-stack engineering</span>, <span className="text-foreground">cloud</span>, <span className="text-foreground">data</span>, and <span className="text-foreground">AI</span>. I build pragmatic software and ship products that solve real problems.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition glow">
                View Projects <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-full font-medium hover:bg-secondary transition">
                Get in touch
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-primary/30 to-accent/20 rounded-full blur-3xl" />
            <div className="relative aspect-square rounded-[2rem] overflow-hidden border border-border bg-card">
              <img src={portrait} alt="Patience Phakathi" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-xs">
                <span className="px-2 py-1 rounded-md bg-background/70 backdrop-blur">@patiencephakathi</span>
                <span className="px-2 py-1 rounded-md bg-background/70 backdrop-blur">est. 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="px-6 py-16 border-y border-border bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-6">
            <Sparkles className="w-3.5 h-3.5" /> CERTIFICATIONS
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((c) => (
              <div key={c.subtitle} className="group relative p-5 rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/50 transition">
                <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${c.color} opacity-20 group-hover:opacity-40 blur-2xl transition`} />
                <div className="relative">
                  <div className="text-xs text-muted-foreground font-mono mb-2">{c.title}</div>
                  <div className="font-display font-semibold leading-tight">{c.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
          <div>
            <div className="text-xs font-mono text-muted-foreground mb-3">01 — ABOUT</div>
            <h2 className="font-display text-4xl font-bold">Building at the intersection of <span className="text-gradient">cloud & AI</span>.</h2>
          </div>
          <div className="lg:col-span-2 space-y-5 text-muted-foreground leading-relaxed text-lg">
            <p>
              I'm an Information Technology graduate from Cape Peninsula University of Technology, specializing in Applications Development. My focus is on bridging full-stack engineering with modern cloud and AI tooling.
            </p>
            <p>
              During my Work Integrated Learning year at <span className="text-foreground">Plum Systems</span> in Cape Town, I built responsive, mobile-first websites, contributed to client requirement gathering, and applied accessibility and performance best practices in production code.
            </p>
            <p>
              Outside of coursework, I'm earning Oracle Cloud Infrastructure certifications in <span className="text-foreground">Generative AI</span> and <span className="text-foreground">Data Science</span>, and complementing them with Google's Cybersecurity and Advanced Data Analytics programs.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-6 py-24 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-xs font-mono text-muted-foreground mb-3">02 — STACK</div>
          <h2 className="font-display text-4xl font-bold mb-12">Tools I work with.</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((s) => (
              <div key={s.name} className="group flex items-center gap-2 px-4 py-3 rounded-xl border border-border bg-card hover:border-primary/60 hover:bg-secondary transition">
                <s.icon className="w-4 h-4 text-primary" />
                <span className="font-medium">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 py-24 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-xs font-mono text-muted-foreground mb-3">03 — WORK</div>
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <h2 className="font-display text-4xl font-bold">Selected projects.</h2>
            <a href="https://github.com/PatiencePhakathi" target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1">
              See all on GitHub <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((p) => (
              <article key={p.title} className="group relative p-6 rounded-2xl border border-border bg-card hover:border-primary/60 transition flex flex-col">
                <div className="text-xs font-mono text-primary mb-3">{p.tag}</div>
                <h3 className="font-display text-xl font-semibold mb-3 leading-snug">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs font-mono px-2 py-1 rounded-md bg-secondary text-muted-foreground">{t}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="px-6 py-24 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-xs font-mono text-muted-foreground mb-3">04 — EXPERIENCE</div>
          <h2 className="font-display text-4xl font-bold mb-12">Where I've been.</h2>
          <div className="space-y-6">
            <div className="grid md:grid-cols-[200px_1fr] gap-6 p-6 rounded-2xl border border-border bg-card">
              <div className="font-mono text-sm text-muted-foreground">Jan 2025 — Dec 2025</div>
              <div>
                <h3 className="font-display text-2xl font-semibold">Web Developer <span className="text-muted-foreground text-base font-normal">— Plum Systems, Cape Town</span></h3>
                <div className="text-xs font-mono text-primary mt-1 mb-4">Work Integrated Learning</div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Built responsive, mobile-first websites with HTML, CSS, and JavaScript</li>
                  <li>• Wrote clean, maintainable, well-documented code in a team setting</li>
                  <li>• Contributed to client requirement gathering and stakeholder communication</li>
                  <li>• Applied accessibility and performance optimization to improve UX</li>
                </ul>
              </div>
            </div>
            <div className="grid md:grid-cols-[200px_1fr] gap-6 p-6 rounded-2xl border border-border bg-card">
              <div className="font-mono text-sm text-muted-foreground">Apr 2026</div>
              <div>
                <h3 className="font-display text-2xl font-semibold">Diploma in Information Technology</h3>
                <div className="text-xs font-mono text-primary mt-1 mb-4">Cape Peninsula University of Technology · Applications Development</div>
                <p className="text-muted-foreground">
                  Key modules: Application Development Practice & Theory, IoT (elective), Information Systems, Project, Project Management, Professional Practice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-24 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-xs font-mono text-muted-foreground mb-3">05 — CONTACT</div>
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">
            Let's <span className="text-gradient">build</span> something.
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Open to graduate roles, internships, and collaborative projects in cloud, AI, and full-stack development.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <a href="mailto:patiencephakathi25@gmail.com" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition glow">
              <Mail className="w-4 h-4" /> patiencephakathi25@gmail.com
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="https://linkedin.com/in/patience-phakathi-336bb8233" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-foreground transition">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a href="https://github.com/PatiencePhakathi" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-foreground transition">
              <Github className="w-4 h-4" /> GitHub
            </a>
            <span className="inline-flex items-center gap-2"><Phone className="w-4 h-4" /> 067 098 9270</span>
            <span className="inline-flex items-center gap-2"><MapPin className="w-4 h-4" /> Johannesburg, ZA</span>
          </div>
        </div>
      </section>

      <footer className="px-6 py-8 border-t border-border text-center text-xs font-mono text-muted-foreground">
        © 2026 Patience Phakathi ·
      </footer>
    </div>
  );
};

export default Index;
