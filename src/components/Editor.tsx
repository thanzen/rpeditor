///<reference path="../../libs/typings/react.d.ts" />
///<reference path="../../libs/typings/react-quill.d.ts" />
/// <reference path="../../libs/typings/react-bootstrap.d.ts"/>
import * as React  from 'react';
import * as ReactQuill from 'react-quill';
import * as Modal from 'react-bootstrap/lib/Modal';
import * as Button from 'react-bootstrap/lib/Button';

interface Props { theme?: string, value?: string }
interface State { showModal: boolean }
export class Block extends React.Component<Props, State> {
    static defaultProps = { theme: "snow", value: "" }
    constructor(props) {
        super(props);
        this.state = { showModal: false };
    }
    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }

    render() {
        return (
            <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                      <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <ReactQuill theme={this.props.theme} value={this.props.value} />
                    </Modal.Body>
                    <Modal.Footer>
                      <Button onClick={this.close}>Close</Button>
                    </Modal.Footer>
            </Modal>
            );
    }
};


export var Editor = React.createClass({
    getDefaultProps() {
        return { theme: "snow", value: "", showModal: false };
    },
    componentDidMount() {
        this.setState({ showModal: this.props.showModal });
    },

    //todo:remove value from state if we can.
    getInitialState() {
        return { value: "", showModal: false };
    },

    close() {
        this.setState({ showModal: false });
    },

    open() {
        this.setState({ showModal: true });
    },

    render() {
        return (
            <Modal show={this.state.showModal} onHide={this.close}>
                      <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <ReactQuill theme={this.props.theme} value={this.props.value} />
                      </Modal.Body>
                      <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                      </Modal.Footer>
            </Modal>
            );
    }
});
