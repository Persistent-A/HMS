import PatientDetailsCard from "./PatientDetailsCard";

const PatientDetail = ({appointment, date, onDelete, logedDocDep, toggleReminder, isRescheduled, setReDate, reDate}) => {

  return (
    <article className="patientDetails">
       {appointment.filter((appointment)=>(appointment.date === date)).filter((appointment)=>(appointment.department === logedDocDep)).map((appointment, index)=>(
         <PatientDetailsCard key={index} appointment={appointment} onDelete={onDelete} toggleReminder={toggleReminder} isRescheduled={isRescheduled} setReDate={setReDate} reDate={reDate}/>
        ))} 
    </article>
  )
}

export default PatientDetail
