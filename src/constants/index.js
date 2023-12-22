import {starbucks, tesla, BU, Liberty, JH } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    git,
    github,
    html,
    linkedin,
    pricewise,
    react,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    tensorflow,
    python,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "react",
        type: "Frontend",
    },
    {
        imageUrl: tensorflow,
        name: "Tensorflow",
        type: "Backend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "tailwindcss",
        type: "Frontend",
    },
];

export const experiences = [
    {
        title: "Desktop Support Analyst Intern",
        company_name: "John Hancock",
        icon: JH,
        iconBg: "#accbe1",
        date: "July 2019 - August 2019",
        points: [
            "Assembled laptops and USB with encryptions and deployed to new hires.",
            "Retrieved terminated employees laptops and wiped sensitive data for redeploying.",
            "Troubleshoot technical problems and replace hardware for customers.",
        ],
    },
    {
        title: "Global Finance IT Intern",
        company_name: "Liberty Mutual Insurance",
        icon: Liberty,
        iconBg: "#fbc3bc",
        date: "October 2019 - August 2020",
        points: [
            "Used excel to manipulate massive financial data in PivotTable to extract meaning from a large dataset",
            "Imported excel spreadsheet to PowerBI and converted data into interactive dashboards and rich visualizationsUsed",
        ],
    },
    {
        title: "Library service Desk",
        company_name: "Boston University",
        icon: BU,
        iconBg: "#b7e4c7",
        date: "Jan 2020 - May 2024",
        points: [
            "Train new employees and answer any questions head supervisors do not have time for.",
            "Enforce library protocols of 100% compliance of COVID-19 guidelines to promote the safety of patrons.",
            "Track statistics and complete data entry in Excel.",
        ],
    },
    {
        title: "Data Science Intern",
        company_name: "Meta",
        icon: BU,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Created environmental heatmap of Boston and investigated Boston progress toward carbon neutrality.",
            " Extracted data from SQL database, conducted preprocessing, and performed feature engineering on Boston court data.",
        ],
    },
    {
        title: "AI engineer",
        company_name: "Boston University",
        icon: BU,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Collaborated with MAPLE to design an RAG LLM system for summarizing and classifying bills in Massachusetts legislation.",
            "Implemented prompting techniques, achieving 92% factual consistency, enhancing summary trustworthiness in LLM system.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/weibb123',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/wei-mai/',
    }
];

export const projects = [
    {

        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Data analysis on Google Cloud',
        description: 'Provisioned virtual machine and created cloud sql database for storing and analyzing datas',
        link: 'https://github.com/weibb123/Data-with-Google-Cloud',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'GPT-DocuAssist',
        description: 'Would it be great if I can have a document assistant that can asnwers my questions or aid my reading about a pdf doucment?',
        link: 'https://github.com/weibb123/GPT-DocuAssist-',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Draft Email Response w/ GPT',
        description: 'Create a system that is capable of drafting responses to common business emails, such as customer inquiries or partnership requests.',
        link: 'https://github.com/weibb123/Email_GPT',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Automated-Resume-Screening-Tool',
        description: 'imeplment a LLM system to understand candidate/my qualifiation with my resume against job description',
        link: 'https://github.com/weibb123/Automated-Resume-Screening-Tool',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Make MASS Bills understandable',
        description: 'Collaborated with MAPLE to design an RAG LLM system for summarizing and classifying bills in Massachusetts legislation',
        link: 'https://github.com/weibb123/summarize_tags',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'CustomerChurn',
        description: 'Conducted analyses to understand customer churn patterns and developed retention methods',
        link: 'https://github.com/weibb123/CustomerChurn',
    }
];