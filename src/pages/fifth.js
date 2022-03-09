import React from 'react';

export default class Fifth extends React.Component{
    constructor(){
        super()
        this.state = {
            nama: 'RAFI',
            kelas: 'XIR7',
        }
    }

    changeState = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return(
            <div className='container'>
                <h3>Form ubah state</h3>
                <form>
                    Input nama
                    <input name='nama' className='form-control' onChange={this.changeState}/>
                    Input kelas
                    <input name='kelas' className='form-control' onChange={this.changeState}/>
                </form>
                <h3>Hasil Input</h3>
                <h5>Nama : {this.state.nama}</h5>
                <p>Kelas : {this.state.kelas}</p>
            </div>
        )
    }
}