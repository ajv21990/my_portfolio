import React from 'react'
import "./stylesheets/RomanNumeralSheet.css"
import TextInput from './constants/textInput'
import { Spring } from 'react-spring/renderprops'


export default class SandBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            RN: "",
            Number: 0,
            showField: false
        }
    }


    ButtonPressed = () => {
        let input = this.state.RN.toUpperCase()
        let CheckedNum = this.HasNumber(input)
        let CheckedChar = this.HasChars(input)
        console.log(CheckedChar)
        if (!CheckedNum && CheckedChar) {
            this.JSFunction(input)
        }
        else {
            this.setState({
                showField: true,
                Number: "Error Invalid Roman Numeral"
            })
        }

    }
    HasNumber = string => /\d/.test(string)
    HasChars = chars => {
        var look = "IXVCDML";
        if (!new RegExp("[^" + look + "]").test(chars)) {
            return true
        }
        else {
            return false
        }


    }

    JSFunction = input => {
        console.log(input)
        let output = 0
        let multiples = [0, 0, 0, 0, 0, 0, 0]
        let counter = 0

        for (let i = 0; i <= input.length; i++) {
            if (input.charAt(i) === "I") {

                if (input.charAt(i + 1) === "V") {
                    if (input.charAt(i + 2) !== "") {
                        output = "Error Invalid Roman Numeral"
                        break;
                    }
                    output += 4
                    i++
                    continue;
                }
                if (input.charAt(i + 1) === "X") {
                    if (input.charAt(i + 2) !== "") {
                        output = "Error Invalid Roman Numeral"
                        break;
                    }
                    output += 9
                    i++
                    continue;
                }
                else {
                    output += 1

                    counter = multiples[0]
                    counter++
                    multiples[0] = counter

                }
            }
            if (input.charAt(i) === "V") {
                if (input.charAt(i - 1) === "" || input.charAt(i - 1) === "M" || input.charAt(i - 1) === "D" || input.charAt(i - 1) === "C"
                    || input.charAt(i - 1) === "L" || input.charAt(i - 1) === "X") {
                    output += 5

                    counter = multiples[1]
                    counter++
                    multiples[1] = counter
                }
                else {
                    output = "Error Invalid Roman Numeral"
                    break;
                }
            }
            if (input.charAt(i) === "X") {
                if (input.charAt(i + 1) === "L") {
                    if (input.charAt(i + 2) !== "") {
                        output = "Error Invalid Roman Numeral"
                        break;
                    }
                    output += 40
                    i++
                    continue;
                }
                if (input.charAt(i + 1) === "C") {
                    if (input.charAt(i + 2) !== "") {
                        output = "Error Invalid Roman Numeral"
                        break;
                    }
                    output += 90
                    i++
                    continue;
                }
                else {
                    if (input.charAt(i - 1) === "" || input.charAt(i - 1) === "L" || input.charAt(i - 1) === "X" || input.charAt(i - 1) === "M" || input.charAt(i - 1) === "D" || input.charAt(i - 1) === "C") {
                        output += 10

                        counter = multiples[2]
                        counter++
                        multiples[2] = counter
                    }
                    else {
                        output = "Error Invalid Roman Numeral"
                        break;
                    }
                }
            }
            if (input.charAt(i) === "L") {
                if (input.charAt(i - 1) === "" || input.charAt(i - 1) === "M" || input.charAt(i - 1) === "D" || input.charAt(i - 1) === "C") {
                    output += 50

                    counter = multiples[3]
                    counter++
                    multiples[3] = counter
                }
                else {
                    output = "Error Invalid Roman Numeral"
                    break;
                }
            }
            if (input.charAt(i) === "C") {
                if (input.charAt(i + 1) === "D") {
                    if (input.charAt(i + 2) !== "") {
                        output = "Error Invalid Roman Numeral"
                        break;
                    }
                    output += 400
                    i++
                    continue;
                }
                if (input.charAt(i + 1) === "M") {
                    if (input.charAt(i + 2) !== "") {
                        output = "Error Invalid Roman Numeral"
                        break;
                    }
                    output += 900
                    i++
                    continue;
                }
                else {
                    if (input.charAt(i - 1) === "" || input.charAt(i - 1) === "M" || input.charAt(i - 1) === "C" || input.charAt(i - 1) === "D") {
                        output += 100

                        counter = multiples[4]
                        counter++
                        multiples[4] = counter
                    }
                    else {
                        output = "Error Invalid Roman Numeral"
                        break;
                    }
                }

            }
            if (input.charAt(i) === "D") {
                if (input.charAt(i - 1) === "" || input.charAt(i - 1) === "M") {
                    output += 500

                    counter = multiples[5]
                    counter++
                    multiples[5] = counter
                }
                else {
                    output = "Error Invalid Roman Numeral"
                    break;
                }
            }
            if (input.charAt(i) === "M") {

                if (input.charAt(i - 1) === "M" || input.charAt(i - 1) === "") {
                    output += 1000

                    counter = multiples[6]
                    counter++
                    multiples[6] = counter
                }
                else {
                    output = "Error Invalid Roman Numeral"
                    break;
                }

            }
        }

        //1,3,5 cannot be repeated
        console.log(multiples)
        for (let j = 0; j < multiples.length; j++) {

            if (multiples[1] >= 2 || multiples[3] >= 2 || multiples[5] >= 2) {
                output = "Error Invalid Roman Numeral"
                break;
            }

            if (multiples[0] >= 4 || multiples[2] >= 4 || multiples[4] >= 4 || multiples[6] >= 4) {
                output = "Error Invalid Roman Numeral"
                break;
            }
        }

        //if output is 0 then answer is Invalid
        if (output === 0) {
            output = "Error Invalid Roman Numeral"
        }


        this.consoleThis(output)
    }
    consoleThis = string => {
        this.setState({
            Number: string,
            showField: true
        })
    }

    handleChange = evt => {
        const key = evt.target.name;
        const val = evt.target.value;
        this.setState({
            [key]: val
        })
    }

    Reset = () => {
        this.setState({
            showField: false,
            RN: "",
            Number: 0
        })
    }
    render() {

        return (
            <div className="romanCalc">
                <h1 className="romanCalcText">Roman Numeral Calculator</h1>
                <br />
                {!(this.state.showField) ?
                    <TextInput id="RN" type="text" className="form-control" placeholder="Input Roman Numeral" val={this.state.RN} handleChange={this.handleChange} />
                    :
                    <Spring
                        config={{ tension: 280, friction: 200 }}
                        from={{ opacity: 0 }}
                        to={{ opacity: 1 }}>
                        {props => <h2 className="romanCalcText" style={props}>{this.state.Number}</h2>}
                    </Spring>}
                <br />
                {!(this.state.showField) ? <button type="button" className="btn btn-lg btn-primary" onClick={this.ButtonPressed}>Calculate</button>
                    :
                    <button type="button" className="btn btn-danger" onClick={this.Reset}>Reset</button>
                }


            </div>

        )
    }
} 