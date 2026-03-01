"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";

export type Locale = "ka" | "en";

type Translations = {
  [key: string]: {
    ka: string;
    en: string;
  };
};

export const translations: Translations = {
  // Navbar
  "nav.home": { ka: "მთავარი", en: "Home" },
  "nav.about": { ka: "ჩემს შესახებ", en: "About" },
  "nav.services": { ka: "სერვისები", en: "Services" },
  "nav.projects": { ka: "პროექტები", en: "Projects" },
  "nav.contact": { ka: "კონტაქტი", en: "Contact" },
  "nav.cta": { ka: "დამიკავშირდი", en: "Get in Touch" },

  // Hero
  "hero.available": {
    ka: "ხელმისაწვდომი ფრილანსისთვის",
    en: "Available for Freelance",
  },
  "hero.firstName": { ka: "ნინო", en: "Nino" },
  "hero.lastName": { ka: "ბარჯაძე", en: "Barjadze" },
  "hero.role": {
    ka: "UX/UI დიზაინერი & გრაფიკული დიზაინერი",
    en: "UX/UI Designer & Graphic Designer",
  },
  "hero.description": {
    ka: "მომხმარებელზე ორიენტირებული ციფრული გამოცდილებები, უნიკალური ბრენდინგი და ესთეტიკური დიზაინი — თბილისიდან მსოფლიოსთვის.",
    en: "User-centered digital experiences, unique branding and aesthetic design — from Tbilisi to the world.",
  },
  "hero.portfolio": { ka: "ნამუშევრები", en: "Portfolio" },
  "hero.contactMe": { ka: "დამიკავშირდი", en: "Contact Me" },

  // About
  "about.label": { ka: "ჩემს შესახებ", en: "About Me" },
  "about.title": { ka: "ვინ ვარ მე?", en: "Who Am I?" },
  "about.subtitle1": {
    ka: "გრაფიკული და UX/UI დიზაინერი",
    en: "Graphic & UX/UI Designer",
  },
  "about.subtitle2": { ka: "თბილისიდან", en: "from Tbilisi" },
  "about.p1": {
    ka: "ნინო არის გრაფიკული და UX/UI დიზაინერი. იგი ქმნის როგორც გრაფიკულ, ისე მომხმარებელზე ორიენტირებულ ციფრულ გამოცდილებებს, რაც მოიცავს უნიკალურ ბრენდინგს, ლოგოებსა და UX/UI დიზაინს.",
    en: "Nino is a Graphic and UX/UI Designer. She creates both graphic and user-centered digital experiences, including unique branding, logos and UX/UI design.",
  },
  "about.p2": {
    ka: "მისი მიზანია შექმნას ვებსაიტები და აპლიკაციები, რომლებიც არა მხოლოდ ესთეტიკური იქნება, არამედ მარტივი და კომფორტული გამოსაყენებლად.",
    en: "Her goal is to create websites and applications that are not only aesthetically pleasing, but also simple and comfortable to use.",
  },
  "about.skills": { ka: "უნარ-ჩვევები", en: "Skills" },
  "about.stat.projects": { ka: "პროექტი", en: "Projects" },
  "about.stat.experience": { ka: "წლიანი გამოცდილება", en: "Years Experience" },
  "about.stat.clients": { ka: "კმაყოფილი კლიენტი", en: "Happy Clients" },

  // Services
  "services.label": { ka: "სერვისები", en: "Services" },
  "services.title": {
    ka: "რა შემიძლია თქვენთვის",
    en: "What I Can Do For You",
  },
  "services.description": {
    ka: "ციფრული დიზაინის სრული სპექტრი — იდეიდან დასრულებულ პროდუქტამდე",
    en: "Full spectrum of digital design — from idea to finished product",
  },
  "services.uxui.title": { ka: "UX/UI დიზაინი", en: "UX/UI Design" },
  "services.uxui.desc": {
    ka: "მომხმარებელზე ორიენტირებული ინტერფეისების დიზაინი, რომელიც აერთიანებს ესთეტიკას და ფუნქციონალურობას.",
    en: "User-centered interface design that combines aesthetics and functionality.",
  },
  "services.graphic.title": { ka: "გრაფიკული დიზაინი", en: "Graphic Design" },
  "services.graphic.desc": {
    ka: "ვიზუალური კონტენტის შექმნა სოციალური მედიისთვის, მარკეტინგული მასალებისთვის და სხვა.",
    en: "Creating visual content for social media, marketing materials and more.",
  },
  "services.branding.title": { ka: "ბრენდინგი & ლოგო", en: "Branding & Logo" },
  "services.branding.desc": {
    ka: "უნიკალური ბრენდ იდენტობის შექმნა, რომელიც გამოარჩევს თქვენს ბიზნესს კონკურენტებისგან.",
    en: "Creating unique brand identity that distinguishes your business from competitors.",
  },
  "services.web.title": { ka: "ვებ დიზაინი", en: "Web Design" },
  "services.web.desc": {
    ka: "თანამედროვე, რესპონსიული ვებსაიტების დიზაინი, რომელიც შთაბეჭდილებას ახდენს.",
    en: "Modern, responsive website design that makes an impression.",
  },
  "services.mobile.title": { ka: "მობაილ დიზაინი", en: "Mobile Design" },
  "services.mobile.desc": {
    ka: "iOS და Android აპლიკაციების ინტუიციური და ლამაზი ინტერფეისების შექმნა.",
    en: "Creating intuitive and beautiful interfaces for iOS and Android applications.",
  },
  "services.research.title": { ka: "UX კვლევა", en: "UX Research" },
  "services.research.desc": {
    ka: "მომხმარებლის ქცევის ანალიზი და დიზაინ გადაწყვეტილებების მონაცემებზე დაფუძნება.",
    en: "Analyzing user behavior and basing design decisions on data.",
  },

  // Projects
  "projects.label": { ka: "პორტფოლიო", en: "Portfolio" },
  "projects.title": { ka: "ბოლო პროექტები", en: "Recent Projects" },
  "projects.description": {
    ka: "გაეცანით ჩემს ნამუშევრებს და UX კვლევის შემთხვევების ანალიზს",
    en: "Explore my work and UX case study analyses",
  },
  "projects.all": { ka: "ყველა", en: "All" },
  "projects.viewAll": {
    ka: "ყველა პროექტი Behance-ზე",
    en: "All Projects on Behance",
  },
  "projects.onlyGeorgian.desc": {
    ka: "Crafted by Georgia. Powered by Purpose — ქართული ბრენდის იდენტობა და ვებ დიზაინი.",
    en: "Crafted by Georgia. Powered by Purpose — Georgian brand identity and web design.",
  },
  "projects.bestsoft.desc": {
    ka: "Your Vision, Our Creature — ციფრული სააგენტოს ვებსაიტის UX/UI დიზაინი და ბრენდინგი.",
    en: "Your Vision, Our Creature — Digital agency website UX/UI design and branding.",
  },
  "projects.comicshelf.desc": {
    ka: "Building a Digital Haven for Comic Lovers — კომიქსების მოყვარულთათვის ციფრული პლატფორმის დიზაინი.",
    en: "Building a Digital Haven for Comic Lovers — Digital platform design for comic enthusiasts.",
  },
  "projects.eduacademy.desc": {
    ka: "სასწავლო პლატფორმის UX/UI დიზაინი — ინტუიციური სასწავლო გამოცდილება სტუდენტებისთვის.",
    en: "Educational platform UX/UI design — intuitive learning experience for students.",
  },

  // Contact
  "contact.label": { ka: "კონტაქტი", en: "Contact" },
  "contact.title": { ka: "ვითანამშრომლოთ", en: "Let's Collaborate" },
  "contact.description": {
    ka: "გაქვთ პროექტის იდეა? მოხარული ვიქნები განვიხილო თქვენი ხედვა",
    en: "Have a project idea? I'd be happy to discuss your vision",
  },
  "contact.email": { ka: "ელ-ფოსტა", en: "Email" },
  "contact.phone": { ka: "ტელეფონი", en: "Phone" },
  "contact.location": { ka: "მდებარეობა", en: "Location" },
  "contact.locationValue": {
    ka: "თბილისი, საქართველო",
    en: "Tbilisi, Georgia",
  },
  "contact.status": { ka: "სტატუსი", en: "Status" },
  "contact.statusValue": {
    ka: "ხელმისაწვდომი ფრილანს პროექტებისთვის",
    en: "Available for freelance projects",
  },
  "contact.social": { ka: "სოციალური ქსელები", en: "Social Networks" },
  "contact.form.name": { ka: "სახელი", en: "Name" },
  "contact.form.namePlaceholder": { ka: "თქვენი სახელი", en: "Your name" },
  "contact.form.email": { ka: "ელ-ფოსტა", en: "Email" },
  "contact.form.subject": { ka: "თემა", en: "Subject" },
  "contact.form.subjectPlaceholder": {
    ka: "პროექტის შესახებ",
    en: "About the project",
  },
  "contact.form.message": { ka: "შეტყობინება", en: "Message" },
  "contact.form.messagePlaceholder": {
    ka: "მოგვიყევით თქვენი პროექტის შესახებ...",
    en: "Tell us about your project...",
  },
  "contact.form.send": { ka: "გაგზავნა", en: "Send" },
  "contact.form.sending": { ka: "იგზავნება...", en: "Sending..." },
  "contact.form.sent": { ka: "✓ გაგზავნილია!", en: "✓ Sent!" },

  // Footer
  "footer.madeWith": { ka: "შექმნილია", en: "Made with" },
  "footer.inTbilisi": { ka: "თბილისში", en: "in Tbilisi" },
};

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("ka");

  const t = useCallback(
    (key: string): string => {
      const translation = translations[key];
      if (!translation) return key;
      return translation[locale] || key;
    },
    [locale],
  );

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
