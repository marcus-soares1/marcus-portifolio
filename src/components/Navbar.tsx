export default function Navbar () {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-primary font-monospace sticky-top"> 
            <div className="container py-2"> 
                <a className="navbar-brand f-5" href="#cover">Marcus &lt;Dev&gt;</a> 
                
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button> 
                
                <div className="navbar-collapse collapse" id="navbar"> 
                    <ul className="navbar-nav ms-auto gap-2"> 
                        <li className="nav-item"><a className="nav-link active" href="#cover">Início</a></li>
                        <li className="nav-item"><a className="nav-link active" href="#about_me">Sobre mim</a></li>
                        <li className="nav-item"><a className="nav-link active" href="#stack">Stack</a></li>
                        <li className="nav-item"><a className="nav-link active" href="#projects">Projetos</a></li>
                        <li className="nav-item"><a className="nav-link active" href="#contact">Contato</a></li>
                        <li className="nav-item"><a className="btn btn-success" href="https://github.com/marcus-soares1" target="blank">GitHub</a></li>
                        <li className="nav-item"><a className="btn btn-light text-primary" href="https://www.linkedin.com/in/marcus-silva-soares/" target="blank">LinkedIn</a></li>
                    </ul>
                </div> 
            </div> 
        </nav>
    )
}