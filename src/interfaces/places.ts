
export interface PlacesResponse {
    type:        string;
    query:       string[];
    features:    Feature[];
    attribution: string;
}

export interface Feature {
    id:                   string;
    type:                 string;
    place_type:           string[];
    relevance:            number;
    properties:           Properties;
    text_en:              string;
    language_en?:         Language;
    place_name_en:        string;
    text:                 string;
    language?:            Language;
    place_name:           string;
    matching_text?:       string;
    matching_place_name?: string;
    bbox?:                number[];
    center:               number[];
    geometry:             Geometry;
    context?:             Context[];
}

export interface Context {
    id:           string;
    wikidata?:    Wikidata;
    short_code?:  string;
    text_en:      string;
    language_en?: Language;
    text:         string;
    language?:    Language;
}

export enum Language {
    En = "en",
}

export enum Wikidata {
    Q61302 = "Q61302",
    Q655 = "Q655",
    Q96 = "Q96",
}

export interface Geometry {
    type:        string;
    coordinates: number[];
}

export interface Properties {
    wikidata?:   string;
    short_code?: string;
    foursquare?: string;
    landmark?:   boolean;
    category?:   string;
    address?:    string;
}
