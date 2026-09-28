// src/data/cvData.ts
export const cvData = {
  personalInfo: {
    name: "Elber Esteban González Torres",
    title: "Estudiante de Ingeniería de Sistemas",
    profile: "Analista TI con más de 15 años de experiencia en la operación y administración de infraestructura TI. Poseo conocimientos avanzados en la gestión e implementación de diferentes redes de datos, servidores, virtualización de sistemas, soluciones de almacenamiento, servicios en la nube, seguridad informática, entre otros. Además, he participado en la planificación y puesta en marcha de proyectos y procesos de gobernanza de TI que incluyen la regulación de estándares de calidad, indicadores clave de desempeño, auditoría interna, gestión documental, ciberseguridad, evaluación de riesgos y continuidad de negocio. Soy un colaborador efectivo en equipos multidisciplinarios, con habilidades de comunicación, trabajo en equipo, capacidad de adaptación, responsabilidad y siempre enfocado en la innovación y mejora continua para contribuir al logro de la misión y los objetivos de la compañía desde el área de TI.",
    photo: "/profile-placeholder.png",
    phone: "+57 333 279 1653",
    residence: "Medellín, Colombia",
    freelance: "Disponible",
    email: "elber.gonzalezt@udea.edu.co",
  },
  contact: {
    phone: "+57 333 279 1653",
    email: "elber.gonzalezt@udea.edu.co",
  },
  languages: [
    { name: "Español", level: 100 },
    { name: "Inglés", level: 50 },
  ],
  programmingLanguages: [
    { name: "SQL", level: 85 },
    { name: "Python", level: 60 },
    { name: "Bash", level: 75 },
    { name: "PowerShell", level: 80 },
    { name: "JavaScript", level: 50 },
  ],
  extraSkills: [
    "Comunicación efectiva",
    "Trabajo en equipo",
    "Adaptación al cambio",
    "Orientación al logro",
    "Aprendizaje constante",
    "Toma de decisiones",
    "Resiliencia",
    "Gestión del tiempo",
    "ISO 27001",
    "SOX",
    "ITIL",
  ],
  knowledge: [
    {
      title: "Infraestructura TI",
      description: "Administración de servidores, virtualización (VMware, Hyper-V), almacenamiento (SAN, vSAN) y redes de datos.",
      icon: "Server",
    },
    {
      title: "Ciberseguridad",
      description: "Gestión de firewalls Fortinet, VPNs IP/SEC y SSL, auditoría interna, ISO 27001 y SOX.",
      icon: "Shield",
    },
    {
      title: "Cloud & DevOps",
      description: "Aprovisionamiento en AWS (EC2), Microsoft 365, Google Business, Atlassian, Jira.",
      icon: "Cloud",
    },
    {
      title: "Gestión de Proyectos",
      description: "Planificación de proyectos ITS, SCADA, peajes, documentación técnica y mejora continua.",
      icon: "ClipboardList",
    },
  ],
  education: [
    {
      institution: "Universidad de Antioquia",
      degree: "Ingeniería de Sistemas",
      date: "2021 - En curso",
      description: "Formación profesional en ingeniería de sistemas, enfocada en desarrollo de software, redes y gestión de TI.",
    },
    {
      institution: "SENA",
      degree: "Tecnólogo en Análisis y Desarrollo de Sistemas de Información",
      date: "2019 - 2021",
      description: "Formación técnica en análisis, diseño e implementación de sistemas de información.",
    },
    {
      institution: "ITM",
      degree: "Tecnólogo en Sistemas",
      date: "2006 - 2008",
      description: "Fundamentos en sistemas, redes y soporte técnico.",
    },
  ],
  certifications: [
    { name: "Inteligencia Artificial & Análisis de Datos", institution: "TalentoTech - MINTIC", year: "2025" },
    { name: "Apropiación de los Conceptos en Ciberseguridad", institution: "SENA", year: "2025" },
    { name: "Redes y Seguridad", institution: "SENA", year: "2023" },
    { name: "Administración de Servicios Microsoft 365", institution: "SENA", year: "2023" },
    { name: "Auditoría Interna de Calidad - NTC ISO 9001", institution: "Fundación Universitaria Luis Amigó", year: "2018" },
    { name: "Switches ERS 4859GTS", institution: "Walter Bridge", year: "2016" },
  ],
  experience: [
    {
      company: "F2X S.A.S.",
      role: "Analista de Operaciones ITS",
      date: "16/07/2018 - 10/03/2025",
      description: "Administración, soporte y mantenimiento de la infraestructura interna On-premise y Cloud. Firewalls Fortinet, switches en stack, vLANs, DNS, VPNs IP/SEC y SSL. Aprovisionamiento de instancias EC2 en AWS. Gestión de licenciamientos Microsoft, Google Business, Atlassian, antivirus Falcon Crowdstrike / Sophos, soporte interno Jira. Establecí procesos de gestión documental y ciberseguridad apoyado en SOX e ISO 27001. Participé en proyectos de infraestructura para sistemas de peaje, SCADA y soluciones ITS.",
    },
    {
      company: "Universidad Católica Luis Amigó",
      role: "Auxiliar de Infraestructura",
      date: "08/07/2014 - 12/07/2018",
      description: "Administración de VMware VSphere, Switches Avaya, WIFI alta densidad, vLANs, DNS, DHCP, VPN Fortinet/Mikrotik. Configuración de servidores AD/DC, backups, WSUS, antivirus ESET. Participé en análisis, diseño e implementación de procesos de TI para ISO 9001, logrando cumplimiento de KPI del 93%.",
    },
    {
      company: "Concesión Túnel Aburra Oriente (Operador TI)",
      role: "Operador TI Centro de Control de Operaciones",
      date: "Experiencia previa",
      description: "Administración y operación de medios del sistema SCADA HORUS: servidores virtualizados (video, megafonía, iluminación, Backup, postes SOS, cámaras, PMV, semáforos) de los 8KM de Túnel. Configuración y soporte de red de comunicación para servicios TIC en vía Las Palmas.",
    },
  ],
  portfolio: [
    {
      title: "Sistema de Tickets Interno",
      description: "Implementación de sistema de tickets para atención de casos, mejorando los KPI de calidad al 93%.",
      image: "/project-ticket.png", // Placeholder
      link: "#",
      details: "Desarrollo e implementación de un sistema de tickets utilizando Jira Service Management, integrado con Active Directory para autenticación. Se definieron flujos de trabajo, SLA y reportes de desempeño.",
    },
    {
      title: "Sistema de Inventario TI",
      description: "Diseño e implementación de sistema de inventario para el cumplimiento de normativa ISO 9001.",
      image: "/project-inventory.png", // Placeholder
      link: "#",
      details: "Creación de una base de datos en SQL Server y una interfaz web para la gestión de inventario de equipos, licencias y consumibles. Se integró con el sistema de tickets para automatizar solicitudes.",
    },
    {
      title: "Migración a Cloud (AWS)",
      description: "Aprovisionamiento de instancias EC2 para ambientes de QA, ERP e ITS.",
      image: "/project-cloud.png", // Placeholder
      link: "#",
      details: "Migración de servidores on-premise a AWS, configurando VPC, subredes, grupos de seguridad y balanceadores de carga. Se implementaron políticas de backup y recuperación ante desastres.",
    },
    {
      title: "Implementación SCADA HORUS",
      description: "Administración de servidores virtualizados para sistema SCADA en túnel de 8KM.",
      image: "/project-scada.png", // Placeholder
      link: "#",
      details: "Configuración y operación de servidores virtualizados para video, megafonía, iluminación, postes SOS, cámaras, PMV y semáforos. Se garantizó la disponibilidad del sistema 24/7.",
    },
  ],

  socialLinks: [
  { name: "GitHub", url: "https://github.com/ElberEsteban  ", icon: "Github" },
  { name: "Instagram", url: "https://instagram.com/eegt__", icon: "Instagram" },
  ],
};