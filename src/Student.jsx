const Student = ({student}) => {
    return (
        <>
            
                <td>{student.sName}</td>
                <td>{student.age}</td>
                <td>{student.marks}</td>
                <td>{student.marks[0] + student.marks[1] + student.marks[2]}</td>
            
        </>
    );
};
export default Student;