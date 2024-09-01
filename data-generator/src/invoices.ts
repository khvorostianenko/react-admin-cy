import type { Db } from './types';

export const generateInvoices = (db: Db): Invoice[] => {
    let id = 0;

    // let result = db.orders
    //     .filter(order => order.status !== 'delivered')
    //     // @ts-ignore
    //     .sort((a, b) => new Date(a.date) - new Date(b.date))
    //     .map(order => ({
    //         id: id++,
    //         date: order.date,
    //         order_id: order.id,
    //         customer_id: order.customer_id,
    //         total_ex_taxes: order.total_ex_taxes,
    //         delivery_fees: order.delivery_fees,
    //         tax_rate: order.tax_rate,
    //         taxes: order.taxes,
    //         total: order.total,
    //     }));
    //
    // console.log(result);

    let result = [
        {
            "id": 0,
            "date": "2021-11-13T06:55:29.422Z",
            "order_id": 52,
            "customer_id": 26,
            "total_ex_taxes": 30.44,
            "delivery_fees": 5.05,
            "tax_rate": 0.17,
            "taxes": 6.03,
            "total": 41.52
        },
        {
            "id": 1,
            "date": "2023-03-28T17:27:14.469Z",
            "order_id": 51,
            "customer_id": 27,
            "total_ex_taxes": 144.45,
            "delivery_fees": 5.2,
            "tax_rate": 0.12,
            "taxes": 17.96,
            "total": 167.61
        },
        {
            "id": 2,
            "date": "2024-01-11T17:01:07.713Z",
            "order_id": 70,
            "customer_id": 76,
            "total_ex_taxes": 37.4,
            "delivery_fees": 4.5,
            "tax_rate": 0.2,
            "taxes": 8.38,
            "total": 50.28
        },
        {
            "id": 3,
            "date": "2024-03-11T20:55:57.245Z",
            "order_id": 58,
            "customer_id": 30,
            "total_ex_taxes": 147.43,
            "delivery_fees": 3.96,
            "tax_rate": 0.12,
            "taxes": 18.17,
            "total": 169.56
        },
        {
            "id": 4,
            "date": "2024-03-30T07:48:19.496Z",
            "order_id": 14,
            "customer_id": 30,
            "total_ex_taxes": 98.27,
            "delivery_fees": 5.82,
            "tax_rate": 0.12,
            "taxes": 12.49,
            "total": 116.58
        },
        {
            "id": 5,
            "date": "2024-04-25T12:23:16.545Z",
            "order_id": 7,
            "customer_id": 5,
            "total_ex_taxes": 62.59,
            "delivery_fees": 5.73,
            "tax_rate": 0.2,
            "taxes": 13.66,
            "total": 81.98
        },
        {
            "id": 6,
            "date": "2024-06-13T23:27:22.202Z",
            "order_id": 5,
            "customer_id": 67,
            "total_ex_taxes": 188.05,
            "delivery_fees": 3.71,
            "tax_rate": 0.17,
            "taxes": 32.6,
            "total": 224.36
        },
        {
            "id": 7,
            "date": "2024-08-24T02:22:06.178Z",
            "order_id": 49,
            "customer_id": 39,
            "total_ex_taxes": 155,
            "delivery_fees": 6.62,
            "tax_rate": 0.12,
            "taxes": 19.39,
            "total": 181.01
        }
    ];

    return result;
};

export type Invoice = {
    id: number;
    date: string;
    order_id: number;
    customer_id: number;
    total_ex_taxes: number;
    delivery_fees: number;
    tax_rate: number;
    taxes: number;
    total: number;
};
