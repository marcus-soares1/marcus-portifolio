export default function Stack ({children}:{children: any}) {
    return (
        <section id="stack" className="stack-section py-5">
            <div className="container py-5">
                <h2 className="text-primary mb-4">Stack</h2>
                <div className="cards d-flex flex-wrap justify-content-center gap-5">
                    {children}
                </div>
            </div>
        </section>
    )
}