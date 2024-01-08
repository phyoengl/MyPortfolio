import './Home.css'

export default function Home({name, contact}) {
    
    return (
        <div id={name}
            className='container bg-light py-5 my-5'>
            <div className='row justify-content-center'>
                <div className='col-lg-4 mt-5'>

                    <h5 className='paragraph-header'>
                        Hello, I am Zaw Thet Phyo
                    </h5>

                    <h1 className='paragraph-body'>
                        FrontEnd
                        <span className='paragraph-span'>Developer</span>
                    </h1><br />

                    <div className='paragraph-footer'>
                        <p>
                            Dedicating to be a full stack developer.<br />
                            Enthusiatic in creation of Business Websites and<br />
                            Web Applications.
                        </p>
                    </div>

                    <div className='m-5'>
                        <a href={"#"+contact}
                            className='custom-btn'>
                            Get in Touch
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}