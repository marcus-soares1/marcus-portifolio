export default function Card ({iconUrl, text}: {iconUrl: string, text: string}) {
    return(
        <div className="card card-stack shadow-sm">
            <div className="card-body d-flex flex-column justify-content-between align-items-center">
                <img className="d-block mx-auto img-fluid" src={iconUrl}/>    
                <p className="my-0 text-center fs-5">{text}</p>
            </div>
        </div>
    )
}