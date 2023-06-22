import { FaCheck } from "react-icons/fa";
import { useState } from "react";
import { BsCalendarDateFill } from "react-icons/bs";
import ReSchedule from "./ReSchedule";
import { useDispatch } from "react-redux";
import { changeAppointmentDate } from "../features/auth/authSlice";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const PatientDetailsCard = ({ appointment, selectedDate }) => {
  const [isRescheduled, setIsReschedule] = useState(false);

  const toggleReminder = () => {
    setIsReschedule(!isRescheduled);
  };

  const dispatch = useDispatch();

  return (
    <Card
      container
      spacing={5}
      sx={{
        minWidth: 265,
        margin: { xs: "5px", sm: "20px" },
        backgroundColor: isRescheduled ? "#f59c42" : "#efcc4f",
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 18 }} color="text.primary" gutterBottom>
          Name: {appointment.name}{" "}
          <FaCheck
            style={{ float: "right", cursor: "pointer" }}
            className="check-btn"
            onClick={() =>
              dispatch(
                changeAppointmentDate({
                  _id: appointment._id,
                  isComplete: true,
                })
              )
            }
          />
        </Typography>
        <Typography variant="h6" component="div">
          Age: {appointment.age}
        </Typography>
        <Typography sx={{ mb: 1.5, fontWeight: "bold" }} color="text.secondary">
          Email: {appointment.email}
        </Typography>
        <Typography variant="body2">
          <BsCalendarDateFill onClick={() => toggleReminder(appointment.id)} />
          <br />
          {isRescheduled && (
            <ReSchedule
              toggleReminder={toggleReminder}
              appointment={appointment}
              selectedDate={selectedDate}
            />
          )}
        </Typography>
      </CardContent>
    </Card>

    /* // <Box sx={{backgroundColor: isRescheduled ? "green" : "#efcc4f", margin:"30px", padding:"20px"}}>
    //   <h3>Name: {appointment.name} <FaTimes style={{float: "right", cursor: "pointer"}} onClick={() => dispatch(deleteAppointment(appointment._id))}/></h3>
    //   <h3>Age: {appointment.age}</h3>
    //   <h3>Email_Address: {appointment.email}</h3>
    //   <BsCalendarDateFill onClick={() => toggleReminder(appointment.id)}/>
    //   {isRescheduled && <ReSchedule appointment={appointment} selectedDate={selectedDate}/>}
    // </Box> */
  );
};

export default PatientDetailsCard;
