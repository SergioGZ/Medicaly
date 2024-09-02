import { useState } from "react"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import { Separator } from "@/components/Shared"
import { ENV } from "@/utils"
import { Addresses } from "./Addresses"
import { Payment } from "./Payment"
import { Resume } from "./Resume"
import styles from "./StepTwo.module.scss"

const stripePromise = loadStripe(ENV.STRIPE_TOKEN)

export function StepTwo(props) {
  const { medicines } = props
  const [selectedAddress, setSelectedAddress] = useState(null)

  return (
    <Elements stripe={stripePromise}>
      <div className={styles.stepTwo}>
        <div className={styles.center}>
          <Addresses
            selectedAddress={selectedAddress}
            setSelectedAddress={setSelectedAddress}
          />
          <Separator height={50} />
          {selectedAddress && <Payment />}
        </div>

        <div className={styles.right}>
          <Resume medicines={medicines} selectedAddress={selectedAddress} />
        </div>
      </div>
    </Elements>
  )
}
