'use client'

import { Github, Linkedin, Mail, BookOpen } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Roboto } from 'next/font/google'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})


export function HomePage() {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution built with React and Node.js.',
      link: 'https://github.com/johndoe/ecommerce',
      skills: ['React', 'Node.js', 'MongoDB', 'Express'],
    },
    {
      title: 'Task Management App',
      description: 'A React Native mobile app for managing daily tasks and schedules.',
      link: 'https://github.com/johndoe/taskmanager',
      skills: ['React Native', 'Redux', 'Firebase'],
    },
    {
      title: 'Data Visualization Dashboard',
      description: 'An interactive dashboard using D3.js for visualizing complex datasets.',
      link: 'https://github.com/johndoe/dataviz',
      skills: ['D3.js', 'JavaScript', 'SVG', 'REST API'],
    },
    {
      title: 'AI Chatbot',
      description: 'An AI-powered chatbot using natural language processing for customer support.',
      link: 'https://github.com/johndoe/ai-chatbot',
      skills: ['Python', 'TensorFlow', 'NLP', 'Flask'],
    },
    {
      title: 'Fitness Tracker',
      description: 'A web app for tracking workouts and nutrition with data visualization.',
      link: 'https://github.com/johndoe/fitness-tracker',
      skills: ['Vue.js', 'Node.js', 'Chart.js', 'PostgreSQL'],
    },
    {
      title: 'Weather App',
      description: 'A responsive weather application using geolocation and a weather API.',
      link: 'https://github.com/johndoe/weather-app',
      skills: ['React', 'OpenWeatherMap API', 'Geolocation API', 'Tailwind CSS'],
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
          <p className="mt-2 text-xl text-muted-foreground">Data Nerds</p>
          <div className="mt-4 flex justify-center space-x-4">
            <Button variant="outline" size="icon">
              <Link href="https://github.com/johndoe">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon">
              <Link href="https://linkedin.com/in/johndoe">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon">
              <Link href="mailto:john@example.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon">
              <Link href="https://medium.com/@johndoe">
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
              Hi, I'm John Doe, a passionate Full Stack Developer with over 5 years of experience in building web and mobile applications. 
              I specialize in JavaScript technologies across the stack and have a strong foundation in cloud technologies and DevOps practices. 
              My goal is to create efficient, scalable, and user-friendly solutions that solve real-world problems.
            </p>
            <p>
              When I'm not coding, you can find me contributing to open-source projects, writing technical blog posts, or exploring the latest 
              trends in AI and machine learning. I'm always eager to learn new technologies and take on challenging projects that push me out of my comfort zone.
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
                      <Badge key={skill} variant="secondary">
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
                <Link href="mailto:john@example.com">Get in Touch</Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}
