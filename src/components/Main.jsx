import React from 'react'
import StudentLogin from './StudentLogin';
import StudentSignup from './StudentSignup';
import TeacherSignup from './TeacherSignup';
import TeacherLogin from './TeacherLogin';
import CourseAdd from './CourseAdd';
import EnrolledStudentCourse from './EnrolledStudentCourse';
import GetAllCourses from './GetAllCourses';
import CourseStudentGetById from './CourseStudentGetById';
import GetStudentAllCourses from './GetStudentAllCourses';
import StudentAssignmentSubmit from './StudentAssignmentSubmit';
import TeacherAssignmentSubmit from './TeacherAssignmentSubmit';
import GetTeacherAssignment from './GetTeacherAssignment';
import GetALLTeacherAssignment from './GetALLTeacherAssignment';
import DeleteTeacherAssignment from './DeleteTeacherAssignment';
import UpdateTeacherAssignment from './UpdateTeacherAssignment';

const Main = ({ component }) => {
  const renderComponent = () => {
    switch (component) {
      case "Student Signup":
        return <StudentSignup />
      case "Student Login":
        return <StudentLogin />
      case "Teacher Signup":
        return <TeacherSignup />
      case "Teacher Login":
        return <TeacherLogin />
      case "Course Add":
        return <CourseAdd />
      case "Enrolled Student Course":
        return <EnrolledStudentCourse />
      case "Get All Courses":
        return <GetAllCourses />
      case "Course Student Get By Id":
        return <CourseStudentGetById />
      case "Get Student All Courses":
        return <GetStudentAllCourses />
      case "Student Assignment Submit":
        return <StudentAssignmentSubmit />
      case "Teacher Assignment Submit":
        return <TeacherAssignmentSubmit />
      case "Get Teacher Assignment":
        return <GetTeacherAssignment />
      case "Get ALL Teacher Assignment":
        return <GetALLTeacherAssignment />
      case "Delete Teacher Assignment":
        return <DeleteTeacherAssignment />
      case "Update Teacher Assignment":
        return <UpdateTeacherAssignment />
      default:
        return '';
    }
  };
  return (
    renderComponent()
  )
}

export default Main