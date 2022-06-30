# API Overview

## Summary: 
The API is used to manage smartphone products in a ecommerce store.
The API is RESTFUL and returns results in JSON(Javascript Object Notation). 

To start the local server simply run the following command in the root directory of the project

> npm install
#
> npm run server

# API Routes:

## 1. GET `/{productID}:`

### _To fetch a particular product details using productID_

#### Responses

- Status Code: 200

```ts
{
    success: true,
    msg: "Product found",
    data: foundProduct,
}
```

- Status Code: 400

```ts
{
    success: false,
    msg: "Product Not Found",
 }
 ```

## 2. POST `/smartphone/new`

### _for adding a new product_

#### Request Body in JSON

```json
{
    "productTitle":"OPPO A15s",
    "productPrice":70990,
    "discount":29,
    "quantity":1200,
    "brand":"Oppo",
    "ram":4,
    "internalStorage":"64GB",
    "colors":["Black","White","Silver"],
      "camera": {
            "primary": {
            "available": true,
            "megapixel": "12MP" 
            },
            "front": {
            "available": true,
            "megapixel": "12MP "
            },
            "macro": {
            "available": false,
            "megapixel": "0MP"
            },
            "wideangle": {
            "available": true,
            "megapixel": "12MP"
            }
  },
  "battery":4230,
  "processor":"2.3GHz Mediatek Helio P35 octa core processor, GPU IMG GE8320",
  "screenSize":6.52,
  "rating":4.3,
  "warrantyDuration":"1 year"
}
```

#### Response in JSON

```json
{
    "success": true,
    "data": {
        "_smartphone": {
            "productTitle": "OPPO A15s",
            "productPrice": 70990,
            "discount": 29,
            "ram": 4,
            "internalStorage": "64GB",
            "colors": [
                "Black",
                "White",
                "Silver"
            ],
            "brand": "Oppo",
            "quantity": 1200,
            "camera": {
                "primary": {
                    "available": true,
                    "megapixel": "12MP"
                },
                "front": {
                    "available": true,
                    "megapixel": "12MP "
                },
                "macro": {
                    "available": false,
                    "megapixel": "0MP"
                },
                "wideangle": {
                    "available": true,
                    "megapixel": "12MP"
                }
            },
            "battery": 4230,
            "processor": "2.3GHz Mediatek Helio P35 octa core processor, GPU IMG GE8320",
            "screenSize": 6.52,
            "rating": 4.3,
            "warrantyDuration": "1 year",
            "_id": "62bd864d5d0bedaff383df6f",
            "__v": 0
        }
    },
    "msg": "Product added"
}
```


## 3. PUT`/smartphone/{productID}:`

### _For updating a product details_
  
### Request Body in JSON

```json
{
   "colors":["Gold","Black","Blue"]
}
```

### Response Body in JSON

- Status Code: 200

```json
{
    "success": true,
    "data": {
        "updatedProduct": {
            "_id": "62bd864d5d0bedaff383df6f",
            "productTitle": "OPPO A15s",
            "productPrice": 70990,
            "discount": 29,
            "ram": 4,
            "internalStorage": "64GB",
            "colors": [
                "Gold",
                "Black",
                "Blue"
            ],
            "brand": "Oppo",
            "quantity": 1200,
            "camera": {
                "primary": {
                    "available": true,
                    "megapixel": "12MP"
                },
                "front": {
                    "available": true,
                    "megapixel": "12MP "
                },
                "macro": {
                    "available": false,
                    "megapixel": "0MP"
                },
                "wideangle": {
                    "available": true,
                    "megapixel": "12MP"
                }
            },
            "battery": 4230,
            "processor": "2.3GHz Mediatek Helio P35 octa core processor, GPU IMG GE8320",
            "screenSize": 6.52,
            "rating": 4.3,
            "warrantyDuration": "1 year",
            "__v": 0
        }
    },
    "msg": "Product updated"
}
```

- Status Code: 400

```json
{
    "success": false,
    "msg": "Product Not Found"
}
```

##4. GET `/smartphone/{queryParams}`

### _Returns the product lists based on filter and queries_

## 

## List of query parameters:


| parameterName | type  | description |
|--|--|--|
| page | required | int |
| count | required | int |
| brand | optional | string |
| color | optional | -- separated color options |
| rating | optional | minimum rating  |
| screenSize | optional | minimum screen size |
| startPrice | optional | starting Price |
| endPrice | optional | ending Price |
| inStock | optional | is stock available |


Example: 
> http://localhost:5000/smartphone?page=1&count=10&rating=4.2&startPrice=15000&endPrice=50000&colors=Black--White&brand=Vivo&screenSize=6.5



#### Response in JSON

```json
{
    "success": true,
    "data": [
        {
            "camera": {
                "primary": {
                    "available": true,
                    "megapixel": "50MP"
                },
                "front": {
                    "available": true,
                    "megapixel": "16MP"
                },
                "macro": {
                    "available": true,
                    "megapixel": "2MP"
                },
                "wideangle": {
                    "available": false,
                    "megapixel": "0"
                }
            },
            "_id": "62b8cad64665ffd0894cbf26",
            "productTitle": "Vivo Y33T (Mirror Black, 8GB RAM, 128GB ROM) with No Cost EMI/Additional Exchange Offers",
            "productPrice": 17990,
            "discount": 15,
            "ram": 8,
            "internalStorage": "128GB",
            "colors": [
                "Black",
                "Gold"
            ],
            "battery": 5000,
            "processor": " Snapdragon 680 Octa core processor",
            "screenSize": 6.58,
            "rating": 4.4,
            "warrantyDuration": "1 year",
            "__v": 0,
            "brand": "Vivo",
            "quantity": 650
        },
        {
            "camera": {
                "primary": {
                    "available": true,
                    "megapixel": "13MP"
                },
                "front": {
                    "available": true,
                    "megapixel": "5MP"
                },
                "macro": {
                    "available": true,
                    "megapixel": "2MP"
                },
                "wideangle": {
                    "available": false,
                    "megapixel": "0"
                }
            },
            "_id": "62b8cb3c4665ffd0894cbf28",
            "productTitle": "Vivo Y33T (Mirror Black, 8GB RAM, 128GB ROM) with No Cost EMI/Additional Exchange Offers",
            "productPrice": 17990,
            "discount": 15,
            "ram": 8,
            "internalStorage": "128GB",
            "colors": [
                "Gold",
                "Black",
                "Blue"
            ],
            "battery": 5000,
            "processor": "MediaTek Helio G25 Octa-corer",
            "screenSize": 6.52,
            "rating": 4.4,
            "warrantyDuration": "1 year",
            "__v": 0,
            "brand": "Vivo",
            "quantity": 800
        }
    ]
}
 
```


## 4. DELETE `/smartphone/${productID}`


#### Response type

Status Code: 400

{
    "success": true,
    "msg": "Product Not Found"
}

Status Code: 200

```ts

{
    "success": true,
    "data": {
        "foundProduct": {
            "_id": "62b8c7db7c94930617b56a08",
            "productTitle": "Oppo A54 (Starry Blue, 6GB RAM, 128GB Storage) with No Cost EMI & Additional Exchange Offers",
            "productPrice": {
                "$numberDecimal": "10990"
            },
            "discount": 12,
            "ram": 8,
            "internalStorage": "128GB",
            "colors": [
                "Gold",
                "Black",
                "Blue"
            ],
            "camera": {
                "primary": {
                    "available": true,
                    "megapixel": "13MP"
                },
                "front": {
                    "available": true,
                    "megapixel": "16MP"
                },
                "macro": {
                    "available": true,
                    "megapixel": "2MP"
                },
                "wideangle": {
                    "available": false,
                    "megapixel": "0"
                }
            },
            "battery": 5000,
            "processor": "MediaTek Helio P35 GPU IMG GE8320 @ 680 MHz, Powerful 2.3 GHz Octa-core processor, support LPDDR4X memory",
            "screenSize": 6.51,
            "rating": 4.2,
            "warrantyDuration": "1 year",
            "__v": 0,
            "brand": "Oppo",
            "quantity": 750
        }
    },
    "msg": "Product Deleted"
}

```


## 5.  GET `smartphone/{productID}:`

### _retrieve details of a particular product by its product ID_


#### Response in JSON

```json
{
    "success": true,
    "msg": "Product found",
    "data": {
        "camera": {
            "primary": {
                "available": true,
                "megapixel": "12MP"
            },
            "front": {
                "available": true,
                "megapixel": "12MP "
            },
            "macro": {
                "available": false,
                "megapixel": "0MP"
            },
            "wideangle": {
                "available": true,
                "megapixel": "12MP"
            }
        },
        "_id": "62bdcbf9a137ba00d3f9fe55",
        "productTitle": "OPPO A15s",
        "productPrice": 70990,
        "discount": 29,
        "ram": 4,
        "internalStorage": "64GB",
        "colors": [
            "Black",
            "White",
            "Silver"
        ],
        "brand": "Oppo",
        "quantity": 1200,
        "battery": 4230,
        "processor": "2.3GHz Mediatek Helio P35 octa core processor, GPU IMG GE8320",
        "screenSize": 6.52,
        "rating": 4.3,
        "warrantyDuration": "1 year",
        "__v": 0
    }
}
```

