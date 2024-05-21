// TODO: StudentList 컴포넌트를 작성하세요. props로 학생 목록을 받아와서 표시해야 합니다.
function StudentList({ filteredStudents }) {
  return (
    <ul>
      {filteredStudents.map((students) => (
        <li key={crypto.randomUUID()}>
          <p>
            name: {students.name}, age: {students.age}, grade: {students.grade}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default StudentList;
