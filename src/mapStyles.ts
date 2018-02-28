import { FeatureCollection, Point } from "geojson";

type PointProperties = {
  place: string;
  login: string;
  lat: string;
  lon: string;
  color: string;
};

const lightGeoJson: FeatureCollection<Point, PointProperties> = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        place: "The coffee bar",
        login: "espresso",
        lat: "38.91427",
        lon: "-77.02827",
        color: "#00FFFF"
      },
      geometry: {
        type: "Point",
        coordinates: [-77.02827, 38.91427]
      }
    },
    {
      type: "Feature",
      properties: {
        place: "Bistro Bohem",
        login: "2027355895",
        lat: "38.91538",
        lon: "-77.02013",
        color: "#00FFFF"
      },
      geometry: {
        type: "Point",
        coordinates: [-77.02013, 38.91538]
      }
    },
    {
      type: "Feature",
      properties: {
        place: "Black Cat",
        login: "luckycat",
        lat: "38.91458",
        lon: "-77.03155",
        color: "#00FFFF"
      },
      geometry: {
        type: "Point",
        coordinates: [-77.03155, 38.91458]
      }
    },
    {
      type: "Feature",
      properties: {
        place: "Snap",
        login: "nutella1",
        lat: "38.92239",
        lon: "-77.04227",
        color: "#00FFFF"
      },
      geometry: {
        type: "Point",
        coordinates: [-77.04227, 38.92239]
      }
    },
    {
      type: "Feature",
      properties: {
        place: "Columbia Heights Coffee",
        login: "FAIRTRADE1",
        lat: "38.93222",
        lon: "-77.02854",
        color: "#00FFFF"
      },
      geometry: {
        type: "Point",
        coordinates: [-77.02854, 38.93222]
      }
    },
    {
      type: "Feature",
      properties: {
        place: "Azi's Cafe",
        login: "sunny",
        lat: "38.90842",
        lon: "-77.02419",
        color: "#00FFFF"
      },
      geometry: {
        type: "Point",
        coordinates: [-77.02419, 38.90842]
      }
    },
    {
      type: "Feature",
      properties: {
        place: "Blind Dog Cafe",
        login: "baxtercantsee",
        lat: "38.91931",
        lon: "-77.02518",
        color: "#00FFFF"
      },
      geometry: {
        type: "Point",
        coordinates: [-77.02518, 38.91931]
      }
    },
    {
      type: "Feature",
      properties: {
        place: "Le Caprice",
        login: "baguette",
        lat: "38.93260",
        lon: "-77.03304",
        color: "#00FFFF"
      },
      geometry: {
        type: "Point",
        coordinates: [-77.03304, 38.9326]
      }
    },
    {
      type: "Feature",
      properties: {
        place: "Filter",
        login: "",
        lat: "38.91368",
        lon: "-77.04509",
        color: "#00FFFF"
      },
      geometry: {
        type: "Point",
        coordinates: [-77.04509, 38.91368]
      }
    },
    {
      type: "Feature",
      properties: {
        place: "Peregrine",
        login: "espresso",
        lat: "38.88516",
        lon: "-76.99656",
        color: "#00FFFF"
      },
      geometry: {
        type: "Point",
        coordinates: [-76.99656, 38.88516]
      }
    },
    {
      type: "Feature",
      properties: {
        place: "Tryst",
        login: "coupetnt",
        lat: "38.921894",
        lon: "-77.042438",
        color: "#00FFFF"
      },
      geometry: {
        type: "Point",
        coordinates: [-77.042438, 38.921894]
      }
    },
    {
      type: "Feature",
      properties: {
        place: "The Coupe",
        login: "voteforus",
        lat: "38.93206",
        lon: "-77.02821",
        color: "#00FFFF"
      },
      geometry: {
        type: "Point",
        coordinates: [-77.02821, 38.93206]
      }
    },
    {
      type: "Feature",
      properties: {
        place: "Big Bear Cafe",
        login: "",
        lat: "38.91275",
        lon: "-77.01239",
        color: "#00FFFF"
      },
      geometry: {
        type: "Point",
        coordinates: [-77.01239, 38.91275]
      }
    }
  ]
};

const darkGeoJson: FeatureCollection<Point, PointProperties> = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        place: "The coffee bar",
        login: "espresso",
        lat: "38.91427",
        lon: "-77.02827",
        color: "#000000"
      },
      geometry: {
        type: "Point",
        coordinates: [-77.02827, 38.91427]
      }
    },
    {
      type: "Feature",
      properties: {
        place: "Bistro Bohem",
        login: "2027355895",
        lat: "38.91538",
        lon: "-77.02013",
        color: "#000000"
      },
      geometry: {
        type: "Point",
        coordinates: [-77.02013, 38.91538]
      }
    },
    {
      type: "Feature",
      properties: {
        place: "Black Cat",
        login: "luckycat",
        lat: "38.91458",
        lon: "-77.03155",
        color: "#000000"
      },
      geometry: {
        type: "Point",
        coordinates: [-77.03155, 38.91458]
      }
    },
    {
      type: "Feature",
      properties: {
        place: "Snap",
        login: "nutella1",
        lat: "38.92239",
        lon: "-77.04227",
        color: "#000000"
      },
      geometry: {
        type: "Point",
        coordinates: [-77.04227, 38.92239]
      }
    },
    {
      type: "Feature",
      properties: {
        place: "Columbia Heights Coffee",
        login: "FAIRTRADE1",
        lat: "38.93222",
        lon: "-77.02854",
        color: "#000000"
      },
      geometry: {
        type: "Point",
        coordinates: [-77.02854, 38.93222]
      }
    },
    {
      type: "Feature",
      properties: {
        place: "Azi's Cafe",
        login: "sunny",
        lat: "38.90842",
        lon: "-77.02419",
        color: "#000000"
      },
      geometry: {
        type: "Point",
        coordinates: [-77.02419, 38.90842]
      }
    },
    {
      type: "Feature",
      properties: {
        place: "Blind Dog Cafe",
        login: "baxtercantsee",
        lat: "38.91931",
        lon: "-77.02518",
        color: "#000000"
      },
      geometry: {
        type: "Point",
        coordinates: [-77.02518, 38.91931]
      }
    },
    {
      type: "Feature",
      properties: {
        place: "Le Caprice",
        login: "baguette",
        lat: "38.93260",
        lon: "-77.03304",
        color: "#000000"
      },
      geometry: {
        type: "Point",
        coordinates: [-77.03304, 38.9326]
      }
    },
    {
      type: "Feature",
      properties: {
        place: "Filter",
        login: "",
        lat: "38.91368",
        lon: "-77.04509",
        color: "#000000"
      },
      geometry: {
        type: "Point",
        coordinates: [-77.04509, 38.91368]
      }
    },
    {
      type: "Feature",
      properties: {
        place: "Peregrine",
        login: "espresso",
        lat: "38.88516",
        lon: "-76.99656",
        color: "#000000"
      },
      geometry: {
        type: "Point",
        coordinates: [-76.99656, 38.88516]
      }
    },
    {
      type: "Feature",
      properties: {
        place: "Tryst",
        login: "coupetnt",
        lat: "38.921894",
        lon: "-77.042438",
        color: "#000000"
      },
      geometry: {
        type: "Point",
        coordinates: [-77.042438, 38.921894]
      }
    },
    {
      type: "Feature",
      properties: {
        place: "The Coupe",
        login: "voteforus",
        lat: "38.93206",
        lon: "-77.02821",
        color: "#000000"
      },
      geometry: {
        type: "Point",
        coordinates: [-77.02821, 38.93206]
      }
    },
    {
      type: "Feature",
      properties: {
        place: "Big Bear Cafe",
        login: "",
        lat: "38.91275",
        lon: "-77.01239",
        color: "#000000"
      },
      geometry: {
        type: "Point",
        coordinates: [-77.01239, 38.91275]
      }
    }
  ]
};

export const LightMapStyle = "light";
export const DarkMapStyle = "dark";

export type MapStyle = typeof LightMapStyle | typeof DarkMapStyle;

export const styleConfig: {
  [K in MapStyle]: {
    url: string;
    geoJson: FeatureCollection<Point, PointProperties>;
  }
} = {
  [LightMapStyle]: {
    url: "mapbox://styles/mapbox/light-v9",
    geoJson: lightGeoJson
  },
  [DarkMapStyle]: {
    url: "mapbox://styles/mapbox/dark-v9",
    geoJson: darkGeoJson
  }
};
