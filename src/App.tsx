import "./App.css";

import * as React from "react";

import {
  DarkMapStyle,
  LightMapStyle,
  MapStyle,
  styleConfig
} from "./mapStyles";
import ReactMapboxGl, { GeoJSONLayer } from "react-mapbox-gl";

import styled from "styled-components";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiYWxleDMxNjUiLCJhIjoiY2o0MHp2cGtiMGFrajMycG5nbzBuY2pjaiJ9.QDApU0XH2v35viSwQuln5w"
});

const Container = styled.div`
  position: relative;
  height: 100%;
  flex: 1;
`;

const Button = styled.button`
  border: 1px solid #3770c6;
  background-color: rgb(84, 152, 255);
  height: 100%;
  color: white;
  font-size: 13px;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  outline: none;
  :hover {
    background-color: #3770c6;
  }
`;
const Indicator = styled.div`
  padding: 6px 10px;
  background-color: white;
`;
const BottomBar = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const mapStyle = {
  height: "100%",
  width: "100%"
};

const INITIAL_ZOOM: [number] = [12];

export interface State {
  styleKey: MapStyle;
}

class StyleUpdate extends React.Component<{}, State> {
  public state: State = {
    styleKey: LightMapStyle
  };

  public nextStyle = () => {
    const { styleKey } = this.state;

    this.setState({
      styleKey: styleKey === LightMapStyle ? DarkMapStyle : LightMapStyle
    });
  };

  public render() {
    const { styleKey } = this.state;

    const styleObj = styleConfig[styleKey];

    return (
      <div className="App">
        <Container>
          <Map
            style={styleObj.url}
            containerStyle={mapStyle}
            center={[-77.05, 38.9]}
            zoom={INITIAL_ZOOM}
          >
            <GeoJSONLayer
              data={styleObj.geoJson}
              circleLayout={{ visibility: "visible" }}
              circlePaint={{
                "circle-color": {
                  property: "color",
                  type: "identity"
                }
              }}
              symbolLayout={{
                "text-field": "{place}",
                "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                "text-offset": [0, 0.6],
                "text-anchor": "top"
              }}
            />
          </Map>
          <BottomBar>
            <Button onClick={this.nextStyle}>Change style</Button>
            <Indicator>{`Using style: ${styleKey}`}</Indicator>
          </BottomBar>
        </Container>
      </div>
    );
  }
}

export default StyleUpdate;
