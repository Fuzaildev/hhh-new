import React, {useState, useRef, useEffect} from 'react';
import {createRoot} from 'react-dom/client';
import {HashRouter, Routes, Route, Link, useNavigate} from 'react-router-dom';
import {ArrowUpRight, ArrowRight, ArrowLeft, Phone, Search, Menu, X, CalendarDays, Stethoscope, FileText, FlaskConical, HeartPulse, Brain, Eye, Bone, Baby, Leaf, Droplets, ShieldCheck, Clock3, Users, Hospital, MapPin, Mail, CheckCircle2, Plus, Minus, Star, Award, Languages, GraduationCap, Activity, ChevronRight} from 'lucide-react';
import './styles.css';

const images={hero:'/images/hero.jpg',care:'/images/care.jpg',consult:'/images/consult.jpg',team:'/images/team.jpg'};
const departments=[['Diabetes & Endocrinology',Droplets],['Clinical Hematology',HeartPulse],['Cardiothoracic Surgery',HeartPulse],['Obstetrics & Gynaecology',Baby],['Neurosurgery',Brain],['Urology & Andrology',ShieldCheck],['Diet & Nutrition',Leaf],['Dermatology',Bone],['Ophthalmology',Eye]];
const services=[{title:'Day care services',image:images.care,copy:'Thoughtful, attentive care and a comfortable environment, so you can focus on feeling better.'},{title:'Specialist consultations',image:images.consult,copy:'The right expertise, a listening ear, and a personalized approach to your wellbeing.'},{title:'Comprehensive health checks',image:images.team,copy:'Understand your health with preventive screening and guidance at every step.'}];
const nav=[['Home','/','home'],['Doctors','/doctors','doctors'],['Departments','#departments','departments'],['Services','#services','services'],['Packages','#packages','packages'],['Telemedicine','#telemedicine','telemedicine'],['About us','#about','about'],['Contact','#contact','contact']];
function Logo(){return <Link to="/" className="logo" aria-label="Happy Healthy Hospital home">Happy<span> Healthy</span><i/><small>HOSPITAL</small></Link>}

// ----- Doctor dataset for the Doctors page -----
const DOCTORS=[
  {id:'sarah-chen',name:'Dr. Sarah Chen',specialty:'Cardiothoracic Surgery',dept:'Cardiothoracic Surgery',exp:14,rating:4.9,langs:['English','Mandarin'],avail:'Today',img:'https://ui-avatars.com/api/?name=Sarah+Chen&background=1a365d&color=ffffff&size=320&bold=true&font-size=0.42',bio:'Minimally invasive cardiac surgery and valve repair specialist.'},
  {id:'arjun-rao',name:'Dr. Arjun Rao',specialty:'Diabetes & Endocrinology',dept:'Diabetes & Endocrinology',exp:11,rating:4.8,langs:['English','Hindi','Telugu'],avail:'Tomorrow',img:'https://ui-avatars.com/api/?name=Arjun+Rao&background=2c5282&color=ffffff&size=320&bold=true&font-size=0.42',bio:'Lifestyle-first diabetes management and metabolic care.'},
  {id:'lena-hart',name:'Dr. Lena Hart',specialty:'Clinical Hematology',dept:'Clinical Hematology',exp:18,rating:5.0,langs:['English','German'],avail:'Today',img:'https://ui-avatars.com/api/?name=Lena+Hart&background=3b6ea5&color=ffffff&size=320&bold=true&font-size=0.42',bio:'Diagnosis and treatment of complex blood disorders.'},
  {id:'omar-farooq',name:'Dr. Omar Farooq',specialty:'Neurosurgery',dept:'Neurosurgery',exp:22,rating:4.9,langs:['English','Arabic','Urdu'],avail:'Thu',img:'https://ui-avatars.com/api/?name=Omar+Farooq&background=0a1633&color=ffffff&size=320&bold=true&font-size=0.42',bio:'Micro-neurosurgery and spine intervention specialist.'},
  {id:'maya-pillai',name:'Dr. Maya Pillai',specialty:'Obstetrics & Gynaecology',dept:'Obstetrics & Gynaecology',exp:13,rating:4.9,langs:['English','Malayalam','Tamil'],avail:'Today',img:'https://ui-avatars.com/api/?name=Maya+Pillai&background=2c5282&color=ffffff&size=320&bold=true&font-size=0.42',bio:'High-risk pregnancy care and minimally invasive gynaecology.'},
  {id:'daniel-cole',name:'Dr. Daniel Cole',specialty:'Urology & Andrology',dept:'Urology & Andrology',exp:9,rating:4.7,langs:['English','Spanish'],avail:'Fri',img:'https://ui-avatars.com/api/?name=Daniel+Cole&background=3b6ea5&color=ffffff&size=320&bold=true&font-size=0.42',bio:'Robotic-assisted urological surgery and men\u2019s health.'},
  {id:'priya-nair',name:'Dr. Priya Nair',specialty:'Diet & Nutrition',dept:'Diet & Nutrition',exp:7,rating:4.8,langs:['English','Hindi','Marathi'],avail:'Today',img:'https://ui-avatars.com/api/?name=Priya+Nair&background=1a365d&color=ffffff&size=320&bold=true&font-size=0.42',bio:'Personalized nutrition plans for chronic conditions.'},
  {id:'felix-tan',name:'Dr. Felix Tan',specialty:'Ophthalmology',dept:'Ophthalmology',exp:16,rating:4.9,langs:['English','Mandarin'],avail:'Tomorrow',img:'https://ui-avatars.com/api/?name=Felix+Tan&background=2c5282&color=ffffff&size=320&bold=true&font-size=0.42',bio:'Refractive surgery and advanced cataract procedures.'},
  {id:'anita-shah',name:'Dr. Anita Shah',specialty:'Dermatology',dept:'Dermatology',exp:10,rating:4.8,langs:['English','Gujarati'],avail:'Today',img:'https://ui-avatars.com/api/?name=Anita+Shah&background=3b6ea5&color=ffffff&size=320&bold=true&font-size=0.42',bio:'Cosmetic and medical dermatology for all skin types.'}
];

// ----- Shared layout: header + footer -----
function Header({active,onOpen}){
  const [menu,setMenu]=useState(false);
  return <header className="header"><div className="container masthead"><Logo/><span className="brand-note">A little care. A healthier tomorrow.</span><div className="header-actions"><button className="hotline" onClick={()=>onOpen('contact')}><Phone size={15}/> Let's talk</button><button className="icon-button search-toggle" aria-label="Search specialties" onClick={()=>onOpen('search')}><Search size={20}/></button><button className="icon-button mobile-toggle" aria-label="Toggle navigation" aria-expanded={menu} onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></div></div><nav className={`container navigation ${menu?'is-open':''}`} aria-label="Main navigation">{nav.map(([name,to,id])=>to.startsWith('/')?<Link key={id} to={to} className={active===id?'active':''} onClick={()=>setMenu(false)}>{name}</Link>:<a key={id} href={to} className={active===id?'active':''} onClick={()=>setMenu(false)}>{name}</a>)}<button className="nav-book" onClick={()=>onOpen('appointment')}>Book an appointment <ArrowUpRight size={15}/></button></nav></header>;
}

function Footer({onOpen}){
  return <footer><div className="container footer-top"><div><Logo/><p>Thoughtful care.<br/>For a healthier tomorrow.</p></div><div><h4>Explore</h4><Link to="/">Home</Link><Link to="/doctors">Doctors</Link><a href="#about">About us</a><a href="#contact">Contact</a></div><div><h4>For patients</h4><Link to="/doctors">Find a doctor</Link><a href="#departments">Departments</a><a href="#packages">Health packages</a><a href="#telemedicine">Telemedicine</a></div><div className="footer-ctas"><button className="button dark" onClick={()=>onOpen('appointment')}>Book an appointment <ArrowUpRight size={17}/></button><button className="button border" onClick={()=>onOpen('collection')}>Home sample collection <ArrowUpRight size={17}/></button></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Happy Healthy Hospital · Frontend concept</span><span>Design reference: hospital care website</span><span>Demo only — not a medical service</span></div></footer>;
}

// ----- Modal shared between pages -----
function Modal({modal,setModal,filter,setFilter}){
  const dialog=useRef(null); const previousFocus=useRef(null); const [sent,setSent]=useState(false); const [search,setSearch]=useState('');
  const close=()=>setModal(null);
  useEffect(()=>{if(!modal)return;previousFocus.current=document.activeElement;setSent(false);document.body.style.overflow='hidden';const t=setTimeout(()=>dialog.current?.querySelector('button')?.focus(),0);const key=e=>{if(e.key==='Escape')close();if(e.key==='Tab'){const items=dialog.current?.querySelectorAll('button,input,select,textarea,a[href]');if(!items?.length)return;const f=items[0],l=items[items.length-1];if(e.shiftKey&&document.activeElement===f){e.preventDefault();l.focus()}else if(!e.shiftKey&&document.activeElement===l){e.preventDefault();f.focus()}}};window.addEventListener('keydown',key);return()=>{clearTimeout(t);document.body.style.overflow='';window.removeEventListener('keydown',key);previousFocus.current?.focus()}},[modal]);
  if(!modal)return null;
  const filtered=departments.filter(([name])=>(filter==='All specialties'||name===filter)&&name.toLowerCase().includes(search.toLowerCase()));
  return <div className="modal-backdrop" onClick={e=>{if(e.target===e.currentTarget)close()}}><div className="modal" role="dialog" aria-modal="true" aria-labelledby="dialog-title" ref={dialog}><button className="modal-close icon-button" aria-label="Close dialog" onClick={close}><X/></button><span className="eyebrow">LET'S TAKE THE NEXT STEP</span><h2 id="dialog-title">{modal==='search'?'Find your specialist':modal==='portal'?'Your patient portal':modal==='contact'?'We\u2019re here to listen':modal==='collection'?'Care at your doorstep':modal==='telemedicine'?'Connect from home':modal==='appointment'?'Make time for your health':modal==='packages'?'Your wellness journey':modal}</h2>
  {modal==='search'?<><p>Browse departments and request a consultation.</p><div className="search-input"><Search size={18}/><input autoComplete="off" aria-label="Search departments" value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search a department…"/></div><select aria-label="Specialty filter" value={filter} onChange={e=>setFilter(e.target.value)}><option>All specialties</option>{departments.map(([n])=><option key={n}>{n}</option>)}</select><div className="search-results">{filtered.length?filtered.map(([name,Icon])=><button key={name} onClick={()=>{setFilter(name);setModal('appointment')}}><Icon size={22}/><span>{name}</span><ArrowRight size={17}/></button>):<p>No matching departments. Try another search.</p>}</div><p className="demo-note">Specialty browsing demo. No live doctor availability is connected.</p></>:modal==='portal'?<><p>Your health information deserves a secure home.</p><div className="portal-note"><ShieldCheck size={35}/><h3>Secure portal integration required</h3><p>This frontend does not collect passwords or display medical records. Connect your approved authentication and patient records provider to enable this feature.</p></div><button className="button dark" onClick={()=>setModal('contact')}>Contact the care team <ArrowUpRight size={17}/></button></>:sent?<div className="success-state" role="status"><CheckCircle2 size={48}/><h3>Your demo request is complete.</h3><p>Validation was successful. Nothing has been sent or stored. Connect a booking API to enable real appointment requests.</p><button className="button dark" onClick={close}>Back to the website <ArrowRight size={17}/></button></div>:<><p>{modal==='collection'?'Request a preferred collection time.':modal==='contact'?'Leave a message for the care team.':'Choose a convenient time to start your care journey.'}</p><form onSubmit={e=>{e.preventDefault();setSent(true)}}><label>Full name<input required name="name" autoComplete="name" placeholder="Your full name"/></label><label>Email address<input required type="email" name="email" autoComplete="email" placeholder="you@example.com"/></label>{modal!=='contact'&&<><label>Specialty<select value={filter} onChange={e=>setFilter(e.target.value)} required><option value="All specialties">General consultation</option>{departments.map(([n])=><option key={n}>{n}</option>)}</select></label><label>Preferred date<input required type="date" min={`${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2,'0')}-${String(new Date().getDate()).padStart(2,'0')}`} name="date"/></label></>}{modal==='contact'&&<label>Message<textarea required rows={3} placeholder="How can we help? Please do not include sensitive medical information."/></label>}<p className="demo-note">Frontend demo only. Please use fictional details. No information is sent or saved.</p><button className="button dark" type="submit">Submit demo request <ArrowUpRight size={18}/></button></form></>}
  </div></div>;
}

// ================= HOME PAGE =================
function Home(){
  const [modal,setModal]=useState(null),[filter,setFilter]=useState('All specialties'),[active,setActive]=useState('home');
  useEffect(()=>{const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)setActive(e.target.id)}),{rootMargin:'-20% 0px -60% 0px'});document.querySelectorAll('section[id]').forEach(s=>obs.observe(s));return()=>obs.disconnect()},[]);
  const open=(t)=>{setModal(t)};
  return <><Header active={active} onOpen={open}/>
  <main>
    <section id="home" className="hero"><img src={images.hero} alt="Doctor listening attentively to an older patient" className="hero-image"/><div className="hero-shade"/><div className="container hero-content"><span className="eyebrow light"><span/> COMPASSION MEETS EXPERTISE</span><h1>The ultimate<br/>destination for<br/>your <em>wellbeing.</em></h1><p>Expert care. Genuine compassion. A healthier you.<br className="desktop-break"/> Your journey to better health starts with us.</p><button className="button cream" onClick={()=>open('appointment')}>Find your care <ArrowUpRight size={18}/></button><div className="hero-footnote"><ShieldCheck size={18}/><span>People first. Always.</span><span className="hero-line"/></div></div><div className="hero-counter"><span>01</span> / 03</div></section>
    <div className="container quick-actions"><button onClick={()=>open('search')}><Stethoscope/><span><strong>Find a doctor</strong><small>The right expert for you</small></span><ArrowUpRight size={17}/></button><button onClick={()=>open('appointment')}><CalendarDays/><span><strong>Book an appointment</strong><small>Care that fits your schedule</small></span><ArrowUpRight size={17}/></button><button onClick={()=>open('portal')}><FileText/><span><strong>Patient portal</strong><small>Your health, in one place</small></span><ArrowUpRight size={17}/></button><button className="gold-action" onClick={()=>open('collection')}><FlaskConical/><span><strong>Home sample collection</strong><small>Convenient care at your doorstep</small></span><ArrowUpRight size={17}/></button></div>

    <section id="services" className="container section"><div className="section-heading"><div><span className="eyebrow">HERE FOR YOUR EVERY NEED</span><h2>Comprehensive<br/>care services</h2></div><div className="heading-description"><p>From everyday wellness to specialized treatment, discover care designed around you. Because your health deserves our complete attention.</p><a href="#departments" className="text-link">Explore our services <ArrowUpRight size={17}/></a></div></div><div className="service-grid">{services.map((s,i)=><article className="service-card" key={s.title}><button className="image-wrap" onClick={()=>open(s.title)} aria-label={`Learn about ${s.title}`}><img src={s.image} alt={s.title} loading="lazy"/><span className="round-arrow"><ArrowUpRight size={21}/></span><span className="image-number">0{i+1}</span></button><h3>{s.title}</h3><p>{s.copy}</p></article>)}</div><div className="section-bottom"><span className="progress"><i/></span><span className="small-note">Thoughtful care, at every stage of life.</span><a className="circle-link" href="#departments" aria-label="Explore departments"><ArrowRight size={19}/></a></div></section>

    <section id="departments" className="department-section"><div className="container department-layout"><div><span className="eyebrow">EXPERTISE YOU CAN TRUST</span><h2>Explore our<br/>departments</h2><p>A connected team of specialists, working together to put your health first.</p><button className="button dark" onClick={()=>open('search')}>Find your specialist <ArrowUpRight size={17}/></button><div className="department-note"><span className="tiny-cross">✳</span> A better kind of care.<br/>For a better quality of life.</div></div><div className="department-grid">{departments.map(([name,Icon])=><button className="department-card" key={name} onClick={()=>{setFilter(name);open('search')}}><Icon size={35} strokeWidth={1}/><span>{name}</span><ArrowUpRight className="dept-arrow" size={16}/></button>)}</div></div></section>

    <section id="doctors" className="container section specialists"><div className="section-heading"><div><span className="eyebrow">GOOD HANDS. KIND HEARTS.</span><h2>Care begins with<br/>the right expert.</h2></div><div className="heading-description"><p>Finding someone who understands makes all the difference. Explore our specialties and request a consultation with the right care team.</p><div className="section-heading-actions"><button className="text-link" onClick={()=>open('search')}>Find a doctor <ArrowUpRight size={17}/></button><Link to="/doctors" className="button dark view-all-btn">View all doctors <ArrowUpRight size={16}/></Link></div></div></div><div className="expert-feature"><img src={images.consult} alt="A patient speaking with a caring medical professional" loading="lazy"/><div><span className="eyebrow">PERSONAL CARE, SHARED PURPOSE</span><h3>Not just a consultation.<br/>A conversation.</h3><p>Time to listen. Space to ask questions. Support to understand what comes next. We believe better care starts with you.</p><button className="button dark" onClick={()=>open('appointment')}>Request a consultation <ArrowUpRight size={17}/></button><small>Demo site · No real doctor directory is connected.</small></div></div>

      {/* Mini preview grid linking to /doctors */}
      <div className="doctor-preview">
        <div className="doctor-preview-head"><h3>Meet a few of our specialists</h3><Link to="/doctors" className="text-link">Browse all <ArrowRight size={16}/></Link></div>
        <div className="doctor-preview-grid">
          {DOCTORS.slice(0,3).map(d=>(
            <Link to="/doctors" key={d.id} className="doctor-preview-card">
              <img src={d.img} alt={d.name} loading="lazy"/>
              <div>
                <strong>{d.name}</strong>
                <small>{d.specialty}</small>
                <span className="dp-rating"><Star size={13}/> {d.rating} · {d.exp} yrs</span>
              </div>
              <ChevronRight className="dp-arrow" size={18}/>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section id="about" className="commitment"><img src={images.team} alt="A doctor and nurse caring for a senior patient" loading="lazy"/><div className="commitment-overlay"/><div className="container commitment-content"><span className="eyebrow light">MORE THAN HEALTHCARE</span><div className="commitment-heading"><h2>Committed to<br/><em>quality healthcare.</em></h2><div><p>Behind every treatment is a person. Behind every person is a story. We're here to care for both — with expertise, empathy, and a commitment to doing what's right.</p><a href="#contact" className="button outline">Get to know us <ArrowUpRight size={17}/></a></div></div><div className="values-grid">{[[Hospital,'Complete care','A connected approach to your health.'],[Users,'Expert teams','Specialists working together for you.'],[Clock3,'Care that fits','Simple, convenient appointment requests.'],[ShieldCheck,'Patient-first approach','Respect, compassion, and clear communication.']].map(([Icon,title,desc])=><div key={title}><Icon size={27} strokeWidth={1}/><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
    <section id="packages" className="container section packages"><div><span className="eyebrow">A HEALTHIER START</span><h2>A little prevention.<br/>A lot of peace of mind.</h2><p>Explore preventive care options tailored to your stage of life. Ask our team about available screenings and health check packages.</p><button className="button dark" onClick={()=>open('packages')}>Explore health packages <ArrowUpRight size={17}/></button></div><div className="package-card"><span className="eyebrow">WELLNESS, MADE SIMPLE</span><HeartPulse size={54} strokeWidth={1}/><h3>Make time<br/>for yourself.</h3><p>Your next chapter starts with taking care of you.</p><span className="package-rule"/><button className="text-link" onClick={()=>open('appointment')}>Plan your health check <ArrowUpRight size={18}/></button></div></section>
    <section id="telemedicine" className="telemedicine"><div className="container tele-layout"><div><span className="eyebrow">CLOSER, WHEREVER YOU ARE</span><h2>Expert advice.<br/>From the comfort of home.</h2></div><div><p>Start a conversation about remote care. Request an online consultation and let our team help you take the next step.</p><button className="button dark" onClick={()=>open('telemedicine')}>Request an online consultation <ArrowUpRight size={18}/></button></div></div></section>
    <section className="container section faq-section"><div><span className="eyebrow">A LITTLE CLARITY</span><h2>Care starts with<br/>a conversation.</h2></div><div className="faq-list">{[['How do I request an appointment?','Select Book an appointment, enter your details, and choose your preferred date. This frontend demo validates your request locally; it does not submit or store patient information.'],['Can I book an online consultation?','Use the online consultation button to open the request form. Real consultations require a connected booking and video consultation service.'],['Can I access my medical reports here?','The patient portal is a demonstration screen. Secure authentication and an approved medical records system must be integrated before accessing real records.']].map(([q,a],i)=><FaqItem key={q} q={q} a={a} i={i}/>)}</div></section>
    <section id="contact" className="contact-strip"><div className="container contact-layout"><div><span className="eyebrow light">WE'RE HERE TO HELP</span><h2>Here for you,<br/>every step.</h2></div><div><MapPin size={24}/><h3>Visit us</h3><p>Clinic location to be added<br/>before launch.</p></div><div><Phone size={24}/><h3>Let's talk</h3><button className="light-link" onClick={()=>open('contact')}>Send an enquiry <ArrowUpRight size={16}/></button><p>We'd love to hear from you.</p></div></div></section>
  </main>
  <Footer onOpen={open}/>
  <Modal modal={modal} setModal={setModal} filter={filter} setFilter={setFilter}/>
  </>;
}

function FaqItem({q,a,i}){
  const [open,setOpen]=useState(null);
  // self-contained since Home used to share faq state - keep local
  return <div className="faq-item" key={q}><button onClick={()=>setOpen(open===i?null:i)} aria-expanded={open===i}>{q}{open===i?<Minus size={18}/>:<Plus size={18}/>}</button>{open===i&&<p>{a}</p>}</div>;
}

// ================= DOCTORS PAGE =================
function DoctorsPage(){
  const [modal,setModal]=useState(null),[filter,setFilter]=useState('All specialties'),[query,setQuery]=useState(''),[sort,setSort]=useState('rating');
  const navigate=useNavigate();
  // scroll to top on mount
  useEffect(()=>{window.scrollTo({top:0,behavior:'auto'})},[]);
  const open=(t)=>setModal(t);

  const filtered = DOCTORS.filter(d=>{
    const okDept = filter==='All specialties' || d.dept===filter;
    const q=query.trim().toLowerCase();
    const okQ = !q || d.name.toLowerCase().includes(q) || d.specialty.toLowerCase().includes(q);
    return okDept && okQ;
  }).sort((a,b)=>{
    if(sort==='rating') return b.rating-a.rating;
    if(sort==='exp') return b.exp-a.exp;
    if(sort==='name') return a.name.localeCompare(b.name);
    return 0;
  });

  const stats=[{icon:Users,n:'9+',l:'Verified specialists'},{icon:Hospital,n:'9',l:'Departments'},{icon:Clock3,n:'24/7',l:'Care availability'},{icon:Star,n:'4.8',l:'Average rating'}];

  return <><Header active="doctors" onOpen={open}/>
  <main>
    {/* Hero */}
    <section className="docs-hero">
      <div className="docs-hero-overlay"/>
      <div className="container docs-hero-content">
        <Link to="/" className="docs-back"><ArrowLeft size={16}/> Back to home</Link>
        <span className="eyebrow light"><span/> MEET THE TEAM</span>
        <h1>Specialists who put<br/><em>you</em> first.</h1>
        <p>Search across departments, compare experience and languages, and request a consultation with the right expert — all in one place.</p>
        <div className="docs-search">
          <Search size={20}/>
          <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search by name or specialty…"/>
          {query && <button onClick={()=>setQuery('')} aria-label="Clear search"><X size={16}/></button>}
        </div>
      </div>
    </section>

    {/* Stats strip */}
    <section className="docs-stats">
      <div className="container docs-stats-grid">
        {stats.map((s,i)=><div key={i} className="docs-stat"><s.icon size={22}/><strong>{s.n}</strong><span>{s.l}</span></div>)}
      </div>
    </section>

    {/* Filters + grid */}
    <section className="container docs-main">
      <div className="docs-toolbar">
        <div className="docs-chips" role="tablist" aria-label="Filter by department">
          <button className={`chip ${filter==='All specialties'?'on':''}`} onClick={()=>setFilter('All specialties')}>All</button>
          {departments.map(([n])=><button key={n} className={`chip ${filter===n?'on':''}`} onClick={()=>setFilter(n)}>{n}</button>)}
        </div>
        <label className="docs-sort">
          <span>Sort by</span>
          <select value={sort} onChange={e=>setSort(e.target.value)}>
            <option value="rating">Top rated</option>
            <option value="exp">Most experienced</option>
            <option value="name">Name (A–Z)</option>
          </select>
        </label>
      </div>

      <p className="docs-count">{filtered.length} specialist{filtered.length!==1?'s':''} available</p>

      <div className="docs-grid">
        {filtered.map(d=><article key={d.id} className="doc-card">
          <div className="doc-card-top">
            <img src={d.img} alt={d.name} loading="lazy"/>
            <span className={`doc-avail ${d.avail==='Today'?'now':'later'}`}>{d.avail==='Today'?'● Available today':`Next: ${d.avail}`}</span>
          </div>
          <div className="doc-card-body">
            <h3>{d.name}</h3>
            <span className="doc-spec">{d.specialty}</span>
            <p>{d.bio}</p>
            <div className="doc-meta">
              <span><Star size={14}/> {d.rating}</span>
              <span><Award size={14}/> {d.exp} yrs exp</span>
              <span><Languages size={14}/> {d.langs.length} langs</span>
            </div>
            <div className="doc-actions">
              <button className="button dark" onClick={()=>open('appointment')}>Book <ArrowUpRight size={16}/></button>
              <button className="button border" onClick={()=>open('telemedicine')}>Tele consult</button>
            </div>
          </div>
        </article>)}
        {filtered.length===0 && <div className="docs-empty"><Search size={32}/><h3>No specialists match your search.</h3><p>Try a different name, specialty, or clear the filters.</p><button className="button dark" onClick={()=>{setQuery('');setFilter('All specialties')}}>Reset filters</button></div>}
      </div>
    </section>

    {/* CTA */}
    <section className="docs-cta">
      <div className="container docs-cta-inner">
        <div>
          <span className="eyebrow light">CAN'T DECIDE?</span>
          <h2>We'll help you find<br/>the right specialist.</h2>
          <p>Tell us what you need and our care team will recommend the best fit for you.</p>
        </div>
        <div className="docs-cta-actions">
          <button className="button cream" onClick={()=>open('contact')}>Talk to our care team <ArrowUpRight size={17}/></button>
          <button className="button outline" onClick={()=>open('search')}>Browse departments <ArrowUpRight size={17}/></button>
        </div>
      </div>
    </section>
  </main>
  <Footer onOpen={open}/>
  <Modal modal={modal} setModal={setModal} filter={filter} setFilter={setFilter}/>
  </>;
}

function App(){
  return <HashRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/doctors" element={<DoctorsPage/>}/>
      <Route path="*" element={<Home/>}/>
    </Routes>
  </HashRouter>;
}
createRoot(document.getElementById('root')).render(<App/>);
