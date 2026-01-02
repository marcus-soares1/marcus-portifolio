export default function Cover ({ userPicUrl }: { userPicUrl: string }) {
  return (
    <section id="cover" className="cover-section py-5">
      <div className="container py-5">
        <div className="row align-items-center g-5">

          <div className="col-md-6">
            <div className="card card-title border border-0 shadow-sm p-5">
              <h1 className="fw-bold mb-3">
                Olá, sou o <span className="text-primary">Marcus</span>
              </h1>

              <h5 className="text-muted mb-4">
                Desenvolvedor Back-end
              </h5>

              <p className="mb-4">
                Construo APIs, sistemas escaláveis e soluções eficientes
                focadas em performance e boas práticas.
              </p>

              <div className="d-flex gap-3">
                <a href="#projects" className="btn btn-primary px-4">
                  Ver projetos
                </a>
                <a href="#contact" className="btn btn-outline-primary px-4">
                  Contato
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 text-center">
            <div className="cover-photo-wrapper mx-auto">
              <img
                src={userPicUrl}
                alt="Foto do Marcus"
                className="img-fluid rounded-circle cover-photo"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
