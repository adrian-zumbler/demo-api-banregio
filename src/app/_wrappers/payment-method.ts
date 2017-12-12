export class PaymentMethod {
    name: string;
    counter: number;

    PAYMENT_METHODS_COUNTER: number = 4;

    public getPercentage(): number {
        return (this.counter / this.PAYMENT_METHODS_COUNTER);
    }

}