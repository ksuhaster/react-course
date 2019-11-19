
import React from 'react';
import { useSelector } from "react-redux";

export const Student = () => {

    const studentData = useSelector((state) => state.student);

  return (
    <>
    {!studentData.formIsNew ? (
    <section id='studentCard'>
        firstName: {studentData.firstName} <br />
        surname: {studentData.surname} <br />
        age: {studentData.age} <br />
        email: {studentData.email} <br />
        sex: {studentData.sex} <br />
        speciality: {studentData.speciality}
    </section>
    ) : (
    <p id='notExists'>
        Студент еще не создан вы можете создать студента по
        этому <a href="/student/registration">адресу</a>
    </p>
    )}
    </>
  )
};


