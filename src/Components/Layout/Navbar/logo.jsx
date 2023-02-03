import {useEffect, useState} from 'react'
import {Link, useLocation} from 'react-router-dom'
import { motion } from "framer-motion"
import {useMediaQuery} from '@react-hook/media-query'

const Logo = ({pageLoad}) => {
    const [animParams, setAnimParams] = useState(-30)
    const location = useLocation()
    const matches = useMediaQuery('only screen and (min-width: 1200px)')

    useEffect(() =>{
        if(pageLoad){
            setAnimParams(0)
        }
    }, [pageLoad])

    const scrollToTop = () => {
        if(location.pathname == '/'){

            window.location.reload(false);

        }
    }
    
    return (
        <div
        className="logoMobile"  
        style={{
            overflow:'hidden',
        }}>
            <motion.div    
                animate={{ y: animParams }}
                initial={false}
                transition={{ duration: 1, ease:[0.470, 0.970, 0.495, 0.985] }}
    
            ><Link to="/" onClick={scrollToTop}>
                {!matches ?
                    <svg xmlns="http://www.w3.org/2000/svg" className="logoNavBarMobile" viewBox="0 0 323.04 323.04">
                        <path d="M69.24 249.59A126.87 126.87 0 1042 209.15a126.8 126.8 0 0027.24 40.44zm205.21-90a115.25 115.25 0 01-156.57 107.65V165.61h122v-12h-122V52a115.25 115.25 0 01156.57 107.6zM105.93 57.44v204.39a115.22 115.22 0 010-204.39z"/>
                        <path d="M0 0v323h323V0zm312.84 312.84H10.2V10.2h302.64z"/>
                    </svg>
                :
                    <svg xmlns="http://www.w3.org/2000/svg" className="logoNavBarDesktop" viewBox="0 0 832.71 315.48">
                        <path d="M269.94 107.54a124.69 124.69 0 109.76 48.36 123.95 123.95 0 00-9.76-48.36zM103.45 255.7a112.52 112.52 0 010-199.6zm52 12.77a112.14 112.14 0 01-40.33-7.47v-99.26h119.11v-11.68H115.12V50.81a112.57 112.57 0 1140.35 217.66z"/>
                        <path d="M315.48 0H0v315.48h832.71V0zm-10 305.53H10V10h295.53zm517.23 0H315.48V10h507.28z"/>
                        <path d="M342.16 142.63V48.5h67.47v12.11h-54.24v27.56h46.3v12.1h-46.3v30.26H411v12.1zM419 100.15V88.72h35.72v11.43zM472.07 142.63V48.5h33.07c25.8 0 43 17.48 43 47.07s-17.2 47.06-43 47.06zm13.23-12.1h18.52c19.84 0 31.09-12.1 31.09-35s-11.25-35-31.09-35H485.3zM557.93 95.57c0-30.26 18.52-48.41 43.65-48.41s43.66 18.15 43.66 48.41S626.72 144 601.58 144s-43.65-18.18-43.65-48.43zm44.31 36.3c17.2 0 29.77-13.44 29.77-36.3s-12.57-36.31-29.77-36.31h-1.32c-17.2 0-29.76 13.45-29.76 36.31s12.56 36.3 29.76 36.3zM336 237.14h13.23c0 12.77 9.79 19.5 23.68 19.5h1.32c12.44 0 19.18-6.32 19.18-14.12s-4.76-12.11-14.55-14.12l-14.81-3.1c-14.82-3.09-23.42-11.56-23.42-26.49s13.1-26.89 33.07-26.89c20.51 0 33.61 11.43 34.27 29.58h-13.21c-.66-10.75-9.13-17.48-20.37-17.48h-1.33c-11.51 0-19.18 6.32-19.18 14.66 0 7.26 4.89 11.56 12.7 13.18l14.82 3c16 3.22 25.26 11.83 25.26 27.16 0 16.54-13.75 26.76-34.26 26.76-21.83-.04-35.72-10.78-36.4-31.64zM443 267.39v-82h-33v-12.13h79.37v12.11h-33.1v82zM499.4 233.78v-60.52h13.23v59.17c0 15.46 7.27 24.21 21.16 24.21h1.33c13.89 0 21.16-8.75 21.16-24.21v-59.17h13.23v60.52c0 20.84-11.9 35-35.06 35-23.81-.04-35.05-14.16-35.05-35zM589.22 267.39v-94.13h33.08c25.79 0 43 17.49 43 47.07s-17.2 47.06-43 47.06zm13.23-12.1H621c19.85 0 31.09-12.1 31.09-35s-11.24-35-31.09-35h-18.55zM680.5 267.39v-94.13h13.23v94.13zM708.81 220.33c0-30.26 18.52-48.41 43.66-48.41s43.65 18.15 43.65 48.41-18.52 48.41-43.65 48.41-43.66-18.16-43.66-48.41zm44.32 36.31c17.2 0 29.76-13.45 29.76-36.31S770.33 184 753.13 184h-1.32c-17.2 0-29.77 13.45-29.77 36.31s12.57 36.31 29.77 36.31z"/>
                    </svg>
                }
            </Link></motion.div>
        </div>
    )
}

export default Logo
