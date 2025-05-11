import { Card, Container } from "react-bootstrap";
import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useRef, useState } from "react";
import { DiCss3, DiJavascript1 } from "react-icons/di";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiGithub } from "react-icons/si";
import { PiTextH } from "react-icons/pi";
import "./Technologies.css";

export default function TechScroll() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  const maskImage = useScrollOverflowMask(scrollXProgress);

  const [techStack] = useState([
    {
      name: "HTML5",
      icon: DiCss3,
      description: "Semantic structure & accessibility",
      experience: "Advanced",
    },
    {
      name: "CSS3",
      icon: DiCss3,
      description: "Flexbox, Grid, animations",
      experience: "Advanced",
    },
    {
      name: "JavaScript",
      icon: DiJavascript1,
      description: "ES6+, DOM, events",
      experience: "Advanced",
    },
    {
      name: "React",
      icon: FaReact,
      description: "Hooks, context, routing",
      experience: "Advanced",
    },
    {
      name: "Node.js",
      icon: FaNodeJs,
      description: "Servers & APIs",
      experience: "Intermediate",
    },
    {
      name: "Express.js",
      icon: "🚂",
      description: "Routing & middleware",
      experience: "Intermediate",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      description: "NoSQL & Mongoose ODM",
      experience: "Intermediate",
    },
    {
      name: "Python",
      icon: "🐍",
      description: "Scripting & automation",
      experience: "Intermediate",
    },
    {
      name: "C++",
      icon: "🔷",
      description: "OOP & data structures",
      experience: "Beginner",
    },
    {
      name: "Git & GitHub",
      icon: SiGithub,
      description: "Version control workflows",
      experience: "Advanced",
    },
    {
      name: "Postman",
      icon: "📬",
      description: "API testing",
      experience: "Intermediate",
    },
    {
      name: "VS Code",
      icon: "🖥️",
      description: "IDE with extensions",
      experience: "Advanced",
    },
  ]);

  return (
    <Container className="px-5 py-4" id="tech-scroll-wrapper">
      {/* progress circle */}
      <svg id="progress" width="60" height="60" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          className="indicator"
          style={{ pathLength: scrollXProgress }}
        />
      </svg>

      {/* horizontal scroll list */}
      <motion.ul ref={ref} style={{ maskImage }} className="tech-list">
        {techStack.map((tech, i) => {
          const IconOrGlyph = tech.icon;
          return (
            <li key={i} className="tech-item">
              <Card style={{ width: "12rem" }} className="h-100 text-center">
                <div style={{ fontSize: "2rem" }}>
                  {
                    // if it’s a React component, render it; otherwise it's already a string/emoji
                    typeof IconOrGlyph === "string" ? (
                      IconOrGlyph
                    ) : (
                      <IconOrGlyph />
                    )
                  }
                </div>
                <Card.Body>
                  <Card.Title style={{ fontSize: "1.2rem" }}>
                    {tech.name}
                  </Card.Title>
                  <Card.Text style={{ fontSize: "0.9rem" }}>
                    {tech.description}
                  </Card.Text>
                  <small className="text-muted">{tech.experience}</small>
                </Card.Body>
              </Card>
            </li>
          );
        })}
      </motion.ul>

     
    </Container>
  );
}

const left = `0%`;
const right = `100%`;
const leftInset = `20%`;
const rightInset = `80%`;
const transparent = `#0000`;
const opaque = `#000`;

function useScrollOverflowMask(scrollXProgress) {
  const maskImage = useMotionValue(
    `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
  );

  useMotionValueEvent(scrollXProgress, "change", (v) => {
    if (v === 0) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
      );
    } else if (v === 1) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${right}, ${opaque})`
      );
    } else if (
      scrollXProgress.getPrevious() === 0 ||
      scrollXProgress.getPrevious() === 1
    ) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${rightInset}, ${transparent})`
      );
    }
  });

  return maskImage;
}

