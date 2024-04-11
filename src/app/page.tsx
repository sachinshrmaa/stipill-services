import Accordian from "@/components/Accordian";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Service {
  name: string;
  desc: string;
  icon: string;
}

interface Project {
  name: string;
  src: string;
}

interface Faq {
  question: string;
  answer: string;
}

const services: Service[] = [
  {
    name: "web development",
    desc: "Lorem ipsum dolor sit amet consectetur.",
    icon: "bi bi-hammer",
  },
  {
    name: "software consultancy",
    desc: "Lorem ipsum dolor sit amet consectetur.",
    icon: "bi bi-person-workspace",
  },
  {
    name: "app development",
    desc: "Lorem ipsum dolor sit amet consectetur.",
    icon: "bi bi-phone",
  },
];

const projects: Project[] = [
  { name: "balkapso", src: "/balkapso.png" },
  { name: "thebasicsclass", src: "/tbc.png" },
];

const faq: Faq[] = [
  {
    question: "What kind of projects do you specialize in?",
    answer:
      "We specialize in web development, app development, and software consultancy. We offer tailored solutions for your business needs.",
  },
  {
    question: "How long does it typically take to complete a project?",
    answer:
      "The timeline depends on the scope and complexity of the project. After discussing your requirements, we will provide you with an estimated timeline.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "Our pricing model is flexible and depends on the specific requirements of your project. Contact us for a personalized quote.",
  },
  {
    question: "What is the process of working with your agency?",
    answer:
      "Our process begins with a consultation to understand your goals and needs. We then create a plan and timeline, followed by development, testing, and launch.",
  },
  {
    question: "How do you ensure the quality of your services?",
    answer:
      "Quality is our top priority. We follow best practices, conduct thorough testing, and keep you updated throughout the project to ensure your satisfaction.",
  },
];

export default function Home() {
  return (
    <div>
      <div className="text-center py-20">
        <h1 className="max-w-[70%] mx-auto text-3xl mb-3 font-bold">
          design & development agency.
        </h1>
        <p className="max-w-[70%] mx-auto text-sm md:text-md">
          replace unreliable freelancers and expensive companies for building
          your dream into reality.
        </p>

        <div className="mt-7">
          <Link
            href="https://wa.me/+919382341382"
            target="_blank"
            className="mr-4 bg-purple-700 hover:bg-purple-600 text-white py-2 px-4 rounded-md"
          >
            <i className="bi bi-whatsapp"></i> chat with us
          </Link>
          <Link
            href="#services"
            className="hover:text-purple-700 text-sm md:text-md"
          >
            learn more
          </Link>
        </div>
      </div>

      <section id="services" className="bg-purple-50 py-16">
        <div className="max-w-5xl mx-auto px-6 md:px-2">
          <div>
            <h1 className="text-2xl font-bold mb-2">how can we help you?</h1>
            <p className="text-sm text-slate-600">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>

          <div className="grid md:grid-cols-3 my-6 gap-10">
            {services.map((service, index) => (
              <div key={index}>
                <span className="text-sm md:text-lg text-purple-700 font-bold">
                  0{index + 1}
                </span>
                <h1 className="text-lg font-semibold text-slate-600 md:mt-2">
                  {service.name}
                </h1>
                <p className="text-sm text-slate-500">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto  px-6 md:px-2 py-20">
        <div className="mb-6 md:mb-0">
          <h1 className="text-2xl font-bold mb-2">
            see our clients idea come to life.
          </h1>
          <p className="text-sm text-slate-600">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-xl ${index % 2 === 0 && `md:mt-[100px]`}`}
            >
              <Image
                src={project.src}
                height={600}
                width={1000}
                alt={project.name}
                className="rounded-xl cursor-pointer object-cover hover:shadow-2xl hover:border hover:object-fill"
              />
            </div>
          ))}
        </div>
      </div>

      <section id="contact" className="py-20 bg-purple-50">
        <div className="max-w-5xl mx-auto px-6 md:px-2">
          <div className="grid md:grid-cols-2 gap-20">
            <div className="mb-6 md:mb-0">
              <div className="mb-6">
                <h1 className="text-2xl font-bold mb-2">faq</h1>
                <p className="text-sm text-slate-600">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
              <div>
                {faq.map((i, index) => (
                  <Accordian
                    key={index}
                    title={i.question}
                    content={i.answer}
                  />
                ))}

                <p className="mt-4 text-xs">
                  Still confused? Feel free to reach out to us.
                </p>
              </div>
            </div>
            <div>
              <div className="mb-6">
                <h1 className="text-2xl font-bold mb-2">get in touch?</h1>
                <p className="text-sm text-slate-600">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
              <div>
                <div className="mb-4">
                  <p>
                    <i className="bi bi-envelope-fill mr-2"></i>email
                  </p>
                  <p className="text-slate-500 text-sm">contact@stipill.co</p>
                </div>

                <div>
                  <p>
                    <i className="bi bi-telephone-fill mr-2"></i>phone
                  </p>
                  <p className="text-slate-500 text-sm">+91 9382341382</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
