import React, {Component} from 'react';
import { Link } from 'react-router';
import {
    Form,
    FormGroup,
    ControlLabel,
    FormControl,
    HelpBlock,
    Grid,
    Row,
    Col,
    Button
} from 'react-bootstrap';
import MagicDropzone from "react-magic-dropzone";

class CreateProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            validationName: null,

            previews: []
        };

    }

    componentDidMount() {
    }

    changeName(e) {
        this.setState({
            name: e.target.value,
            validationName: (e.target.value) ? 'success' : 'error'
        });
    }

    changePhoto(e) {

    }
    dropPhoto(accepted, rejected, links) {
        accepted = accepted.map(file => file.preview);
        var newPreviews = [...accepted];
        this.setState({
            previews: newPreviews
        });
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={12}>
                        <h1>Nuevo producto</h1>
                        <Form horizontal>
                            <FormGroup
                                controlId="inputName"
                                validationState={this.state.validationName}
                            >
                                <Col componentClass={ControlLabel} sm={2}>
                                    Nombre
                                </Col>
                                <Col sm={10}>
                                    <FormControl
                                        type="text"
                                        placeholder="Nombre del producto"
                                        onChange={this.changeName.bind(this)}
                                    />
                                    <HelpBlock>Este campo es necesario</HelpBlock>
                                </Col>
                            </FormGroup>
                            <FormGroup
                                controlId="inputPrice"
                            >
                                <Col componentClass={ControlLabel} sm={2}>
                                    Precio
                                </Col>
                                <Col sm={10}>
                                    <FormControl
                                        type="text"
                                        placeholder="Precio del producto"
                                    />
                                    <HelpBlock>Este campo es necesario</HelpBlock>
                                </Col>
                            </FormGroup>
                            <FormGroup
                                controlId="inputMarketId"
                            >
                                <Col componentClass={ControlLabel} sm={2}>
                                    Mercado
                                </Col>
                                <Col sm={10}>
                                    <FormControl componentClass="select">
                                        <option value="1">Mercado 001</option>
                                        <option value="2">Mercado 002</option>
                                        <option value="3">Mercado 003</option>
                                    </FormControl>
                                </Col>
                            </FormGroup>
                            <FormGroup
                                controlId="inputPhoto"
                            >
                                <Col componentClass={ControlLabel} sm={2}>
                                    Foto del producto
                                </Col>
                                <Col sm={10}>
                                    <MagicDropzone
                                        className="Dropzone"
                                        accept={"image/jpeg, image/png, .jpg, .jpeg, .png"}
                                        multiple={false}
                                        onDrop={this.dropPhoto.bind(this)}
                                        onChange={this.changePhoto.bind(this)}
                                        maxSize="5120000"
                                        minSize="0"
                                    >
                                    <div className="Dropzone-content">
                                        {
                                            this.state.previews.length > 0 ? ( this.state.previews.map((preview, i) => ( <img key={i} alt="" className="Dropzone-img" src={preview} /> )) ) : ( "Arrastre aquí la foto o haga click para seleccionar")
                                        }
                                    </div>
                                    </MagicDropzone>
                                    <HelpBlock>Solo se aceptan imágenes de 5Mb máximo.</HelpBlock>
                                </Col>
                            </FormGroup>
                          </Form>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
export default CreateProduct;