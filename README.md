# _Tin Foil Hat Society New Member Form_

#### _The application is intended for adding new tinfoil hat enthusiasts to the members list, who want to share their experiences with others. The members list can also be easily deleted in case of outside espionage_

#### By _**Katlin Anderson**_

## Description

_The form will collect the following required data from users:_

- A unique, validated email address
- Whether they are signing up for a paid membership (yes/no)
- Scenarios they wear their hat to guard against (government surveillance, alien abduction, mind control, convincing instagram ads)
- Frequency of hat wearing (always, often, sometimes, never)
- Favorite brand of tinfoil for hat (max length 100 characters)

## Specs

_The API will have the following endpoints:_

- POST /api/members: Creates a new member entry
- DELETE /api/members: Delete all members

_The API will return the following response codes:_

- 200 (OK): The request was successful
- 201 (Created): A new form entry was created
- 204 (No Content): All members successfully deleted
- 400 (Bad Request): The request was invalid
- 404 (Not Found): The form entry was not found

_The API will return the following error messages:_

- _400 (Bad Request):_

  - The email address is already in use.

## Technologies used
  - JavaScript/React
    - bootstrap
    - react-bootstrap
    - formik
    - axios
  - Python/Django
    - corsheaders
    - rest_framework

## Setup/Installation Requirements

- In one terminal navigate to _intsureview_be_ directory in terminal and run `poetry install`
- Run `poetry run python manage.py migrate`
- Run `poetry run python manage.py runserver`
- In another terminal, navigate to _intsureview_fe_ directory and run `npm install` and `npm start`

### License

Copyright (c) 2023 **_Katlin Anderson_**
