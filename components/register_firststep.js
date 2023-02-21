
"use client"
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";

import PhoneMask from './PhoneMask';

import styles from '../styles/register.module.css'

export default function FirstStep({ nextStep }) {

    const { 
        register, 
        handleSubmit, 
        formState: { errors }
    } = useForm();


    const onSubmit = async ({ name, phone }) => {
        const data = {name, phone};
        
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
                    <form className={styles.form} >
                        <div className={styles.inputDiv}>
                            <label className={styles.inputLabel}>Nome</label>
                            <input type="text" placeholder="Digite seu nome"
                                {...register('name', {
                                    required: 'Por favor, insira o seu nome',
                                    minLength: { value: 8, message: 'Insira um nome válido' }
                                })}
                                id="name" 
                                className={`${styles.input} ${errors.name && styles.inputError}`}/>
                        </div>
                        <div className={styles.inputDiv}>   
                            <label className={styles.inputLabel}>Celular</label>
                            <input type="text" placeholder="Digite seu celular"
                                {...register('phone', {
                                    required: 'Por favor, insira um celular',
                                    minLength: { value: 14, message: 'Insira um celular com mais de 13 caracteres' },
                                    onChange: (e) => {e.target.value = PhoneMask(e.target.value)}
                                })}
                                id="phone" 
                                className={`${styles.input} ${errors.phone && styles.inputError}`}/>
                        </div>
                        <a className={styles.nextLink} onClick={handleSubmit(onSubmit)}>Prazer em te conhecer! Qual data?
                            <Image
                                alt="Próximo passo"
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