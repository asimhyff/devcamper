import NodeGeocoder, { GenericOptions, Geocoder , Options } from 'node-geocoder'

const options: Options = {
    provider: 'mapquest',
    httpAdapter: 'https',
    apiKey: process.env.GEOCODER_API_KEY,
    formatter: null
}

export const geocoder = NodeGeocoder(options)

