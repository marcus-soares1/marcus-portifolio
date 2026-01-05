export default function Projects ({children}: {children: any}) {
    return (
        <section id="projects" className="section-projects py-5">
            <div className="container py-5">
                <h2 className="text-primary mb-4">Projetos</h2>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                    {children}
                </div>
            </div>
        </section>
    )
}