import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Project.css'

export default function Project({ name, data }) {
    return (
        <div id={name} 
            className="container">
            <ProjectHeader />
            <ProjectBody data={data} />
        </div>
    )
}

function ProjectHeader() {
    return <div className="project-header mb-1 ps-4 bg-light shadow">
        <h6>
            Recent Projects
        </h6>
        <h1>
            My Projects
        </h1><br />
    </div>
}

function ProjectBody({ data }) {
    return <div className="project-body mt-5 bg-light">
        <div className='container'>
            <div className='row'>
                {data.map((item, key) => <CardView item={item} key={key} />)}
            </div>
        </div>
    </div>
}

function CardView({ item }) {
    return <div className="card col-sm-10 col-4 m-4 py-3" >
        {/* cardimage */}
        <img src={item.img} alt={item.name} className="card-img-top" />
        {/* cardbody */}
        <CardBody item={item} />
    </div>
}
function CardBody({ item }) {
    return <div className="card-body">
        <h5 className="card-title">
            {item.name}
        </h5>
        <p className="card-text">
            {item.content}
        </p>
        <CardButton link={item.link} icon={item.icon} />
    </div>
}

function CardButton({ link, icon }) {
    return <a href={link} className="btn btn-primary">
        View in Github
        <span className='ms-2'>
            <FontAwesomeIcon icon={icon} />
        </span>
    </a>
}

