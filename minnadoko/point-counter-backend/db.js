import postgres from 'postgres'

// const Url = 'postgres://postgres:password@localhost:5432/testtestdb';
const Url = process.env.DB_URL;
// const Url = 'postgresql://postgres:password@db:5432/minnadokodb';
const sql = postgres(Url);

export async function getMembers() {
    const members = await sql`
      SELECT * FROM api.members
      ORDER BY member_level ASC, student_id ASC
      ;
    `
    return members;
}

export async function updateMember(student_id,activity){
  try {
    let xs = await sql`
      UPDATE api.members
      SET activity = ${activity}
      WHERE student_id = ${student_id};
    `
  } catch (error) {
    console.log(error)
  }
}