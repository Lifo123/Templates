import { atom } from 'nanostores'

export const ExampleStore = atom('Template Store')


//Alert Stores
export const AlertStore = atom({
    text: "Alert",
    type: "none",
})