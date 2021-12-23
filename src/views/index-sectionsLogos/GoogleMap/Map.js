import React from "react";

import Map from "./00_GoogleMap";

export default function App() {
  return (
    <div>
      <Map zoom={19} center={{ lat: 33.9958666, lng: -6.8468501 }} />
    </div>
  );
}
