export default function Project ({name, imagePath, projectDescription, productionLink, repositoryLink}: {name: string, imagePath: string, projectDescription: string, productionLink: string, repositoryLink: string}) {
    return (
        <div className="card card-project d-flex flex-wrap p-4 shadow">
            <h3 className="text-center">{name}</h3>
            <div className="card-body col">
                <img src={imagePath} className="project-image mx-auto mb-4 img-fluid row"></img>
                <p className="row">{projectDescription}</p>
                <div className="buttons row gap-3">
                    <a className="btn btn-primary px-3" href={productionLink} target="blank">Produção</a>
                    <a className="btn btn-outline-success px-3" href={repositoryLink} target="blank">Repositório</a>
                </div>
            </div>
        </div>
    )
}