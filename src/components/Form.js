import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { firstValue: '', secondValue: '' };

        this.firstHandleChange = this.firstHandleChange.bind(this);
        this.secondHandleChange = this.secondHandleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    firstHandleChange(event) {
        this.setState({ firstValue: event.target.value });
    }

    secondHandleChange(event) {
        this.setState({ secondValue: event.target.value });
    }

    handleSubmit(event) {
        console.log('Prima versione:' + this.state.firstValue + ' | Seconda versione:' + this.state.firstValue)

        let firstValue = this.state.firstValue;
        let secondValue = this.state.secondValue;
        let isFormatValid = this.formatValidation(firstValue, secondValue);

        if (isFormatValid) {
            console.log("S.I".split(".")[0])
            console.log("S.I".split(".")[1])
            console.log("S.I".split(".").length)
            this.checkVersions(firstValue, secondValue);
        }

        event.preventDefault();
    }

    formatValidation(firstValue, secondValue) {
        let isFormatValid = true;
        let isFirstValueFormatted = this.checkFormat(firstValue);
        let isSecondValueFormatted = this.checkFormat(secondValue);

        if (!isFirstValueFormatted) {
            alert('Il formato della prima versione non è valido. (Esempio di formato valido: 1.0 | 1.0.1)');
            isFormatValid = false;
        }

        if (!isSecondValueFormatted) {
            alert('Il formato della seconda versione non è valido. (Esempio di formato valido: 1.0 | 1.0.1)');
            isFormatValid = false;
        }

        return isFormatValid;
    }

    checkFormat(version) {
        return version.match("(\\d+\\.\\d+|\\d+\\.\\d+\\.\\d+)");
    }

    checkVersions(firstValue, secondValue) {
        let result = 0;
        let firstValueNumbers = firstValue.split('.');
        let secondValueNumbers = secondValue.split('.');
        let firstValueNumbersSize = firstValueNumbers.length;
        let secondValueNumbersSize = secondValueNumbers.length;
        let iterations = firstValueNumbersSize > secondValueNumbersSize ? firstValueNumbersSize : secondValueNumbersSize;

        for (let i = 0; i < iterations; i++) {
            let s1CurrentNumber = i < firstValueNumbersSize ? firstValueNumbers[i] : 0;
            let s2CurrentNumber = i < secondValueNumbersSize ? secondValueNumbers[i] : 0;

            if (s1CurrentNumber < s2CurrentNumber) {
                result = 1;
                break;
            } else if (s1CurrentNumber > s2CurrentNumber) {
                result = -1;
                break;
            } else {
                continue;
            }
        }

        alert('Il risultato è ' + result)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Inserire la prima versione:
                    <input type="text" value={this.state.firstValue} onChange={this.firstHandleChange} />
                </label>
                <label>
                    Inserire la seconda versione:
                    <input type="text" value={this.state.secondValue} onChange={this.secondHandleChange} />
                </label>
                <input type="submit" value="Compara!" className="submit" />
            </form>
        );
    }
}

export default Form;