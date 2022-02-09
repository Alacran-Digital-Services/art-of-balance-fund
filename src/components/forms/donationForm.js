import React, { useState, useEffect } from "react"
import * as styles from "./donationForm.module.scss"
import { generateOrderId } from "../../utils/orderIdGenerator"
import { generateCurrentDateTimeString } from "../../utils/dateTimeGenerator"
import { generateHash } from "../../utils/hashGenerator"

export default function DonationForm() {
    const SLIDER_MIN = 5
    const SLIDER_MAX = 1800
    const SLIDER_STEP = 5

    const [donationAmount, setDonationAmount] = useState(150)
    const [helperText, setHelperText] = useState("Default text")
    const [sliderBackground, setSliderBackground] = useState("none")

    const handleInputChange = event => {
        const target = event.target
        const value = target.value
        setDonationAmount(value)
    }

    const terminalId = process.env.GATSBY_NUVEI_TERMINAL_ID;
    const secret = process.env.GATSBY_NUVEI_SHARED_SECRET;

    function donationAmountString() {
        return `$` + parseFloat(donationAmount).toLocaleString("en-US")
    }

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

    const updateHelperText = () => {
        if (donationAmount >= 150 && donationAmount < 300) {
            setHelperText(
                `Your donation at ${donationAmountString()} will fund 1 session.`
            )
        } else if (donationAmount > 300 && donationAmount < 1800) {
            let numSession = Math.floor(donationAmount / 150)
            setHelperText(
                `Your donation at ${donationAmountString()} will fund ${numSession} sessions.`
            )
        } else if (donationAmount >= 1800 && donationAmount < 3600) {
            setHelperText(
                `Your donation at ${donationAmountString()} will sponsor 1 client for a full 12 sessions.`
            )
        } else if (donationAmount >= 3600) {
            let clients = Math.floor(donationAmount / 1800)
            setHelperText(
                `Your donation amount of ${donationAmountString()} will help sponsor ${clients} clients`
            )
        } else {
            setHelperText("Your donation will help sponsor clients.")
        }
    }

    const updateSliderBackground = () => {
        if (donationAmount !== SLIDER_MIN) {
            let percentage =
                ((donationAmount - SLIDER_MIN) / (SLIDER_MAX - SLIDER_MIN)) * 100
            setSliderBackground(
                `linear-gradient(to right, #50299c, #7a00ff ${percentage}%, #d3edff ${percentage}%, #dee1e2 100%)`
            )
        }
    }

    useEffect(() => {
        updateHelperText()
        updateSliderBackground()
    }, [donationAmount])

    return (
        <div className={styles.container}>

            <h3><u>Make a Donation Today</u></h3>
            <div style={{ fontSize: `.8rem` }}>
                <p>Our work is possible by the generous contributions of passionate individuals looking to drive change.</p>
                <p>To make a contribution to the Art of Balance Fund, please select a donation amount using our sliding scale below or manually enter an amount.</p>
                <p>Thank you for supporting our mission to make mental health accessible by all.</p>

            </div>

            <div className={styles.slideContainer}>
                <div className={styles.slider + " " + styles.formGroup}>
                    <input
                        name="donationAmount"
                        id="donationRange"
                        type="range"
                        value={donationAmount}
                        min={SLIDER_MIN}
                        max={SLIDER_MAX}
                        step={SLIDER_STEP}
                        style={{ background: sliderBackground }}
                        onChange={handleInputChange}
                    ></input>
                </div>
                <div className={styles.sliderValue + " " + styles.formGroup}>
                    <label>Donation Amount</label>
                    <span>{donationAmountString()}</span>
                </div>
            </div>

            <br></br>
            <b><u>OR</u></b>
            <br></br>

            <p>Enter donation amount here: {` `}
                <span>
                    $
                    <input
                        type="text"
                        value={donationAmount}
                        size={6}
                        name="donationAmount"
                        onChange={handleInputChange}
                    ></input>
                </span>
            </p>

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
                <div>
                    <p>{helperText}</p>
                    <input type="submit" value="Donate Now" />
                </div>
            </form>
        </div>
    )
}
