'use client'

import { Github, Linkedin, Mail, BookOpen } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Roboto } from 'next/font/google'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const roboto = Roboto({
  weight: ['300', '900'],
  subsets: ['latin'],
  display: 'swap',
})

const skillColors: { [key: string]: string } = {
  React: 'bg-blue-500 text-white',
  'Node.js': 'bg-green-600 text-white',
  MongoDB: 'bg-green-700 text-white',
  Express: 'bg-gray-600 text-white',
  'React Native': 'bg-blue-400 text-white',
  Redux: 'bg-purple-600 text-white',
  Firebase: 'bg-orange-500 text-white',
  'D3.js': 'bg-orange-400 text-white',
  JavaScript: 'bg-yellow-400 text-black',
  SVG: 'bg-gray-500 text-white',
  'REST API': 'bg-blue-600 text-white',
  Python: 'bg-blue-700 text-white',
  TensorFlow: 'bg-orange-600 text-white',
  NLP: 'bg-green-500 text-white',
  Flask: 'bg-gray-700 text-white',
  'Vue.js': 'bg-green-400 text-white',
  'Chart.js': 'bg-pink-500 text-white',
  PostgreSQL: 'bg-blue-800 text-white',
  'OpenWeatherMap API': 'bg-blue-300 text-black',
  'Geolocation API': 'bg-indigo-500 text-white',
  'Tailwind CSS': 'bg-teal-500 text-white',
}

export function HomePage() {
  const projects = [
    {
      title: 'Automate Finance LLM',
      description: 'Ever wonder how LLM can help provide summary for your stock? Simplifying investment summaries',
      link: 'https://github.com/weibb123/Automate_Finance_LLM',
      skills: ['Ollama', 'Langchain', 'Streamlit', 'YahooFinance API', 'OpenAI'],
    },
    {
      title: 'Movie Recommender RAG System',
      description: 'Leveraged Google open-source Gemma model to design and implement a personalized movie recommendation engine',
      link: 'https://github.com/weibb123/RAG_movie_recommender',
      skills: ['MongoDB', 'Huggingface Embeddings', 'Pandas'],
    },
    {
      title: 'Vision Language Translator',
      description: 'Let multi-modal LLM extract informations and translated text from image',
      link: 'https://github.com/weibb123/Visual-Language-Translator',
      skills: ['Streamlit', 'OpenAI', 'SVG', 'REST API'],
    },
    {
      title: 'AI Agent Trip Planner',
      description: 'AI-powered Agents that research and plan vacation trips, saving time for users to research where to go',
      link: 'https://github.com/weibb123/crewAI_trip_planner',
      skills: ['Reflex', 'Python', 'crewAI', 'Langchain', "OpenAI", "Serper API"],
    },
    {
      title: 'Summarize Massachusetts Legislation Bills',
      description: 'Built a RAG based LLM system that aid to provide summary on Massachusetts legislation bills to help broader audience understand',
      link: 'https://github.com/vynpt/ml-maple-bill-summarization',
      skills: ['Huggingface', 'Langchain', 'Streamlit', 'Swagger API', "Prompt Engineering", "RAG"],
    },
    {
      title: 'BU Campus Assistant',
      description: 'Fine-tuned open source TinyLlava model via QLora technique to build an AI-powered campus tour guide for Boston University',
      link: 'https://github.com/weibb123/BU_TinyLLava',
      skills: ['Huggingface', 'Gradio', 'GPU Cloud', 'PyTorch', "deepspeed"],
    },
    {
      title: 'Email Drafter',
      description: 'People receive tons of email daily. Let GPT draft your email response and send',
      link: 'https://github.com/weibb123/Email_GPT',
      skills: ['Langchain', 'Openai', 'Streamlit'],
    },
    {
      title: 'Email Drafter',
      description: 'People receive tons of email daily. Let GPT draft your email response and send',
      link: 'https://github.com/weibb123/Email_GPT',
      skills: ['Langchain', 'Openai', 'Streamlit'],
    },
  ]

  return (
    <div className={`min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 ${roboto.className}`}>
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <Image
            src="/images/me.jpg"
            alt="Profile Picture"
            width={150}
            height={150}
            className="mx-auto rounded-full"
          />
          <h1 className="mt-4 text-4xl font-bold">Weining Mai</h1>
          <p className="mt-2 text-xl text-muted-foreground">Tech nerd/Data nerd</p>
          <div className="mt-4 flex justify-center space-x-4">
            <Button variant="outline" size="icon">
              <Link href="https://github.com/weibb123">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon">
              <Link href="https://www.linkedin.com/in/wei-mai/">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon">
              <Link href="mailto:weininmai@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon">
              <Link href="https://medium.com/@weining563">
                <BookOpen className="h-5 w-5" />
                <span className="sr-only">Medium</span>
              </Link>
            </Button>
          </div>
        </section>

        {/* About Me Section */}
        <section className="mb-16">
          <h2 className="mb-4 text-2xl font-bold text-center">About Me</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="mb-4">
              Hi, I'm Wei, a passionate tech guy in building LLM applications. 

              Went to school to become a Data Scientist, later I dedicate myself in this building AI solutions and becoming more a builder in software.
            </p>

            <p className="mb-4">
              I specialize in LLM and have a background in end to end data science pipeline and ML. 
              Coming from data science background, my goal is to continue to embrace AI and create efficient, scalable, and user-friendly AI solutions that solve real-world problems.
            </p>

            <p className="mb-4">
              When I'm not coding, you can find me writing technical blog posts on Medium. I share AI blogs targeting to non-technical audiences! or exploring the latest trends in AI.
              I'm always eager to learn new technologies and take on challenging projects that push me out of my comfort zone.
            </p>

          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="mb-4 text-2xl font-bold text-center">Projects</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="flex flex-col transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
              >
                <CardHeader className="flex-grow">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription className="text-sm">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <Badge
                        key={skill}
                        className={`${skillColors[skill] || 'bg-gray-500 text-white'} font-normal`}
                        variant="secondary"
                       >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href={project.link} className="w-full">
                    <Button
                      variant="secondary"
                      className="w-full transition-colors duration-300 ease-in-out hover:bg-primary hover:text-primary-foreground"
                    >
                      View Project
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-center">Contact</h2>
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-6">
              <p className="mb-4 text-center">
                I'm always open to new opportunities and collaborations. Feel free to reach out!
              </p>
              <Button>
                <Link href="mailto:weininmai@gmail.com">Get in Touch</Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}
