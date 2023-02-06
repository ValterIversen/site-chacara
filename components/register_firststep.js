
"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";

import styles from '../styles/register.module.css'

export default function FirstStep({ nextStep }) {
    return (
        <AnimatePresence>
            <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -200 }}
                >
                <div className={styles.card}>
                    <div className={styles.cardContent}>
                        <h3>Antes de tudo, gostariamos de saber quem é você</h3>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}