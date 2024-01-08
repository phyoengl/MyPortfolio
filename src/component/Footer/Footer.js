import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './Footer.css'

export default function Footer({ name, data }) {

    return (
        <div id={name}>
            <div className="container-fluid mb-3">
                <CopyRight />

                <div className="row justify-content-center">
                    <div className="col-6">
                        <div className="address">
                            <SocialTag data={data} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function CopyRight() {
    return <footer className="text-center py-4 text-muted">
        &copy; Copyright 2024
    </footer>
}

function SocialTag({ data }) {
    return data.map((item, key) => <SocialLogos item={item} key={key} />
    )
}

function SocialLogos({ item }) {
    return <a
        href={item.link}
        className="mx-3">
        <FontAwesomeIcon icon={item.logo} />
    </a>
}
