import React, { useState, useEffect } from "react"
import * as styles from "./donationForm.module.scss"
import { generateOrderId } from "../../utils/orderIdGenerator"
import { generateCurrentDateTimeString } from "../../utils/dateTimeGenerator"
import { generateHash } from "../../utils/hashGenerator"

export default function DonationForm() {
    const [donationAmount, setDonationAmount] = useState(150)
    const [helperText, setHelperText] = useState("Fund 1 session at $150")

    const handleInputChange = event => {
        const target = event.target
        const value = target.value
        setDonationAmount(value)
    }

    const terminalId = 1064965
    const secret = "123456789G1"

    const orderIdGenerator = {
        internalOrderId: null,
        get orderId() {
            if (this.internalOrderId === null) {
                this.internalOrderId = generateOrderId()
            }
            return this.internalOrderId
        },
    }

    const dateTimeGenerator = {
        internalDateTime: null,
        get dateTime() {
            if (this.internalDateTime === null) {
                this.internalDateTime = generateCurrentDateTimeString()
            }
            return this.internalDateTime
        },
    }

    useEffect(() => {
        if (donationAmount >= 150 && donationAmount < 1800) {
            let numSession = Math.floor(donationAmount / 150)
            setHelperText(
                `Your donation at $${donationAmount} will fund ${numSession} sessions.`
            )
        } else if (donationAmount >= 1800) {
            setHelperText(
                `Your donation at $${donationAmount} will sponsor 1 client for a full 12 sessions.`
            )
        } else {
            setHelperText("Your donation will help sponsor clients.")
        }
    }, [donationAmount])

    return (
        <div>
            <p>Please select a donation amount</p>
            <div className={styles.center}>
                <p>Make a Donation Today</p>
                <sub>Please select a donation amount using our sliding scale</sub>
                <br></br>
            </div>

            <div className={styles.slideContainer}>
                <div className={styles.slider + " " + styles.formGroup}>
                    <input
                        type="range" min="5" max="2000" step="5"
                        name="donationAmount" value={donationAmount}
                        className={styles.slider} id="donationRange"
                        onChange={handleInputChange}
                    >
                    </input>
                </div>
                <div className={styles.sliderValue + " " + styles.formGroup}>
                    <label>Donation Amount</label>
                    <span></span>
                </div>
            </div>
            <form
                action="https://testpayments.nuvei.com/merchant/paymentpage"
                method="post"
            >
                <input type="hidden" name="TERMINALID" value={terminalId} />
                <input type="hidden" name="ORDERID" value={orderIdGenerator.orderId} />
                <input type="hidden" name="CURRENCY" value="USD" />
                <input type="hidden" name="AMOUNT" value={donationAmount} />
                <input
                    type="hidden"
                    name="DATETIME"
                    value={dateTimeGenerator.dateTime}
                />
                <input
                    type="hidden"
                    name="HASH"
                    value={generateHash(
                        terminalId,
                        orderIdGenerator.orderId,
                        donationAmount,
                        dateTimeGenerator.dateTime,
                        secret
                    )}
                />
                <div className={styles.center}>
                    <b>OR</b>
                    <br></br>
                    <sub>Enter donation amount here</sub>
                    <br></br>
                    <span>
                        $
                        <input
                            type="text"
                            value={donationAmount}
                            name="donationAmount"
                            onChange={handleInputChange}
                        ></input>
                    </span>
                </div>

                <div className={styles.center}>
                    <p>{helperText}</p>
                    <input type="submit" value="Donate Now" />
                </div>
            </form>
        </div>
    )
}
