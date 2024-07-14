curl http://localhost:3000/members -X POST \
     -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoibWVtYmVyc191c2VyIn0.UzRbUTqMYj81dIue1g-RNSkp090x4trA77ulwSjGyJs" \
     -H "Content-Type: application/json" \
     -d '{"student_id": "MA22061", "display_name": "Kotegawa", "member_level": 1}'