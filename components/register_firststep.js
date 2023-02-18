
"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";

import styles from '../styles/register.module.css'

export default function FirstStep({ nextStep }) {

    const onClick = () => {
        const data = {}
        nextStep(data);
    }

    return (
        <AnimatePresence>
            <motion.div
                className={styles.card}
                transition={{duration: 1.5}}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                >
                <div className={styles.cardContent}>
                    <h3 className={styles.darkerFont}>Antes de tudo, gostariamos de saber quem é você</h3>
                    <form className={styles.form}>
                        <div>
                            <label for="name" className={styles.inputLabel}>Nome:</label>
                            <input type="text" id="name" name="name" 
                                maxLength={70}
                                className={styles.input}/>
                        </div>
                        <div>
                            <label for="phone" className={styles.inputLabel}>Celular:</label>
                            <input type="text" id="phone" name="phone" 
                                maxLength={15}
                                className={styles.input}/>
                        </div>
                        <a className={styles.nextLink} onClick={onClick}>Prazer em te conhecer! Qual data?
                            <Image
                                alt="próximo passo"
                                className={styles.nextIcon}
                                src="/next.png"
                                width={19}
                                height={19}
                                />
                        </a>
                    </form>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}