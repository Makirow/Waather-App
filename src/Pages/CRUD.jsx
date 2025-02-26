import React, { Component } from 'react';
import {ProductConsumer } from "../Components/Context"
import { Table, Button } from 'react-bootstrap';



function CRUD() {
  return (
    <div className="container">
                <h3>CRUD Operations</h3>
                <ProductConsumer>
                    {(value) => {
                        return (
                            <Table size="sm" striped bordered hover>
                                <tbody>
                                <tr>
                                    <th>Full Name</th>
                                    <th>Location</th>
                                    <th>Town</th>
                                    <th>Email Address</th>
                                    <th>Telephone number</th>
                                </tr>
                                <tr>
                                    <td><input type="text" value={value.title} onChange={(e) =>{value.updateValue(e, "title")}} /></td>
                                    <td><input type="text" value={value.info} onChange={(e) =>{value.updateValue(e, "info")}} /></td>
                                    <td><input type="text" value={value.price} onChange={(e) =>{value.updateValue(e, "price")}} /></td>
                                    <td><input type="text" value={value.company} onChange={(e) =>{value.updateValue(e, "company")}} /></td>
                                    <td><Button size="sm" onClick={()=>{value.onSave(value.id)}}>{value.id ? "Save" : "Add new Row"}</Button></td>
                                </tr>
                                {value.Alldata.map(product => {
                                    return (
                                        <tr>
                                            <td>{product.title}</td>
                                            <td>{product.info}</td>
                                            <td>{product.price}</td>
                                            <td>{product.company}</td>
                                            <td><Button size="sm" variant="primary" onClick={()=>{value.onEdit(product.id)}}>Edit</Button> | <Button size="sm" variant="danger" onClick={()=>{value.onDelete(product.id)}} >Delete</Button></td>
                                        </tr>
                                    )
                                })}
                                </tbody>
                            </Table>
                        )
                    }}
                </ProductConsumer>
            </div>
  )
}
export default CRUD
