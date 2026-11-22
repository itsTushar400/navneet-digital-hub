import { useState } from 'react'
import './theme.css'
import {
  Menu, X, Landmark, CreditCard, FileText, Printer, ShieldCheck,
  Fingerprint, Wallet, Receipt, Smartphone, TrainFront, Bus,
  ArrowUpRight, Phone, MapPin, Clock, CheckCircle2, MessageCircle,
  Monitor, GraduationCap, HeartPulse, IdCard, ChevronRight, Languages,
  Facebook, Instagram, Youtube, Mail
} from 'lucide-react'

const phone = '919027198051'

const content = {
  hi: {
    top: 'सरकारी एवं डिजिटल सेवाओं का एक ही केंद्र',
    nav: ['होम', 'हमारे बारे में', 'सेवाएँ', 'संपर्क करें'],
    whatsapp: 'WhatsApp करें',
    heroBadge: 'आपका अपना डिजिटल सेवा केंद्र',
    heroText: 'सरकारी एवं डिजिटल सेवाओं का एक ही केंद्र। ऑनलाइन फॉर्म, दस्तावेज़ सहायता और डिजिटल सुविधाओं के लिए संपर्क करें।',
    viewServices: 'सेवाएँ देखें',
    easyHelp: 'आसान सहायता',
    manyServices: 'एक ही जगह कई सेवाएँ',
    onlineServices: 'ऑनलाइन आवेदन सहायता',
    digitalPayments: 'डिजिटल भुगतान सहायता',
    formsDocs: 'फॉर्म एवं दस्तावेज़',
    studentHelp: 'छात्रों के लिए सहायता',
    operator: 'संचालक',
    quick: ['आधार सहायता', 'PAN Card', 'बैंकिंग', 'बिल भुगतान', 'रिचार्ज', 'ट्रेन टिकट', 'बस टिकट', 'इंश्योरेंस जानकारी'],
    aboutLabel: 'हमारे केंद्र के बारे में',
    aboutTitle: 'आपकी डिजिटल सेवाओं के लिए भरोसेमंद केंद्र',
    aboutText: 'Navneet Digital Hub में आपको विभिन्न सरकारी एवं डिजिटल सेवाओं के लिए मार्गदर्शन और आवेदन संबंधी सहायता मिल सकती है। हमारा उद्देश्य सेवाओं की जानकारी को सरल और सुलभ बनाना है।',
    simpleHelp: 'सहज सहायता',
    formGuidance: 'फॉर्म और प्रक्रिया में मार्गदर्शन',
    customerFacility: 'ग्राहक सुविधा',
    accordingNeeds: 'आपकी जरूरत के अनुसार सहायता',
    visit: 'हमारे केंद्र पर आएँ',
    address: 'कूकड़ा इस्लामपुर, हल्दौर, बिजनौर, उत्तर प्रदेश',
    phoneLabel: 'संपर्क नंबर',
    servicesLabel: 'हमारी सेवाएँ',
    servicesTitle: 'हमारी सेवाएँ',
    servicesIntro: 'आपकी रोजमर्रा की डिजिटल जरूरतों के लिए एक ही जगह सहायता।',
    categories: [
      { title: 'सरकारी सेवाएँ', items: ['जाति, आय एवं निवास प्रमाणपत्र आवेदन', 'पेंशन एवं सरकारी योजनाओं के फॉर्म', 'राशन कार्ड संबंधित सहायता', 'अन्य सरकारी ऑनलाइन आवेदन'] },
      { title: 'पहचान एवं दस्तावेज़', items: ['PAN Card आवेदन', 'आधार सेवाओं की जानकारी', 'वोटर ID संबंधित सहायता', 'e-Shram एवं अन्य सेवाएँ'] },
      { title: 'बैंकिंग सेवाएँ', items: ['AEPS सेवाएँ (अधिकृत होने पर)', 'बैंक बैलेंस एवं मिनी स्टेटमेंट', 'मनी ट्रांसफर', 'बैंकिंग सहायता'] },
      { title: 'ऑनलाइन फॉर्म', items: ['सरकारी नौकरी के फॉर्म', 'कॉलेज एवं एडमिशन फॉर्म', 'परीक्षा फॉर्म', 'रिजल्ट एवं एडमिट कार्ड'] },
      { title: 'अन्य डिजिटल सुविधाएँ', items: ['प्रिंटआउट एवं फोटोकॉपी', 'स्कैन एवं PDF सेवाएँ', 'बिजली बिल भुगतान', 'मोबाइल एवं DTH रिचार्ज'] }
    ],
    getInfo: 'जानकारी लें',
    note: 'नोट: कुछ सेवाएँ संबंधित विभाग की अनुमति, पात्रता या अधिकृत पोर्टल पर निर्भर करती हैं।',
    needHelp: 'मदद चाहिए?',
    helpTitle: 'किसी सेवा की जानकारी चाहिए?',
    helpText: 'हमसे फोन या WhatsApp पर संपर्क करें।',
    askWhatsapp: 'WhatsApp पर पूछें',
    contactLabel: 'संपर्क करें',
    contactTitle: 'हमसे संपर्क करें',
    contactText: 'CSC सेवाओं, ऑनलाइन आवेदन या दस्तावेज़ संबंधी जानकारी के लिए संपर्क करें।',
    mobile: 'मोबाइल नंबर',
    addressLabel: 'पता',
    hours: 'कार्य समय',
    hoursText: 'समय की पुष्टि फोन पर करें',
    direct: 'सीधे संपर्क करें',
    directText: 'कॉल या WhatsApp के जरिए अपनी जरूरत बताएँ।',
    call: 'पर कॉल करें',
    sendMessage: 'WhatsApp संदेश भेजें',
    disclaimer: 'किसी भी सरकारी सेवा के लिए आवेदन करने से पहले संबंधित विभाग की आधिकारिक वेबसाइट और पात्रता की जाँच करें।',
    footer: 'सर्वाधिकार सुरक्षित।',
    waMessage: 'नमस्ते, मुझे CSC सेवाओं के बारे में जानकारी चाहिए।'
  },
  en: {
    top: 'Government and digital services at one place',
    nav: ['Home', 'About Us', 'Services', 'Contact'],
    whatsapp: 'WhatsApp Us',
    heroBadge: 'Your own Digital Service Center',
    heroText: 'A one-stop center for government and digital services. Contact us for online forms, document assistance, and digital facilities.',
    viewServices: 'View Services',
    easyHelp: 'Easy Assistance',
    manyServices: 'Multiple Services in One Place',
    onlineServices: 'Online application assistance',
    digitalPayments: 'Digital payment assistance',
    formsDocs: 'Forms & documents',
    studentHelp: 'Student assistance',
    operator: 'Operator',
    quick: ['Aadhaar Help', 'PAN Card', 'Banking', 'Bill Payment', 'Recharge', 'Train Ticket', 'Bus Ticket', 'Insurance Info'],
    aboutLabel: 'ABOUT OUR CENTER',
    aboutTitle: 'A reliable center for your digital service needs',
    aboutText: 'At Navneet Digital Hub, you can get guidance and application assistance for various government and digital services. Our aim is to make service information simple and accessible.',
    simpleHelp: 'Easy Assistance',
    formGuidance: 'Guidance with forms and processes',
    customerFacility: 'Customer Convenience',
    accordingNeeds: 'Assistance based on your needs',
    visit: 'VISIT OUR CENTER',
    address: 'Kookra Islampur, Haldaur, Bijnor, Uttar Pradesh',
    phoneLabel: 'Contact Number',
    servicesLabel: 'OUR SERVICES',
    servicesTitle: 'Our Services',
    servicesIntro: 'Assistance for your everyday digital needs, all in one place.',
    categories: [
      { title: 'Government Services', items: ['Caste, income, and residence certificate applications', 'Pension and government scheme forms', 'Ration card assistance', 'Other government online applications'] },
      { title: 'Identity & Documents', items: ['PAN Card applications', 'Aadhaar service information', 'Voter ID assistance', 'e-Shram and other services'] },
      { title: 'Banking Services', items: ['AEPS services (where authorized)', 'Bank balance and mini statement', 'Money transfer', 'Banking assistance'] },
      { title: 'Online Forms', items: ['Government job applications', 'College and admission forms', 'Examination forms', 'Results and admit cards'] },
      { title: 'Other Digital Facilities', items: ['Printouts and photocopies', 'Scanning and PDF services', 'Electricity bill payment', 'Mobile and DTH recharge'] }
    ],
    getInfo: 'Get Information',
    note: 'Note: Some services depend on department authorization, eligibility, or access to an authorized portal.',
    needHelp: 'NEED HELP?',
    helpTitle: 'Need information about a service?',
    helpText: 'Contact us by phone or WhatsApp.',
    askWhatsapp: 'Ask on WhatsApp',
    contactLabel: 'CONTACT US',
    contactTitle: 'Get in Touch',
    contactText: 'Contact us for CSC services, online applications, or document-related information.',
    mobile: 'Mobile Number',
    addressLabel: 'Address',
    hours: 'Working Hours',
    hoursText: 'Please confirm timings by phone',
    direct: 'Contact Directly',
    directText: 'Tell us what you need by call or WhatsApp.',
    call: 'Call 9027198051',
    sendMessage: 'Send WhatsApp Message',
    disclaimer: 'Before applying for any government service, check the official website and eligibility requirements of the concerned department.',
    footer: 'All rights reserved.',
    quickLinks: 'Quick Links',
    popularServices: 'Popular Services',
    followUs: 'Follow Us',
    contactUs: 'Contact Information',
    footerAbout: 'Your local assistance center for government and digital services.',
    waMessage: 'Hello, I would like information about CSC services.'
  }
}

const quickIcons = [Fingerprint, CreditCard, Landmark, Receipt, Smartphone, TrainFront, Bus, ShieldCheck]
const serviceIcons = [Landmark, IdCard, Wallet, FileText, Printer]
const serviceColors = ['blue', 'green', 'purple', 'orange', 'pink']

function App() {
  const [menu, setMenu] = useState(false)
  const [lang, setLang] = useState('hi')
  const t = content[lang]
  const wa = `https://wa.me/${phone}?text=${encodeURIComponent(t.waMessage)}`
  const nav = [['#home', t.nav[0]], ['#about', t.nav[1]], ['#services', t.nav[2]], ['#contact', t.nav[3]]]

  return (
    <div className="min-h-screen bg-[#f5f8ff] text-slate-800">
      <div className="top-strip text-white text-xs sm:text-sm">
        <div className="container mx-auto px-4 py-2 flex flex-wrap justify-between gap-2">
          <span>{t.top}</span>
          <span className="flex items-center gap-2"><Phone size={14}/> +91 90271 98051</span>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-blue-100 shadow-sm">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-3">
          <a href="#home" className="flex items-center gap-3 shrink-0">
            <img src="/navneet-digital-hub-logo.png" alt="Navneet Digital Hub logo" className="h-14 w-14 rounded-xl object-contain" />
            <div><div className="font-extrabold text-blue-950 leading-tight">Navneet Digital Hub</div><div className="text-[11px] sm:text-xs text-slate-500 font-medium">DIGITAL SEVA KENDRA</div></div>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {nav.map(([href, label]) => <a key={href} className="text-sm font-semibold text-slate-600 hover:text-blue-700 transition" href={href}>{label}</a>)}
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={() => setLang(lang === 'hi' ? 'en' : 'hi')} className="inline-flex items-center gap-2 rounded-full border border-blue-200 px-3 py-2 text-sm font-bold text-blue-900 hover:bg-blue-50" aria-label="Change language">
              <Languages size={17}/>{lang === 'hi' ? 'English' : 'हिन्दी'}
            </button>
            <a href={wa} target="_blank" rel="noreferrer" className="hidden lg:inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-3 text-sm font-bold text-white hover:bg-orange-600"><MessageCircle size={17}/> {t.whatsapp}</a>
            <button onClick={() => setMenu(!menu)} className="md:hidden rounded-xl border p-2" aria-label="Toggle menu">{menu ? <X/> : <Menu/>}</button>
          </div>
        </div>
        {menu && <nav className="md:hidden px-4 pb-4 grid gap-3">
          {nav.map(([href, label]) => <a onClick={() => setMenu(false)} key={href} href={href} className="py-2 font-semibold">{label}</a>)}
          <a href={wa} target="_blank" rel="noreferrer" className="font-bold text-orange-600">{t.whatsapp}</a>
        </nav>}
      </header>

      <main>
        <section id="home" className="hero-bg overflow-hidden">
          <div className="container mx-auto px-4 py-16 md:py-24 grid lg:grid-cols-[1.1fr_.9fr] gap-12 items-center">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/80 border border-blue-100 px-4 py-2 text-sm font-bold text-blue-800"><span className="h-2 w-2 rounded-full bg-green-500"></span>{t.heroBadge}</div>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.12] text-blue-950">Navneet <span className="text-orange-500">Digital Hub</span><br/>Digital Seva Kendra</h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">{t.heroText}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#services" className="rounded-full bg-blue-900 px-7 py-4 font-bold text-white shadow-xl shadow-blue-900/20 hover:bg-blue-800">{t.viewServices} <ChevronRight className="inline" size={18}/></a>
                <a href={wa} target="_blank" rel="noreferrer" className="rounded-full bg-white px-7 py-4 font-bold text-green-700 border border-green-200 hover:bg-green-50"><MessageCircle className="inline mr-2" size={18}/> WhatsApp</a>
              </div>
              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-600">
                <span className="flex items-center gap-2"><CheckCircle2 size={17} className="text-green-600"/> {t.easyHelp}</span>
                <span className="flex items-center gap-2"><CheckCircle2 size={17} className="text-green-600"/> {t.manyServices}</span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-blue-200 to-orange-100 blur-2xl opacity-70"></div>
              <div className="hero-panel relative rounded-[2rem] bg-gradient-to-br from-[#101f52] via-[#2146a5] to-[#3275df] p-7 sm:p-10 text-white shadow-2xl">
                <div className="absolute right-6 top-6 h-24 w-24 rounded-full border border-white/20"></div>
                <div className="relative">
                  <div className="text-sm font-bold tracking-[.2em] text-blue-200">DIGITAL INDIA</div>
                  <div className="mt-10 grid grid-cols-2 gap-4">
                    {[[Monitor, 'Online Services', t.onlineServices], [CreditCard, 'Digital Payments', t.digitalPayments], [FileText, 'Forms & Docs', t.formsDocs], [GraduationCap, 'Student Help', t.studentHelp]].map(([Icon, title, desc]) => <div key={title} className="rounded-2xl bg-white/10 p-5 backdrop-blur"><Icon size={34} className="text-orange-300"/><div className="mt-4 font-bold">{title}</div><div className="text-xs text-blue-100 mt-1">{desc}</div></div>)}
                  </div>
                  <div className="mt-7 border-t border-white/20 pt-5 flex items-center justify-between"><div><div className="text-xs text-blue-200">{t.operator}</div><div className="text-xl font-extrabold">Navneet</div></div><div className="rounded-full bg-orange-500 px-4 py-2 text-xs font-black">CSC KENDRA</div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 -mt-7 relative z-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {quickIcons.map((Icon, i) => <div key={i} className="quick-card rounded-2xl bg-white p-4 text-center shadow-lg shadow-blue-100/70 border border-blue-100"><div className="mx-auto grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-blue-800"><Icon size={21}/></div><div className="mt-2 text-xs font-bold text-slate-700">{t.quick[i]}</div></div>)}
          </div>
        </section>

        <section id="about" className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div><p className="text-sm font-black tracking-[.18em] text-orange-500">{t.aboutLabel}</p><h2 className="mt-3 text-3xl sm:text-4xl font-black text-blue-950">{t.aboutTitle}</h2><p className="mt-5 leading-8 text-slate-600">{t.aboutText}</p>
              <div className="mt-7 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 p-5 ring-1 ring-blue-100"><ShieldCheck className="text-blue-800"/><div className="mt-3 font-extrabold text-blue-950">{t.simpleHelp}</div><p className="mt-1 text-xs text-slate-500">{t.formGuidance}</p></div>
                <div className="rounded-2xl bg-gradient-to-br from-orange-50 to-amber-100 p-5 ring-1 ring-orange-100"><HeartPulse className="text-orange-600"/><div className="mt-3 font-extrabold text-blue-950">{t.customerFacility}</div><p className="mt-1 text-xs text-slate-500">{t.accordingNeeds}</p></div>
              </div>
            </div>
            <div className="about-panel rounded-[2rem] bg-gradient-to-br from-[#14275f] to-[#2854ad] p-8 sm:p-10 text-white shadow-xl shadow-blue-900/15"><div className="text-orange-300 text-sm font-bold tracking-widest">{t.visit}</div><MapPin size={42} className="mt-7 text-orange-400"/><h3 className="mt-5 text-2xl font-extrabold">Navneet Digital Hub</h3><p className="mt-3 text-blue-100 leading-7">{t.address}</p><div className="mt-7 border-t border-white/20 pt-6 flex items-center gap-3"><div className="rounded-full bg-white/10 p-3"><Phone/></div><div><div className="text-xs text-blue-200">{t.phoneLabel}</div><a href="tel:+919027198051" className="text-xl font-extrabold">9027198051</a></div></div></div>
          </div>
        </section>

        <section id="services" className="services-section bg-gradient-to-b from-white via-[#f4f7ff] to-[#eef4ff] py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto"><p className="text-sm font-black tracking-[.18em] text-orange-500">{t.servicesLabel}</p><h2 className="mt-3 text-3xl sm:text-4xl font-black text-blue-950">{t.servicesTitle}</h2><p className="mt-4 text-slate-500">{t.servicesIntro}</p></div>
            <div className="mt-12 grid sm:grid-cols-2 xl:grid-cols-5 gap-5">
              {t.categories.map(({ title, items }, i) => {
                const Icon = serviceIcons[i]
                const serviceMessage = lang === 'hi'
                  ? `नमस्ते, मुझे ${title} के बारे में जानकारी चाहिए।\\nइस कार्ड में दी गई सेवाएँ: ${items.join(', ')}। कृपया प्रक्रिया और शुल्क बताएं।`
                  : `Hello, I need information about ${title}.\\nServices listed: ${items.join(', ')}. Please share the process and charges.`
                const serviceWa = `https://wa.me/${phone}?text=${encodeURIComponent(serviceMessage)}`
                return <article key={title} className="service-card rounded-3xl border border-blue-100 bg-white p-6 shadow-md shadow-blue-100/60">
                  <div className={`service-icon ${serviceColors[i]}`}><Icon size={25}/></div>
                  <h3 className="mt-5 text-lg font-extrabold text-blue-950">{title}</h3>
                  <ul className="mt-4 space-y-3">{items.map(item => <li key={item} className="flex gap-2 text-sm leading-6 text-slate-600"><CheckCircle2 size={16} className="mt-1 shrink-0 text-green-600"/>{item}</li>)}</ul>
                  <a href={serviceWa} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-1 text-sm font-extrabold text-blue-800">{t.getInfo} <ArrowUpRight size={16}/></a>
                </article>
              })}
            </div>
            <p className="mt-8 text-center text-xs text-slate-400">{t.note}</p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="rounded-[2rem] bg-gradient-to-r from-orange-500 to-orange-400 p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-7"><div><p className="text-sm font-black tracking-widest text-orange-100">{t.needHelp}</p><h2 className="mt-2 text-3xl font-black">{t.helpTitle}</h2><p className="mt-2 text-orange-50">{t.helpText}</p></div><a href={wa} target="_blank" rel="noreferrer" className="shrink-0 rounded-full bg-white px-7 py-4 font-extrabold text-orange-600 hover:bg-orange-50"><MessageCircle className="inline mr-2"/> {t.askWhatsapp}</a></div>
        </section>

        <section id="contact" className="contact-section bg-gradient-to-br from-[#101f52] via-[#18377d] to-[#2455a8] py-20 text-white">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
            <div><p className="text-sm font-black tracking-[.18em] text-orange-300">{t.contactLabel}</p><h2 className="mt-3 text-3xl sm:text-4xl font-black">{t.contactTitle}</h2><p className="mt-4 max-w-md text-blue-100 leading-7">{t.contactText}</p>
              <div className="mt-8 space-y-5">
                <div className="flex gap-4"><Phone className="text-orange-300"/><div><div className="text-sm text-blue-200">{t.mobile}</div><a href="tel:+919027198051" className="font-bold text-lg">+91 90271 98051</a></div></div>
                <div className="flex gap-4"><MapPin className="text-orange-300"/><div><div className="text-sm text-blue-200">{t.addressLabel}</div><div className="font-bold">{t.address}</div></div></div>
                <div className="flex gap-4"><Clock className="text-orange-300"/><div><div className="text-sm text-blue-200">{t.hours}</div><div className="font-bold">{t.hoursText}</div></div></div>
              </div>
            </div>
            <div className="contact-card rounded-3xl bg-white p-7 text-slate-800 shadow-2xl shadow-blue-950/20 ring-1 ring-white/40"><h3 className="text-xl font-extrabold text-blue-950">{t.direct}</h3><p className="mt-2 text-sm text-slate-500">{t.directText}</p><a href="tel:+919027198051" className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-blue-900 p-4 font-bold text-white"><Phone size={18}/> {t.call}</a><a href={wa} target="_blank" rel="noreferrer" className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-green-600 p-4 font-bold text-white"><MessageCircle size={18}/> {t.sendMessage}</a><div className="mt-6 rounded-2xl bg-slate-50 p-4 text-xs leading-6 text-slate-500">{t.disclaimer}</div></div>
          </div>
        </section>
      </main>

      <footer className="site-footer bg-[#07132f] text-slate-300">
        <div className="container mx-auto px-4 pt-14 pb-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-4">
                <img
                  src="/navneet-digital-hub-logo11-transparent.png"
                  alt="Navneet Digital Hub"
                  className="h-24 w-24 shrink-0 object-contain"
                />
                <div>
                  <div className="text-xl font-extrabold text-white">Navneet Digital Hub</div>
                  <div className="mt-1 text-xs font-semibold tracking-wider text-orange-300">DIGITAL SEVA KENDRA</div>
                </div>
              </div>
              <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">{t.footerAbout}</p>
              <div className="mt-5 flex items-center gap-3">
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook" title="Facebook" className="grid h-10 w-10 place-items-center rounded-full border border-slate-700 text-slate-300 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"><Facebook size={18}/></a>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" title="Instagram" className="grid h-10 w-10 place-items-center rounded-full border border-slate-700 text-slate-300 transition hover:border-pink-500 hover:bg-pink-600 hover:text-white"><Instagram size={18}/></a>
                <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube" title="YouTube" className="grid h-10 w-10 place-items-center rounded-full border border-slate-700 text-slate-300 transition hover:border-red-500 hover:bg-red-600 hover:text-white"><Youtube size={18}/></a>
                <a href={wa} target="_blank" rel="noreferrer" aria-label="WhatsApp" title="WhatsApp" className="grid h-10 w-10 place-items-center rounded-full border border-slate-700 text-slate-300 transition hover:border-green-500 hover:bg-green-600 hover:text-white"><MessageCircle size={18}/></a>
              </div>
            </div>

            <div>
              <h3 className="text-base font-bold text-white">{t.quickLinks}</h3>
              <ul className="mt-5 space-y-3 text-sm">
                {nav.map(([href, label]) => <li key={href}><a href={href} className="transition hover:text-orange-300">{label}</a></li>)}
              </ul>
            </div>

            <div>
              <h3 className="text-base font-bold text-white">{t.popularServices}</h3>
              <ul className="mt-5 space-y-3 text-sm">
                {t.quick.slice(0, 6).map((item) => <li key={item}><a href="#services" className="transition hover:text-orange-300">{item}</a></li>)}
              </ul>
            </div>

            <div>
              <h3 className="text-base font-bold text-white">{t.contactUs}</h3>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex items-start gap-3"><Phone size={17} className="mt-0.5 shrink-0 text-orange-300"/><a href="tel:+919027198051" className="hover:text-orange-300">+91 90271 98051</a></li>
                <li className="flex items-start gap-3"><MapPin size={17} className="mt-0.5 shrink-0 text-orange-300"/><span className="leading-6">{t.address}</span></li>
                <li className="flex items-start gap-3"><Mail size={17} className="mt-0.5 shrink-0 text-orange-300"/><a href={wa} target="_blank" rel="noreferrer" className="hover:text-orange-300">{lang === 'hi' ? 'WhatsApp पर संदेश भेजें' : 'Send us a WhatsApp message'}</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-800 pt-6 text-center text-xs text-slate-500 sm:flex-row sm:text-left">
            <span>© {new Date().getFullYear()} Navneet Digital Hub. {t.footer}</span>
            <a href="#home" className="font-semibold text-slate-400 transition hover:text-orange-300">Back to top ↑</a>
          </div>
        </div>
      </footer>
      <a href={wa} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-[#22c55e] to-[#0c9f61] text-white shadow-xl shadow-green-900/30 hover:scale-105 transition"><MessageCircle size={27}/></a>
    </div>
  )
}

export default App
