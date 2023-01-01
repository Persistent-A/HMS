# Developement Of Native Applications
### Final Project
    -   Student Id: 2030407
    -   Name: Apurva Apurva
## ```Hospital Management System```:
### To manage the appointments made by patients

## ```Frontend```

React dev tools (add browser extension).
( to setup all the files and folders, packages, etc.)
```
    npx create-react-app ReactFinalProject 
```
```
    cd ReactFinalProject
```
(To start the dev server: for ex: (http://localhost:3000)
```
    npm start 
```
In React we cannot change the state, else we use useState to change any objects.
To install icons in React, we use:
```
    npm i react-icons
```

# Components

- Header.jsx : It contains the nav bar of the viewport.

- PatientDetailsCard.jsx: This contain a section containing the details of the patient with the icons to add, delete and rescheduling the appointment date property.

- ReSchedule.jsx: It contains a form which takes the date to reschedule the apointment and stores it in the database, which can be reflected over the UI by selecting the same date.

# Pages

- BookAppointment.jsx: This conatins the box which take the values of the field and store it to the database.

- Home.jsx: It contains the UI of the home page.

- Login.jsx: It conatins a form which uses onLogin function to compare the value from the form with the stored employee_id and password in the database. If the details match, it logins the employee to their respective portal.

- SelectAppointmentDate.jsx: It conatins a box containing the form which will show the scheduled patient details when the respective date is selected. It also contain the PatientDetailCard.

## ```Backend```

- Commands
```
    mkdir HospitalManagemenntSystem
```
```
    cd HospitalManagemenntSystem
```
- Create a new folder ```backend``` and then create a new file server.js
```
    npm init
```
Then fill in the required details 
```
    cd backend
    node backend/server.js
```

## ```Endpoints```
- To post appointments
```
    /api/appointments/
```
- To fetch and then post the appointments
```
    /api/appointments/get_appointments/
```
- To delete or update the appointments
```
    /api/appointments/:id
```
- To register a doctor
```
    /api/doctor/register/
```
- To login a doctor
```
    /api/doctor/login
```











