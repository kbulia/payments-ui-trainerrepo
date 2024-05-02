import axios, { AxiosResponse } from "axios"

export type PaymentType =
    {id: number | null,
        amount: number,
        country: string,
        currency: string,
        date: string,
        orderId: string,
        taxCode: number,
        taxRate: number,
        type: string}

const serverUrl : string = import.meta.env.VITE_SERVER_URL;

export const getCountries = () : Promise<AxiosResponse<string[]>> => {
    return axios<string[]>({
        url : `${serverUrl}/api/country`,
        method: "GET",
        headers :  {'Accept': 'application/json'}
    })
}

export const getPaymentsForCountry = (country : string) 
: Promise<AxiosResponse<PaymentType[]>> => {
    return axios<PaymentType[]>({
        url : `${serverUrl}/api/payment?country=${country}`,
        method: "GET",
        headers :  {'Accept': 'application/json'}
    })
}


