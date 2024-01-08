import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { v4 as uuidv4 } from 'uuid'
import './MySkills.css';

export default function MySkills({ name, data }) {

    return (
        <div id={name}
            className="container pe-4 my-5">
            <div className="row">
                <SkillsHeader />
                <SkillsBody
                    key={uuidv4()}
                    items={data} />
            </div>
        </div>
    )
}


function SkillsHeader() {
    return <div className="skills-header col-12 mb-4 ps-4 bg-light shadow">
        <h6>My skills</h6>
        <h1>My Expertise</h1><br />
    </div>;
}

function SkillsBody({ items }) {
    return items.map((obj) =>
        <MainTopic
            key={uuidv4()}
            obj={obj} />
    );
}

function MainTopic({ obj }) {
    return <div className="box col-lg-5.5 col-sm m-4">
        {/* box-header */}
        <BoxHeader obj={obj} />
        {/* box-element */}
        <MainBranches ele={obj.total} />
    </div>
}

function BoxHeader({ obj }) {
    return <h1 className="h4 py-3 mb-3 text-center text-black">
        <FontAwesomeIcon icon={obj.icon} className='me-2' />
        <span className="d-inline">{obj.type}</span>
    </h1>
}

function MainBranches({ ele }) {
    return <ul className="learn-ul mx-4">
        {ele.map((element) =>
            <li key={uuidv4()}>
                {element}
            </li>
        )}
    </ul>
}
