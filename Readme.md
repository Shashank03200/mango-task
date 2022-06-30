# API Overview

## Summary: 
The API is used to manage smartphone products in a ecommerce store.
The API is RESTFUL and returns results in JSON(Javascript Object Notation). 

To start the local server simply run the following command in the root directory of the project

> npm install
> npm run server

## 1. `/`

### _To fetch a particular product details using productID

#### GET `/{productID}:`

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

## 2. `/smartphone/new`

### _for adding a new product_

#### POST `/api/auth/signup`


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


## 3. `/smartphone/{productID}:`

### _For updating a product details_

### POST 

  
### Request Body in JSON
```json
{
   "colors":["Gold","Black","Blue"]
}
 
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

##4. 

#### GET 

### _Returns the product lists based on filter and queries_

## GET `/smartphone/{queryParams}

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

```ts

 
```


## 4. `/api/profile/getuser`

### _for getting info on logged in user_

#### GET `/api/profile/getuser`

| Header          | Value                      |
| :-------------- | :------------------------- |
| `authorization` | `Bearer someLongJWTString` |

#### Response type

```ts
{
    user: {
        name: string,
        username: string,
        email: string,
        rollno: string,
        phoneno: number,
        attempts: number,
        score: number,
        level: string,
        active: boolean,
        image: string
    },
    token : string
}
```

The `user` object contains details about the user that is signedin

The `name` attribute contains name of the user that is signedin

The `username` attribute contains name of the user that is signedin

The `email` attribute contains email of the signedin user

The `rollno` attribute contains admisson number of the signedin user

The `phoneno` attribute contains phone number of the signinin user

The `attempts` attribute contains attempts on the latest of the signedin user

The `score` attribute contains score of the signedin user, i.e. the score from questions solved

The `level` attribute contains level of the signedin user, i.e. amount of question cleared

The `active` attribute dictates if the account is verified or not

The `image` attribute contains the url of the image sent by the user

The `token` attribute contains the jwt string

## 5. `/api/question/getone`

### _for an appropriate question_

#### GET `/api/question/getone`

| Header          | Value                      |
| :-------------- | :------------------------- |
| `authorization` | `Bearer someLongJWTString` |

#### Response in JSON

```ts
{
  question:{
    level: number,
    question: string
  }
}
```

The `question` object contains details of a question

The `level` attribute the level of a particular question in a number

The `question` attribute contains the question string

## 6. `/api/question`

### _for creating a question_

#### POST `/api/question`

| Parameter  | Type     | Description |
| :--------- | :------- | :---------- |
| `question` | `string` | _Required_  |
| `answer`   | `string` | _Required_  |
| `level`    | `number` | _Required_  |

#### Request Body in JSON

```json
{
  "question": "What is the closest star to the Earth",
  "answer": "Sun",
  "level": "1"
}
```

#### Response in JSON

```ts
{
    question: string,
    answer: string,
    level: number
}
```

The `question` attribute contains the question string of the created question

The `answer` attribute contains answer to the question in a string of the created question

The `level` attribute the level of a created question in a number

## 7. `/api/question/ans`

### _for answering a question_

#### POST `/api/question/ans`

#### Request Body

| Parameter | Type     | Description |
| :-------- | :------- | :---------- |
| `answer`  | `string` | _Required_  |

#### Request Headers

| Header          | Value                      |
| :-------------- | :------------------------- |
| `authorization` | `Bearer someLongJWTString` |

#### Request Body in JSON

```json
{
  "answer": "Sun"
}
```

#### Response in JSON

```ts
{
    result: "correct or incorrect"
}
```

The `answer` attribute contains answer to the question in a string of the created question

## 8. `/api/leaderboard`

### _For getting a leaderboard_

#### GET `/api/leaderboard`

| Header          | Value                      |
| :-------------- | :------------------------- |
| `authorization` | `Bearer someLongJWTString` |

#### Response in JSON

```ts
{
    leaderboard: [
        {
            name: string,
            score: number
        },
    ],
}
```

The `leaderboard` array contains an object of player with name and score attribute. This array is sorted in a Descending order

The `name` attribute contains name of a user

The `score` attribute contains score of a user, i.e. the score from questions solved
