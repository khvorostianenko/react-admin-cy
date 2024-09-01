import { random } from 'faker/locale/en';
import { isAfter, subDays } from 'date-fns';

import {
    randomDate,
    randomFloat,
    weightedArrayElement,
    weightedBoolean,
} from './utils';
import type { Db } from './types';

export const generateOrders = (db: Db): Order[] => {
    // const today = new Date();
    // const aMonthAgo = subDays(today, 30);
    // const realCustomers = db.customers.filter(customer => customer.has_ordered);

    // let result = Array.from(Array(100).keys()).map(id => {
    //     const nbProducts = weightedArrayElement(
    //         [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    //         [30, 20, 5, 2, 1, 1, 1, 1, 1, 1]
    //     );
    //     const basket = Array.from(Array(nbProducts).keys()).map(() => ({
    //         product_id: random.number({ min: 0, max: 10 * 13 - 1 }),
    //         quantity: weightedArrayElement(
    //             [1, 2, 3, 4, 5],
    //             [10, 5, 3, 2, 1]
    //         ) as number,
    //     }));
    //
    //     const total_ex_taxes = basket.reduce(
    //         (total, product) =>
    //             total +
    //             db.products[product.product_id].price * product.quantity,
    //         0
    //     );
    //
    //     const delivery_fees = randomFloat(3, 8);
    //     const tax_rate = random.arrayElement([0.12, 0.17, 0.2]);
    //     const taxes = parseFloat(
    //         ((total_ex_taxes + delivery_fees) * tax_rate).toFixed(2)
    //     );
    //     const customer = random.arrayElement(realCustomers);
    //     const date = randomDate(customer.first_seen, customer.last_seen);
    //
    //     const status: OrderStatus =
    //         isAfter(date, aMonthAgo) && random.boolean()
    //             ? 'ordered'
    //             : weightedArrayElement(['delivered', 'cancelled'], [10, 1]);
    //     return {
    //         id,
    //         reference: random.alphaNumeric(6).toUpperCase(),
    //         date: date.toISOString(),
    //         customer_id: customer.id,
    //         basket: basket,
    //         total_ex_taxes: total_ex_taxes,
    //         delivery_fees: delivery_fees,
    //         tax_rate: tax_rate,
    //         taxes: taxes,
    //         total: parseFloat(
    //             (total_ex_taxes + delivery_fees + taxes).toFixed(2)
    //         ),
    //         status,
    //         returned: status === 'delivered' ? weightedBoolean(10) : false,
    //     };
    // });

    let result: Order[] = [
        {
            "id": 0,
            "reference": "4QMYN7",
            "date": "2022-05-06T18:11:14.612Z",
            "customer_id": 27,
            "basket": [
                {
                    "product_id": 18,
                    "quantity": 1
                },
                {
                    "product_id": 110,
                    "quantity": 3
                }
            ],
            "total_ex_taxes": 238.35999999999999,
            "delivery_fees": 3.04,
            "tax_rate": 0.17,
            "taxes": 41.04,
            "total": 282.44,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 1,
            "reference": "EETTGU",
            "date": "2022-09-09T19:39:23.999Z",
            "customer_id": 26,
            "basket": [
                {
                    "product_id": 6,
                    "quantity": 2
                }
            ],
            "total_ex_taxes": 115.26,
            "delivery_fees": 5.97,
            "tax_rate": 0.2,
            "taxes": 24.25,
            "total": 145.48,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 2,
            "reference": "GMO4VB",
            "date": "2024-02-12T19:21:58.278Z",
            "customer_id": 63,
            "basket": [
                {
                    "product_id": 40,
                    "quantity": 2
                },
                {
                    "product_id": 116,
                    "quantity": 3
                }
            ],
            "total_ex_taxes": 123.19,
            "delivery_fees": 6.71,
            "tax_rate": 0.17,
            "taxes": 22.08,
            "total": 151.98,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 3,
            "reference": "UAD0VM",
            "date": "2023-09-07T14:06:28.847Z",
            "customer_id": 27,
            "basket": [
                {
                    "product_id": 11,
                    "quantity": 1
                }
            ],
            "total_ex_taxes": 52.19,
            "delivery_fees": 4.26,
            "tax_rate": 0.2,
            "taxes": 11.29,
            "total": 67.74,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 4,
            "reference": "49M714",
            "date": "2024-04-04T00:24:29.136Z",
            "customer_id": 30,
            "basket": [
                {
                    "product_id": 97,
                    "quantity": 2
                },
                {
                    "product_id": 75,
                    "quantity": 3
                }
            ],
            "total_ex_taxes": 148.11,
            "delivery_fees": 4.3,
            "tax_rate": 0.17,
            "taxes": 25.91,
            "total": 178.32,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 5,
            "reference": "8QWA92",
            "date": "2024-06-13T23:27:22.202Z",
            "customer_id": 67,
            "basket": [
                {
                    "product_id": 108,
                    "quantity": 1
                },
                {
                    "product_id": 120,
                    "quantity": 5
                },
                {
                    "product_id": 115,
                    "quantity": 1
                }
            ],
            "total_ex_taxes": 188.05,
            "delivery_fees": 3.71,
            "tax_rate": 0.17,
            "taxes": 32.6,
            "total": 224.36,
            "status": "cancelled",
            "returned": false
        },
        {
            "id": 6,
            "reference": "UINSOA",
            "date": "2023-09-28T23:23:02.242Z",
            "customer_id": 49,
            "basket": [
                {
                    "product_id": 22,
                    "quantity": 2
                },
                {
                    "product_id": 8,
                    "quantity": 2
                }
            ],
            "total_ex_taxes": 176.06,
            "delivery_fees": 4.6,
            "tax_rate": 0.12,
            "taxes": 21.68,
            "total": 202.34,
            "status": "delivered",
            "returned": true
        },
        {
            "id": 7,
            "reference": "Z8PA85",
            "date": "2024-04-25T12:23:16.545Z",
            "customer_id": 5,
            "basket": [
                {
                    "product_id": 59,
                    "quantity": 1
                }
            ],
            "total_ex_taxes": 62.59,
            "delivery_fees": 5.73,
            "tax_rate": 0.2,
            "taxes": 13.66,
            "total": 81.98,
            "status": "cancelled",
            "returned": false
        },
        {
            "id": 8,
            "reference": "SW9I3A",
            "date": "2023-05-13T00:21:43.193Z",
            "customer_id": 55,
            "basket": [
                {
                    "product_id": 106,
                    "quantity": 1
                },
                {
                    "product_id": 67,
                    "quantity": 1
                },
                {
                    "product_id": 79,
                    "quantity": 3
                }
            ],
            "total_ex_taxes": 86.78999999999999,
            "delivery_fees": 4.92,
            "tax_rate": 0.12,
            "taxes": 11.01,
            "total": 102.72,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 9,
            "reference": "TXA6ZH",
            "date": "2023-05-01T22:37:53.597Z",
            "customer_id": 72,
            "basket": [
                {
                    "product_id": 32,
                    "quantity": 2
                }
            ],
            "total_ex_taxes": 88.14,
            "delivery_fees": 7.45,
            "tax_rate": 0.2,
            "taxes": 19.12,
            "total": 114.71,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 10,
            "reference": "6L6N67",
            "date": "2023-08-04T23:51:59.015Z",
            "customer_id": 2,
            "basket": [
                {
                    "product_id": 47,
                    "quantity": 1
                },
                {
                    "product_id": 104,
                    "quantity": 3
                }
            ],
            "total_ex_taxes": 210.82999999999998,
            "delivery_fees": 7.55,
            "tax_rate": 0.2,
            "taxes": 43.68,
            "total": 262.06,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 11,
            "reference": "DTNI7C",
            "date": "2024-05-15T10:17:20.280Z",
            "customer_id": 67,
            "basket": [
                {
                    "product_id": 18,
                    "quantity": 3
                }
            ],
            "total_ex_taxes": 70.94999999999999,
            "delivery_fees": 5.66,
            "tax_rate": 0.2,
            "taxes": 15.32,
            "total": 91.93,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 12,
            "reference": "BS7MIZ",
            "date": "2024-04-10T10:19:06.774Z",
            "customer_id": 30,
            "basket": [
                {
                    "product_id": 91,
                    "quantity": 5
                },
                {
                    "product_id": 24,
                    "quantity": 1
                }
            ],
            "total_ex_taxes": 182.98000000000002,
            "delivery_fees": 6.58,
            "tax_rate": 0.17,
            "taxes": 32.23,
            "total": 221.79,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 13,
            "reference": "MYADYX",
            "date": "2023-08-05T17:14:51.183Z",
            "customer_id": 59,
            "basket": [
                {
                    "product_id": 114,
                    "quantity": 4
                },
                {
                    "product_id": 113,
                    "quantity": 1
                },
                {
                    "product_id": 124,
                    "quantity": 1
                },
                {
                    "product_id": 17,
                    "quantity": 1
                },
                {
                    "product_id": 33,
                    "quantity": 3
                },
                {
                    "product_id": 58,
                    "quantity": 1
                },
                {
                    "product_id": 35,
                    "quantity": 1
                }
            ],
            "total_ex_taxes": 269.07000000000005,
            "delivery_fees": 4.6,
            "tax_rate": 0.2,
            "taxes": 54.73,
            "total": 328.4,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 14,
            "reference": "9UEJIP",
            "date": "2024-03-30T07:48:19.496Z",
            "customer_id": 30,
            "basket": [
                {
                    "product_id": 17,
                    "quantity": 2
                },
                {
                    "product_id": 29,
                    "quantity": 1
                }
            ],
            "total_ex_taxes": 98.27,
            "delivery_fees": 5.82,
            "tax_rate": 0.12,
            "taxes": 12.49,
            "total": 116.58,
            "status": "cancelled",
            "returned": false
        },
        {
            "id": 15,
            "reference": "61G2EM",
            "date": "2023-04-13T06:45:48.763Z",
            "customer_id": 84,
            "basket": [
                {
                    "product_id": 109,
                    "quantity": 1
                },
                {
                    "product_id": 57,
                    "quantity": 4
                }
            ],
            "total_ex_taxes": 109.91,
            "delivery_fees": 7.1,
            "tax_rate": 0.17,
            "taxes": 19.89,
            "total": 136.9,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 16,
            "reference": "V4YWH5",
            "date": "2024-07-01T08:29:33.227Z",
            "customer_id": 41,
            "basket": [
                {
                    "product_id": 125,
                    "quantity": 1
                },
                {
                    "product_id": 108,
                    "quantity": 2
                }
            ],
            "total_ex_taxes": 132,
            "delivery_fees": 4.62,
            "tax_rate": 0.17,
            "taxes": 23.23,
            "total": 159.85,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 17,
            "reference": "S20WFJ",
            "date": "2024-04-07T03:48:27.740Z",
            "customer_id": 30,
            "basket": [
                {
                    "product_id": 129,
                    "quantity": 5
                },
                {
                    "product_id": 39,
                    "quantity": 2
                }
            ],
            "total_ex_taxes": 165.6,
            "delivery_fees": 7.71,
            "tax_rate": 0.17,
            "taxes": 29.46,
            "total": 202.77,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 18,
            "reference": "4XWBL4",
            "date": "2024-04-22T09:58:04.793Z",
            "customer_id": 5,
            "basket": [
                {
                    "product_id": 104,
                    "quantity": 1
                },
                {
                    "product_id": 62,
                    "quantity": 1
                }
            ],
            "total_ex_taxes": 105.02,
            "delivery_fees": 5.78,
            "tax_rate": 0.2,
            "taxes": 22.16,
            "total": 132.96,
            "status": "delivered",
            "returned": true
        },
        {
            "id": 19,
            "reference": "JBC6GS",
            "date": "2024-06-04T01:38:36.034Z",
            "customer_id": 67,
            "basket": [
                {
                    "product_id": 111,
                    "quantity": 1
                }
            ],
            "total_ex_taxes": 42.52,
            "delivery_fees": 5.96,
            "tax_rate": 0.2,
            "taxes": 9.7,
            "total": 58.18,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 20,
            "reference": "WI19RB",
            "date": "2023-10-03T10:41:17.016Z",
            "customer_id": 39,
            "basket": [
                {
                    "product_id": 12,
                    "quantity": 1
                }
            ],
            "total_ex_taxes": 48.47,
            "delivery_fees": 3.23,
            "tax_rate": 0.2,
            "taxes": 10.34,
            "total": 62.04,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 21,
            "reference": "ZL9V1D",
            "date": "2024-07-03T04:47:37.923Z",
            "customer_id": 41,
            "basket": [
                {
                    "product_id": 12,
                    "quantity": 5
                }
            ],
            "total_ex_taxes": 242.35,
            "delivery_fees": 7.47,
            "tax_rate": 0.12,
            "taxes": 29.98,
            "total": 279.8,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 22,
            "reference": "2T95RK",
            "date": "2024-05-06T13:32:11.100Z",
            "customer_id": 5,
            "basket": [
                {
                    "product_id": 29,
                    "quantity": 3
                },
                {
                    "product_id": 0,
                    "quantity": 4
                }
            ],
            "total_ex_taxes": 319.01,
            "delivery_fees": 4.77,
            "tax_rate": 0.2,
            "taxes": 64.76,
            "total": 388.54,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 23,
            "reference": "BBMYR7",
            "date": "2022-10-03T12:29:56.730Z",
            "customer_id": 77,
            "basket": [
                {
                    "product_id": 94,
                    "quantity": 1
                }
            ],
            "total_ex_taxes": 11.86,
            "delivery_fees": 4.78,
            "tax_rate": 0.2,
            "taxes": 3.33,
            "total": 19.97,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 24,
            "reference": "7AOWMW",
            "date": "2023-06-15T12:52:45.887Z",
            "customer_id": 0,
            "basket": [
                {
                    "product_id": 58,
                    "quantity": 1
                }
            ],
            "total_ex_taxes": 17.42,
            "delivery_fees": 6.13,
            "tax_rate": 0.17,
            "taxes": 4,
            "total": 27.55,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 25,
            "reference": "FZ23JU",
            "date": "2024-03-12T05:51:11.523Z",
            "customer_id": 30,
            "basket": [
                {
                    "product_id": 65,
                    "quantity": 2
                },
                {
                    "product_id": 10,
                    "quantity": 1
                }
            ],
            "total_ex_taxes": 110.39,
            "delivery_fees": 7.97,
            "tax_rate": 0.12,
            "taxes": 14.2,
            "total": 132.56,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 26,
            "reference": "GDB7XZ",
            "date": "2023-10-26T08:45:44.081Z",
            "customer_id": 59,
            "basket": [
                {
                    "product_id": 99,
                    "quantity": 1
                },
                {
                    "product_id": 79,
                    "quantity": 1
                },
                {
                    "product_id": 72,
                    "quantity": 4
                }
            ],
            "total_ex_taxes": 161.94,
            "delivery_fees": 3.15,
            "tax_rate": 0.2,
            "taxes": 33.02,
            "total": 198.11,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 27,
            "reference": "F7Z2YC",
            "date": "2023-06-29T20:33:53.195Z",
            "customer_id": 76,
            "basket": [
                {
                    "product_id": 46,
                    "quantity": 2
                },
                {
                    "product_id": 64,
                    "quantity": 2
                }
            ],
            "total_ex_taxes": 145.5,
            "delivery_fees": 5.86,
            "tax_rate": 0.2,
            "taxes": 30.27,
            "total": 181.63,
            "status": "delivered",
            "returned": true
        },
        {
            "id": 28,
            "reference": "9C2PQJ",
            "date": "2023-02-25T06:20:05.847Z",
            "customer_id": 72,
            "basket": [
                {
                    "product_id": 31,
                    "quantity": 2
                },
                {
                    "product_id": 83,
                    "quantity": 1
                }
            ],
            "total_ex_taxes": 129.04,
            "delivery_fees": 5.84,
            "tax_rate": 0.17,
            "taxes": 22.93,
            "total": 157.81,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 29,
            "reference": "64BYSQ",
            "date": "2022-12-25T09:46:30.348Z",
            "customer_id": 84,
            "basket": [
                {
                    "product_id": 118,
                    "quantity": 2
                },
                {
                    "product_id": 58,
                    "quantity": 1
                },
                {
                    "product_id": 62,
                    "quantity": 5
                },
                {
                    "product_id": 18,
                    "quantity": 3
                },
                {
                    "product_id": 64,
                    "quantity": 3
                }
            ],
            "total_ex_taxes": 622.83,
            "delivery_fees": 7.26,
            "tax_rate": 0.2,
            "taxes": 126.02,
            "total": 756.11,
            "status": "delivered",
            "returned": true
        },
        {
            "id": 30,
            "reference": "0MED6Y",
            "date": "2024-04-26T19:53:52.149Z",
            "customer_id": 5,
            "basket": [
                {
                    "product_id": 46,
                    "quantity": 3
                },
                {
                    "product_id": 1,
                    "quantity": 2
                }
            ],
            "total_ex_taxes": 107,
            "delivery_fees": 5.17,
            "tax_rate": 0.2,
            "taxes": 22.43,
            "total": 134.6,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 31,
            "reference": "Z7NARG",
            "date": "2022-12-31T00:51:14.146Z",
            "customer_id": 7,
            "basket": [
                {
                    "product_id": 53,
                    "quantity": 1
                },
                {
                    "product_id": 14,
                    "quantity": 1
                },
                {
                    "product_id": 127,
                    "quantity": 4
                }
            ],
            "total_ex_taxes": 178.76,
            "delivery_fees": 6.29,
            "tax_rate": 0.17,
            "taxes": 31.46,
            "total": 216.51,
            "status": "delivered",
            "returned": true
        },
        {
            "id": 32,
            "reference": "PPUI0W",
            "date": "2023-11-03T01:18:16.075Z",
            "customer_id": 2,
            "basket": [
                {
                    "product_id": 97,
                    "quantity": 3
                },
                {
                    "product_id": 67,
                    "quantity": 3
                },
                {
                    "product_id": 4,
                    "quantity": 2
                }
            ],
            "total_ex_taxes": 167.17,
            "delivery_fees": 8,
            "tax_rate": 0.17,
            "taxes": 29.78,
            "total": 204.95,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 33,
            "reference": "ECH044",
            "date": "2023-03-01T00:33:18.253Z",
            "customer_id": 7,
            "basket": [
                {
                    "product_id": 53,
                    "quantity": 1
                },
                {
                    "product_id": 56,
                    "quantity": 1
                },
                {
                    "product_id": 45,
                    "quantity": 1
                }
            ],
            "total_ex_taxes": 85.97,
            "delivery_fees": 4.16,
            "tax_rate": 0.17,
            "taxes": 15.32,
            "total": 105.45,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 34,
            "reference": "BM6OJ1",
            "date": "2024-05-23T18:32:32.581Z",
            "customer_id": 95,
            "basket": [
                {
                    "product_id": 40,
                    "quantity": 1
                },
                {
                    "product_id": 108,
                    "quantity": 2
                }
            ],
            "total_ex_taxes": 89.1,
            "delivery_fees": 5.39,
            "tax_rate": 0.17,
            "taxes": 16.06,
            "total": 110.55,
            "status": "delivered",
            "returned": true
        },
        {
            "id": 35,
            "reference": "WKIHWI",
            "date": "2024-06-01T07:15:59.085Z",
            "customer_id": 95,
            "basket": [
                {
                    "product_id": 76,
                    "quantity": 1
                }
            ],
            "total_ex_taxes": 86.69,
            "delivery_fees": 6.19,
            "tax_rate": 0.12,
            "taxes": 11.15,
            "total": 104.03,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 36,
            "reference": "UENQZ0",
            "date": "2024-03-20T04:22:45.874Z",
            "customer_id": 30,
            "basket": [
                {
                    "product_id": 7,
                    "quantity": 4
                },
                {
                    "product_id": 2,
                    "quantity": 1
                }
            ],
            "total_ex_taxes": 132.92000000000002,
            "delivery_fees": 6.34,
            "tax_rate": 0.17,
            "taxes": 23.67,
            "total": 162.93,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 37,
            "reference": "KQJL3H",
            "date": "2024-04-24T08:40:16.261Z",
            "customer_id": 5,
            "basket": [
                {
                    "product_id": 12,
                    "quantity": 1
                },
                {
                    "product_id": 94,
                    "quantity": 1
                }
            ],
            "total_ex_taxes": 60.33,
            "delivery_fees": 4.14,
            "tax_rate": 0.17,
            "taxes": 10.96,
            "total": 75.43,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 38,
            "reference": "54WDXJ",
            "date": "2024-05-08T15:31:15.447Z",
            "customer_id": 5,
            "basket": [
                {
                    "product_id": 55,
                    "quantity": 1
                }
            ],
            "total_ex_taxes": 17.45,
            "delivery_fees": 5.26,
            "tax_rate": 0.2,
            "taxes": 4.54,
            "total": 27.25,
            "status": "delivered",
            "returned": true
        },
        {
            "id": 39,
            "reference": "AVSABM",
            "date": "2022-12-22T08:52:53.368Z",
            "customer_id": 26,
            "basket": [
                {
                    "product_id": 85,
                    "quantity": 1
                }
            ],
            "total_ex_taxes": 34.88,
            "delivery_fees": 6.91,
            "tax_rate": 0.2,
            "taxes": 8.36,
            "total": 50.15,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 40,
            "reference": "PD9ZF3",
            "date": "2023-03-19T22:59:42.035Z",
            "customer_id": 7,
            "basket": [
                {
                    "product_id": 27,
                    "quantity": 3
                },
                {
                    "product_id": 87,
                    "quantity": 4
                },
                {
                    "product_id": 59,
                    "quantity": 1
                },
                {
                    "product_id": 84,
                    "quantity": 1
                }
            ],
            "total_ex_taxes": 335.48,
            "delivery_fees": 4.8,
            "tax_rate": 0.2,
            "taxes": 68.06,
            "total": 408.34,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 41,
            "reference": "HLK50W",
            "date": "2024-07-09T17:30:16.353Z",
            "customer_id": 80,
            "basket": [
                {
                    "product_id": 49,
                    "quantity": 1
                },
                {
                    "product_id": 58,
                    "quantity": 2
                }
            ],
            "total_ex_taxes": 75.97,
            "delivery_fees": 6.39,
            "tax_rate": 0.12,
            "taxes": 9.88,
            "total": 92.24,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 42,
            "reference": "21YUNV",
            "date": "2022-12-13T12:48:11.914Z",
            "customer_id": 26,
            "basket": [
                {
                    "product_id": 125,
                    "quantity": 3
                },
                {
                    "product_id": 3,
                    "quantity": 1
                }
            ],
            "total_ex_taxes": 201.39000000000001,
            "delivery_fees": 6.38,
            "tax_rate": 0.2,
            "taxes": 41.55,
            "total": 249.32,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 43,
            "reference": "U3G0R7",
            "date": "2023-02-08T05:00:12.696Z",
            "customer_id": 39,
            "basket": [
                {
                    "product_id": 27,
                    "quantity": 1
                },
                {
                    "product_id": 35,
                    "quantity": 1
                },
                {
                    "product_id": 48,
                    "quantity": 1
                }
            ],
            "total_ex_taxes": 72.65,
            "delivery_fees": 7.31,
            "tax_rate": 0.2,
            "taxes": 15.99,
            "total": 95.95,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 44,
            "reference": "EZCYQ1",
            "date": "2024-05-01T21:10:05.948Z",
            "customer_id": 30,
            "basket": [
                {
                    "product_id": 42,
                    "quantity": 4
                },
                {
                    "product_id": 33,
                    "quantity": 2
                }
            ],
            "total_ex_taxes": 204.06,
            "delivery_fees": 8,
            "tax_rate": 0.2,
            "taxes": 42.41,
            "total": 254.47,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 45,
            "reference": "0O24Y8",
            "date": "2023-06-30T19:27:50.243Z",
            "customer_id": 72,
            "basket": [
                {
                    "product_id": 60,
                    "quantity": 2
                }
            ],
            "total_ex_taxes": 72.62,
            "delivery_fees": 4.38,
            "tax_rate": 0.12,
            "taxes": 9.24,
            "total": 86.24,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 46,
            "reference": "05Y8AN",
            "date": "2024-05-27T18:23:00.276Z",
            "customer_id": 5,
            "basket": [
                {
                    "product_id": 115,
                    "quantity": 1
                },
                {
                    "product_id": 20,
                    "quantity": 2
                }
            ],
            "total_ex_taxes": 54.55,
            "delivery_fees": 6.71,
            "tax_rate": 0.2,
            "taxes": 12.25,
            "total": 73.51,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 47,
            "reference": "32IPRC",
            "date": "2024-01-25T01:51:23.001Z",
            "customer_id": 2,
            "basket": [
                {
                    "product_id": 12,
                    "quantity": 2
                },
                {
                    "product_id": 20,
                    "quantity": 1
                }
            ],
            "total_ex_taxes": 108.44,
            "delivery_fees": 3.1,
            "tax_rate": 0.17,
            "taxes": 18.96,
            "total": 130.5,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 48,
            "reference": "XB8SRI",
            "date": "2022-09-29T07:40:26.909Z",
            "customer_id": 77,
            "basket": [
                {
                    "product_id": 49,
                    "quantity": 3
                },
                {
                    "product_id": 72,
                    "quantity": 2
                },
                {
                    "product_id": 115,
                    "quantity": 2
                }
            ],
            "total_ex_taxes": 251.45000000000002,
            "delivery_fees": 4.96,
            "tax_rate": 0.17,
            "taxes": 43.59,
            "total": 300,
            "status": "delivered",
            "returned": true
        },
        {
            "id": 49,
            "reference": "F26EDI",
            "date": "2024-08-24T02:22:06.178Z",
            "customer_id": 39,
            "basket": [
                {
                    "product_id": 51,
                    "quantity": 4
                }
            ],
            "total_ex_taxes": 155,
            "delivery_fees": 6.62,
            "tax_rate": 0.12,
            "taxes": 19.39,
            "total": 181.01,
            "status": "ordered",
            "returned": false
        },
        {
            "id": 50,
            "reference": "TAV93N",
            "date": "2022-12-21T07:16:48.366Z",
            "customer_id": 26,
            "basket": [
                {
                    "product_id": 74,
                    "quantity": 1
                },
                {
                    "product_id": 110,
                    "quantity": 1
                }
            ],
            "total_ex_taxes": 93.58,
            "delivery_fees": 5.26,
            "tax_rate": 0.2,
            "taxes": 19.77,
            "total": 118.61,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 51,
            "reference": "LVYSX6",
            "date": "2023-03-28T17:27:14.469Z",
            "customer_id": 27,
            "basket": [
                {
                    "product_id": 45,
                    "quantity": 4
                },
                {
                    "product_id": 117,
                    "quantity": 1
                }
            ],
            "total_ex_taxes": 144.45,
            "delivery_fees": 5.2,
            "tax_rate": 0.12,
            "taxes": 17.96,
            "total": 167.61,
            "status": "cancelled",
            "returned": false
        },
        {
            "id": 52,
            "reference": "R02HJ7",
            "date": "2021-11-13T06:55:29.422Z",
            "customer_id": 26,
            "basket": [
                {
                    "product_id": 2,
                    "quantity": 1
                }
            ],
            "total_ex_taxes": 30.44,
            "delivery_fees": 5.05,
            "tax_rate": 0.17,
            "taxes": 6.03,
            "total": 41.52,
            "status": "cancelled",
            "returned": false
        },
        {
            "id": 53,
            "reference": "0660IR",
            "date": "2024-04-30T07:49:12.454Z",
            "customer_id": 76,
            "basket": [
                {
                    "product_id": 72,
                    "quantity": 3
                }
            ],
            "total_ex_taxes": 97.44,
            "delivery_fees": 6.53,
            "tax_rate": 0.17,
            "taxes": 17.67,
            "total": 121.64,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 54,
            "reference": "9OX5VE",
            "date": "2023-02-20T23:34:45.592Z",
            "customer_id": 26,
            "basket": [
                {
                    "product_id": 51,
                    "quantity": 1
                }
            ],
            "total_ex_taxes": 38.75,
            "delivery_fees": 6.55,
            "tax_rate": 0.2,
            "taxes": 9.06,
            "total": 54.36,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 55,
            "reference": "9B3UXS",
            "date": "2024-01-15T00:22:03.346Z",
            "customer_id": 55,
            "basket": [
                {
                    "product_id": 90,
                    "quantity": 1
                }
            ],
            "total_ex_taxes": 35.97,
            "delivery_fees": 4.79,
            "tax_rate": 0.2,
            "taxes": 8.15,
            "total": 48.91,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 56,
            "reference": "HAFW7D",
            "date": "2023-02-14T16:09:32.784Z",
            "customer_id": 55,
            "basket": [
                {
                    "product_id": 40,
                    "quantity": 4
                },
                {
                    "product_id": 96,
                    "quantity": 2
                }
            ],
            "total_ex_taxes": 154.57999999999998,
            "delivery_fees": 4.6,
            "tax_rate": 0.12,
            "taxes": 19.1,
            "total": 178.28,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 57,
            "reference": "V4AWXQ",
            "date": "2024-04-20T04:32:06.866Z",
            "customer_id": 80,
            "basket": [
                {
                    "product_id": 105,
                    "quantity": 3
                },
                {
                    "product_id": 120,
                    "quantity": 1
                },
                {
                    "product_id": 90,
                    "quantity": 1
                },
                {
                    "product_id": 80,
                    "quantity": 1
                }
            ],
            "total_ex_taxes": 247.95999999999998,
            "delivery_fees": 4.57,
            "tax_rate": 0.12,
            "taxes": 30.3,
            "total": 282.83,
            "status": "delivered",
            "returned": true
        },
        {
            "id": 58,
            "reference": "ICHAOU",
            "date": "2024-03-11T20:55:57.245Z",
            "customer_id": 30,
            "basket": [
                {
                    "product_id": 41,
                    "quantity": 1
                },
                {
                    "product_id": 73,
                    "quantity": 5
                }
            ],
            "total_ex_taxes": 147.43,
            "delivery_fees": 3.96,
            "tax_rate": 0.12,
            "taxes": 18.17,
            "total": 169.56,
            "status": "cancelled",
            "returned": false
        },
        {
            "id": 59,
            "reference": "37K2B4",
            "date": "2023-03-28T17:28:54.442Z",
            "customer_id": 84,
            "basket": [
                {
                    "product_id": 22,
                    "quantity": 1
                },
                {
                    "product_id": 8,
                    "quantity": 1
                }
            ],
            "total_ex_taxes": 88.03,
            "delivery_fees": 3.25,
            "tax_rate": 0.12,
            "taxes": 10.95,
            "total": 102.23,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 60,
            "reference": "O01NI3",
            "date": "2024-01-17T00:39:54.905Z",
            "customer_id": 63,
            "basket": [
                {
                    "product_id": 93,
                    "quantity": 3
                },
                {
                    "product_id": 7,
                    "quantity": 2
                }
            ],
            "total_ex_taxes": 102.33000000000001,
            "delivery_fees": 3.3,
            "tax_rate": 0.12,
            "taxes": 12.68,
            "total": 118.31,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 61,
            "reference": "6O1U57",
            "date": "2024-05-22T09:20:44.349Z",
            "customer_id": 95,
            "basket": [
                {
                    "product_id": 98,
                    "quantity": 3
                },
                {
                    "product_id": 9,
                    "quantity": 1
                }
            ],
            "total_ex_taxes": 122.28999999999999,
            "delivery_fees": 4.08,
            "tax_rate": 0.12,
            "taxes": 15.16,
            "total": 141.53,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 62,
            "reference": "6E6FEC",
            "date": "2023-07-16T04:54:53.465Z",
            "customer_id": 39,
            "basket": [
                {
                    "product_id": 70,
                    "quantity": 3
                }
            ],
            "total_ex_taxes": 173.91,
            "delivery_fees": 5.75,
            "tax_rate": 0.17,
            "taxes": 30.54,
            "total": 210.2,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 63,
            "reference": "WTY5CL",
            "date": "2024-03-11T17:19:29.651Z",
            "customer_id": 63,
            "basket": [
                {
                    "product_id": 95,
                    "quantity": 1
                },
                {
                    "product_id": 37,
                    "quantity": 3
                }
            ],
            "total_ex_taxes": 177.14000000000001,
            "delivery_fees": 5.05,
            "tax_rate": 0.2,
            "taxes": 36.44,
            "total": 218.63,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 64,
            "reference": "YSBI41",
            "date": "2023-06-05T12:49:10.084Z",
            "customer_id": 2,
            "basket": [
                {
                    "product_id": 94,
                    "quantity": 2
                }
            ],
            "total_ex_taxes": 23.72,
            "delivery_fees": 4.01,
            "tax_rate": 0.17,
            "taxes": 4.71,
            "total": 32.44,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 65,
            "reference": "03J4J2",
            "date": "2023-07-30T07:41:25.135Z",
            "customer_id": 55,
            "basket": [
                {
                    "product_id": 58,
                    "quantity": 1
                },
                {
                    "product_id": 64,
                    "quantity": 1
                }
            ],
            "total_ex_taxes": 71.35,
            "delivery_fees": 4.63,
            "tax_rate": 0.17,
            "taxes": 12.92,
            "total": 88.9,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 66,
            "reference": "WAP43G",
            "date": "2023-03-03T17:22:39.002Z",
            "customer_id": 7,
            "basket": [
                {
                    "product_id": 1,
                    "quantity": 1
                },
                {
                    "product_id": 107,
                    "quantity": 1
                }
            ],
            "total_ex_taxes": 66.53,
            "delivery_fees": 3.17,
            "tax_rate": 0.2,
            "taxes": 13.94,
            "total": 83.64,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 67,
            "reference": "8SUV3A",
            "date": "2022-09-16T21:57:35.926Z",
            "customer_id": 84,
            "basket": [
                {
                    "product_id": 95,
                    "quantity": 1
                }
            ],
            "total_ex_taxes": 29.18,
            "delivery_fees": 7.97,
            "tax_rate": 0.2,
            "taxes": 7.43,
            "total": 44.58,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 68,
            "reference": "UYZ290",
            "date": "2024-05-16T03:23:54.347Z",
            "customer_id": 67,
            "basket": [
                {
                    "product_id": 56,
                    "quantity": 1
                },
                {
                    "product_id": 128,
                    "quantity": 1
                },
                {
                    "product_id": 47,
                    "quantity": 4
                }
            ],
            "total_ex_taxes": 199.06,
            "delivery_fees": 6.17,
            "tax_rate": 0.2,
            "taxes": 41.05,
            "total": 246.28,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 69,
            "reference": "TMLZB4",
            "date": "2023-08-16T23:14:55.057Z",
            "customer_id": 27,
            "basket": [
                {
                    "product_id": 46,
                    "quantity": 1
                }
            ],
            "total_ex_taxes": 18.82,
            "delivery_fees": 6.18,
            "tax_rate": 0.12,
            "taxes": 3,
            "total": 28,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 70,
            "reference": "QSDI82",
            "date": "2024-01-11T17:01:07.713Z",
            "customer_id": 76,
            "basket": [
                {
                    "product_id": 108,
                    "quantity": 1
                }
            ],
            "total_ex_taxes": 37.4,
            "delivery_fees": 4.5,
            "tax_rate": 0.2,
            "taxes": 8.38,
            "total": 50.28,
            "status": "cancelled",
            "returned": false
        },
        {
            "id": 71,
            "reference": "2LXJJY",
            "date": "2023-02-05T12:02:06.966Z",
            "customer_id": 77,
            "basket": [
                {
                    "product_id": 96,
                    "quantity": 1
                }
            ],
            "total_ex_taxes": 48.69,
            "delivery_fees": 5.41,
            "tax_rate": 0.12,
            "taxes": 6.49,
            "total": 60.59,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 72,
            "reference": "BCT5IW",
            "date": "2022-07-27T14:55:28.023Z",
            "customer_id": 84,
            "basket": [
                {
                    "product_id": 108,
                    "quantity": 1
                },
                {
                    "product_id": 121,
                    "quantity": 1
                },
                {
                    "product_id": 67,
                    "quantity": 2
                }
            ],
            "total_ex_taxes": 134.81,
            "delivery_fees": 6.22,
            "tax_rate": 0.2,
            "taxes": 28.21,
            "total": 169.24,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 73,
            "reference": "659BIK",
            "date": "2024-05-13T00:26:39.897Z",
            "customer_id": 80,
            "basket": [
                {
                    "product_id": 86,
                    "quantity": 1
                },
                {
                    "product_id": 11,
                    "quantity": 1
                }
            ],
            "total_ex_taxes": 105.27,
            "delivery_fees": 4.09,
            "tax_rate": 0.2,
            "taxes": 21.87,
            "total": 131.23,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 74,
            "reference": "G0OT1O",
            "date": "2024-06-29T18:19:50.672Z",
            "customer_id": 41,
            "basket": [
                {
                    "product_id": 109,
                    "quantity": 1
                }
            ],
            "total_ex_taxes": 34.19,
            "delivery_fees": 5.25,
            "tax_rate": 0.17,
            "taxes": 6.7,
            "total": 46.14,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 75,
            "reference": "BSU761",
            "date": "2024-04-06T23:11:20.474Z",
            "customer_id": 5,
            "basket": [
                {
                    "product_id": 118,
                    "quantity": 1
                }
            ],
            "total_ex_taxes": 66.31,
            "delivery_fees": 6,
            "tax_rate": 0.17,
            "taxes": 12.29,
            "total": 84.6,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 76,
            "reference": "ZHT3W2",
            "date": "2023-06-12T14:50:02.533Z",
            "customer_id": 94,
            "basket": [
                {
                    "product_id": 35,
                    "quantity": 2
                },
                {
                    "product_id": 112,
                    "quantity": 1
                }
            ],
            "total_ex_taxes": 30.88,
            "delivery_fees": 3.18,
            "tax_rate": 0.2,
            "taxes": 6.81,
            "total": 40.87,
            "status": "delivered",
            "returned": true
        },
        {
            "id": 77,
            "reference": "V7HY9H",
            "date": "2021-07-29T01:19:21.976Z",
            "customer_id": 27,
            "basket": [
                {
                    "product_id": 40,
                    "quantity": 1
                },
                {
                    "product_id": 61,
                    "quantity": 1
                }
            ],
            "total_ex_taxes": 49.760000000000005,
            "delivery_fees": 7.54,
            "tax_rate": 0.2,
            "taxes": 11.46,
            "total": 68.76,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 78,
            "reference": "NH761A",
            "date": "2024-06-04T19:17:44.067Z",
            "customer_id": 67,
            "basket": [
                {
                    "product_id": 89,
                    "quantity": 1
                }
            ],
            "total_ex_taxes": 54.02,
            "delivery_fees": 6.69,
            "tax_rate": 0.17,
            "taxes": 10.32,
            "total": 71.03,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 79,
            "reference": "KCCEWG",
            "date": "2023-02-04T13:10:12.157Z",
            "customer_id": 55,
            "basket": [
                {
                    "product_id": 1,
                    "quantity": 5
                }
            ],
            "total_ex_taxes": 126.35,
            "delivery_fees": 5.01,
            "tax_rate": 0.12,
            "taxes": 15.76,
            "total": 147.12,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 80,
            "reference": "1Y2P46",
            "date": "2023-04-09T16:50:20.079Z",
            "customer_id": 2,
            "basket": [
                {
                    "product_id": 74,
                    "quantity": 1
                },
                {
                    "product_id": 127,
                    "quantity": 1
                },
                {
                    "product_id": 36,
                    "quantity": 1
                }
            ],
            "total_ex_taxes": 77.15,
            "delivery_fees": 6.22,
            "tax_rate": 0.17,
            "taxes": 14.17,
            "total": 97.54,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 81,
            "reference": "H4TOQ8",
            "date": "2024-03-15T08:35:11.556Z",
            "customer_id": 30,
            "basket": [
                {
                    "product_id": 0,
                    "quantity": 3
                }
            ],
            "total_ex_taxes": 128.57999999999998,
            "delivery_fees": 4.47,
            "tax_rate": 0.17,
            "taxes": 22.62,
            "total": 155.67,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 82,
            "reference": "ERQ8EL",
            "date": "2024-02-24T03:38:16.350Z",
            "customer_id": 27,
            "basket": [
                {
                    "product_id": 63,
                    "quantity": 2
                }
            ],
            "total_ex_taxes": 145.4,
            "delivery_fees": 3.12,
            "tax_rate": 0.12,
            "taxes": 17.82,
            "total": 166.34,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 83,
            "reference": "SJPTOM",
            "date": "2023-02-06T10:40:17.336Z",
            "customer_id": 55,
            "basket": [
                {
                    "product_id": 25,
                    "quantity": 4
                },
                {
                    "product_id": 127,
                    "quantity": 1
                }
            ],
            "total_ex_taxes": 67.72,
            "delivery_fees": 6.66,
            "tax_rate": 0.17,
            "taxes": 12.64,
            "total": 87.02,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 84,
            "reference": "DHIWED",
            "date": "2023-07-21T01:54:53.684Z",
            "customer_id": 0,
            "basket": [
                {
                    "product_id": 70,
                    "quantity": 2
                }
            ],
            "total_ex_taxes": 115.94,
            "delivery_fees": 5.2,
            "tax_rate": 0.17,
            "taxes": 20.59,
            "total": 141.73,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 85,
            "reference": "ZCGMCG",
            "date": "2022-06-11T05:51:11.047Z",
            "customer_id": 26,
            "basket": [
                {
                    "product_id": 47,
                    "quantity": 1
                },
                {
                    "product_id": 107,
                    "quantity": 1
                }
            ],
            "total_ex_taxes": 81.06,
            "delivery_fees": 5.38,
            "tax_rate": 0.17,
            "taxes": 14.69,
            "total": 101.13,
            "status": "delivered",
            "returned": true
        },
        {
            "id": 86,
            "reference": "HCZ2CF",
            "date": "2024-06-01T01:39:20.355Z",
            "customer_id": 5,
            "basket": [
                {
                    "product_id": 91,
                    "quantity": 3
                }
            ],
            "total_ex_taxes": 65.94,
            "delivery_fees": 5.43,
            "tax_rate": 0.2,
            "taxes": 14.27,
            "total": 85.64,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 87,
            "reference": "CCIYOW",
            "date": "2024-03-19T18:16:15.534Z",
            "customer_id": 30,
            "basket": [
                {
                    "product_id": 113,
                    "quantity": 2
                },
                {
                    "product_id": 56,
                    "quantity": 2
                }
            ],
            "total_ex_taxes": 113.58000000000001,
            "delivery_fees": 6.54,
            "tax_rate": 0.2,
            "taxes": 24.02,
            "total": 144.14,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 88,
            "reference": "DE48Z5",
            "date": "2024-03-07T07:00:26.460Z",
            "customer_id": 30,
            "basket": [
                {
                    "product_id": 29,
                    "quantity": 2
                }
            ],
            "total_ex_taxes": 98.38,
            "delivery_fees": 5.43,
            "tax_rate": 0.2,
            "taxes": 20.76,
            "total": 124.57,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 89,
            "reference": "5E1T0A",
            "date": "2024-03-15T14:55:48.481Z",
            "customer_id": 76,
            "basket": [
                {
                    "product_id": 71,
                    "quantity": 1
                },
                {
                    "product_id": 63,
                    "quantity": 1
                },
                {
                    "product_id": 73,
                    "quantity": 2
                },
                {
                    "product_id": 36,
                    "quantity": 1
                }
            ],
            "total_ex_taxes": 162.68,
            "delivery_fees": 7.3,
            "tax_rate": 0.2,
            "taxes": 34,
            "total": 203.98,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 90,
            "reference": "FKY140",
            "date": "2023-09-13T11:19:12.466Z",
            "customer_id": 39,
            "basket": [
                {
                    "product_id": 69,
                    "quantity": 1
                },
                {
                    "product_id": 79,
                    "quantity": 1
                },
                {
                    "product_id": 98,
                    "quantity": 1
                }
            ],
            "total_ex_taxes": 120.19,
            "delivery_fees": 4.84,
            "tax_rate": 0.17,
            "taxes": 21.26,
            "total": 146.29,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 91,
            "reference": "HIP3BE",
            "date": "2022-08-01T21:00:35.257Z",
            "customer_id": 27,
            "basket": [
                {
                    "product_id": 122,
                    "quantity": 3
                }
            ],
            "total_ex_taxes": 109.59,
            "delivery_fees": 7.96,
            "tax_rate": 0.12,
            "taxes": 14.11,
            "total": 131.66,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 92,
            "reference": "5HCRQA",
            "date": "2023-11-22T03:42:12.260Z",
            "customer_id": 2,
            "basket": [
                {
                    "product_id": 77,
                    "quantity": 2
                },
                {
                    "product_id": 50,
                    "quantity": 1
                },
                {
                    "product_id": 16,
                    "quantity": 1
                },
                {
                    "product_id": 109,
                    "quantity": 1
                },
                {
                    "product_id": 92,
                    "quantity": 4
                },
                {
                    "product_id": 28,
                    "quantity": 1
                },
                {
                    "product_id": 91,
                    "quantity": 3
                },
                {
                    "product_id": 119,
                    "quantity": 1
                }
            ],
            "total_ex_taxes": 328.43,
            "delivery_fees": 3.51,
            "tax_rate": 0.12,
            "taxes": 39.83,
            "total": 371.77,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 93,
            "reference": "795WNO",
            "date": "2024-01-22T01:53:51.644Z",
            "customer_id": 49,
            "basket": [
                {
                    "product_id": 27,
                    "quantity": 4
                },
                {
                    "product_id": 59,
                    "quantity": 4
                }
            ],
            "total_ex_taxes": 435.8,
            "delivery_fees": 6.45,
            "tax_rate": 0.2,
            "taxes": 88.45,
            "total": 530.7,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 94,
            "reference": "Q67HY6",
            "date": "2023-07-25T19:39:05.622Z",
            "customer_id": 59,
            "basket": [
                {
                    "product_id": 92,
                    "quantity": 1
                },
                {
                    "product_id": 12,
                    "quantity": 5
                },
                {
                    "product_id": 92,
                    "quantity": 4
                },
                {
                    "product_id": 33,
                    "quantity": 1
                }
            ],
            "total_ex_taxes": 378.43999999999994,
            "delivery_fees": 6.46,
            "tax_rate": 0.17,
            "taxes": 65.43,
            "total": 450.33,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 95,
            "reference": "VG0TPH",
            "date": "2024-04-30T00:18:20.880Z",
            "customer_id": 30,
            "basket": [
                {
                    "product_id": 127,
                    "quantity": 5
                },
                {
                    "product_id": 56,
                    "quantity": 3
                }
            ],
            "total_ex_taxes": 203.31,
            "delivery_fees": 6.63,
            "tax_rate": 0.17,
            "taxes": 35.69,
            "total": 245.63,
            "status": "delivered",
            "returned": true
        },
        {
            "id": 96,
            "reference": "JPMBYW",
            "date": "2023-09-23T21:36:08.282Z",
            "customer_id": 49,
            "basket": [
                {
                    "product_id": 121,
                    "quantity": 4
                },
                {
                    "product_id": 75,
                    "quantity": 1
                },
                {
                    "product_id": 113,
                    "quantity": 1
                },
                {
                    "product_id": 93,
                    "quantity": 1
                },
                {
                    "product_id": 76,
                    "quantity": 2
                },
                {
                    "product_id": 37,
                    "quantity": 3
                }
            ],
            "total_ex_taxes": 622.32,
            "delivery_fees": 7.32,
            "tax_rate": 0.12,
            "taxes": 75.56,
            "total": 705.2,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 97,
            "reference": "BS4179",
            "date": "2024-05-02T23:43:36.618Z",
            "customer_id": 63,
            "basket": [
                {
                    "product_id": 7,
                    "quantity": 1
                }
            ],
            "total_ex_taxes": 25.62,
            "delivery_fees": 7.27,
            "tax_rate": 0.2,
            "taxes": 6.58,
            "total": 39.47,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 98,
            "reference": "7FJ9D5",
            "date": "2023-11-28T15:35:53.845Z",
            "customer_id": 27,
            "basket": [
                {
                    "product_id": 113,
                    "quantity": 3
                },
                {
                    "product_id": 59,
                    "quantity": 1
                },
                {
                    "product_id": 35,
                    "quantity": 1
                }
            ],
            "total_ex_taxes": 156.64000000000001,
            "delivery_fees": 4.74,
            "tax_rate": 0.17,
            "taxes": 27.43,
            "total": 188.81,
            "status": "delivered",
            "returned": false
        },
        {
            "id": 99,
            "reference": "F5Z5HH",
            "date": "2024-03-21T16:33:46.187Z",
            "customer_id": 39,
            "basket": [
                {
                    "product_id": 118,
                    "quantity": 1
                }
            ],
            "total_ex_taxes": 66.31,
            "delivery_fees": 4.09,
            "tax_rate": 0.2,
            "taxes": 14.08,
            "total": 84.48,
            "status": "delivered",
            "returned": true
        }
    ];

    return result;
};

export type Order = {
    id: number;
    reference: string;
    date: string;
    customer_id: number;
    basket: BasketItem[];
    total_ex_taxes: number;
    delivery_fees: number;
    tax_rate: number;
    taxes: number;
    total: number;
    status: OrderStatus;
    returned: boolean;
};

export type OrderStatus = 'ordered' | 'delivered' | 'cancelled';
export type BasketItem = {
    product_id: number;
    quantity: number;
};
