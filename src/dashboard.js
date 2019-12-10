import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { Container, Jumbotron, Row, Col, ListGroup, ButtonGroup, ToggleButton } from 'react-bootstrap';


const mapStyles = {
    width: '100vh',
    height: '100%'
}

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lat : '13.0827',
            lng : '80.2707'
        };
       // console.log(this.props.username);
    }    
    
    buttonClick(val){
        console.log(val);
        debugger;
        this.myLatLng = {
            lat : val.lat,
            lng : val.lng
        }
        if(this.props.google){
            this.setState({lat: val.lat, lng: val.lng});
          //  console.log(this.props.google);
           // console.log(this.myLatLng);

        }        
        
    }
    
      
    render() {
        let cityList = [
            {
                id : 1, 
                name : 'Delhi',
                lat : '28.7041',
                lng : '77.1025'
            },
            {
                id : 2, 
                name : 'Mumbai',
                lat : '19.0760',
                lng : '72.8777'
            },
            {
                id : 3, 
                name : 'Kolkata',
                lat : '22.5726',
                lng : '88.3639'
            },
            {
                id : 4,
                name : 'Channai',
                lat : '13.0827',
                lng : '80.2707'
            },
            {
                id : 5,
                name : 'Pune',
                lat : '18.5204',
                lng : '73.8567'
            },
            {
                id : 6, 
                name : 'Bangalore',
                lat : '12.9716',
                lng : '77.5946'
            },
            {
                id : 7,
                name : 'Hyderabad',
                lat : '17.3850',
                lng : '78.4867'
            },
            {
                id : 8,
                name : 'Kochi',
                lat : '9.9312',
                lng : '76.2673'
            },       
    
        ];
        var cityNames = cityList.map(data => {
            return (
                <ListGroup.Item key={data.id} id={data.id} action onClick={() => this.buttonClick(data)}>{data.name}</ListGroup.Item>
            );
        })
        
        let displayMarkers = cityList.map(data => {
            return (
                <Marker key={data.id} position={{ lat : data.lat, lng : data.lng}} />
            );
        })
        var points = [
            { lat: 22.02, lng: 77.01 },
            { lat: 22.03, lng: 77.02 },
            { lat: 22.03, lng: 77.04 },
            { lat: 22.05, lng: 77.02 }
        ];
        var bounds = new this.props.google.maps.LatLngBounds();
        for (var i = 0; i < points.length; i++) {
            bounds.extend(points[i]);
        }

        return (
            <Container>
                <Jumbotron style={{padding: 10}}>
                    <Row>
                        <Col><h3>Hello {this.props.username} </h3></Col>
                        <Col>
                            <ButtonGroup toggle className="mt-1">
                                <ToggleButton id="displaySingle" type="radio" name="radio" defaultChecked value="1">
                                    Single
                                </ToggleButton>
                                <ToggleButton id="displayMultiple" type="radio" name="radio" value="2">
                                    Multiple
                                </ToggleButton>
                            </ButtonGroup>
                        </Col>
                    </Row>
                </Jumbotron>
                <Row>
                    <Col>                        
                        <h4>Lists Of Cities</h4>
                        <ListGroup>
                            {cityNames}
                        </ListGroup>                        
                    </Col>
                    <Col>
                        <Map id="mymap"
                            google={this.props.google}
                            zoom={4}
                            style={mapStyles}
                            initialCenter={this.state}
                            // bounds={bounds}
                        >
                        <Marker position={this.state} />
                        {/*displayMarkers*/}
                        </Map>
                    </Col>
                </Row>               
            </Container>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyAwu42ZjnzWV4-LQe5-t72Ujt3OykdqZ_w'
  })(Dashboard);  