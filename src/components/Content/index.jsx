import { Home } from "./Home"
import { About } from "./About"
import { Projects } from "./Projects"
import { Contact } from "./Contact"

export const Content = () => {
    return (
        <main>
            <Home />
            <About/>
            <Projects />
            <Contact />
        </main>
    )
}