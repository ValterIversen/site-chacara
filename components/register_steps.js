
"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from "framer-motion";

import FirstStep from './register_firststep'
import SecondStep from './register_secondstep'

import styles from '../styles/register.module.css'

export default function RegisterSteps() {
    const [ step, setStep ] = useState(0);
    const [ user, setUser ] = useState({})

    const nextStep = () => {
        setStep(step + 1);
    }

    const submitFirstStep = (data) => {
        setUser(data);
        nextStep();
    };

    const submitSecondStep = (data) => {
        setUser({
            ...user,
            data
        })
        
        
    }


    return (
        <div className={styles.content}>
                {
                    {
                        0: <Description nextStep={nextStep}/>,
                        1: <FirstStep nextStep={submitFirstStep}/>,
                        2: <SecondStep nextStep={submitFirstStep}/>
                    }[step]
                }
        </div>
    )
}

function Description ({ nextStep }) {
    return(
        <AnimatePresence>
            <motion.div
            transition={{ duration: 1, delay: 3 }}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
                >
                <div className={styles.card}>
                    <div className={styles.cardContent}>
                        <h1 className={styles.title}>Chácara Luz do Sol</h1>
                        <h3 className={styles.subtitle}>Um lugar para ser feliz</h3>
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
                </div>
            </motion.div>
        </AnimatePresence>
    )
}