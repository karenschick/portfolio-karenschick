# React + Vite


## Sources
Q&A with Marcus

https://www.digitalocean.com/community/tutorials/creating-a-social-follow-componenfortt-in-react

https://dev.to/cooljasonmelton/more-stuff-you-can-do-with-mailto-3o89

https://www.framer.com/motion/examples/



## Notes
-have social media open new tab
target="_blank"
-how do i uninstall fort awesome icons? convert to different style?
just going to keep for now
-uninstall @react-email/link
do i still need to do this?
-style contact - email link not working great
working now
-navbar sticky
done
-portfolio and about me have similar animation as homepage
decided to make portfolio animation different
-should make DRY css for animation
-make image a link to instagram
done
-gitHub follow difficult to select on portfolio card
removed link and made entire card linkable instead
-fix pages folder
-make footer stick to bottom of the page
-make navbar text larger
done
-Contact is not inline when screen minimizes

## Extra Code
function Resume() {
  return (
    <>
    <a href={resume} target="_blank" rel="noreferrer">Resume</a>
    </>
  )
}

 {/* <div className="mt-5 mb-5" style={{ height: "100px" }}>
        <Container>
          <Row className="align-items-center d-flex">
            <Col>
              <h1>Projects</h1>
            </Col>
            <Col className="ml-auto">
              <LinkedInFollow />
            </Col>
          </Row>
        </Container>
      </div> */}


{/* <div className="header-container mt-5 " style={{ height: "100px" }}>
        <Container>
          <Row style={{ width: "100%" }}>
            <Col>
              <h1>About Me</h1>
            </Col>
            <Col>
              <InstagramFollow />
            </Col>
          </Row>
        </Container>
      </div> */}
      
{/* <div>
        <AboutMe />
        <Portfolio />
      </div> */}

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# portfolio-karenschick
