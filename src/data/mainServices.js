import { Building2, FileText, Briefcase, XCircle, TrendingDown, AlertCircle } from "lucide-react"

export const mainServices = [
  {
    icon: Building2,
    title: "Înființare SRL",
    bullets: ["Consultanță CAEN", "Redactare acte", "Depunere ONRC"],
    link: "/servicii/infiintare-srl",
  },
  {
    icon: FileText,
    title: "Înființare PFA",
    bullets: ["Coduri CAEN", "Dosar complet", "Depunere online"],
    link: "/servicii/infiintare-pfa",
  },
  {
    icon: Briefcase,
    title: "Consultanță juridică",
    bullets: ["Analiză rapidă", "Recomandări scrise", "Redactare contracte"],
    link: "/servicii/consultanta-juridica",
  },
  {
    icon: XCircle,
    title: "Închidere firmă",
    bullets: ["Analiză opțiuni", "Documentație completă", "Reprezentare"],
    link: "/servicii/inchidere-firma",
  },
  {
    icon: TrendingDown,
    title: "Preluare firmă cu datorii",
    bullets: ["Due-diligence", "Plan de transfer", "Cesiune conformă"],
    link: "/servicii/preluare-firma",
  },
  {
    icon: AlertCircle,
    title: "Insolvență firmă",
    bullets: ["Evaluare viabilitate", "Pregătire dosar", "Asistență procedură"],
    link: "/servicii/insolventa-firma",
  },
]
