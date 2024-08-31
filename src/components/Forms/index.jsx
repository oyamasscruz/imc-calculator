import { useState } from "react";

import styles from './Forms.module.css';

const Forms = () => {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [codigoHtml, setCodigoHtml] = useState(false);

    const mostraResultado = function () {
        setCodigoHtml(true);
    }

    const alturaQuadrada = parseFloat(altura) * parseFloat(altura)
    const imc = parseInt(peso / alturaQuadrada);


    const retornaValores = function () {
        if (imc >= 20 && imc < 25) {
            return (
                <span className={styles.normal}>IMC {imc} normal</span>
            )
        }
        if (imc >= 25 && imc < 29) {
            return (
                <span className={styles.excesso}>IMC {imc} excesso de Peso</span>
            )
        }
        if (imc >= 30 && imc < 35) {
            return (
                <span className={styles.obesidade}>IMC {imc} Sobrepeso</span>
            )
        }
        if (imc === 0) {
            return (
                <span className={styles.null}>Por favor, digite algum valor</span>
            )
        } else {
            return (
                <span className={styles.superObesidade}>IMC{imc} de superObesidade</span>
            )
        }
    }

    return (
        <>
        <div className={styles.container}>
            <h1 className={styles.titulo}>Calculadora IMC</h1>
            <form className={styles.forms}>
                <label className={styles.label}>Peso</label>
                <input  className={styles.input} placeholder="(em KG)" onBlur={(e) => setPeso(parseFloat(e.target.value))} type="number" id="peso" />
                <label className={styles.label}>Altura</label>
                <input  className={styles.input} placeholder="(em meters)" onBlur={(e) => setAltura(e.target.value)} type="number" id="altura" />
                <button className={styles.button} onClick={mostraResultado} type='button'>Calcular IMC</button>
                {codigoHtml && retornaValores()}
            </form>
        </div>
        </>
    )
}

export default Forms;