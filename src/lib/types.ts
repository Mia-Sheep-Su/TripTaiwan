
export type POI = {
  name: string;
  position: {
    top: string;
    left: string;
  };
  linkToDay: number;
  targetImageIndex?: number;
};

export type ItineraryActivity = {
  name: string;
  description: string;
  image: {
    url: string;
    hint: string;
  };
};

export type ItineraryItem = {
  day: number;
  title: string;
  subtitle: string;
  activities: ItineraryActivity[];
};

export type TourData = {
  name: string;
  theme: string;
  keyVisuals: { url: string; hint: string; name:string;}[];
  map: {
    image: string;
    hint: string;
  };
  pois: POI[];
  itinerary: ItineraryItem[];
};
