/* eslint react/prop-types: 0 */

import React, {Component} from 'react';
import { Card, Button, Row, Col} from 'antd';

export default class Bar extends Component {

  render(){
    const { disabled, onClick, isNom, info} = this.props
    const {Title,Poster,Year} = info
    return (
        <Card style={{'textAlign':'left', marginBottom:'12px', width:500}} title={Title} bordered={false}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col>
            <img style ={{maxHeight:'300px', borderRadius:'3%'}}src={Poster}/>
            </Col>
            <Col>
            <Row>
              <Col> 
              <p>Year Released: {Year}</p>
              </Col>
            </Row>
            <Row>
              <Col>
              <Button disabled={disabled} type={isNom ? "danger" : "primary"} onClick={()=>{onClick(info)}}>{isNom ? "Remove" : "Nominate"}</Button>
              </Col>
            </Row>
            </Col>
          </Row>
        </Card>
    )
  }
}