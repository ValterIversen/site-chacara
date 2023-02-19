
"use client"
import React, { useEffect, useState } from 'react';
import DatePicker, { registerLocale } from "react-datepicker";
import { motion, AnimatePresence } from "framer-motion";

import styles from '../styles/register.module.css';
import "react-datepicker/dist/react-datepicker.css";
import ptBR from 'date-fns/locale/pt-BR';
registerLocale('ptBR', ptBR);

export default function FirstStep({ nextStep }) {
    const [startDate, setStartDate] = useState(new Date());
    const [alreadyReserved, setAlreadyReserved] = useState([]);

    useEffect(() => {
        setAlreadyReserved(getReservedDays());
    },[])

    const changeDate = (date) => {
        setStartDate(date);
    }

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
                    <h3 className={styles.darkerFont}>Quando iremos curtir?</h3>
                    <DatePicker selected={startDate}
                        className={styles.datepicker}
                        locale="ptBR"
                        minDate={new Date()}
                        onChange={changeDate} 
                        dateFormat="dd/MM/yyyy"
                        excludeDateIntervals={alreadyReserved}
                        />
                </div>
            </motion.div>
        </AnimatePresence>
    )
}


const getReservedDays = () => {
    const reservedDays = 
    [
        {start: new Date(`03/01/2023`), end: new Date(`03/05/2023`) },
        {start: new Date(`04/03/2023`), end: new Date(`04/10/2023`) },
        {start: new Date(`05/28/2023`), end: new Date(`05/29/2023`) },
        {start: new Date(`06/19/2023`), end: new Date(`06/20/2023`) },
        {start: new Date(`07/28/2023`), end: new Date(`07/29/2023`) },
        {start: new Date(`08/02/2023`), end: new Date(`08/08/2023`) },
        {start: new Date(`09/15/2023`), end: new Date(`09/18/2023`) },
        {start: new Date(`10/17/2023`), end: new Date(`10/21/2023`) },
        {start: new Date(`11/03/2023`), end: new Date(`11/09/2023`) },
        {start: new Date(`12/11/2023`), end: new Date(`12/17/2023`) }
    ];

    return reservedDays;
}