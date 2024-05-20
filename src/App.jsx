export default function App() {
  const students = [
    { name: "Alice", age: 17, grade: "A" },
    { name: "Bob", age: 18, grade: "B" },
    { name: "Charlie", age: 16, grade: "C" },
    { name: "Diana", age: 19, grade: "D" },
  ];

  const filteredStudents = students.filter((students) => students.age >= 18);

  return (
    <div>
      <h1>학생 목록</h1>
      <ul>
        {filteredStudents.map((students) => (
          <li key={crypto.randomUUID()}>
            <p
              onClick={() => {
                alert(`age: ${students.age}, grade: ${students.grade}`);
              }}
              className="name"
            >
              name: {students.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
