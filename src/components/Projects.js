import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const projects = {
      "Depression Prevalence in Adolescents and Adults: United States": {
        desc:
          "Analyze During August 2021–August 2023, depression prevalence in the past 2 weeks was 13.1% in adolescents and adults age 12 and older and decreased with increasing age overall and in females and males.",
        techStack: "R(tidyverse)",
        link: "https://github.com/weibb123/Depression/blob/main/R_nhanes.qmd",
        open: "https://adaptable-hiss-c6a.notion.site/Depression-Prevalence-in-Adolescents-and-Adults-United-States-1ef26a25a15c80fe8ea0de55766350f1"
      },
      "Automate Stock Analysis": {
        desc:
          "Finance automation tool using Ollama, LangChain, and OpenAI, integrating with Yahoo Finance to retrieve and process real-time financial data.",
        techStack: "Python, Yahoo Finance API, Langchain, Ollama",
        link: "https://github.com/weibb123/Automate_Finance_LLM",
        open: "https://github.com/weibb123/Automate_Finance_LLM/blob/main/README.md"
      },
      "Python-coder": {
        desc:
          "Finetune Python-code dataset with Llama 3.2-1B via QLora technique with Tesla T4 GPU",
        techStack: "FastAPI, Python, Hugginface, Langchain",
        link: "https://github.com/weibb123/Python-coder",
        open: "https://levelup.gitconnected.com/finetune-llama3-2-1b-for-free-with-unsloth-and-use-in-ollama-locally-c00d28e4db34"
      },
      "Odin Bot": {
        desc:
          "A Telegram bot that helps you excel on your daily tasks through Node NLP.",
        techStack: "Javascript, Node.js, Natural NLP, Telegram API",
        link: "https://github.com/gazijarin/OdinBot",
        open: ""
      },
      "Accessible Vision Assist: VizWiz": {
        desc:
          "Fine-tuned vision-language model on 39,181 images from blind users to develop image captioning solutions.",
        techStack: "PyTorch, HuggingFace",
        link: "https://github.com/weibb123/sp2024_midterm",
        open: ""
      }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ projects</span>
        </div>

        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
