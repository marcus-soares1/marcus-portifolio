export default function  Contact () {
    return (
        <section id="contact" className="bg-body-tertiary py-5">
            <div className="container d-flex flex-wrap flex-column align-items-center py-5">

                <p className="fs-5 text-muted">Entre em contato em:</p>
                <div className="d-flex p-2 gap-2">
                    <a href="https://github.com/marcus-soares1">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" alt="GitHub" style={{width: "3rem"}}/>
                    </a>
                    <a href="https://www.linkedin.com/in/marcus-silva-soares/">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" alt="LinkedIn" style={{width: "3rem"}}/>
                    </a>
                </div>
                <div>
                    ou mande um e-mail para: 
                    <p><a href="mailto:marcus.soares1@gmail.com">marcus.soares1@gmail.com</a></p>
                </div>
          
            </div>
        </section>
    )
}