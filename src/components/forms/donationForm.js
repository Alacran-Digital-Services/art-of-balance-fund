import React from 'react'
import * as styles from "./donationForm.module.scss"
import { generateOrderId } from "../../utils/paymentProcessing/orderIdGenerator"
import { generateCurrentDateTimeString } from "../../utils/date/dateTimeGenerator"
import { generateHash } from "../../utils/paymentProcessing/hashGenerator"

export default class DonationForm extends React.Component {

    state = {
        donationAmount: 20,
    }

    handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name

        this.setState({
            [name]: value
        })
    }

    render() {

        const terminalId = 1064965;
        const secret = "123456789G1";

        const orderIdGenerator = {
            internalOrderId: null,
            get orderId() {
                if (this.internalOrderId === null) {
                    this.internalOrderId = generateOrderId();
                }
                return this.internalOrderId;
            }
        }

        const dateTimeGenerator = {
            internalDateTime: null,
            get dateTime() {
                if (this.internalDateTime === null) {
                    this.internalDateTime = generateCurrentDateTimeString();
                }
                return this.internalDateTime;
            }
        }

        return (
            <div>
                <p>Please select a donation amount</p>
                <p>Donation Amount: {this.state.donationAmount}</p>
                <div className={styles.slideContainer}>
                    <input 
                        type="range" min="5" max="100" 
                        name="donationAmount" value={this.state.donationAmount} 
                        className={styles.slider} id="donationRange"
                        onChange={this.handleInputChange}
                        >
                    </input>
                </div>
                <form action="https://testpayments.nuvei.com/merchant/paymentpage" method="post">
                    <input type="hidden" name="TERMINALID" value={terminalId} />
                    <input type="hidden" name="ORDERID" value={orderIdGenerator.orderId} />
                    <input type="hidden" name="CURRENCY" value="USD" />
                    <input type="hidden" name="AMOUNT" value={this.state.donationAmount} />
                    <input type="hidden" name="DATETIME" value={dateTimeGenerator.dateTime} />
                    <input type="hidden" name="HASH" value={generateHash(terminalId, orderIdGenerator.orderId, this.state.donationAmount, dateTimeGenerator.dateTime, secret)} />
                    <input type="submit" value="Donate Now" />
                </form>
            </div>
        )
    }
}
