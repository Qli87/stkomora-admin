import React from 'react'
import { withRouter } from 'react-router-dom'
import Header from '../Header';
import Sidebar from '../Sidebar';

class AdvAdd extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            text: '',
            phone: '',
            errorPhone: ''
        }
    }

    changeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    changeText = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    changePhone = (event) => {
        this.setState({
            phone: event.target.value
        })
    }

    addAdv = () => {
        const adv = {
            title: this.state.title,
            text: this.state.text
        }
        this.props.addAdv(adv)
    }

    handleValidation = () => {
        let errorPhone = this.state.errorPhone
        let formIsValid = true
        if(typeof this.state.phone !== 'undefined') {
            if(this.state.phone.length < 9){
                formIsValid = false
                errorPhone = "Broj telefona mora imati minimum 9 cifri"
            } else {errorPhone=''}
        }
        this.setState({
            errorPhone: errorPhone
        })
        return formIsValid
    }

    submitForm = (e) => {
        e.preventDefault()

        if(this.handleValidation()) {
            const adv = {
                title: this.state.title,
                text: this.state.text
            }
            // this.props.addAdv(adv)
            console.log(adv);
            // window.location.reload()
        } else {
            alert("Greska!")
        }
    }

    render() {
        return(
            <div>
                <Header />
                <div className="col-md-2">
                    <Sidebar />
                </div>

                <div className="col-md-10 mainContent">
                    <form name="addForm" onSubmit={this.submitForm}>
                        <div className="col-md-4 box">
                            <div className="box-header with-border">
                                <h3 className="box-title">Dodaj oglas</h3>
                            </div>
                            <div className="box-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Naslov</label>
                                            <input type="text" className="form-control" placeholder="Unesite naslov oglasa" value={this.state.title} onChange={this.changeTitle} required/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Telefon</label>
                                            <input type="number" className="form-control" placeholder="Unesite broj telefona" value={this.state.phone} onChange={this.changePhone} required/>
                                            <span style={{'color':'red'}}>{this.state.errorPhone}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <textarea className="textAreaNews" value={this.state.text} onChange={this.changeText} ></textarea>
                                </div>
                            </div>
                            <div className="box-footer">
                                <button type="submit" className="btn btn-primary">Sačuvaj</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(AdvAdd)