import {Navigation} from "../../components/navigation";


export const Info = () => {

    return (
        <div className={'info'}>
            <Navigation/>
            <div className="container">
                <div className="info__menu">
                    <div className="info__menu__block">
                        <h2>Information</h2>
                        <ul>
                            <li>How we are working</li>
                            <li>Delivery zones</li>
                            <li>Support</li>
                        </ul>
                    </div>

                    <div className="info__menu__block">
                        <h2>Our service</h2>
                        <ul>
                            <li>About Us</li>
                            <li className={'active'}>Contact</li>
                            <li>Documents</li>
                        </ul>
                    </div>
                </div>

                <div className="info__content">
                    <h2 className={'title'}>Contact</h2>

                    <p>Lorem ipsum dolor sit amet, <b>consectetur</b> adipisicing elit. Accusantium animi, doloribus ducimus earum eligendi eos est ex, illum laborum maxime minus nesciunt officia porro tenetur veniam vero voluptatum. Eum, minus.</p>

                    <h3>Email</h3>
                    <ul>
                        <li>asdasd@ads.asdasd</li>
                        <li>asdasd@ads.asdasd</li>
                        <li><a href="">asdasd@ads.asdasd</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}