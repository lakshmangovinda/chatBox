import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import styled from "styled-components";
const Wrapper = styled.div`
  overflow: hidden;
  .leaflet-container {
    width: 35vw;
    height: 50vh;
    border-radius: 40px;
  }
`;
const LocationMap = () => {
  return (
    <Wrapper className="map">
      <MapContainer center={[52.51, 13.38]} zoom={16} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[52.51, 13.38]}>
          <Popup>???</Popup>
        </Marker>
      </MapContainer>
      <div />{" "}
    </Wrapper>
  );
};
export default LocationMap;
