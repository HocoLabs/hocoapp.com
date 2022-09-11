import * as React from "react"
import * as styles from "./index.module.css"
import { HocoSpin } from "./HocoSpin"
import { Phone } from "./Phone"
import { Waitlist } from "./Waitlist"

// This page is so bad and could likely use an overhaul
// But it gets the job done

export const UnderConstruction = () => {
  return (
    <div className={styles.underConstruction}>
      <div className={styles.underConstructionColumn}>
        <Phone>
          <HocoSpin />
          <div className={styles.phoneText}>
            Coming soon...
          </div>
        </Phone>
      </div>
      <div className={styles.underConstructionColumn}>
        <Waitlist />
      </div>
    </div>
  )
}