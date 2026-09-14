import { ProjectItem, BentoCardItem, ReferenceItem } from '@/types';

export const CORE_PROJECTS: ProjectItem[] = [
  {
    id: 'residential-power',
    category: 'Wohngebäude',
    title: 'Transforming Residential Power',
    subtitle: 'From Home Rooftops to Industrial Powerhouses, Clean Energy for Modern Living.',
    badge: 'Privatkunden',
    link: '/privatkunden',
    isMock: false,
    imageAlt: 'Photovoltaikanlagen für Ein- und Mehrfamilienhäuser',
  },
  {
    id: 'commercial-solar',
    category: 'Gewerbe & Industrie',
    title: 'Solar Integration in Industry',
    subtitle: 'Redefining Modern Production with Solar: Industries Embrace a Cleaner Tomorrow.',
    badge: 'C&I Lösungen',
    link: '/gewerbe-industrie',
    isMock: false,
    imageAlt: 'Industrielle Solaranlagen und Gewerbedächer',
  },
];

export const SERVICE_BENTO_CARDS: BentoCardItem[] = [
  {
    id: 'solar-panel',
    title: 'Solar Panel',
    description: 'Hochleistungs-Solarmodule, DC-Verkabelung, Schrägdach- und Flachdachmontage nach höchsten VDE-Sicherheitsstandards.',
    iconName: 'Sun',
    tag: 'Dachanlagen',
    isMock: false,
  },
  {
    id: 'hybrid-storage',
    title: 'Hybrid Panel',
    description: 'Moderne Hybridwechselrichter und Hochvolt-Batteriespeicher mit automatischer Notstrom- und Ersatzstromfunktion.',
    iconName: 'BatteryCharging',
    tag: 'Speichersysteme',
    isMock: false,
  },
  {
    id: 'eco-smart-home',
    title: 'Eco Smart Home',
    description: 'Intelligentes Energiemanagementsystem (HEMS), dynamisches Überschussladen für Wallboxen und Wärmepumpensteuerung.',
    iconName: 'Home',
    tag: 'Smarte Energie',
    isMock: false,
  },
  {
    id: 'system-construction',
    title: 'Hybrid System Construction',
    description: 'Fachgerechter Zählerschrankumbau nach TAB, VDE-Prüfprotokolle, Messstellenbetrieb und normgerechte Elektroinstallation.',
    iconName: 'Zap',
    tag: 'Elektromeister',
    isMock: false,
  },
  {
    id: 'utility-engineering',
    title: 'Solar Hybrid & Utility',
    description: 'Mittelspannungsplanung, Trafostationen, Kabeldimensionierung, SCADA-Fernüberwachung und VDE-Inbetriebnahmeservice.',
    iconName: 'Cpu',
    tag: 'EPC Großprojekte',
    isMock: false,
  },
];

export const ALL_REFERENCES: ReferenceItem[] = [
  {
    id: 'ref-1',
    category: 'Wohngebäude',
    title: 'Einfamilienhaus Heidelberg - 12 kWp + 10 kWh Speicher',
    location: 'Heidelberg, Baden-Württemberg',
    details: 'Full-Black Glas-Glas Module, Hybridwechselrichter, Notstromautomatik, Wallbox 11 kW.',
    specs: '12 kWp PV • 10 kWh Speicher • 11 kW Wallbox',
    isMock: false,
  }
];
