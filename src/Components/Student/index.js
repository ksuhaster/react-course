
import React from 'react';
import { useLocalStorage } from '../../helpers/useLocalStorage';

export const Student = () => {

    const [ studentData, setStudentData ] = useLocalStorage('student', null);
    let s = studentData

  return (
    <>
    {s ? (
    <section>
        firstName: {s.firstName} <br />
        surname: {s.surname} <br />
        age: {s.age} <br />
        email: {s.email} <br />
        sex: {s.sex} <br />
        speciality: {s.speciality}
    </section>
    ) : (
    <p>
        Студент еще не создан вы можете создать студента по
        этому <a href="/student/registration">адресу</a>
    </p>
    )}
    </>
  )
};


