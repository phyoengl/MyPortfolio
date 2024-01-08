import './AboutMe.css'

export default function AboutMe({ name, data }) {

    let strArray = data.split('.')

    return (
        <div className="container my-5" id={name}>
            <div className='row' >
                <AboutHeader />
                <AboutBody strArray={strArray} />
            </div>
        </div>
    )
}

function AboutBody({ strArray }) {
    return <div className="About-body bg-light col me-3 py-4">
        <ul>
            {strArray.map((str, key) => <li key={key}>
                {str + '.'}
            </li>
            )}
        </ul>
    </div>
}

function AboutHeader() {
    return <div className="About-header bg-light col-lg-3 ms-3 py-4">
        <h6>
            About
        </h6>
        <h1>
            AboutMe
        </h1>
    </div>
}
