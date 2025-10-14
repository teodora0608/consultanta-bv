import { FileCheck, MapPin, FileSignature, Users, AlertCircle, FileSpreadsheet, Heart, FileText } from "lucide-react"

export const secondaryServices = {
  rezervareDenumire: {
    icon: FileText,
    title: "Rezervare denumire firmă (nume SRL/PFA/ONG)",
    summary: "Verificare disponibilitate și rezervare denumire firmă la ONRC, cu confirmare rapidă în format PDF.",
    meta: {
      acte: "CI",
      livrabile: "dovadă rezervare denumire",
      durata: "1 zi",
    },
    details: {
      ceEste:
        "Serviciu de verificare disponibilitate și rezervare denumire firmă la ONRC, necesar înainte de înființarea unei societăți comerciale sau PFA.",
      candTrebuie:
        "Înainte de a începe procedura de înființare a firmei, pentru a te asigura că denumirea dorită este disponibilă și pentru a o rezerva.",
      acte: ["Copie CI solicitant", "3 variante de denumire (în ordine de preferință)"],
      pasi: [
        "Verificare disponibilitate denumiri în baza de date ONRC",
        "Depunere cerere de rezervare pentru denumirea disponibilă",
        "Obținere dovadă de rezervare în format PDF",
      ],
      durata: "1 zi lucrătoare",
      livrabile: "Dovadă de rezervare denumire firmă în format PDF, valabilă 3 luni",
    },
  },
  infiintareONG: {
    icon: Heart,
    title: "Înființare ONG (Asociație non-profit)",
    summary: "Înființare asociație non-profit cu consultanță și depunere la judecătorie",
    meta: {
      acte: "CI, denumiri, dovadă sediu",
      livrabile: "hotărâre + certificat + statut",
      durata: "~30 zile",
    },
    details: {
      ceEste:
        "Serviciu complet de înființare asociație non-profit (ONG), conform legii. Includem consultanță pentru denumire și obiective, redactare Act Constitutiv și Statut, depunere la judecătorie și înregistrare fiscală la ANAF.",
      candTrebuie:
        "Când dorești să înființezi o organizație non-profit pentru activități sociale, culturale, educaționale sau de altă natură non-profit.",
      acte: [
        "CI/Pașaport pentru minimum 3 membri fondatori",
        "3 denumiri propuse (rezervare nume)",
        "Dovada sediului (act proprietate + acord proprietar / contract)",
        "Date pentru scopul/activitățile asociației și structura de conducere",
      ],
      pasi: [
        "Consultanță pentru denumire și obiective, conform legii",
        "Redactare Act Constitutiv & Statut + autentificare notarială (după caz)",
        "Dosar complet pentru judecătorie + depunere și urmărire status",
        "Înregistrare fiscală la ANAF (certificat de înregistrare fiscală / cod fiscal)",
        "Ghid după înființare: cont bancar, evidențe, bune practici",
      ],
      durata: "Aproximativ 30 de zile calendaristice, în funcție de termenele instanței și calendarul notarului/ANAF",
      livrabile:
        "Hotărârea judecătorească și certificatul de înscriere în Registrul Asociațiilor, Actul Constitutiv și Statutul semnate, Certificatul de înregistrare fiscală (cod fiscal) ANAF, Set complet de documente în PDF semnat electronic",
    },
  },
  gazduireSediu: {
    icon: MapPin,
    title: "Găzduire sediu social (opțional)",
    summary: "Oferim adresă de sediu social pentru înregistrarea firmei",
    meta: {
      acte: "CI, date firmă",
      livrabile: "contract găzduire",
      durata: "1 zi",
    },
    details: {
      ceEste:
        "Serviciu de găzduire a sediului social pentru firme care nu au un spațiu propriu sau închiriat pentru sediu.",
      candTrebuie:
        "Când înființezi o firmă și nu ai un spațiu fizic disponibil sau când vrei să separi sediul social de locația de lucru.",
      acte: ["Copie CI administrator", "Date firmă (denumire, CUI)"],
      pasi: ["Semnare contract de găzduire", "Obținere documente necesare pentru ONRC"],
      durata: "1 zi lucrătoare",
      livrabile: "Contract de găzduire sediu social",
    },
  },
  certificatConstatator: {
    icon: FileCheck,
    title: "Certificat Constatator ONRC",
    summary: "Document oficial care atestă situația juridică actuală a unei firme",
    meta: {
      acte: "CUI, CI",
      livrabile: "PDF semnat",
      durata: "1–2 zile",
    },
    details: {
      ceEste:
        "Certificatul constatator este un document oficial emis de ONRC care confirmă datele de înregistrare și situația juridică actuală a unei societăți comerciale.",
      candTrebuie:
        "Necesar pentru deschiderea de conturi bancare, participarea la licitații, obținerea de credite sau verificarea situației juridice a unui partener de afaceri.",
      acte: ["CUI-ul firmei", "Copie CI solicitant"],
      pasi: ["Solicitare online la ONRC", "Plata taxei", "Obținere certificat în format electronic"],
      durata: "1–2 zile lucrătoare",
      livrabile: "Certificat constatator în format PDF cu semnătură electronică",
    },
  },
  mutareSediu: {
    icon: MapPin,
    title: "Mutare sediu (SRL / PFA / II)",
    summary: "Schimbarea adresei sediului social la ONRC",
    meta: {
      acte: "titlu/contract, CI",
      livrabile: "mențiune ONRC",
      durata: "3–5 zile",
    },
    details: {
      ceEste:
        "Procedura de modificare a adresei sediului social în registrul comerțului, necesară când firma își schimbă locația.",
      candTrebuie: "Obligatoriu când firma se mută la o nouă adresă. Trebuie făcută în termen de 15 zile de la mutare.",
      acte: ["Titlu de proprietate sau contract de închiriere pentru noul sediu", "Copii CI administratori"],
      pasi: ["Pregătire documentație", "Depunere cerere la ONRC", "Obținere mențiune"],
      durata: "3–5 zile lucrătoare",
      livrabile: "Certificat de înregistrare cu mențiunea noii adrese",
    },
  },
  alteMentiuni: {
    icon: FileSignature,
    title: "Alte mențiuni ONRC",
    summary: "Modificări CAEN, punct de lucru, statut, administratori, beneficiar real",
    meta: {
      acte: "variabil",
      livrabile: "mențiune ONRC",
      durata: "3–7 zile",
    },
    details: {
      ceEste:
        "Servicii pentru înregistrarea oricăror modificări în datele firmei: coduri CAEN, puncte de lucru, modificări statut, schimbări administratori/asociați, actualizare beneficiar real.",
      candTrebuie: "Când apar modificări în structura sau activitatea firmei care trebuie raportate la ONRC.",
      acte: ["Documente specifice fiecărei modificări", "Hotărâri ale asociaților", "Copii CI"],
      pasi: ["Consultanță pentru tipul de modificare", "Pregătire documentație", "Depunere la ONRC"],
      durata: "3–7 zile lucrătoare, în funcție de complexitate",
      livrabile: "Certificat de înregistrare cu mențiunile actualizate",
    },
  },
  cesiuniParti: {
    icon: Users,
    title: "Cesiuni părți sociale",
    summary: "Transfer de părți sociale între asociați sau către terți",
    meta: {
      acte: "CI, contract cesiune",
      livrabile: "mențiune ONRC",
      durata: "5–7 zile",
    },
    details: {
      ceEste:
        "Procedura de transfer al părților sociale dintr-o SRL de la un asociat la altul sau către o persoană terță.",
      candTrebuie: "Când un asociat dorește să vândă sau să transfere părțile sale sociale.",
      acte: ["Contract de cesiune", "Copii CI ale părților", "Hotărâre asociați (dacă este necesar)"],
      pasi: ["Redactare contract cesiune", "Obținere acorduri necesare", "Depunere la ONRC"],
      durata: "5–7 zile lucrătoare",
      livrabile: "Certificat de înregistrare cu noua structură acționariat",
    },
  },
  suspendareReactivare: {
    icon: AlertCircle,
    title: "Suspendare / Reactivare activitate",
    summary: "Suspendarea temporară sau reactivarea activității firmei",
    meta: {
      acte: "CI, hotărâre",
      livrabile: "mențiune ONRC",
      durata: "3–5 zile",
    },
    details: {
      ceEste:
        "Procedura de suspendare temporară a activității firmei (fără a o închide) sau de reactivare după o perioadă de suspendare.",
      candTrebuie: "Când firma nu desfășoară activitate temporar sau când dorește să reia activitatea după suspendare.",
      acte: ["Hotărâre asociați", "Copii CI administratori"],
      pasi: ["Pregătire documentație", "Depunere cerere la ONRC", "Notificare ANAF"],
      durata: "3–5 zile lucrătoare",
      livrabile: "Mențiune de suspendare/reactivare în registrul comerțului",
    },
  },
  reactivareFiscala: {
    icon: FileSpreadsheet,
    title: "Reactivare fiscală & cazier fiscal",
    summary: "Reactivare cod TVA și obținere cazier fiscal",
    meta: {
      acte: "CI, documente firmă",
      livrabile: "cod TVA, cazier",
      durata: "5–10 zile",
    },
    details: {
      ceEste: "Servicii pentru reactivarea codului de TVA la ANAF și obținerea cazierului fiscal al firmei.",
      candTrebuie:
        "Când firma a fost dezactivată de ANAF sau când este nevoie de cazier fiscal pentru licitații sau contracte.",
      acte: ["Documente firmă", "Copii CI", "Dovezi activitate"],
      pasi: ["Verificare situație fiscală", "Pregătire documentație", "Depunere cerere ANAF"],
      durata: "5–10 zile lucrătoare",
      livrabile: "Cod TVA reactivat și/sau cazier fiscal",
    },
  },
  inchiriereAdministratori: {
    icon: Users,
    title: "Închiriere administratori/asociați",
    summary: "Serviciu special pentru situații complexe (cu disclaimer)",
    meta: {
      acte: "variabil",
      livrabile: "contract + mențiune",
      durata: "variabil",
    },
    details: {
      ceEste:
        "Serviciu special pentru situații în care este necesară schimbarea administratorilor sau asociaților. ATENȚIE: Acest serviciu trebuie folosit doar în situații legitime și conforme cu legea.",
      candTrebuie:
        "În situații specifice când este necesară o restructurare a conducerii societății. Consultați un avocat pentru legalitate.",
      acte: ["Documente specifice situației", "Acorduri între părți", "Copii CI"],
      pasi: ["Consultanță juridică obligatorie", "Evaluare situație", "Pregătire documentație", "Depunere ONRC"],
      durata: "Variabil, în funcție de complexitate",
      livrabile: "Contracte și mențiuni ONRC",
    },
  },
  declaratieUnica: {
    icon: FileSpreadsheet,
    title: "Depunere Declarația Unică (PF)",
    summary: "Completare și depunere declarație venituri persoane fizice",
    meta: {
      acte: "împuternicire, venituri, SPV",
      livrabile: "recipisă + PDF",
      durata: "1–2 zile",
    },
    details: {
      ceEste:
        "Serviciu de completare și depunere a Declarației Unice pentru persoane fizice, necesară pentru raportarea veniturilor și calculul impozitelor.",
      candTrebuie:
        "Anual, până la 25 mai, pentru persoanele cu venituri din chirii, dividende, drepturi de autor, activități independente etc.",
      acte: ["Împuternicire", "Documente venituri", "Certificate SPV (dacă este cazul)"],
      pasi: ["Colectare documente", "Completare declarație", "Depunere online la ANAF"],
      durata: "1–2 zile lucrătoare",
      livrabile: "Recipisă de depunere și copie declarație în format PDF",
    },
  },
  registruControl: {
    icon: FileCheck,
    title: "Registru Unic de Control (ANAF)",
    summary: "Obținerea RUC pentru evidența controalelor fiscale",
    meta: {
      acte: "CI, date firmă",
      livrabile: "RUC emis",
      durata: "1–3 zile",
    },
    details: {
      ceEste:
        "Registrul Unic de Control este documentul în care se înregistrează toate controalele efectuate de autoritățile fiscale la sediul firmei.",
      candTrebuie:
        "Obligatoriu pentru toate firmele. Trebuie păstrat la sediul social și prezentat la cererea autorităților.",
      acte: ["Copie CI administrator", "Date firmă (CUI, denumire)"],
      pasi: ["Solicitare online la ANAF", "Completare formular", "Descărcare RUC"],
      durata: "1–3 zile lucrătoare",
      livrabile: "Registru Unic de Control în format electronic",
    },
  },
  autorizari: {
    icon: FileSignature,
    title: "Autorizări DSVSA / DSP / ISU / APM",
    summary:
      "Obținerea autorizațiilor necesare de la diverse autorități: sanitară (DSP/DSVSA), pompieri (ISU), mediu (APM).",
    meta: {
      acte: "plan spațiu, CI",
      livrabile: "avize/autorizații",
      durata: "variabil",
    },
    details: {
      ceEste:
        "Servicii pentru obținerea autorizațiilor necesare de la diverse autorități: sanitară (DSP/DSVSA), pompieri (ISU), mediu (APM).",
      candTrebuie: "În funcție de domeniul de activitate: HoReCa, comerț alimentar, producție, depozitare etc.",
      acte: ["Plan al spațiului", "Copii CI", "Documente specifice activității"],
      pasi: ["Evaluare necesități", "Pregătire documentație", "Depunere cereri", "Inspecții", "Obținere autorizații"],
      durata: "Variabil, de la 2 săptămâni la 3 luni",
      livrabile: "Avize și autorizații de funcționare",
    },
  },
  extrasCarte: {
    icon: MapPin,
    title: "(Opțional) Extras Carte Funciară (ANCPI)",
    summary: "Document oficial privind situația juridică a unui imobil",
    meta: {
      acte: "nr. cadastral/adresă",
      livrabile: "PDF ANCPI",
      durata: "aceeași zi",
    },
    details: {
      ceEste:
        "Extrasul de carte funciară este documentul oficial care atestă situația juridică a unui imobil, inclusiv proprietarul, sarcinile și drepturile înscrise.",
      candTrebuie:
        "Necesar înainte de cumpărarea unui imobil, pentru verificarea situației juridice, obținerea de credite ipotecare sau în proceduri juridice.",
      acte: ["Număr cadastral sau adresa completă a imobilului"],
      pasi: ["Solicitare online la ANCPI", "Plata taxei", "Descărcare extras"],
      durata: "De obicei în aceeași zi lucrătoare",
      livrabile: "Extras de carte funciară în format PDF de pe site-ul ANCPI",
    },
  },
}

export const serviceGroups = {
  infiintare: [
    secondaryServices.rezervareDenumire,
    secondaryServices.gazduireSediu,
    secondaryServices.certificatConstatator,
    secondaryServices.infiintareONG,
  ],
  modificari: [
    secondaryServices.mutareSediu,
    secondaryServices.alteMentiuni,
    secondaryServices.cesiuniParti,
    secondaryServices.suspendareReactivare,
    secondaryServices.reactivareFiscala,
    secondaryServices.inchiriereAdministratori,
  ],
  documente: [
    secondaryServices.declaratieUnica,
    secondaryServices.registruControl,
    secondaryServices.autorizari,
    secondaryServices.extrasCarte,
  ],
}
