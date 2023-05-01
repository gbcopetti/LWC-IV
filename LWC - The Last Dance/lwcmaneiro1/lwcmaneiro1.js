import { LightningElement, track } from 'lwc';

export default class lwcmaneiro1 extends LightningElement {
@track num1;
@track num2;
@track total;
@track isAdd = false;
@track isSub = false;
@track isMul = false;
@track isDiv = false;
@track isResultVisible = true;


constructor() {
    super();
    this.num1 = 0;
    this.num2 = 0;
}

handleInputChange(event) {
     const fieldName = event.target.name;
        console.log('fieldName:', fieldName);

        const value = event.target.value;
        console.log('value:', value);

        if (fieldName == 'input1') {
            this.num1 = value;
            console.log('this.input1:', this.input1);
        } else if (fieldName == 'input2') {
            this.num2 = parseFloat(value);
            console.log('this.input2:', this.input2);
        }
}

add() {
    this.total = parseFloat(this.num1) + parseFloat(this.num2);
    this.isAdd = true;
    this.isSub = false;
    this.isMul = false;
    this.isDiv = false;
    this.isResultVisible = true;
}

subtract() {
    this.total = parseFloat(this.num1) - parseFloat(this.num2);
    this.isAdd = false;
    this.isSub = true;
    this.isMul = false;
    this.isDiv = false;
    this.isResultVisible = true;
}

multiply() {
    this.total = parseFloat(this.num1) * parseFloat(this.num2);
    this.isAdd = false;
    this.isSub = false;
    this.isMul = true;
    this.isDiv = false;
    this.isResultVisible = true;
}

divide() {
    if (this.num2 === '0') {
        alert('O segundo número deve ser diferente de zero!');
        return;
    }
    this.total = parseFloat(this.num1) / parseFloat(this.num2);
    this.isAdd = false;
    this.isSub = false;
    this.isMul = false;
    this.isDiv = true;
    this.isResultVisible = true;
}

clear(){
    this.num1 = '';
    this.num2 = '';
    this.total = '';
    this.isAdd = false;
    this.isSub = false;
    this.isMul = false;
    this.isDiv = true;
    this.isResultVisible = false;
}
}