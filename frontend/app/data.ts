export type Data = {
  name: string;
  issuingOrganization: string;
  businessNeeds: string;
  amountOfFunding: string;
  shortDescription: string;
  fullDescription: string;
  stage: string[];
  eligibility: string[];
  documentRequired?: any;
  link?: string;
};

export const rawData: any = [
  {
    name: "Operation & Technology Roadmap (OTR)",
    issuingOrganization: "Agency for Science, Technology and Research",
    industry: "All",
    businessNeeds: "Digitise with Technology",
    amountOfFunding: "80%, GST included",
    shortDescription:
      "OTR aligns tech with goals, mitigates risk, and optimizes resources for long-term growth.",
    fullDescription:
      "Behind every thriving business lies a successful growth strategy. Building a technology roadmap through the Operation & Technology Roadmap (OTR) programme will help you form a strategic business plan to grow your business in the long term.",
    stage: ["LLE"],
    eligibility: [
      "Registered under ACRA",
      "At least 30% local shareholdings",
      "Less than 200 employees",
    ],
    link: "https://www.a-star.edu.sg/enterprise/innovation-offerings/programmes-for-smes/operation-technology-roadmap",
  },
  {
    name: "Productivity Solutions Grant (PSG)",
    issuingOrganization: "GoBusiness Singapore",
    industry: "All",
    businessNeeds: "Digitise with Technology",
    amountOfFunding: "Up to 50%",
    shortDescription:
      "Aids businesses with technology adoption for productivity enhancement, backed financially.",
    fullDescription:
      "The Productivity Solutions Grant (PSG) was launched on April 2018 to help businesses enhance their processes with technology. It provides financial support for business owners to adopt pre-scoped IT solutions, equipment and consultancy services to improve productivity. These solutions are aligned to the industry roadmaps such as the Industry Transformation Maps (ITMs) and Industry Digital Plans (IDPs).",
    stage: ["Startup", "SME", "LLE"],
    eligibility: ["Registered under ACRA", "At least 3 employees"],
    link: "https://www.gobusiness.gov.sg/productivity-solutions-grant/#psg-eligibility",
  },
  {
    name: "Start Digital",
    issuingOrganization: "Infocomm Media Development Authority",
    industry: "Information Technology",
    businessNeeds: "Digitise with Technology",
    amountOfFunding: "Minimum six months (or equivalent) of fee waiver",
    shortDescription:
      "Support more SMEs to go digital in building their foundational digital capabilities with easy-to-deploy solutions.",
    fullDescription:
      "Support more SMEs to go digital in building their foundational digital capabilities with easy-to-deploy solutions.",
    stage: ["Startup", "SME"],
    eligibility: [
      "Registered under ACRA",
      "At least 30% local shareholding",
      "Not more than 200 employees",
    ],
    link: "https://www.imda.gov.sg/how-we-can-help/smes-go-digital/start-digital",
  },
  {
    name: "Grow Digital",
    issuingOrganization: "Infocomm Media Development Authority",
    industry: "All",
    businessNeeds: "Expand Overseas, Develop Brand Awareness",
    amountOfFunding: "Up to 70%",
    shortDescription:
      "Aids SMEs with e-commerce solutions to expand globally sans physical presence",
    fullDescription:
      "Grow Digital, an initiative by the Infocomm Media Development Authority (IMDA) and Enterprise Singapore (ESG) under the SMEs Go Digital programme, offers SMEs digital solutions to expand their businesses through e-commerce platforms, both locally and overseas. By leveraging this initiative and other digitalisation efforts in Singapore, SMEs can participate in Business-to-Business (B2B) and Business-to-Consumer (B2C) e-commerce platforms to sell overseas without a need for physical presence.",
    stage: ["Startup", "SME"],
    eligibility: [
      "Registered under ACRA",
      "At least 30% local shareholding",
      "Group turnover <100mil/annum",
    ],
    link: "https://www.imda.gov.sg/how-we-can-help/smes-go-digital/grow-digital",
  },
  {
    name: "Local Enterprise and Association Development (LEAD) Programme",
    issuingOrganization: "Enterprise Singapore",
    industry: "All",
    businessNeeds: "Expand Overseas",
    amountOfFunding: "Up to 70%",
    shortDescription:
      "LEAD empowers Trade associations and chambers (TACs) to drive capability development and internationalization projects.",
    fullDescription:
      "Trade associations and chambers (TACs) are key enablers in enterprise upgrading and industry development. TACs keen to play a more active role in driving capability development and internationalisation projects can apply for the Local Enterprise and Association Development Programme (LEAD) programme.",
    stage: ["Startup", "SME"],
    eligibility: ["Only open to TACs", "Project Based"],
    link: "https://www.enterprisesg.gov.sg/financial-support/local-enterprise-and-association-development-programme",
  },
  {
    name: "Market Readiness Assistance (MRA) Grant",
    issuingOrganization: "Enterprise Singapore",
    industry: "All",
    businessNeeds: "Expand Overseas, Develop Brand Awareness",
    amountOfFunding: "Up to 50%",
    shortDescription:
      "SMEs looking to take their business overseas can receive up to 70% support for eligible costs with the MRA grant from 1 April 2020 - 31 March 2023.",
    fullDescription:
      "The Market Readiness Assistance (MRA) grant helps companies expand into new markets overseas by defraying the costs of overseas market promotion, business development and set-up.",
    stage: ["Startup", "SME"],
    eligibility: [
      "Registered under ACRA",
      "At least 30% local shareholding",
      "New to target overseas market",
    ],
    link: "https://www.enterprisesg.gov.sg/financial-support/market-readiness-assistance-grant",
  },
  {
    name: "Technology for Enterprise Capability Upgrading (T-Up)",
    issuingOrganization: "Enterprise Singapore",
    industry: "Information Technology",
    businessNeeds: "Conduct R&D",
    amountOfFunding: "Up to 70%",
    shortDescription:
      "Aids local SMEs and LLEs to boost competitiveness with technological advancements",
    fullDescription:
      "Administered by A*STAR and AI Singapore (AISG), the Technology for Enterprise Capability Upgrading (T-UP) programme supports local SMEs and LLEs in enhancing business competitiveness. Get access to researchers, scientists and engineers to enhance your products and technologies.",
    stage: ["Startup", "SME"],
    eligibility: [
      "Registered under ACRA",
      "At least 30% local shareholding",
      "Group turnover <100mil/annum",
    ],
    link: "https://www.enterprisesg.gov.sg/grow-your-business/innovate-with-us/innovation-talent/technology-for-enterprise-capability-upgrading",
  },
  {
    name: "Local Enterprise and Association Development (LEAD) Programme",
    issuingOrganization: "Infocomm Media Development Authority",
    industry: "All",
    businessNeeds: "Develop Brand Awareness",
    amountOfFunding: "Up to 70%",
    shortDescription:
      "TACs are pivotal in enterprise upgrading. Those eager to lead capability development can apply for LEAD.",
    fullDescription:
      "Trade associations and chambers (TACs) are key enablers in enterprise upgrading and industry development. TACs keen to play a more active role in driving capability development and internationalisation projects can apply for the Local Enterprise and Association Development Programme (LEAD) programme.",
    stage: ["Startup", "SME"],
    eligibility: [
      "Only open to TACs",
      "Represent a key industry and have a sizeable membership",
    ],
    link: "https://www.enterprisesg.gov.sg/financial-support/local-enterprise-and-association-development-programme",
  },
  {
    name: "Career Trial for Employers",
    issuingOrganization: "Workforce Singapore",
    industry: "Career Services",
    businessNeeds: "Sustain Through COVID-19",
    amountOfFunding:
      "Training allowance of $7.50 - $15.00 per hour\n$500 for 3 months retention; $1,000 for 6 months retention (Additional criteria applies)",
    shortDescription:
      "Allows companies to assess jobseekers’ job fit through a short-term trial, before formal employment. Government will provide training allowance to the jobseekers for the trial period (up to 3 months).",
    fullDescription:
      "Allows companies to assess jobseekers’ job fit through a short-term trial, before formal employment. Government will provide training allowance to the jobseekers for the trial period (up to 3 months).",
    stage: ["Startup", "SME", "LLE"],
    eligibility: [
      "Legally registered or incorporated in Singapore, with a Unique Entity Number (UEN) registered with ACRA;",
      "Actively hiring for full-time jobs paying at least $1,500/month, and/or part-time jobs paying at least $750/month;",
      "Be able to offer employment to suitable Jobseekers on permanent terms or on contract terms that are no less than one (1) year after completion of Career Trial.",
    ],
    link: "https://www.wsg.gov.sg/home/employers-industry-partners/workforce-development-job-redesign/career-trial-for-employers",
  },
  {
    name: "Jobs Growth Incentive (JGI)",
    issuingOrganization: "Inland Revenue Authority of Singapore",
    industry: "All",
    businessNeeds: "Sustain Through COVID-19",
    amountOfFunding: "Up to 50%",
    shortDescription:
      "The Jobs Growth Incentive (JGI) supports employers to expand local hiring1 from September 2020 to March 2023 (inclusive).",
    fullDescription:
      "The Jobs Growth Incentive (JGI) supports employers to expand local hiring1 from September 2020 to March 2023 (inclusive).",
    stage: ["Startup", "SME", "LLE"],
    eligibility: [
      "Employers must make timely CPF contributions",
      "Increase in local employees earning gross wages of at least $1,400 per month",
    ],
    link: "https://www.iras.gov.sg/schemes/disbursement-schemes/jobs-growth-incentive",
  },
  {
    name: "Senior Employment Credit",
    issuingOrganization: "Inland Revenue Authority of Singapore",
    industry: "Career Services",
    businessNeeds: "Sustain Through COVID-19",
    amountOfFunding: "Up to $3,000",
    shortDescription:
      "No application is required. The Senior Employment Credit provides wage offsets to help employers that employ workers aged 55 and above adjust to the higher Retirement Age and Re-employment Age",
    fullDescription:
      "Under the SEC, the Government provides wage offsets to help employers that employ Singaporean workers adjust to the higher Retirement Age and Re-employment Age. Higher support will be given for the older age bands.",
    stage: ["Startup", "SME", "LLE"],
    eligibility: [
      "SC employees aged 60 years and above",
      "Monthly wage of up to $4,000 and contributed to CPF",
    ],
    link: "https://www.iras.gov.sg/schemes/disbursement-schemes/senior-employment-credit-(sec)-cpf-transition-offset-(cto)-and-enabling-employment-credit-(eec)",
  },
  {
    name: "SkillsFuture Work-Study Programmes (WSPs)",
    issuingOrganization: "GoBusiness Singapore",
    industry: "Career Services",
    businessNeeds: "Sustain Through COVID-19",
    amountOfFunding: "Up to $15,000 per trainee",
    shortDescription:
      "Businesses can groom and hire fresh talent through Work-Study Programmes across Certificate, Diploma, Post-Diploma, and Degree levels. Businesses will jointly design and deliver with Institutes of Higher Learning (IHLs) and appointed private providers.",
    fullDescription:
      "For 2023 to 2025, the wage offset applies to Singaporean workers aged 60 and above and earning up to $4,000 per month. For wages paid between 1 Jan 2023 and 31 Dec 2025, employers will receive up to 8% of the wages paid to these eligible workers, depending on their age and wage.",
    stage: ["Startup", "SME", "LLE"],
    eligibility: [
      "SC/SPR  who are within three years of either graduation from the ITE and Polytechnics",
    ],
    link: "https://www.gobusiness.gov.sg/enterprisejobskills/programmes-and-initiatives/recruit-talent/skillsfuture-work-study-programmes/",
  },
  {
    name: "Company-Led Training (CLT) Programme",
    issuingOrganization: "Workforce Singapore",
    industry: "Information Technology",
    businessNeeds: "Hire and Upskill Employees",
    amountOfFunding:
      "Trainees will gain employment and receive a salary while being equipped with in-demand tech skills. Under the programme, they will also get to work on projects guided by experienced mentors, gain in-depth industry exposure, and enhance their employability and career pathways in tech roles.",
    shortDescription:
      "CLT program fast-tracks professional development, focusing on tech skills aligned with industry demands, especially in digital economy sectors.",
    fullDescription:
      "The Company-Led Training (CLT) programme aims to accelerate the professional development of tertiary graduates and mid-career professionals including mature PMETs, through an on-the-job training programme to help them achieve competencies for jobs in demand by industry, especially those that support the digital economy sector transformation efforts. The CLT programme aligns to the Skills Framework of ICT and focuses on developing tech skills. Through this programme, participants can take IT courses in Singapore designed to build expertise in these areas, especially in new areas like Artificial Intelligence (AI), Cybersecurity, Internet of Things (IoT), Data Analytics, Blockchain, etc.",
    stage: ["Startup", "SME", "LLE"],
    eligibility: [
      "SC/SPR",
      "Able to commit to completing the full training programme",
      "Able to meet the hiring requirements of the companies",
    ],
    link: "https://www.imda.gov.sg/how-we-can-help/techskills-accelerator-tesa/company-led-training-programme-clt",
  },
  {
    name: "Employment Support for Ex-Offenders",
    issuingOrganization: "Workforce Singapore",
    industry: "Career Services",
    businessNeeds: "Hire and Upskill Employees",
    amountOfFunding:
      "Gain access to an alternative pool of productive and committed workers through job-matching services by Yellow Ribbon Singapore (YRSG). Benefit from career retention support by YRSG career coaches to support employers and help ex-offenders stay in employment.",
    shortDescription:
      "This programme supports companies to tap on ex-offenders as an alternative pool of trained and skilled workers.",
    fullDescription:
      "This programme supports companies to tap on ex-offenders as an alternative pool of trained and skilled workers.",
    stage: ["Startup", "SME", "LLE"],
    eligibility: [
      "Is registered or incorporated in Singapore",
      "Is interested in hiring ex-offenders who are Singapore Citizens or Permanent Residents",
    ],
    link: "https://www.wsg.gov.sg/home/employers-industry-partners/workforce-development-job-redesign/wsg-hiring-opportunities-yellow-ribbon",
  },
  {
    name: "3R Fund",
    issuingOrganization: "National Environment Agency",
    industry: "Environment",
    businessNeeds: "Improve Operational Processes",
    amountOfFunding: "Up to 80% of qualifying cost",
    shortDescription:
      "The 3R Fund is a co-funding scheme to encourage organisations to reduce waste disposed of at NEA's incineration plants and disposal facilities through the implementation of waste minimisation and recycling projects.",
    fullDescription:
      "The 3R Fund is a co-funding scheme to encourage organisations to reduce waste disposed of at NEA's incineration plants and disposal facilities through the implementation of waste minimisation and recycling projects.",
    stage: ["Startup", "SME", "LLE"],
    eligibility: ["Any organisations", "Increased recycled efforts"],
    link: "https://www.nea.gov.sg/programmes-grants/grants-and-awards/3r-fund",
  },
  {
    name: "Water Efficiency Fund (WEF)",
    issuingOrganization: "PUB Singapore's National Water Agency",
    industry: "Environment",
    businessNeeds: "Improve Operational Processes",
    amountOfFunding: "Water Efficiency Assessment, Pilot Study, Recycling",
    shortDescription:
      "WEF provides funding to local non-domestic water users to enable them to improve water efficiency through water efficiency assessment, pilot study, recycling, adoption of water efficient equipment & industrial water solution demonstration projects.",
    fullDescription:
      "WEF provides funding to local non-domestic water users to enable them to improve water efficiency through water efficiency assessment, pilot study, recycling, adoption of water efficient equipment & industrial water solution demonstration projects.",
    stage: ["Startup", "SME", "LLE"],
    eligibility: [
      "Premises with monthly water consumption of at least 1,000m3",
      "10% Water savings requirements",
    ],
    link: "https://www.pub.gov.sg/Public/WaterLoop/Water-Conservation/Incentives-and-Grants/Water-Efficiency-Fund",
  },
  {
    name: "Part-Time Re-employment Grant (PTRG)",
    issuingOrganization: "Workforce Singapore",
    industry: "Career Services",
    businessNeeds: "Improve Working Arrangements",
    amountOfFunding: "Up to $125,000",
    shortDescription:
      "New PTRG offers up to $125,000 to employers for part-time re-employment and flexible work arrangements, aiming to retain senior workers.",
    fullDescription:
      "The New PTRG provides up to $125,000 to employers who offer part-time re-employment, other flexible work arrangements (FWAs) and structured career planning (SCP) to senior workers. This will provide more flexible work options to attract and retain senior workers, and encourage them to stay in the workforce.",
    stage: ["Startup", "SME", "LLE"],
    eligibility: [
      "Have at least 1 senior worker aged 60 or above.",
      "Offer part-time re-employment for eligible seniors.",
      "Commit to providing SCP for employees aged 45 and above.",
      "Ensure senior management and HR attend SCP workshops by SNEF.",
    ],
    link: "https://www.wsg.gov.sg/home/employers-industry-partners/workforce-development-job-redesign/new-part-time-re-employment-grant",
  },
];
