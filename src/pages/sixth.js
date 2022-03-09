import React from "react";
import AlertProps from "../component/alert_props"

export default class Sixth extends React.Component{
    constructor(){
        super()
        this.state = ({
            type: "info",
            title: "Alert with Props and State",
            content: "This is content"
        })
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render(){
        return(
            <div className="container">
                <br />
                <AlertProps type={this.state.type} title={this.state.title}>
                    {this.state.content}
                </AlertProps>
                <hr />
                <h5 className="text-center">Alert Control</h5>
                <b>Alert type</b>
                <select className="form-control" name="type" value={this.state.type} onChange={this.handleChange}>
                    <option value="info">info</option>
                    <option value="danger">danger</option>
                    <option value="warning">warning</option>
                    <option value="success">success</option>
                </select>
                <b>Alert Title</b>
                <input className="form-control" name="title" value={this.state.title} onChange={this.handleChange} />
                <b>Alert Content</b>
                <input className="form-control" name="content" value={this.state.content} onChange={this.handleChange} />
            </div>
        )
    }
}