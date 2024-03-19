import React, {useEffect} from 'react';
import Footer from '../Components/Layout/Footer/footer';

import './visualisation.scss';

const Visualisation = ({setPageLoad}) => {
    useEffect(() => {
        window.scrollTo(0, 0)
        setPageLoad(true)
    }, [])

    return (
        <>
            <video className="video" muted autoPlay loop src="https://www.dropbox.com/s/bbh7aihpvqz00ty/cochady.mp4?dl=1"></video>
            <video className="video" muted autoPlay loop src="https://www.dropbox.com/s/txlj34pnqxicotf/deleo.mp4?dl=1"></video>
            <video className="video" muted autoPlay loop src="https://www.dropbox.com/s/24g0rvo4wabz939/stevie.mp4?dl=1"></video>
            <video className="video" muted autoPlay loop src="https://www.dropbox.com/s/r8ho25b6juprrwu/sac-a-main.mp4?dl=1"></video>
            <video className="video" muted autoPlay loop src="https://www.dropbox.com/s/tiehoxgqw9i6ilj/collier.mp4?dl=1"></video>
            <video className="video" muted autoPlay loop src="https://www.dropbox.com/s/ptygjp3m4ch6cl6/bottes.mp4?dl=1"></video>
            <script async src="https://api.cappasity.com/api/player/cappasity-ai"></script>
            <iframe style={{width : "100%", height : "600px", frameborder : "0", border : 0}} allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" src="https://api.cappasity.com/api/player/9989ec5a-c8e0-4aa3-82a7-73c3ef5b20cd/embedded?arbutton=0&autorun=0&closebutton=1&logo=0&analytics=1&uipadx=0&uipady=0&enablestoreurl=0&storeurl=&hidehints=0&language=&autorotate=0&autorotatetime=10&autorotatedelay=2&autorotatedir=1&hidefullscreen=1&hideautorotateopt=1&hidesettingsbtn=0&enableimagezoom=1&zoomquality=1&hidezoomopt=0" ></iframe>
            <iframe style={{width : "100%", height : "600px", frameborder : "0", border : 0}} allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" src="https://api.cappasity.com/api/player/4071c6f3-0ee5-4c6a-894c-79d3cad2b0a5/embedded?arbutton=0&autorun=0&closebutton=1&logo=0&analytics=1&uipadx=0&uipady=0&enablestoreurl=0&storeurl=&hidehints=0&language=&autorotate=0&autorotatetime=10&autorotatedelay=2&autorotatedir=1&hidefullscreen=1&hideautorotateopt=1&hidesettingsbtn=0&enableimagezoom=1&zoomquality=1&hidezoomopt=0" ></iframe>
            <iframe style={{width : "100%", height : "600px", frameborder : "0", border : 0}} allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" src="https://api.cappasity.com/api/player/8c96cc66-cb19-4250-bb32-195b8ee76715/embedded?arbutton=0&autorun=0&closebutton=1&logo=0&analytics=1&uipadx=0&uipady=0&enablestoreurl=0&storeurl=&hidehints=0&language=&autorotate=0&autorotatetime=10&autorotatedelay=2&autorotatedir=1&hidefullscreen=1&hideautorotateopt=1&hidesettingsbtn=0&enableimagezoom=1&zoomquality=1&hidezoomopt=0" ></iframe>
            <Footer AnimationBloc7={true}  />
        </>
    )
}

export default Visualisation