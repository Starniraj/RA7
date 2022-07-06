import NewStudents  from './addStudent';
import StudentEdit from './Edit';
import Students from './Student';




const Reducer = (state="",action) =>{
    switch(action){
     case NewStudents : return <addStudent/>
     case StudentEdit : return <Edit/>
     default : return <Students/>
    }
}

export default Reducer;
