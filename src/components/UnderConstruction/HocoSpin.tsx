import * as React from "react"
import * as styles from "./HocoSpin.module.css"
import { StaticImage } from "gatsby-plugin-image"
import clsx from 'clsx';

type HocoSpinProps = {

}

export const HocoSpin = ({ }: HocoSpinProps) => {
  const letters = [
    <StaticImage className={styles.letter} src="../images/letter-h.png" alt="Letter H" transformOptions={{ fit: "contain" }} />,
    <StaticImage className={styles.letter} src="../images/letter-o.png" alt="Letter O" transformOptions={{ fit: "contain" }} />,
    <StaticImage className={styles.letter} src="../images/letter-c.png" alt="Letter C" transformOptions={{ fit: "contain" }} />,
    <StaticImage className={styles.letter} src="../images/letter-o.png" alt="Letter O" transformOptions={{ fit: "contain" }} />,
  ]

  const lettersWithContainers = letters.map(letter => (
    <div className={styles.letterContainer}>
      {letter}
    </div>
  ))

  return (
    <div className={styles.hocoSpin}>
      <div className={styles.animationContainer}>
        {lettersWithContainers}
      </div>
    </div>
  )
}