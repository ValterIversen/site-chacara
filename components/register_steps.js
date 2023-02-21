
"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from "framer-motion";
import { PT_Sans_Narrow, Berkshire_Swash } from '@next/font/google'

import FirstStep from './register_firststep'
import SecondStep from './register_secondstep'

import styles from '../styles/register.module.css'
import next from 'next';


const pT_Sans_Narrow = PT_Sans_Narrow({
    weight: '700',
    subsets: ['latin'],
});
const dancing_Script = Berkshire_Swash({
    weight: '400',
    subsets: ['latin'],
});

export default function RegisterSteps() {
    const [ step, setStep ] = useState(1);
    const [ user, setUser ] = useState({})

    const nextStep = () => {
        setStep(step + 1);
    }

    const submitFirstStep = (data) => {
        setUser(data);
        nextStep();
    };

    const submitSecondStep = (data) => {
        
    }


    return (
        <div className={styles.content}>
                {
                    {
                        0: <HandClick nextStep={nextStep}/>,
                        1: <Description nextStep={nextStep}/>,
                        2: <FirstStep nextStep={submitFirstStep}/>,
                        3: <SecondStep nextStep={submitFirstStep}/>
                    }[step]
                }
        </div>
    )
}

function HandClick ({ nextStep }) {
    return(
        <AnimatePresence>
            <motion.div
                transition={{ delay: 1 }}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                >
                <button className={styles.handButton}>
                    a
                </button>
            </motion.div>
        </AnimatePresence>
    )
}

function Description ({ nextStep }) {
    return(
        <AnimatePresence>
            <motion.div
                className={styles.card}
                transition={{duration: 1.8, delay: 2.5, ease: "easeIn"}}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                >
                <div className={styles.cardContent}>
                    <h1 className={`${pT_Sans_Narrow.className} ${styles.title}`}>Chácara Luz do Sol</h1>
                    <h3 className={`${dancing_Script.className} ${styles.subtitle}`}>Um lugar para ser feliz</h3>
                    <p>Planeje um evento, chame sua família e amigos!</p>
                    <a className={styles.nextLink} onClick={nextStep}>Tem interesse? Entre em contato e agende!
                        <Image
                            alt="próximo passo"
                            className={styles.nextIcon}
                            src="/next.png"
                            width={19}
                            height={19}
                            />
                    </a>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}