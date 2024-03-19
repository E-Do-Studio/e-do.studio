import {useEffect, useState} from 'react'
import Clock from 'react-live-clock';
import { motion } from "framer-motion"

const Horloge = ({pageLoad}) => {
    const [animParams, setAnimParams] = useState(-30)

    useEffect(() =>{
        if(pageLoad){
            setAnimParams(0)
        }
    }, [pageLoad])

    return (
        <div className="horloge" style={{overflow:'hidden'}}>

            <motion.div    
                animate={{ y: animParams }}
                initial={false}
                transition={{ duration: 1, ease:[0.470, 0.970, 0.495, 0.985] }}
                className="horlogeMotion"
            >
                <div>Paris: <Clock format={'hh:mm:ss A'} ticking={true} timezone={'Europe/Paris'} /></div>

                {/* <div style={{marginLeft:'4vw'}}>+33 1 44 04 11 49</div> */}
            </motion.div>
        </div>
    )
}

export default Horloge


